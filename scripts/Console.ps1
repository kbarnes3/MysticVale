# Launch a console for the project.
param(
    [switch]$Quick,
    [switch]$Verbose
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "mystic-vale"
. $PSScriptRoot\Write-Status.ps1

Write-Status "Mystic Vale console"

$modules = Join-Path $node_root "node_modules"
if (Test-Path $modules) {
    if (-Not($Quick)) {
        . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
    }
}
else {
    if ($Quick) {
        Write-Warning "No node modules detected, -Quick will be ignored"
    }
    . $PSScriptRoot\Setup.ps1
}

# Register helper functions
Set-Item function:global:Invoke-Ng {
    . $PSScriptRoot\Invoke-Ng.ps1 @args
} -Force

Set-Item function:global:Start-Server {
    param([switch]$OpenBrowser)
    $open = ""
    if ($OpenBrowser) {
        $open = "--open"
    }
    Invoke-Ng serve $open
} -Force

Set-Item function:global:Update-DevEnvironment {
    param([switch]$Verbose)
    . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
} -Force

Write-Status "Mystic Vale ready"
