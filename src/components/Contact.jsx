import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const gmailCompose =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(profile.email)}` +
    `&su=${encodeURIComponent('Portfolio Inquiry')}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard access may be blocked in some browsers.
    }
  }

  return (
    <section className="section contact-section section-anchor" id="contact">
      <div className="container">
        <div className="section-heading reveal">
          <span>07</span>
          <div>
            <p>LET’S CONNECT</p>
            <h2>Contact Directory</h2>
          </div>
        </div>

        <div className="contact-grid">
          <article className="contact-card reveal">
            <div className="contact-icon">@</div>
            <span>GMAIL</span>
            <h3>{profile.email}</h3>

            <div className="contact-actions">
              <a
                className="button primary"
                href={gmailCompose}
                target="_blank"
                rel="noreferrer"
              >
                Open Gmail ↗
              </a>

              <button className="button secondary copy-button" type="button" onClick={copyEmail}>
                {copied ? 'Copied ✓' : 'Copy Email'}
              </button>
            </div>
          </article>

          <article className="contact-card reveal">
            <div className="contact-icon">&lt;/&gt;</div>
            <span>GITHUB</span>
            <h3>{profile.githubUsername}</h3>
            <a className="button secondary" href={profile.githubUrl} target="_blank" rel="noreferrer">
              View Profile ↗
            </a>
          </article>

          <article className="contact-card reveal">
            <div className="contact-icon">f</div>
            <span>FACEBOOK</span>
            <h3>{profile.shortName}</h3>
            <a className="button secondary" href={profile.facebookUrl} target="_blank" rel="noreferrer">
              Open Facebook ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
