# Resolve all dependencies that the project requires to run.
param(
    [switch]$Verbose
)

. $PSScriptRoot\Write-Status.ps1

if ($Verbose) {
    $quiet = ""
}
else {
    $quiet = "--quiet"
}

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "mystic-vale"

Push-Location $node_root

Write-Status "Updating npm"
& npm install -g npm $quiet
Write-Status "Updating Angular CLI"
& npm install -g @angular/cli $quiet
Write-Status "Updating requirements"
& npm install $quiet

Pop-Location
