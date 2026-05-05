# Script para actualizar HTML con nuevo estilo de menú hamburguesa

$digimonreqsPath = "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\digimonreqs.html"
$htmlFiles = @(
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\StatRanking.html",
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\arbolevolutivo.html",
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\digidexprogress.html",
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\BalanceCalculator.html",
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\Enemigosdelared.html",
  "c:\Users\rodri\Documents\GitHub\EvolutionCalculator\dropsdelared.html"
)

# Leer digimonreqs.html para extraer el CSS y menú
$digimonreqsContent = Get-Content $digimonreqsPath -Raw

# Extraer CSS (desde <style> hasta </style>)
$cssStart = $digimonreqsContent.IndexOf('<style>')
$cssEnd = $digimonreqsContent.IndexOf('</style>') + '</style>'.Length
$newCss = $digimonreqsContent.Substring($cssStart, $cssEnd - $cssStart)

# Extraer menú HTML (desde <!-- Menú hasta el nav-selector)
$menuStart = $digimonreqsContent.IndexOf('<!-- Menú de navegación')
$menuEnd = $digimonreqsContent.IndexOf('<div id="lang-selector">') + '<div id="lang-selector">' -replace '</div>'.Length
$menuHtml = $digimonreqsContent.Substring($menuStart, $menuEnd - $menuStart)

# Extraer scripts de navegación (toggleNav, closeNav, etc.)
$scriptStart = $digimonreqsContent.IndexOf('function toggleNav()')
$scriptStart = $digimonreqsContent.LastIndexOf('<script>', $scriptStart)
$scriptEnd = $digimonreqsContent.LastIndexOf('</script>') + '</script>'.Length
$navScripts = $digimonreqsContent.Substring($scriptStart, $scriptEnd - $scriptStart)

Write-Host "✓ CSS extraído"
Write-Host "✓ Menú extraído"
Write-Host "✓ Scripts extraídos"

# Procesar cada archivo HTML
foreach ($htmlFile in $htmlFiles) {
  if (-not (Test-Path $htmlFile)) {
    Write-Host "⚠ No encontrado: $htmlFile"
    continue
  }

  $content = Get-Content $htmlFile -Raw

  # Reemplazar <style> ... </style>
  $content = $content -replace '<style>.*?</style>', $newCss

  # Agregar menú después de <body>
  if ($content -match '<body[^>]*>') {
    $content = $content -replace '(<body[^>]*>)', "`$1`n`n$menuHtml`n`n"
  }

  # Reemplazar los últimos scripts de navegación
  $content = $content -replace 'function toggleNav\(\).*?</script>', $navScripts

  # Guardar archivo
  $content | Out-File -FilePath $htmlFile -Encoding UTF8 -Force
  $filename = Split-Path $htmlFile -Leaf
  Write-Host "✓ Actualizado: $filename"
}

Write-Host "`n✓ Todos los archivos HTML han sido actualizados"
