import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '../lib/theme'

// Sun/moon day-night toggle for the nav hotbar.
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={`grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink-soft transition-colors hover:text-gold ${className}`}
    >
      {dark ? <Sun size={17} weight="regular" /> : <Moon size={17} weight="regular" />}
    </button>
  )
}
