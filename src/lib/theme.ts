import { useCallback, useEffect, useState } from 'react'

// Day/night theme. Defaults to LIGHT unless the user has explicitly chosen dark
// (persisted in localStorage). The <html data-theme> attribute is set before paint
// by the inline script in index.html to avoid a flash. This hook syncs + toggles it.

const STORAGE_KEY = 'ouro-theme'
export type Theme = 'light' | 'dark'

export function currentTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#14120e' : '#ffffff')
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    const onEvent = () => setTheme(currentTheme())
    window.addEventListener('ouro-theme-change', onEvent)
    return () => window.removeEventListener('ouro-theme-change', onEvent)
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
