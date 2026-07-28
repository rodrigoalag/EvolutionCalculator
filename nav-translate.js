(function () {
  var navLinkTexts = {
    'Enemigosdelared.html': { es: 'Enemigos de la Red', en: 'Network Enemies' },
    'dropsdelared.html':    { es: 'Drops de la Red',   en: 'Network Drops' },
    'AlimentosEfectos.html':{ es: 'Efectos de los Objetos', en: 'Item Effects' }
  };

  var navHeaderTexts = {
    'nav-herramientas': { icon: './pageicons/menu.png',  es: 'Herramientas',   en: 'Tools' },
    'nav-links':        { icon: './pageicons/link.png',  es: 'Links Externos', en: 'External Links' },
    'nav-creditos':     { icon: './pageicons/audit.png', es: 'Créditos',       en: 'Credits' }
  };

  function translateNavMenu(lang) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';

    Object.keys(navHeaderTexts).forEach(function (id) {
      var info = navHeaderTexts[id];
      var el = document.getElementById(id);
      if (el) {
        el.innerHTML = '<img src="' + info.icon + '" alt="' + info[lang] + '"><span>' + info[lang] + '</span>';
      }
    });

    document.querySelectorAll('#nav-menu .nav-link').forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase();
      Object.keys(navLinkTexts).forEach(function (page) {
        if (href.indexOf(page.toLowerCase()) !== -1) {
          var img = link.querySelector('img');
          link.textContent = ' ' + navLinkTexts[page][lang];
          if (img) link.prepend(img);
        }
      });
    });
  }

  window.translateNavMenu = translateNavMenu;

  function getLang() {
    var sel = document.getElementById('languageSelector') || document.getElementById('selectIdioma');
    return (sel && sel.value) || localStorage.getItem('digilang') || 'es';
  }

  function init() {
    translateNavMenu(getLang());

    ['languageSelector', 'selectIdioma'].forEach(function (selId) {
      var sel = document.getElementById(selId);
      if (sel) {
        sel.addEventListener('change', function () {
          var val = this.value;
          setTimeout(function () { translateNavMenu(val); }, 0);
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
