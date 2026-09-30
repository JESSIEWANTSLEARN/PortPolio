import { profile } from '../data'

export default function About() {
  return (
    <section className="section section-anchor" id="about">
      <div className="container">
        <div className="section-heading reveal">
          <span>01</span>
          <div>
            <p>WHO I AM</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <article className="about-story reveal">
            <p>
              I am a <strong>3rd-year Bachelor of Science in Computer Science student</strong> at the{' '}
              <strong>University of Cabuyao</strong>. I enjoy turning academic activities into working
              systems and learning how software moves from planning and design to coding, testing,
              documentation, and deployment.
            </p>

            <p>
              My interests include <strong>full-stack web development</strong>, databases,{' '}
              <strong>quality assurance</strong>, technical documentation, UI design, and{' '}
              <strong>Unity game development</strong>.
            </p>
          </article>

          <div className="fact-stack">
            <article className="fact-card reveal">
              <span>LOCATION</span>
              <strong>{profile.location}</strong>
            </article>
            <article className="fact-card reveal">
              <span>ACADEMIC LEVEL</span>
              <strong>{profile.academicLevel}</strong>
            </article>
            <article className="fact-card reveal">
              <span>CORE FOCUS</span>
              <strong>Build • Test • Document • Deploy</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
