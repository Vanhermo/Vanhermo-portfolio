import './App.css'

import ThemeToggle from './components/ThemeToggle'
import Me from './components/Me'
import ResearchInterests from './components/ResearchInterests'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import BeyondTech from './components/BeyondTech'
import Contact from './components/Contact'
import Reveal from './components/Reveal'
import ResearchExperience from './components/ResearchExperience'  
import Nav from './components/Nav'

function App() {
  return (
    <main className="bg-cream">
      <Nav />
      <ThemeToggle />
      <Me />
      <Reveal><ResearchInterests /></Reveal>
      <Reveal><ResearchExperience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><TechStack /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><BeyondTech /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  )
}

export default App