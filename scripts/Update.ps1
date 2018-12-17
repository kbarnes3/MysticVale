# This script updates the project to run for its current checkout.
param(
    [switch]$Verbose
)

. $PSScriptRoot\Write-Status.ps1
$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "mystic-vale"

. $PSScriptRoot\Bootstrap.ps1 -Verbose:$Verbose
