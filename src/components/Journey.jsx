import { journey } from '../data'
import JourneyVisual from './JourneyVisual'

export default function Journey() {
  return (
    <section className="journey section-anchor" id="journey">
      <div className="container">
        <div className="section-heading reveal">
          <span>02</span>
          <div>
            <p>MY DEVELOPMENT JOURNEY</p>
            <h2>From First Code to Live Systems</h2>
          </div>
        </div>

        <div className="journey-list">
          {journey.map((step) => (
            <article className="journey-step reveal" key={step.number}>
              <div className="journey-copy">
                <div className="journey-index">{step.number}</div>
                <p className="journey-eyebrow">{step.eyebrow}</p>
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p className="journey-description">{step.description}</p>

                {step.role && (
                  <div className="journey-role">
                    <span>MY ROLE</span>
                    <strong>{step.role}</strong>
                  </div>
                )}

                <div className="tag-row">
                  {step.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <div className="journey-actions">
                  {step.githubUrl && (
                    <a className="button secondary" href={step.githubUrl} target="_blank" rel="noreferrer">
                      View Repository ↗
                    </a>
                  )}

                  {step.liveUrl && (
                    <a className="button primary" href={step.liveUrl} target="_blank" rel="noreferrer">
                      Live System ↗
                    </a>
                  )}

                  {step.frontendUrl && (
                    <a className="button secondary" href={step.frontendUrl} target="_blank" rel="noreferrer">
                      Frontend ↗
                    </a>
                  )}

                  {step.backendUrl && (
                    <a className="button secondary" href={step.backendUrl} target="_blank" rel="noreferrer">
                      Backend ↗
                    </a>
                  )}
                </div>
              </div>

              <JourneyVisual type={step.visual} step={step} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
