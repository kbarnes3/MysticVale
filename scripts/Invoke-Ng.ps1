# Runs manage.py from a consistent context
# Any arguments passed into this function are passed to manage.py
param(
    $NgArgs
)

$project_root = Split-Path $PSScriptRoot
$node_root = Join-Path $project_root "mystic-vale"

Push-Location $node_root
& ng @NgArgs
Pop-Location
