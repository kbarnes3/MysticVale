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

. $PSScriptRoot\Ensure-Venv.ps1 | Out-Null

# Register helper functions
Set-Item function:global:Invoke-Manage {
    . $PSScriptRoot\Invoke-Manage.ps1 @args
} -Force

Set-Item function:global:Invoke-Fabric {
    . $PSScriptRoot\Invoke-Fabric.ps1 @args
} -Force

Set-Item function:global:Start-Server {
    Invoke-Manage runserver @args
} -Force

Set-Item function:global:Update-DevEnvironment {
    param([switch]$Verbose)
    . $PSScriptRoot\Update.ps1 -Verbose:$Verbose
} -Force

Write-Status "NewDjangoSite ready"
