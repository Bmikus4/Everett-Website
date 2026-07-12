import { useCallback, useEffect, useState } from 'react'

// Day/night theme. Persisted in localStorage; falls back to system preference.
// The <html data-theme> attribute is set before paint by the inline script in
// index.html to avoid a flash. This hook keeps React in sync and toggles it.

const STORAGE_KEY = 'ouro-theme'
export type Theme = 'light' | 'dark'

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return systemTheme()
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#14120e' : '#ffffff')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystem = () => {
      // only follow the system when the user hasn't chosen explicitly
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = systemTheme()
        apply(t)
        setTheme(t)
      }
    }
    const onEvent = () => setTheme(currentTheme())
    mq.addEventListener('change', onSystem)
    window.addEventListener('ouro-theme-change', onEvent)
    return () => {
      mq.removeEventListener('change', onSystem)
      window.removeEventListener('ouro-theme-change', onEvent)
    }
  }, [])

  const toggle = useCallback(() => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark'
    const commit = () => {
      localStorage.setItem(STORAGE_KEY, next)
      apply(next)
      setTheme(next)
    }
    // Crossfade the whole page as one synchronized transition (all sections at
    // once) via the View Transitions API. Instant, synchronized fallback otherwise.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const doc = document as Document & { startViewTransition?: (cb: () => void) => void }
    if (doc.startViewTransition && !reduce) doc.startViewTransition(commit)
    else commit()
    window.dispatchEvent(new Event('ouro-theme-change'))
  }, [])

  return { theme, toggle }
}
