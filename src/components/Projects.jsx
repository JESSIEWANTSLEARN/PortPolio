import { extraProjects } from '../data'

export default function Projects() {
  return (
    <section className="section section-anchor" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <span>03</span>
          <div>
            <p>PROJECT LAB</p>
            <h2>More Things I’ve Built</h2>
          </div>
        </div>

        <div className="project-grid">
          {extraProjects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-card-copy">{project.description}</p>

              {project.href ? (
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  View Repository ↗
                </a>
              ) : (
                <span className="academic-label">ACADEMIC / PRACTICE PROJECT</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
