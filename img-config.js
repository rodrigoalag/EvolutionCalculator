// ===== IMAGE CDN CONFIGURATION =====
// Images are served from jsDelivr CDN pointing to the 'dev' branch
const IMG_BASE = 'https://cdn.jsdelivr.net/gh/rodrigoalag/EvolutionCalculator@dev';

/** Converts a relative image path to the CDN URL */
function imgUrl(path) {
  return IMG_BASE + '/' + path.replace(/^\.?\//, '');
}

/** Rewrites all static img src attributes to use the CDN */
function rewriteImageSources() {
  document.querySelectorAll('img[src^="./"], img[src^="icon/"], img[src^="img/"], img[src^="itemimg/"], img[src^="pageicons/"], img[src^="NPCS/"], img[src^="Tama/"], img[src^="driverlist/"]').forEach(img => {
    const originalSrc = img.getAttribute('src');
    if (!originalSrc.startsWith('http')) {
      img.src = imgUrl(originalSrc);
    }
  });
}

// Auto-rewrite on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', rewriteImageSources);
} else {
  rewriteImageSources();
}
