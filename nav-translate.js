(function () {
  var navLinkTexts = {
    'Enemigosdelared.html': { es: 'Enemigos de la Red', en: 'Network Enemies' },
    'dropsdelared.html':    { es: 'Drops de la Red',   en: 'Network Drops' },
    'AlimentosEfectos.html':{ es: 'Efectos de los Objetos', en: 'Item Effects' }
  };

  var navCreditsContent = {
    es: {
      body: 'Agradecimientos totales a las siguientes personas, que sin su ayuda no habría podido hacer varias cosas en las páginas:',
      items: [
        '<strong>JorgeTitor</strong> - Por ser el de la idea original de llevar un registro de todos los requisitos',
        '<strong><a href="https://github.com/Angelomon" target="_blank">Ruben (Angelomon)</a></strong> - Tuvo la idea original del árbol evolutivo, tomé prestado sus ideas para hacer las mejoras',
        '<strong>Panoli</strong> - Por darme todas las imágenes recortadas del juego',
        'Y a todos los que han ayudado a mejorar la base de datos con sus tageos'
      ]
    },
    en: {
      body: 'Special thanks to the following people, without whom many things in these pages wouldn\'t have been possible:',
      items: [
        '<strong>JorgeTitor</strong> - For having the original idea of keeping a record of all the requirements',
        '<strong><a href="https://github.com/Angelomon" target="_blank">Ruben (Angelomon)</a></strong> - Had the original idea for the evolution tree, I borrowed his ideas to make improvements',
        '<strong>Panoli</strong> - For giving me all the cropped images from the game',
        'And to everyone who has helped improve the database with their reports'
      ]
    }
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

    var navCreditsDiv = document.querySelector('#nav-menu .nav-credits');
    if (navCreditsDiv) {
      var c = navCreditsContent[lang];
      navCreditsDiv.innerHTML = c.body + '<ul>' + c.items.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ul>';
    }

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
