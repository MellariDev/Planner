'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Theme = 'heirloom' | 'meadow' | 'copper' | 'vintage-forge' | 'rustic-edge'

export default function NavBar() {
  const pathname = usePathname()
  
  const getTheme = (): Theme => {
    if (pathname?.includes('/heirloom')) return 'heirloom'
    if (pathname?.includes('/meadow')) return 'meadow'
    if (pathname?.includes('/copper')) return 'copper'
    if (pathname?.includes('/vintage-forge')) return 'vintage-forge'
    if (pathname?.includes('/rustic-edge')) return 'rustic-edge'
    return 'heirloom'
  }

  const theme = getTheme()

  const links = [
    { href: '/heirloom', label: 'The Heirloom Pantry', theme: 'heirloom' as Theme },
    { href: '/meadow', label: 'The Meadow & Mill', theme: 'meadow' as Theme },
    { href: '/copper', label: 'The Copper Whisk', theme: 'copper' as Theme },
    { href: '/vintage-forge', label: 'The Vintage Forge', theme: 'vintage-forge' as Theme },
    { href: '/rustic-edge', label: 'The Rustic Edge', theme: 'rustic-edge' as Theme },
  ]

  return (
    <nav className={`navbar navbar-${theme} fixed top-0 left-0 right-0 z-50`}>
      <div className="navbar-container">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbar-link ${theme === link.theme ? 'navbar-link-active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

