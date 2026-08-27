import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-6 right-6 z-50 bg-surface/60 dark:bg-charcoal/20 border border-charcoal/15 rounded-full p-3 hover:scale-110 transition-transform"
    >
      {isDark ? (
        <FiSun className="text-rose-dark text-lg" />
      ) : (
        <FiMoon className="text-charcoal text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle