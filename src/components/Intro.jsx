import { useEffect, useState } from 'react'
import { profile } from '../data'

export default function Intro({ onComplete }) {
  const [leaving, setLeaving] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  const finishIntro = () => {
    if (leaving) return
    setLeaving(true)
    window.setTimeout(onComplete, 850)
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      onComplete()
      return
    }

    const timer = window.setTimeout(finishIntro, 6500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`cinematic-intro ${leaving ? 'intro-leaving' : ''}`}>
      <div className="intro-noise" />
      <div className="intro-grid" />
      <div className="intro-beam intro-beam-left" />
      <div className="intro-beam intro-beam-right" />

      <button className="intro-skip" type="button" onClick={finishIntro}>
        SKIP INTRO
      </button>

      <div className="intro-sequence" aria-live="polite">
        <div className="intro-logo">&lt;JJ/&gt;</div>

        <div className="intro-loading">
          <span>&gt; initializing_portfolio.exe</span>
          <i />
        </div>

        <div className="intro-name" aria-label={profile.name}>
          <span className="intro-name-line line-john">JOHN</span>
          <span className="intro-name-line line-jessie">JESSIE</span>
          <span className="intro-name-line line-palarao">PALARAO</span>
        </div>

        <div className="intro-workflow">
          <span>BUILD.</span>
          <span>TEST.</span>
          <span>DOCUMENT.</span>
          <span>DEPLOY.</span>
        </div>

        <div className="intro-profile-stage">
          <div className="intro-profile-frame">
            {!imageFailed ? (
              <img
                src={profile.profileImage}
                alt=""
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="intro-monogram">JJ</div>
            )}

            <div className="intro-scan-line" />
          </div>

          <div className="intro-disciplines">
            <span className="discipline d1">FULL-STACK</span>
            <span className="discipline d2">QA & TESTING</span>
            <span className="discipline d3">DOCUMENTATION</span>
            <span className="discipline d4">UI / DESIGN</span>
            <span className="discipline d5">UNITY ENGINE</span>
          </div>
        </div>

        <div className="intro-final">
          <p>COMPUTER SCIENCE • BUILDING MY DEVELOPMENT JOURNEY</p>
          <button type="button" onClick={finishIntro}>
            ENTER PORTFOLIO
            <span>↓</span>
          </button>
        </div>
      </div>

      <div className="intro-counter">
        <span>PORTFOLIO / 2026</span>
        <span>01 — 06</span>
      </div>
    </div>
  )
}
