import { profile } from '../data/portfolioData'

export default function Contact() {
  const mailSubject = encodeURIComponent('Portfolio Inquiry')
  const mailto = `mailto:${profile.email}?subject=${mailSubject}`

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-number">06</span>
          <div>
            <p className="kicker">LET'S CONNECT</p>
            <h2>Contact Directory</h2>
          </div>
        </div>

        <div className="contact-grid">
          <article className="contact-card reveal">
            <span className="contact-icon">@</span>
            <p>GMAIL</p>
            <h3>{profile.email}</h3>
            <a className="button primary" href={mailto}>
              Message Me
            </a>
          </article>

          <article className="contact-card reveal">
            <span className="contact-icon">&lt;/&gt;</span>
            <p>GITHUB</p>
            <h3>{profile.githubUsername}</h3>
            <a
              className="button ghost"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Profile ↗
            </a>
          </article>

          <article className="contact-card reveal">
            <span className="contact-icon">f</span>
            <p>FACEBOOK</p>
            <h3>John Jessie Palarao</h3>
            <a
              className="button ghost"
              href={profile.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open Facebook ↗
            </a>
          </article>
        </div>

        <p className="contact-note reveal">
          Before deploying, replace <strong>your.email@gmail.com</strong> in
          <code> src/data/portfolioData.js </code> with your real Gmail address.
        </p>
      </div>
    </section>
  )
}
