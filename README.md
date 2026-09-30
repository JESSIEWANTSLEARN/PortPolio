# John Jessie R. Palarao - Digital Portfolio

Ready-to-run React + Vite portfolio.

## 1. Install

Open PowerShell inside this folder:

```powershell
npm install
```

## 2. Run locally

```powershell
npm run dev
```

Open the URL Vite prints, usually:

```text
http://localhost:5173/
```

## 3. Edit your personal information

Open:

```text
src/data/portfolioData.js
```

At minimum, replace:

```js
email: 'your.email@gmail.com'
```

with your real Gmail address.

Also replace the placeholder Senior High School and Junior High School names.

## 4. Build test

Before pushing to GitHub:

```powershell
npm run build
```

If the build succeeds, the project is ready for Vercel.

## 5. Push to GitHub

From the repository root:

```powershell
git add .
git commit -m "Create animated digital portfolio"
git push origin main
```

## 6. Deploy to Vercel

- Import your `PortPolio` GitHub repository.
- Framework preset: **Vite**
- Root Directory:
  - Use `./` if this project's `package.json` is directly in the repo root.
  - Use `frontend` only if these files are inside a `frontend` subfolder.
- Click **Deploy**.

## Featured Project

Walang Brownout live deployment:
https://unpaiddevfrontend.onrender.com/


## Add your real profile photo

The portfolio already has a digital portrait frame showing:

- John Jessie R. Palarao
- Age 21
- Computer Science
- Full-Stack Developer
- QA & Documentation
- Unity Engine
- UI / Design

To use your own face:

1. Put your photo inside the `public` folder.
2. Recommended filename: `profile.jpg`
3. Open `src/data/portfolioData.js`
4. Change:

```js
profileImage: '/profile-placeholder.svg',
```

to:

```js
profileImage: '/profile.jpg',
```

A square or portrait photo works best.


## Project links included in this version

- Walang Brownout — live Render deployment + frontend/backend repositories
- Alexandria Online Library — GitHub repository
- CCS112 Task Manager — GitHub repository
- C# OOP Portfolio — user-provided GitHub repository link
- Facebook contact directory link

## Animation upgrade

The project deck now uses the same style of navigation animation used in Walang Brownout:

- forward: current project slides left while the next enters from the right
- backward: the direction reverses
- blue/navy wipe overlay during navigation
- subtle fade, glow, hover scale, orbiting project visualization
- automatic project slide every 6.5 seconds, paused on hover
- left/right arrow-key navigation
- animated tech marquee and mouse-follow glow
