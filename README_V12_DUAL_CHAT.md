# V12 Dual Chat Setup

This patch is designed for your existing modular portfolio in:

```text
C:\Users\admin\PreparedGithub
```

It keeps BOTH chatbot systems:

```text
BOTTOM LEFT                       BOTTOM RIGHT

<JJ/> Ask John                   Chatbase AI
Local chatbot                    AI agent
No external message credits      Chatbase usage limits apply
```

## Install

Extract/copy this package into your existing portfolio so that the `scripts` folder becomes:

```text
C:\Users\admin\PreparedGithub\scripts
```

Then:

```powershell
cd C:\Users\admin\PreparedGithub

.\scripts\install-dual-chat.ps1
```

The installer automatically:

- keeps your existing local Ask John chatbot
- creates `src/integrations/chatbase/`
- adds the Chatbase React loader
- configures your current Chatbase Bot ID
- patches `App.jsx`
- moves the local chatbot to the bottom-left
- leaves Chatbase on the bottom-right

## Run

```powershell
npm run dev
```

## Verify setup

```powershell
.\scripts\verify-dual-chat.ps1
```

## Change Chatbase Bot ID later

You do NOT have to edit React code.

Run:

```powershell
.\scripts\configure-chatbase.ps1
```

Then paste the new public Chatbase Bot ID when prompted.

Or:

```powershell
.\scripts\configure-chatbase.ps1 -BotId "YOUR_NEW_BOT_ID"
```

## Current Bot ID

```text
Clh-J1ayC2W4EKsQlxQBz
```

## Important

The Chatbase **Bot ID is public** and can be used by the website widget.

Do NOT enter or commit your Chatbase **Identity Verification secret key** into this React project.

## Production

After local testing:

```powershell
npm run build

git add .
git commit -m "Add Chatbase AI alongside local portfolio chatbot"
git push
```

Vercel should then redeploy from GitHub automatically.
