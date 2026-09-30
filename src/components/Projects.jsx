import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [transitioning, setTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)

  const swapTimer = useRef(null)
  const finishTimer = useRef(null)

  const clearTimers = () => {
    if (swapTimer.current) clearTimeout(swapTimer.current)
    if (finishTimer.current) clearTimeout(finishTimer.current)
  }

  const changeProject = (requestedIndex) => {
    if (transitioning || projects.length < 2) return

    const nextIndex = (requestedIndex + projects.length) % projects.length
    if (nextIndex === activeIndex) return

    const movingNext =
      requestedIndex > activeIndex ||
      (activeIndex === projects.length - 1 && nextIndex === 0)

    setDirection(movingNext ? 'next' : 'previous')
    setTransitioning(true)
    clearTimers()

    // At this moment the red wipe is completely covering the content.
    swapTimer.current = setTimeout(() => {
      setActiveIndex(nextIndex)
    }, 260)

    finishTimer.current = setTimeout(() => {
      setTransitioning(false)
    }, 560)
  }

  useEffect(() => {
    if (paused || transitioning) return undefined

    const interval = setInterval(() => {
      changeProject(activeIndex + 1)
    }, 6500)

    return () => clearInterval(interval)
  }, [activeIndex, paused, transitioning])

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === 'ArrowRight') changeProject(activeIndex + 1)
      if (event.key === 'ArrowLeft') changeProject(activeIndex - 1)
    }

    window.addEventListener('keydown', handleKeyboard)

    return () => {
      window.removeEventListener('keydown', handleKeyboard)
      clearTimers()
    }
  }, [activeIndex, transitioning])

  const project = projects[activeIndex]

  return (
    <section className="section project-deck-section">
      <div className="container">
        <div className="project-deck-head reveal">
          <div>
            <p className="kicker">INTERACTIVE PROJECT DECK</p>
            <h2>More Projects</h2>
          </div>

          <div className="project-controls">
            <button
              type="button"
              onClick={() => changeProject(activeIndex - 1)}
              disabled={transitioning}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => changeProject(activeIndex + 1)}
              disabled={transitioning}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        <div
          className={`project-deck ${
            transitioning ? `is-wiping wipe-${direction}` : ''
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="project-red-wipe" aria-hidden="true">
            <div className="wipe-code">
              <span>LOADING</span>
              <strong>
                PROJECT_{String(activeIndex + 1).padStart(2, '0')}
              </strong>
            </div>
          </div>

          <article className="project-single-slide">
            <div className="project-slide-grid">
              <div className="project-slide-main">
                <div className="project-terminal-label">
                  PROJECT_{String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(projects.length).padStart(2, '0')}
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span className="tech-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-role">
                  <span>MY ROLE</span>
                  <strong>{project.role}</strong>
                </div>

                <div className="project-link-row">
                  {project.liveUrl && (
                    <a
                      className="button primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      className="button ghost"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Repository ↗
                    </a>
                  )}

                  {!project.githubUrl && !project.liveUrl && (
                    <span className="academic-project-label">
                      ACADEMIC PROJECT
                    </span>
                  )}
                </div>
              </div>

              <div className="project-visual" aria-hidden="true">
                <div className="project-orbit orbit-one" />
                <div className="project-orbit orbit-two" />

                <div className="project-core">
                  <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                  <small>PROJECT</small>
                </div>

                <div className="project-stack-preview">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="project-pagination">
          <div className="project-dots">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={index === activeIndex ? 'active' : ''}
                disabled={transitioning}
                onClick={() => changeProject(index)}
                aria-label={`Show ${item.title}`}
              >
                <span />
              </button>
            ))}
          </div>

          <div className="project-auto-status">
            <span className={paused ? 'paused' : ''} />
            {paused ? 'AUTO-SLIDE PAUSED' : 'AUTO-SLIDE • 6.5S'}
          </div>
        </div>
      </div>
    </section>
  )
}
