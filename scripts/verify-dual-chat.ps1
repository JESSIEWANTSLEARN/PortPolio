$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$checks = @(
    "src\App.jsx",
    "src\components\chatbot\Chatbot.jsx",
    "src\styles\chatbot.css",
    "src\integrations\chatbase\ChatbaseWidget.jsx",
    "src\integrations\chatbase\chatbaseConfig.js"
)

Write-Host ""
Write-Host "V12 Dual Chat Verification" -ForegroundColor Cyan
Write-Host ""

$failed = $false

foreach ($item in $checks) {
    if (Test-Path $item) {
        Write-Host "[OK] $item" -ForegroundColor Green
    }
    else {
        Write-Host "[MISSING] $item" -ForegroundColor Red
        $failed = $true
    }
}

if ($failed) {
    Write-Host ""
    Write-Error "Setup is incomplete."
    exit 1
}

$app = Get-Content "src\App.jsx" -Raw

if ($app -match '<Chatbot\s*/>') {
    Write-Host "[OK] Local Ask John is rendered." -ForegroundColor Green
}
else {
    Write-Host "[WARNING] Could not find <Chatbot /> in App.jsx." -ForegroundColor Yellow
}

if ($app -match '<ChatbaseWidget\s*/>') {
    Write-Host "[OK] ChatbaseWidget is rendered." -ForegroundColor Green
}
else {
    Write-Host "[WARNING] Could not find <ChatbaseWidget /> in App.jsx." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Expected layout:" -ForegroundColor Cyan
Write-Host "  Bottom-left  : Ask John (local chatbot)"
Write-Host "  Bottom-right : Chatbase AI"
