import { profile } from '../data/portfolioData'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">01</span>
          <div>
            <p className="kicker">WHO I AM</p>
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="glass-card reveal">
            <p>
              I am a <strong>3rd-year Bachelor of Science in Computer Science student</strong>
              {' '}at the <strong>University of Cabuyao</strong>. I enjoy turning academic
              activities into working systems and learning how software moves from
              planning, coding, and testing to deployment.
            </p>
            <p>
              My interests include <strong>full-stack web development</strong>,
              {' '}<strong>quality assurance</strong>, technical documentation,
              databases, REST APIs, and <strong>Unity game development</strong>.
            </p>
          </div>

          <div className="quick-facts reveal">
            <article>
              <span>LOCATION</span>
              <strong>{profile.location}</strong>
            </article>
            <article>
              <span>ACADEMIC LEVEL</span>
              <strong>3rd-Year Computer Science</strong>
            </article>
            <article>
              <span>CORE FOCUS</span>
              <strong>Build • Test • Document • Deploy</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
