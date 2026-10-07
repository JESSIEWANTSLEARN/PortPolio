$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

Write-Host ""
Write-Host "========================================" -ForegroundColor DarkRed
Write-Host " V12 DUAL CHAT INSTALLER" -ForegroundColor Red
Write-Host " Local Ask John + Chatbase AI" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor DarkRed
Write-Host ""

$appPath = Join-Path $repoRoot "src\App.jsx"
$chatCssPath = Join-Path $repoRoot "src\styles\chatbot.css"
$integrationDir = Join-Path $repoRoot "src\integrations\chatbase"
$configPath = Join-Path $integrationDir "chatbaseConfig.js"
$widgetPath = Join-Path $integrationDir "ChatbaseWidget.jsx"

if (-not (Test-Path $appPath)) {
    Write-Error "Cannot find src\App.jsx. Run this script from your portfolio repository."
    exit 1
}

if (-not (Test-Path $chatCssPath)) {
    Write-Error "Cannot find src\styles\chatbot.css. Your local Ask John chatbot must already exist."
    exit 1
}

New-Item -ItemType Directory -Force -Path $integrationDir | Out-Null

# ---------------------------------------------------------
# Chatbase public configuration
# This Bot ID is public and safe to keep in frontend code.
# ---------------------------------------------------------
$configContent = @'
export const chatbaseConfig = {
  botId: 'Clh-J1ayC2W4EKsQlxQBz',
  domain: 'www.chatbase.co',
}
'@

Set-Content -Path $configPath -Value $configContent -Encoding UTF8

# ---------------------------------------------------------
# React Chatbase loader
# ---------------------------------------------------------
$widgetContent = @'
import { useEffect } from 'react'
import { chatbaseConfig } from './chatbaseConfig'

export default function ChatbaseWidget() {
  useEffect(() => {
    const { botId, domain } = chatbaseConfig

    if (!botId || botId === 'PASTE_CHATBASE_BOT_ID_HERE') {
      console.warn('Chatbase Bot ID is not configured.')
      return
    }

    if (!window.chatbase) {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = []
        }

        window.chatbase.q.push(args)
      }

      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') {
            return target.q
          }

          return (...args) => target(prop, ...args)
        },
      })
    }

    if (document.getElementById(botId)) {
      return
    }

    const loadWidget = () => {
      if (document.getElementById(botId)) {
        return
      }

      const script = document.createElement('script')
      script.src = 'https://www.chatbase.co/embed.min.js'
      script.id = botId
      script.setAttribute('domain', domain)
      script.async = true

      document.body.appendChild(script)
    }

    if (document.readyState === 'complete') {
      loadWidget()
    } else {
      window.addEventListener('load', loadWidget, { once: true })
    }

    return () => {
      window.removeEventListener('load', loadWidget)
    }
  }, [])

  return null
}
'@

Set-Content -Path $widgetPath -Value $widgetContent -Encoding UTF8

# ---------------------------------------------------------
# Patch App.jsx
# ---------------------------------------------------------
$app = Get-Content -Path $appPath -Raw

$importLine = "import ChatbaseWidget from './integrations/chatbase/ChatbaseWidget'"

if ($app -notmatch [regex]::Escape($importLine)) {
    $lines = $app -split "`r?`n"
    $lastImport = -1

    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i] -match '^import\s') {
            $lastImport = $i
        }
    }

    if ($lastImport -ge 0) {
        $before = $lines[0..$lastImport]
        $after = @()

        if ($lastImport + 1 -lt $lines.Length) {
            $after = $lines[($lastImport + 1)..($lines.Length - 1)]
        }

        $lines = @($before + $importLine + $after)
        $app = $lines -join "`r`n"
    }
}

if ($app -notmatch '<ChatbaseWidget\s*/>') {
    if ($app -match '<Chatbot\s*/>') {
        $app = $app -replace '<Chatbot\s*/>', "<Chatbot />`r`n      <ChatbaseWidget />"
    }
    elseif ($app -match '<Footer\s*/>') {
        $app = $app -replace '<Footer\s*/>', "<Footer />`r`n      <ChatbaseWidget />"
    }
    else {
        Write-Error "Could not find <Chatbot /> or <Footer /> inside App.jsx to insert Chatbase."
        exit 1
    }
}

Set-Content -Path $appPath -Value $app -Encoding UTF8

# ---------------------------------------------------------
# Keep local chatbot on LEFT.
# Chatbase's own bubble can remain on RIGHT.
# ---------------------------------------------------------
$css = Get-Content -Path $chatCssPath -Raw

$marker = "V12 DUAL CHAT POSITIONING"

if ($css -notmatch $marker) {
    $dualCss = @'

/* =========================================================
   V12 DUAL CHAT POSITIONING
   Local Ask John = bottom-left
   Chatbase AI = bottom-right
   ========================================================= */

.chat-launcher {
  left: 24px !important;
  right: auto !important;
}

.chat-panel {
  left: 24px !important;
  right: auto !important;
  transform-origin: bottom left !important;
}

@media (max-width: 640px) {
  .chat-launcher {
    left: 14px !important;
    right: auto !important;
  }

  .chat-panel {
    left: 10px !important;
    right: auto !important;
  }
}
'@

    Add-Content -Path $chatCssPath -Value $dualCss -Encoding UTF8
}

Write-Host "[OK] Chatbase integration created." -ForegroundColor Green
Write-Host "[OK] Existing Ask John chatbot preserved." -ForegroundColor Green
Write-Host "[OK] Ask John positioned on bottom-left." -ForegroundColor Green
Write-Host "[OK] Chatbase will use bottom-right." -ForegroundColor Green
Write-Host ""
Write-Host "Current Chatbase Bot ID:" -ForegroundColor Cyan
Write-Host "Clh-J1ayC2W4EKsQlxQBz"
Write-Host ""
Write-Host "Next command:" -ForegroundColor Yellow
Write-Host "npm run dev"
Write-Host ""
