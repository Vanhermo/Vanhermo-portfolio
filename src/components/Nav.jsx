import { useState, useEffect } from 'react'

function Nav() {
  const [activeSection, setActiveSection] = useState('')

  const links = [
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-surface/80 backdrop-blur-md border border-charcoal/10 rounded-full px-6 py-3 shadow-sm hidden md:flex gap-6">
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`font-body text-sm transition-colors ${
            activeSection === id
              ? 'text-rose-dark font-medium'
              : 'text-charcoal/60 hover:text-charcoal'
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}

export default Nav