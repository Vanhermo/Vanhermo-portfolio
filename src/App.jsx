import { useState } from 'react'
import Nav from './components/Nav'
import Me from './components/Me'
import Highlights from './components/Highlights'
import ResearchInterests from './components/ResearchInterests'
import ResearchExperience from './components/ResearchExperience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import BeyondTech from './components/BeyondTech'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import Reveal from './components/Reveal'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState('home')

  function goTo(page) {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <main className="bg-cream min-h-screen">
      <ThemeToggle />
      <Nav activePage={activePage} setActivePage={goTo} />

      {activePage === 'home' && (
        <>
          <Me goTo={goTo} />
          <Highlights />
        </>
      )}

      {activePage === 'research' && (
        <>
          <Reveal><ResearchInterests /></Reveal>
          <Reveal><ResearchExperience /></Reveal>
        </>
      )}

      {activePage === 'projects' && (
        <Reveal><Projects /></Reveal>
      )}

      {activePage === 'skills' && (
        <>
          <Reveal><Skills /></Reveal>
          <Reveal><TechStack /></Reveal>
        </>
      )}

      {activePage === 'beyond' && (
        <Reveal><BeyondTech /></Reveal>
      )}

      {activePage === 'contact' && (
        <Reveal><Contact /></Reveal>
      )}

      <Footer />

    </main>
  )
}

export default App