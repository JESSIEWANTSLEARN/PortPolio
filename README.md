# John Jessie Portfolio V10 — Modular Structure

This version keeps the V9 design/content but reorganizes the project so future edits are easier.

## Main structure

```text
src/
├── App.jsx
├── main.jsx
│
├── components/
│   ├── Intro.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── ImpactStrip.jsx
│   ├── Journey.jsx
│   ├── JourneyVisual.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── QASection.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   ├── index.js
│   ├── profile.js
│   ├── journey.js
│   ├── projects.js
│   ├── skills.js
│   └── education.js
│
└── styles/
    ├── index.css
    ├── theme.css
    ├── navbar.css
    ├── theme-toggle.css
    ├── hero.css
    ├── sections.css
    ├── journey.css
    ├── projects-skills.css
    ├── qa-education-contact.css
    ├── effects-responsive.css
    ├── intro.css
    └── polish.css
```

## Where to edit common things

### Add/remove skills
`src/data/skills.js`

### Change your profile/contact information
`src/data/profile.js`

### Change Java → Alexandria → C# → React/Laravel → SSIS → Walang Brownout
`src/data/journey.js`

### Change smaller project cards
`src/data/projects.js`

### Change school information
`src/data/education.js`

### Change only the sun/moon toggle animation
`src/styles/theme-toggle.css`

### Change cinematic intro animation
`src/styles/intro.css` and `src/components/Intro.jsx`

### Change Technology Ecosystem design
`src/styles/projects-skills.css`, `src/styles/polish.css`, and `src/components/Skills.jsx`

### Change contact/Gmail area
`src/components/Contact.jsx` and `src/styles/qa-education-contact.css`

## Run

```powershell
cd C:\Users\admin\PreparedGithub
npm install
npm run dev
```

## Production test

```powershell
npm run build
```

## V10.1 fix

Fixed the CSS module boundary around `.reveal` and moved `theme-toggle.css` to the final import position so its GPU transform rules win over legacy responsive rules.
