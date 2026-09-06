function Nav({ activePage, setActivePage }) {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'beyond', label: 'Beyond Tech' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-surface/80 backdrop-blur-md border border-charcoal/10 rounded-full px-6 py-3 shadow-sm hidden md:flex gap-6">
      {pages.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActivePage(id)}
          className={`font-body text-sm whitespace-nowrap transition-colors ${
            activePage === id
              ? 'text-rose-dark font-medium'
              : 'text-charcoal/60 hover:text-charcoal'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}

export default Nav