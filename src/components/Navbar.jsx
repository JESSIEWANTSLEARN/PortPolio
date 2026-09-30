import { profile } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  const links = [
    ['about', 'About'],
    ['journey', 'Journey'],
    ['projects', 'Projects'],
    ['skills', 'Skills'],
    ['qa', 'QA'],
    ['education', 'Education'],
    ['contact', 'Contact'],
  ]

  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          <span>&lt;JJ/&gt;</span>
          <strong>{profile.shortName}</strong>
        </a>

        <div className="nav-actions">
          <div className="nav-links">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>

          <button
            className={`theme-switch ${theme === 'light' ? 'light' : 'dark'}`}
            onClick={onToggleTheme}
            type="button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="switch-sun">☀</span>
            <span className="switch-moon">☾</span>
            <span className="switch-knob">{theme === 'light' ? '☀' : '☾'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
