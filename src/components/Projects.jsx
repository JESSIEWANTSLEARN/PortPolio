import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [outgoingIndex, setOutgoingIndex] = useState(null)
  const [direction, setDirection] = useState(1)
  const [animating, setAnimating] = useState(false)
  const [paused, setPaused] = useState(false)
  const timers = useRef([])

  const clearTimers = () => {
    timers.current.forEach((timer) => clearTimeout(timer))
    timers.current = []
  }

  const goTo = (nextIndex) => {
    if (animating || nextIndex === activeIndex) return

    const normalized = (nextIndex + projects.length) % projects.length
    const forward =
      nextIndex > activeIndex ||
      (activeIndex === projects.length - 1 && normalized === 0)

    setDirection(forward ? 1 : -1)
    setOutgoingIndex(activeIndex)
    setAnimating(true)

    timers.current.push(
      setTimeout(() => {
        setActiveIndex(normalized)
      }, 110),
    )

    timers.current.push(
      setTimeout(() => {
        setOutgoingIndex(null)
        setAnimating(false)
      }, 430),
    )
  }

  const nextProject = () => goTo(activeIndex + 1)
  const previousProject = () => goTo(activeIndex - 1)

  useEffect(() => {
    if (paused || animating) return undefined

    const interval = setInterval(() => {
      goTo(activeIndex + 1)
    }, 6500)

    return () => clearInterval(interval)
  }, [activeIndex, paused, animating])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowRight') nextProject()
      if (event.key === 'ArrowLeft') previousProject()
    }

    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      clearTimers()
    }
  })

  const activeProject = projects[activeIndex]
  const outgoingProject =
    outgoingIndex !== null ? projects[outgoingIndex] : null

  const renderProject = (project, index, state) => (
    <article
      className={`project-slide ${state} ${
        direction > 0 ? 'slide-forward' : 'slide-backward'
      }`}
      aria-hidden={state === 'project-outgoing'}
    >
      <div className="project-slide-grid">
        <div className="project-slide-main">
          <div className="project-terminal-label">
            PROJECT_{String(index + 1).padStart(2, '0')} /{' '}
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
              <span className="academic-project-label">ACADEMIC PROJECT</span>
            )}
          </div>
        </div>

        <div className="project-visual" aria-hidden="true">
          <div className="project-orbit orbit-one" />
          <div className="project-orbit orbit-two" />
          <div className="project-core">
            <span>{String(index + 1).padStart(2, '0')}</span>
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
  )

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
              onClick={previousProject}
              aria-label="Previous project"
            >
              ←
            </button>
            <button type="button" onClick={nextProject} aria-label="Next project">
              →
            </button>
          </div>
        </div>

        <div
          className={`project-deck ${animating ? 'is-changing' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`project-wipe ${
              animating
                ? direction > 0
                  ? 'wipe-forward'
                  : 'wipe-backward'
                : ''
            }`}
          />

          {outgoingProject &&
            renderProject(
              outgoingProject,
              outgoingIndex,
              'project-outgoing',
            )}

          {renderProject(activeProject, activeIndex, 'project-incoming')}
        </div>

        <div className="project-pagination">
          <div className="project-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={index === activeIndex ? 'active' : ''}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show ${project.title}`}
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
