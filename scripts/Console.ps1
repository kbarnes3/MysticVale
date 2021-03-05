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
Set-Item function:global:Invoke-Npm {
    param([switch]$Async, $NpmArgs)
    . $PSScriptRoot\Invoke-Npm.ps1 -Async:$Async $NpmArgs
} -Force

Set-Item function:global:Invoke-Ng {
    param($NgArgs)
    . $PSScriptRoot\Invoke-Ng.ps1 $NgArgs
} -Force

Set-Item function:global:Start-Server {
    param([switch]$OpenBrowser)
    $npmArgs = @("start")
    if ($OpenBrowser) {
        $npmArgs += "--"
        $npmArgs += "--open"
    }
    Invoke-Npm -Async:$Async $npmArgs
} -Force

Set-Item function:global:Invoke-Build {
    Invoke-Npm run-script build
}

Set-Item function:global:Update-DevEnvironment {
    param([switch]$Verbose)
    . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
} -Force

Write-Status "Mystic Vale ready"
