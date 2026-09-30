import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Skills from './components/Skills'
import QASection from './components/QASection'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const handlePointer = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', handlePointer)
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="page-grid" />
      <div className="cursor-aura" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-marquee-track">
            <span>REACT</span><i>◆</i><span>LARAVEL</span><i>◆</i>
            <span>MYSQL</span><i>◆</i><span>REST API</span><i>◆</i>
            <span>QA</span><i>◆</i><span>FIGMA</span><i>◆</i>
            <span>UNITY</span><i>◆</i><span>C#</span><i>◆</i>
            <span>REACT</span><i>◆</i><span>LARAVEL</span><i>◆</i>
            <span>MYSQL</span><i>◆</i><span>REST API</span><i>◆</i>
            <span>QA</span><i>◆</i><span>FIGMA</span><i>◆</i>
            <span>UNITY</span><i>◆</i><span>C#</span><i>◆</i>
          </div>
        </div>
        <About />
        <FeaturedProject />
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
