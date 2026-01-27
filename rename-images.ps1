# PowerShell script to rename images in order
$imagePath = "public\images"
$files = Get-ChildItem "$imagePath\*.jpeg" | Sort-Object Name
$i = 1

foreach ($file in $files) {
    $newName = "project-$i.jpeg"
    if ($file.Name -ne $newName) {
        $newPath = Join-Path $imagePath $newName
        if (-not (Test-Path $newPath)) {
            Rename-Item -Path $file.FullName -NewName $newName
            Write-Host "Renamed: $($file.Name) -> $newName"
        } else {
            Write-Host "Skipped: $newName already exists"
        }
    }
    $i++
}

Write-Host "Done! Renamed $($files.Count) images."
