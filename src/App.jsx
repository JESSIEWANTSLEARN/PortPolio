import { useEffect, useState } from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ImpactStrip from './components/ImpactStrip'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Skills from './components/Skills'
import QASection from './components/QASection'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('jj-theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('jj-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle('intro-open', showIntro)

    if (!showIntro) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }

    return () => document.body.classList.remove('intro-open')
  }, [showIntro])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [showIntro])

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      <div className="page-grid" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      />

      <main>
        <Hero />
        <About />
        <ImpactStrip />
        <Journey />
        <Projects />
        <Skills />
        <QASection />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
