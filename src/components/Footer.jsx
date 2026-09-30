import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Computer Science Student • Developer • QA • Documentation</p>
        </div>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  )
}
