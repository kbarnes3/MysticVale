# Runs manage.py from a consistent context
# Any arguments passed into this function are passed to manage.py
param(
    [switch]$Async,
    $NpmArgs
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "mystic-vale"

Push-Location $node_root
if ($Async) {
    Start-Process npm.cmd -ArgumentList $NpmArgs
} else {
    & npm.cmd @NpmArgs
}
Pop-Location
