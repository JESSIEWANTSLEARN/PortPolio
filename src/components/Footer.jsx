import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Computer Science Student • Developer • QA • Documentation</p>
        </div>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
