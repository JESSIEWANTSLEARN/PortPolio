import { featuredProject } from '../data/portfolioData'

export default function FeaturedProject() {
  return (
    <section className="section featured-section" id="projects">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">02</span>
          <div>
            <p className="kicker">PROJECT SPOTLIGHT</p>
            <h2>Featured Project</h2>
          </div>
        </div>

        <article className="featured-card reveal">
          <div className="featured-glow" />
          <div className="featured-content">
            <div className="featured-topline">
              <span className="badge">{featuredProject.badge}</span>
              <span className="live-indicator">
                <span />
                LIVE
              </span>
            </div>

            <h3>{featuredProject.title}</h3>
            <h4>{featuredProject.subtitle}</h4>
            <p>{featuredProject.description}</p>

            <div className="tag-row">
              {featuredProject.stack.map((item) => (
                <span className="tech-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="role-list">
              {featuredProject.roles.map((role) => (
                <span key={role}>✓ {role}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button primary"
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>
              <a
                className="button ghost"
                href={featuredProject.frontendUrl}
                target="_blank"
                rel="noreferrer"
              >
                Frontend Repo ↗
              </a>
              <a
                className="button ghost"
                href={featuredProject.backendUrl}
                target="_blank"
                rel="noreferrer"
              >
                Backend Repo ↗
              </a>
            </div>
          </div>

          <div className="deployment-visual" aria-hidden="true">
            <div className="deploy-node">React</div>
            <div className="deploy-line" />
            <div className="deploy-node highlight">Render</div>
            <div className="deploy-line" />
            <div className="deploy-node">Laravel</div>
            <div className="deploy-line" />
            <div className="deploy-node">MySQL</div>
          </div>
        </article>
      </div>
    </section>
  )
}
