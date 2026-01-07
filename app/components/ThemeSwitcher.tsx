'use client'

import { useState, useEffect } from 'react'

type Theme = 'heirloom' | 'meadow' | 'copper'

const themes: { id: Theme; name: string }[] = [
  { id: 'heirloom', name: 'The Heirloom Pantry' },
  { id: 'meadow', name: 'The Meadow & Mill' },
  { id: 'copper', name: 'The Copper Whisk' },
]

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('heirloom')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('cake-vibe-theme') as Theme
    const initialTheme = (savedTheme && themes.some(t => t.id === savedTheme)) ? savedTheme : 'heirloom'
    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    document.body.className = `theme-${initialTheme}`
  }, [])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    document.body.className = `theme-${newTheme}`
    localStorage.setItem('cake-vibe-theme', newTheme)
  }

  if (!mounted) {
    return (
      <div className="flex gap-2 p-4 justify-center">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="flex gap-2 p-4 justify-center flex-wrap relative z-20">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => handleThemeChange(t.id)}
          className={`
            px-6 py-2 font-medium transition-all duration-300 relative
            ${
              theme === t.id
                ? t.id === 'copper'
                  ? 'copper-foil text-white shadow-theme scale-105 rounded-none'
                  : 'bg-primary text-text shadow-theme scale-105 rounded-theme'
                : t.id === 'copper'
                  ? 'bg-surface text-text-muted border border-border hover:opacity-80 rounded-none'
                  : 'bg-surface text-text-muted border border-border hover:bg-primary/50 rounded-theme'
            }
          `}
        >
          {t.name}
        </button>
      ))}
    </div>
  )
}

