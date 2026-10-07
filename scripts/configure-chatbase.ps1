param(
    [string]$BotId
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $repoRoot "src\integrations\chatbase\chatbaseConfig.js"

if (-not (Test-Path $configPath)) {
    Write-Error "Chatbase integration is not installed yet. Run .\scripts\install-dual-chat.ps1 first."
    exit 1
}

if ([string]::IsNullOrWhiteSpace($BotId)) {
    Write-Host ""
    Write-Host "Chatbase Bot ID configuration" -ForegroundColor Cyan
    $BotId = Read-Host "Enter Chatbase Bot ID"
}

if ([string]::IsNullOrWhiteSpace($BotId)) {
    Write-Error "Bot ID cannot be empty."
    exit 1
}

$configContent = @"
export const chatbaseConfig = {
  botId: '$BotId',
  domain: 'www.chatbase.co',
}
"@

Set-Content -Path $configPath -Value $configContent -Encoding UTF8

Write-Host ""
Write-Host "Chatbase Bot ID updated." -ForegroundColor Green
Write-Host "Bot ID: $BotId"
Write-Host ""
Write-Host "Run: npm run dev"
