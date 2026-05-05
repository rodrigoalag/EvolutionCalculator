// #region Constantes
  // Mapeo de textos en español a claves de traducción
  const headerMappingJS = {
    'Peso': 'peso',
    'Weight': 'peso',
    'Errores': 'errores',
	'Errores de Crianza': 'errores',
    'Care Mistakes': 'errores',
    '% Entrenamiento': 'entrenamiento',
    '% Training': 'entrenamiento',
    'Muerte inducida sin Carne X o Program (30% de salir)': 'induceddeath',
    'Induced death without Meat X or Death Program (30% Chance)': 'induceddeath',
    'Muerte inducida sin Carne X o Program': 'induceddeath',
    'Induced death without Meat X or Death Program': 'induceddeath',
    'Vinculo Maximo Alcanzado': 'vinculo',
	'Menos de 15 entrenamientos?': 'entrenos25',
	'Less than 15 trainings?': 'entrenos25',
    'Vinculo': 'vinculo',
    'Max Bond Achieved': 'vinculo',
	'Vinculo al momento de evolucionar':'vinculo2',
	'Bond at evolution':'vinculo2',
	'Bonus Vinculo al momento de evolucionar':'vinculo2',
    'Batallas': 'batallas',
    'Battles': 'batallas',
    'WinRate': 'winRate',
    '¿Realizó Entrenamiento?': 'entrenamientopregunta',
    'Did you make a training?': 'entrenamientopregunta',
    'Stat Superior': 'statsuperior',
    'Superior Stat': 'statsuperior',
    'Bonus Stat Superior': 'bonusstatsuperior',
    'Bonus Highest Stat': 'bonusstatsuperior',
    '¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?': 'agumon06',
    'Did you have 2 perfects on last two generations/Did you obtain Agumon 06?': 'agumon06',
    'Driver Equipado': 'driverequip',
    'Driver equipped': 'driverequip',
    'Victorias': 'victorias',
    'Victories': 'victorias',
	'Puntaje Total': 'puntaje',
	'Total Poiunts': 'puntaje',
	'Etapa': 'etapa',
	'Stage': 'etapa',
	'Digimon': 'digimon',
	'Program': 'program',
	'Bonus': 'bonus',
	'Xross or Install': 'xross',
	'Comida':'comida',
	'Food':'comida',
	'Reached negative bond?': 'vnegativo',
	'Alcanzo vinculo negativo?': 'vnegativo',
	'Tienes registrado a DexDorugamon y Dorugamon?': 'registrodexdoru',
	'Do you have DexDorugamon and Dorugamon registered?': 'registrodexdoru',
	'Tienes registrado a DexDoruguremon y Doruguremon?': 'registrodexdorugure',
	'Do you have DexDoruguremon and Doruguremon registered?': 'registrodexdorugure',
  "HP Entrenado":'trainedhp',
  "HP %":'trainedhp',
	"Trained HP":'trainedhp',
  "ATK Entrenado":'trainedatk',
  "ATK %":'trainedatk',
  "Trained ATK":'trainedatk',
  "SPD Entrenado":'trainedspd',
  "SPD %":'trainedspd',
  "Trained SPD":'trainedspd'

  };

//1. Agregar traducciones específicas para los selects dinámicos
const selectTranslations = {
  es: {
    selectTama: "Selecciona tu Tama:",
    selectTamaDefault: "--Selecciona Tama--",
    selectLevel: "Escoge el nivel de tu digimon:",
    selectLevelDefault: "--Selecciona Nivel--",
    selectDigimon: "Selecciona un Digimon:",
    selectDigimonDefault: "--Selecciona Digimon--",
    level: "Nivel",
    Balanceado: "Balanceado"
  },
  en: {
    selectTama: "Select your Tama:",
    selectTamaDefault: "--Select Tama--",
    selectLevel: "Choose your digimon level:",
    selectLevelDefault: "--Select Level--",
    selectDigimon: "Select a Digimon:",
    selectDigimonDefault: "--Select Digimon--",
    level: "Level",
    Balanceado: "Balanced"
  }
};

// 2. Variables globales para los elementos
const languageSelector = document.getElementById('languageSelector');

// 3. Función para obtener texto traducido de los selects
function getSelectText(key) {
  return selectTranslations[currentLanguage][key] || selectTranslations['es'][key] || key;
}

// 3.5. Diccionario de nombres de Tama
const tamaNombres = {
  "V0": { es: "Cachivaches y Dragones", en: "Devices and Dragons" },
  "M": { es: "Mutantes", en: "Mutant" },
  "VS": { es: "Meteoros Xruzados", en: "Xrossing Meteors" },
  "SP": { es: "Spirits", en: "Spirits" },
  "D": { es: "Death", en: "Death" },
  "P": { es: "Plant", en: "Plant" },
  "VL": { es: "Cielos Liberados", en: "Liberated Skies" },
  "PR": { es: "Prototipo Alpha", en: "Alpha Prototype" },
  "BG": { es: "Beat Gekko", en: "Beat Gekko" }
};

// 3.6. Función para obtener el nombre formateado del Tama
const getTamaNombre = (codigo) => {
  const nombre = tamaNombres[codigo];
  if (nombre) {
    return `${codigo} - ${nombre[currentLanguage] || nombre.es}`;
  }
  return codigo;
};

// 4. Función para actualizar los textos de los selects
function updateSelectTexts() {
  // Actualizar labels
  if (nivelLabel) nivelLabel.textContent = getSelectText('selectLevel');
  if (digimonLabel) digimonLabel.textContent = getSelectText('selectDigimon');

  // Actualizar opciones por defecto
  updateDefaultOptions();

  // Actualizar nombres de Tama según idioma
  updateTamaOptions();

  // Actualizar opciones de nivel si existen
  updateLevelOptions();
}

// 4.5. Función para actualizar los nombres de Tama según idioma
function updateTamaOptions() {
  // Los Tamas se muestran como iconos, no hay dropdown de opciones que actualizar
  const tamaTitle = document.getElementById('tamaTitle');
  if (tamaTitle) {
    tamaTitle.textContent = getSelectText('selectTama');
  }
}

// 5. Función para actualizar opciones por defecto
function updateDefaultOptions() {
  // Los Tamas se muestran como iconos, no hay dropdown de opciones

  // Actualizar opción por defecto del Nivel
  const nivelDefaultOption = nivelSelect.querySelector('option[value=""]');
  if (nivelDefaultOption) {
    nivelDefaultOption.textContent = getSelectText('selectLevelDefault');
  }
  
  // Actualizar opción por defecto del Digimon
  const digimonDefaultOption = digimonSelect.querySelector('option[value=""]');
  if (digimonDefaultOption) {
    digimonDefaultOption.textContent = getSelectText('selectDigimonDefault');
  }
}

// 6. Función para actualizar opciones de nivel
function updateLevelOptions() {
  const levelOptions = nivelSelect.querySelectorAll('option:not([value=""])');
  levelOptions.forEach(option => {
    const levelNumber = option.value;
    if (levelNumber) {
      option.textContent = nivelAEtapa[levelNumber];
    }
  });
}

// 7. Event listener para el selector de idioma
if (languageSelector) {
  languageSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    updateSelectTexts();
  });
}



const digimonSelect = document.getElementById("digimonSelect");
const autoFields = document.getElementById('autoFields');
// Tres filas de campos
const editableFields1 = document.getElementById('editableFields1');
const editableFields2 = document.getElementById('editableFields2');
const editableFields3 = document.getElementById('editableFields3');
const editableFieldsHeaders1 = document.getElementById('editableFieldsHeaders1');
const editableFieldsHeaders2 = document.getElementById('editableFieldsHeaders2');
const editableFieldsHeaders3 = document.getElementById('editableFieldsHeaders3');
// Mantener compatibilidad con código existente (usar fila 1 por defecto)
const editableFields = editableFields1;
const editableFieldsHeaders = editableFieldsHeaders1;

const resultados = document.getElementById('resultados');
const calcularBtn = document.getElementById('calcularBtn');
const evolucionTexto = document.getElementById('evolucionTexto');
const bloqueadosAGreymon = ["Agumon (Black)", "Yuki Agumon"];
const excludelist = ["ID", "Tama", "Nivel", "Stat Superior 2", "Tipo", "Atributo", "Digimon Bonus", "Bonus Batallas", "Bonus Errores", "Bonus", "Bonus WinRate", "Bonus Comida", "Bonus Vinculo Alcanzado", "Bonus Victorias", "Errores Minimos", "Bonus Stat Superior", "Placeholder", "RequisitosCondicionados"];


const bloqueosEvolucion = {
  "V-Dramon": ["Agumon", "Yuki Agumon", "Agumon (2006)", "Kokuwamon", "Agumon Hakase"],
  "Greymon": ["Agumon", "Kokuwamon", "Agumon", "Agumon Hakase"],
  "Tuskmon": ["Agumon (Black)"],
  "Yukidarumon": ["Yuki Agumon", "Penmon"],
  "GeoGreymon": ["Agumon (2006)"],
  "Mametyramon": ["Thunderballmon"],
  "RizeGreymon":["GeoGreymon"],
  "Polarbearmon": ["Yukidarumon"],
  "Master Tyranomon": ["Tyranomon"],
  "Aero V-dramon (Black)": ["Tuskmon","Dark Tyranomon", "V-dramon (Black)"],
  "Aero V-dramon": ["Greymon","Tyranomon", "V-dramon", "Deltamon","Thunderballmon","Guardromon","GoldGuardromon","GeoGreymon","Clockmon","Yukidarumon"],
  "Geremon": ["Numemon"],
  "KaratsukiNumemon": ["Numemon"],
  "GoldNumemon": ["Numemon"],
  "Monzaemon": ["Numemon", "GoldNumemon","KaratsukiNumemon","Geremon"],
  "GreatKingScumon": ["Scumon"],
  "Black King Numemon": ["Numemon", "GoldNumemon","KaratsukiNumemon","Geremon"],
  "Etemon": ["Scumon","PlatinumScumon"],
  "MetalEtemon" : ["Etemon"],
  "PlatinumNumemon": ["Black King Numemon"],
  "Icemon": ["Gotsumon","Yuki Agumon"],
  "Insekimon Low Tier": ["Icemon"],
  "Insekimon Mid Tier Dark": ["Icemon"],
  "Insekimon Mid Tier Super": ["Icemon"],
  "Insekimon High Tier": ["Icemon"],
  "SuperStarmon": ["Starmon","ShootingStarmon", "Icemon"],
  "DarkSuperStarmon": ["Starmon","ShootingStarmon", "Icemon"],
  "Starmon": ["Starmons","Gotsumon"],
  "ShootingStarmon": ["Starmons"],
  "Mugendramon": ["Metal Greymon (Virus)","Megadramon", "Andromon", "Metal Tyranomon", "MetalMamemon","Gigadramon"],
  "Chackmon": ["Icemon","Yuki Agumon","Yukidarumon", "Penmon"],
  "Blizzarmon": ["Polarbearmon", "Icemon", "Chackmon", "Yukidarumon"],
  "Daipenmon": ["Polarbearmon", "Blizzarmon"],
  "SkullGreymon": ["Greymon", "GeoGreymon", "Tyranomon", "Dark Tyranomon", "Tuskmon"],
  "Fantomon": ["Bakemon LT", "Soulmon LT", "Bakemon MT", "Soulmon MT"],
  "Soulmon LT": ["Bakemon LT"],
  "Soulmon MT": ["Bakemon MT"],
  "Metal Fantomon": ["Fantomon"],
  "Chamblemon":["Mushmon"],
  "BomberNanimon": ["Nanimon"],
  "Digitamamon": ["Nanimon","BomberNanimon"],
  "Devitamamon": ["Digitamamon"],
  "PrinceMamemon":["Mamemon"],
  "King Shoutmon":["Shoutmon","Shoutmon (Black)","Shoutmon SH", "Shoutmon + Star Sword"],
  "Omega Shoutmon": ["King Shoutmon"],
  "Wargreymon": ["Metal Greymon", "MetalGreymon Alterous"],
  "Doruguremon": ["Dorugamon"],
  "Grademon": ["Raptordramon"],
  "Grademon VICE": ["Grademon"],
  "DexDorugamon": ["Dorumon", "Dorugamon"],
  "DexDoruguremon": ["Dorugamon", "DexDorugamon", "Doruguremon"]
};
const bloqueosexcepciones = {
	"Aero V-dramon (Black)":"RedVdramon",
	"Numemon":"Pillomon",
	};
const SideEvolutionSelected = {
  "Tyranomon": ["Dark Tyranomon"],
  "Guardromon": ["GoldGuardromon"],
  "V-Dramon": ["RedVdramon"],
  "Metal Greymon": ["MetalGreymon Alterous"],
  "Mamemon": ["BigMamemon","MetalMamemon"],
  "Megadramon": ["Gigadramon"],
  "Numemon": ["Karatsukinumemon","GoldNumemon","Geremon"],
  "Scumon": ["PlatinumScumon"],
  "Monzaemon": ["WaruMonzaemon"],
  "Monzaemon": ["GigaWaruMonzaemon"],
  "WaruMonzaemon": ["GigaWaruMonzaemon"],
  "Polarbearmon": ["Blizzarmon"],
  "Icemon": ["Chackmon", "Blizzarmon"],
  "Yukidarumon":["Chackmon","Blizzarmon"],
  "Chackmon":["Blizzarmon"],
  "Fantomon":["Metal Fantomon"],
  "Bakemon LT":["Soulmon LT"],
  "Bakemon MT":["Soulmon MT"],
  "Nanimon":["BomberNanimon"],
  "Shoutmon":["Shoutmon SH","Shoutmon + Star Sword"],
  "Shoutmon (Black)":["Shoutmon SH","Shoutmon + Star Sword"],
  "Starmons":["Shoutmon SH","Shoutmon + Star Sword"],
  "Grademon":["Grademon VICE"],
  "Dorumon":["DexDorugamon"],
  "Dorugamon":["DexDorugamon", "DexDoruguremon"],
  "DexDorugamon":["DexDoruguremon"],
  "Doruguremon":["DexDoruguremon"]
};

// Campos a ocultar de evoluciones específicas según el origen seleccionado
const ocultarCamposPorOrigen = {
  "DexDoruguremon": {
    "DexDorugamon": ["Vinculo al momento de evolucionar", "Comida", "Program"],  // Solo necesita: Peso, % Entrenamiento, Errores Minimos, Victorias Minimas
    "Doruguremon": ["% Entrenamiento", "Errores Minimos", "Victorias Minimas", "Vinculo al momento de evolucionar", "Peso", "Error Maximo", "Comida"]  // Solo necesita: Program
  }
};

const EvoListSpecial = {
  "Polarbearmon": ["Blizzarmon"],
  "Icemon": ["Chackmon"],
  "Yukidarumon":["Chackmon"],
  "Blizzarmon":["Chackmon"],
  "Bakemon LT": ["Ghostmon", "Pillomon", "Agumon", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon SH", "Shoutmon + Star Sword", "Dorumon"],
  "Nanimon": ["Ghostmon", "Pillomon", "Agumon", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon SH", "Shoutmon + Star Sword", "Dorumon"],
  "GreatKingScumon": ["Scumon"]
};
const crosstamaevo = {
  "Icemon": ["Yuki Agumon", "Penmon"],
  "Blizzarmon": ["Yukidarumon", "Icemon", "Polarbearmon"],
  "Yukidarumon": ["Penmon"],
  "Chackmon": ["Yuki Agumon", "Icemon", "Yukidarumon", "Penmon"],
  "Daipenmon": ["Polarbearmon"],
  "Ghostmon": ["Koromon","Pickmon","Fluffymon","Dorimon","Kekkomon"],
  "Bakemon LT": ["Ghostmon", "Pillomon", "Agumon", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon SH", "Shoutmon + Star Sword", "Dorumon", "Gekkomon", "Penmon"],
  "Nanimon": ["Ghostmon", "Pillomon", "Agumon", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon SH", "Shoutmon + Star Sword", "Dorumon","Gekkomon", "Penmon"],
  "SkullGreymon": ["Greymon", "GeoGreymon", "Tyranomon", "Dark Tyranomon", "Tuskmon","Armalizamon"],
  "Mushmon": ["Koromon","Pickmon","Fluffymon","Dorimon","Kekkomon"],
  "Penmon": ["Koromon","Pickmon","Fluffymon","Dorimon","Kekkomon"],
};

const SideEvolutionlist = {
  "Dark Tyranomon": [4],
  "GoldGuardromon": [4],
  "Karatsukinumemon": [4],
  "Geremon": [4],
  "GoldNumemon": [4],
  "PlatinumScumon": [4],
  "RedVDramon": [4],
  "MetalGreymon Alterous": [5],
  "BigMamemon": [5],
  "WaruMonzaemon": [5],
  "GigaWaruMonzaemon": [5],
  "MetalMamemon":[5],
  "Gigadramon":[5],
  "Blizzarmon":[5],
  "Chackmon":[4],
  "Soulmon LT":[4],
  "Soulmon MT":[4],
  "Metal Fantomon":[5],
  "BomberNanimon":[4],
  "Shoutmon SH":[3],
  "Shoutmon + Star Sword":[3],
  "Grademon VICE":[5],
  "DexDorugamon":[4],
  "DexDoruguremon":[5]
};

const SideandEvoList = {
  "Chackmon": ["Blizzarmon"],
  "Yuki Agumon": ["Chackmon"],
  "Polarbearmon": ["Blizzarmon"]
};

const excepcionesProgram = {
    "V-Dramon (Black)": ["Agumon (Black)"],
	"GeoGreymon": ["Agumon (2006)"],
	"Yukidarumon": ["Yuki Agumon","Penmon"],
	"RizeGreymon": ["GeoGreymon"],
	"Aero V-dramon (Black)": ["V-Dramon (Black)"],
  };


const PesoSet = new Set([
    "Botamon", "Koromon", "Chibickmon", "Pickmon", "Agumon",
    "Yuki Agumon", "Agumon (2006)", "Agumon (Black)", "Kokuwamon",
    "Pillomon", "Numemon", "Daipenmon", "Mugendramon", "MetalEtemon",
    "PlatinumNumemon", "Gotsumon", "Starmons", "ShootingStarmon","Devitamamon","PrinceMamemon","Nanimon","BomberNanimon",
    "Shoutmon", "Shoutmon (Black)"
]);


const xrossSpecialNames = new Set([
    "ShootingStarmon", "PlatinumNumemon", "Penmon"
]);
const nivelAEtapa = {
  1: "Baby I",
  2: "Baby II",
  3: "Child",
  4: "Adult",
  5: "Perfect",
  6: "Ultimate"
};
const specialProgramCases = {
    "Icemon": {
        "Yuki Agumon": "Ore",
        "Gotsumon": "Frost",
        "Penmon": "Ore"
}};

// specialxrossCases is defined in digimonReqDict.js
/*const specialfoodcases = {
    "Icemon": {
		"Gotsumon": ["Verdura Congelada", "Hongo Congelado"],
		"Yuki Agumon": ["Verdura Congelada", "Hongo Congelado"]
	}
}*/

const specialfoodcases = {
    "Icemon": ["Verdura Congelada", "Hongo Congelado"]
};
const specialEntrenamientoCases = {
    "Chackmon": {
        "Icemon": 100,
        "Yukidarumon": 100,
		  "Yuki Agumon": 80,
      "Penmon": 80,
},
    "Blizzarmon": {
        "Icemon": 80,
        "Yukidarumon": 80,
		"Chackmon":80,
		"Polarbearmon": 100
	}
};

const specialVictoriasCases = {
    "Wargreymon": {
        "Metal Greymon": 140,
        "MetalGreymon Alterous": 175
    },
    "BlackWargreymon": {
        "SkullGreymon": 140
    }
};

const specialBatallasCases = {
    "Wargreymon": {
        "Metal Greymon": 250,
        "MetalGreymon Alterous": 300
    },
    "BlackWargreymon": {
        "SkullGreymon": 250
    }
};

// Diccionario corregido - eliminando duplicados y organizando mejor la data
const xrossinstallop = {
    "Mamemon": ["3 Mamemon Driver"],
    "Starmons": ["4 Pickmon Driver", "Shoutmon Driver", "Shoutmon (Black) Driver", "King Shoutmon Driver", "Shoutmon SH Driver", "Shoutmon + Star Sword Driver"],
    "Monzaemon": ["3 Monzaemon Driver en WaruMonzaemon o 1 WaruMonzaemon + 2 Monzaemon Driver en Monzaemon"],
    "WaruMonzaemon": ["3 Monzaemon Driver en WaruMonzaemon o 1 WaruMonzaemon + 2 Monzaemon Driver en Monzaemon"],
    "Black King Numemon": ["5 PlatinumScumon Driver"],
    "Megadramon": ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
	"Gigadramon": ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
    "Metal Greymon (Virus)": ["Megadramon Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
    "Metal Tyranomon": ["Metal Greymon (Virus) Driver + Megadramon Driver + MetalMamemon Driver + Andromon Driver"],
    "MetalMamemon": ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + Megadramon Driver + Andromon Driver"],
    "Andromon": ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Megadramon Driver"],
    "Yuki Agumon": ["Ice Spirit H"],
    "Penmon": ["Ice Spirit H"],
    "Icemon": ["Ice Spirit H", "Ice Spirit B"], // Combinando ambos valores
    "Yukidarumon": ["Ice Spirit H", "Ice Spirit B"], // Combinando ambos valores
    "Blizzarmon": ["Ice Spirit H"],
    "Chackmon": ["Ice Spirit B"],
    "Polarbearmon": ["Ice Spirit A", "Ice Spirit B + Ice Spirit H"], // Combinando ambos valores
    "Nanimon": ["1 Mamemon Driver"],
    "Shoutmon": ["Starmons Driver"],
    "Shoutmon (Black)": ["Starmons Driver"],
    "Koromon":["Ice Spirit A o Ice Spirit H + Ice Spirit B"],
    "Pickmon":["Ice Spirit A o Ice Spirit H + Ice Spirit B"],
    "Fluffymon":["Ice Spirit A o Ice Spirit H + Ice Spirit B"],
    "Dorimon":["Ice Spirit A o Ice Spirit H + Ice Spirit B"],
};
//Lo mismo pero para driver equipado
const driverEquipadoOp = {
	"Thunderballmon": ["Tyranomon Driver"],
	"Icemon": ["SuperStarmon Driver",  "DarkSuperStarmon Driver", "Starmon o ShootingStarmon Driver", "SuperStarmon y DarkSuperStarmon Driver"]
};

const evonatural = {
	"Blizzarmon": ["Chackmon"],
	"Yukidarumon": ["Penmon"],
	"Icemon": ["Penmon"],
	"Chackmon": ["Penmon"]
}


// #endregion

// #region Selector
///// SELECTOR CON ICONOS
// Crear el selector de Tama con iconos
function createTamaIcons() {
  const container = document.getElementById('tama-icons');
  if (!container) return;
  container.innerHTML = '';

  const tamasUnicos = [...new Set(Object.values(digimonReqDict).map(d => d.Tama))].sort();
  tamasUnicos.forEach(tama => {
    const btn = document.createElement('button');
    btn.className = 'tama-icon-btn';
    btn.dataset.tama = tama;
    btn.type = 'button';
    btn.innerHTML = `
      <img src="Tama/${tama}.png" alt="${tama}" onerror="this.src='icon/placeholder.png'">
      <span>${tama}</span>
    `;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      selectTamaIcon(tama);
    });
    container.appendChild(btn);
  });
}

let currentTama = ''; // Variable global para rastrear el Tama seleccionado

function selectTamaIcon(tama) {
  currentTama = tama;
  document.querySelectorAll('.tama-icon-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tama === tama);
  });
  onTamaChanged(tama);
}

// Buscador de Digimon
function initSearch() {
  const searchInput = document.getElementById('digi-search');
  const suggestionsContainer = document.getElementById('search-suggestions');
  if (!searchInput || !suggestionsContainer) return;

  const allDigimon = Object.entries(digimonReqDict).map(([name, data]) => ({
    name,
    tama: data.Tama,
    nivel: data.Nivel
  }));

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 1) {
      suggestionsContainer.classList.remove('active');
      return;
    }

    const matches = allDigimon
      .filter(d => d.name.toLowerCase().includes(query))
      .slice(0, 8);

    if (matches.length === 0) {
      suggestionsContainer.classList.remove('active');
      return;
    }

    suggestionsContainer.innerHTML = matches.map(d => `
      <div class="suggestion-item" data-name="${d.name}" data-tama="${d.tama}" data-nivel="${d.nivel}">
        <img src="icon/placeholder.png" data-digimon="${d.name}" alt="">
        <div>
          <div class="name">${d.name}</div>
          <div class="tama-level">${d.tama} • ${nivelAEtapa[d.nivel] || ''}</div>
        </div>
      </div>
    `).join('');

    suggestionsContainer.querySelectorAll('img[data-digimon]').forEach(img => {
      cargarImagenIcono(img.dataset.digimon, img);
    });

    suggestionsContainer.classList.add('active');
  });

  suggestionsContainer.addEventListener('click', (e) => {
    const item = e.target.closest('.suggestion-item');
    if (item) {
      selectDigimonFromSearch(item.dataset.name, item.dataset.tama, parseInt(item.dataset.nivel));
      searchInput.value = '';
      suggestionsContainer.classList.remove('active');
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstItem = suggestionsContainer.querySelector('.suggestion-item');
      if (firstItem) {
        selectDigimonFromSearch(firstItem.dataset.name, firstItem.dataset.tama, parseInt(firstItem.dataset.nivel));
        searchInput.value = '';
        suggestionsContainer.classList.remove('active');
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container')) {
      suggestionsContainer.classList.remove('active');
    }
  });
}

function cargarImagenIcono(nombre, elementoImg) {
  const variaciones = [nombre, nombre.replace(/ /g, ''), nombre.replace(/ /g, '_')];
  let i = 0;
  function intentar() {
    if (i >= variaciones.length) return;
    const srcTry = `icon/${variaciones[i]}.png`;
    const testImg = new Image();
    testImg.onload = () => { elementoImg.src = srcTry; };
    testImg.onerror = () => { i++; intentar(); };
    testImg.src = srcTry;
  }
  intentar();
}

function selectDigimonFromSearch(name, tama, nivel) {
  selectTamaIcon(tama);

  setTimeout(() => {
    nivelSelect.value = nivel;
    nivelSelect.dispatchEvent(new Event('change'));

    setTimeout(() => {
      digimonSelect.value = name;
      digimonSelect.dispatchEvent(new Event('change'));
    }, 100);
  }, 50);
}

// Crear el label y select del nivel (MODIFICADO)
const nivelLabel = document.createElement("label");
nivelLabel.textContent = getSelectText('selectLevel'); // Usar función de traducción
nivelLabel.setAttribute("for", "nivelSelect");

const nivelSelect = document.createElement("select");
nivelSelect.id = "nivelSelect";

// Opción por defecto
const defaultNivelOption = document.createElement("option");
defaultNivelOption.value = "";
defaultNivelOption.textContent = getSelectText('selectLevelDefault'); // Usar función de traducción
nivelSelect.appendChild(defaultNivelOption);

// Agregar opciones con nombres de etapas
Object.entries(nivelAEtapa).forEach(([nivel, etapa]) => {
  const option = document.createElement("option");
  option.value = nivel;
  option.textContent = etapa;
  nivelSelect.appendChild(option);
});

// Crear el label para el selector de Digimon
const digimonLabel = document.createElement("label");
digimonLabel.textContent = getSelectText('selectDigimon'); // Usar función de traducción
digimonLabel.setAttribute("for", "digimonSelect");

// Insertar los selectores de Nivel y Digimon después del contenedor de iconos
const tamaSection = document.querySelector('.tama-selector-section');
if (tamaSection) {
  tamaSection.parentNode.insertBefore(nivelLabel, tamaSection.nextSibling);
  tamaSection.parentNode.insertBefore(nivelSelect, nivelLabel.nextSibling);
  tamaSection.parentNode.insertBefore(digimonLabel, nivelSelect.nextSibling);
}

// Función para manejar cambio en Tama
function onTamaChanged(tamaElegido) {
  // Limpiar nivel y digimon
  nivelSelect.innerHTML = "";
  digimonSelect.innerHTML = "";

  const defaultNivelOption = document.createElement("option");
  defaultNivelOption.value = "";
  defaultNivelOption.textContent = getSelectText('selectLevelDefault');
  nivelSelect.appendChild(defaultNivelOption);

  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = getSelectText('selectDigimonDefault');
  digimonSelect.appendChild(defaultDigiOption);

  if (!tamaElegido) {
    nivelSelect.disabled = true;
    return;
  }

  // Habilitar selector de Nivel
  nivelSelect.disabled = false;

  // Filtrar niveles disponibles para ese Tama
  const nivelesFiltrados = [...new Set(
    Object.values(digimonReqDict)
      .filter(d => d.Tama === tamaElegido)
      .map(d => parseInt(d.Nivel))
  )];

  nivelesFiltrados.sort((a, b) => a - b);
  nivelesFiltrados.forEach(nivel => {
    const option = document.createElement("option");
    option.value = nivel;
    option.textContent = nivelAEtapa[nivel];
    nivelSelect.appendChild(option);
  });
}

let tamaElegido 
// Manejar cambio en Nivel (MODIFICADO)
nivelSelect.addEventListener("change", () => {
  const nivelElegido = parseInt(nivelSelect.value);
  const tamaElegido = currentTama;

  // Limpiar digimon
  digimonSelect.innerHTML = "";

  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = getSelectText('selectDigimonDefault'); // Usar función de traducción
  digimonSelect.appendChild(defaultDigiOption);

  if (!nivelElegido || !tamaElegido) {
    digimonSelect.disabled = true;
    return;
  }

  // Habilitar selector de Digimon
  digimonSelect.disabled = false;

  // Agregar Digimon que coincidan con Tama y Nivel
  Object.entries(digimonReqDict).forEach(([nombre, datos]) => {
    if (datos.Tama === tamaElegido && parseInt(datos.Nivel) === nivelElegido) {
      const option = document.createElement("option");
      option.value = nombre;
      option.textContent = nombre;
      digimonSelect.appendChild(option);
    }
  });
});

// 8. Inicializar traducciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  // Crear selectores de Tama con iconos, Nivel y Digimon
  createTamaIcons();
  initSearch();

  // Insertar los selectores de Nivel y Digimon después del contenedor de iconos
  const tamaSection = document.querySelector('.tama-selector-section');
  const digimonSelectElement = document.getElementById('digimonSelect');

  if (tamaSection && nivelLabel && nivelSelect) {
    tamaSection.parentNode.insertBefore(nivelLabel, tamaSection.nextSibling);
    tamaSection.parentNode.insertBefore(nivelSelect, nivelLabel.nextSibling);
    tamaSection.parentNode.insertBefore(digimonLabel, nivelSelect.nextSibling);
    if (digimonSelectElement) {
      digimonSelectElement.style.display = 'block';
      tamaSection.parentNode.insertBefore(digimonSelectElement, digimonLabel.nextSibling);
    }
  }

  // Deshabilitar selectores por defecto
  nivelSelect.disabled = true;
  if (digimonSelectElement) {
    digimonSelectElement.disabled = true;
  }

  // Establecer idioma inicial basado en el selector
  if (languageSelector) {
    currentLanguage = languageSelector.value || 'es';
    updateSelectTexts();
  }
});
// #endregion

// #region Configuración de Campos Estáticos
const CAMPOS_ESTATICOS = {
  /* DEPRECATED - Se opta por usar %, config de esto guardada para en caso de emergencia
  "HP Base": {
    tipo: "input",
    header: "HP Base",
    inputType: "number",
    min: 0,
    max: 99999
  },
  */
  "HP Entrenado": {
    tipo: "input",
    header: "HP %",
    inputType: "number",
    min: 0,
    max: 100
  },
  "ATK Entrenado": {
    tipo: "input",
    header: "ATK %",
    inputType: "number",
    min: 0,
    max: 100
  },
  "SPD Entrenado": {
    tipo: "input",
    header: "SPD %",
    inputType: "number",
    min: 0,
    max: 100
  },
  "Stat Superior": {
    tipo: "calculado",
    header: "Stat Superior",
    calcular: calcularStatSuperior
  }
};

/* DEPRECATED - Se opta por usar %, config de esto guardada para en caso de emergencia
// Función de cálculo para Stat Superior (MEJORADA - dos resultados) - VERSIÓN ANTIGUA CON HP BASE
function calcularStatSuperiorOLD(datosActuales) {
  const hpBase = parseFloat(datosActuales["HP Base"]) || 0;
  const hpEntrenado = parseFloat(datosActuales["HP Entrenado"]) || 0;
  const atkEntrenado = parseFloat(datosActuales["ATK Entrenado"]) || 0;
  const spdEntrenado = parseFloat(datosActuales["SPD Entrenado"]) || 0;

  // 🔍 LOGS DE INPUTS
  console.log("🧮 === CÁLCULO STAT SUPERIOR ===");
  console.log("📊 Inputs recibidos:");
  console.log(`  HP Base: ${hpBase}`);
  console.log(`  HP Entrenado: ${hpEntrenado}`);
  console.log(`  ATK Entrenado: ${atkEntrenado}`);
  console.log(`  SPD Entrenado: ${spdEntrenado}`);

  // Validar que HP Base no sea 0 para evitar división por cero
  if (hpBase === 0) {
    console.log("❌ HP Base es 0 - no se puede calcular HP Equivalente");
    return { texto: "", estaBalanceado: false, statSuperior: "" };
  }

  // Calcular HP Equivalente usando la nueva fórmula
  const hpEquivalente = Math.round(hpEntrenado * 75 / hpBase);

  // 🔍 LOGS DE FÓRMULA
  console.log("🧮 Cálculo HP Equivalente:");
  console.log(`  Fórmula: ROUND(${hpEntrenado} * 75 / ${hpBase})`);
  console.log(`  Paso a paso: ${hpEntrenado * 75} / ${hpBase} = ${hpEntrenado * 75 / hpBase}`);
  console.log(`  HP Equivalente final: ${hpEquivalente}`);

  const stats = [
    { nombre: "HP", valor: hpEquivalente },
    { nombre: "ATK", valor: atkEntrenado },
    { nombre: "SPD", valor: spdEntrenado }
  ].filter(stat => stat.valor > 0);

  // 🔍 LOGS DE STATS
  console.log("📊 Stats para comparación:");
  stats.forEach(stat => {
    console.log(`  ${stat.nombre}: ${stat.valor}`);
  });

  if (stats.length === 0) {
    console.log("❌ No hay stats válidos (todos son 0)");
    return { texto: "", estaBalanceado: false, statSuperior: "" };
  }

  // Encontrar el stat más alto
  const maxStat = Math.max(...stats.map(s => s.valor));
  const minStat = Math.min(...stats.map(s => s.valor));
  const statSuperior = stats.find(s => s.valor === maxStat).nombre;

  // 🔍 LOGS DE ANÁLISIS
  console.log("🎯 Análisis de balance:");
*/

// Función de cálculo para Stat Superior (NUEVA - basada en %)
function calcularStatSuperior(datosActuales) {
  const hpPct = parseFloat(datosActuales["HP Entrenado"]) || 0;
  const atkPct = parseFloat(datosActuales["ATK Entrenado"]) || 0;
  const spdPct = parseFloat(datosActuales["SPD Entrenado"]) || 0;

  console.log("🧮 === CÁLCULO STAT SUPERIOR (PORCENTAJES) ===");
  console.log("📊 Inputs recibidos:");
  console.log(`  HP %: ${hpPct}`);
  console.log(`  ATK %: ${atkPct}`);
  console.log(`  SPD %: ${spdPct}`);

  // Incluir TODOS los stats (incluyendo los que son 0) para calcular balance correctamente
  const stats = [
    { nombre: "HP", valor: hpPct },
    { nombre: "ATK", valor: atkPct },
    { nombre: "SPD", valor: spdPct }
  ];

  // Solo verificar que al menos uno tenga valor > 0
  const tieneAlgunStat = stats.some(stat => stat.valor > 0);
  if (!tieneAlgunStat) {
    console.log("❌ No hay stats válidos (todos son 0)");
    return { texto: "", estaBalanceado: false, statSuperior: "" };
  }

  // Encontrar el stat más alto y más bajo
  const maxStat = Math.max(...stats.map(s => s.valor));
  const minStat = Math.min(...stats.map(s => s.valor));
  const statSuperior = stats.find(s => s.valor === maxStat).nombre;

  // Calcular la diferencia porcentual
  const diferencia = maxStat - minStat;

  console.log("🎯 Análisis de balance:");
  console.log(`  Máximo: ${maxStat}% (${statSuperior})`);
  console.log(`  Mínimo: ${minStat}%`);
  console.log(`  Diferencia: ${diferencia}%`);
  console.log(`  Stat máximo: ${maxStat} (${statSuperior})`);
  console.log(`  Stat mínimo: ${minStat}`);
  console.log(`  Diferencia: ${maxStat - minStat}`);
  
  // Verificar si están balanceados (diferencia <= 20)
  const umbralBalance = 20;
  const estaBalanceado = stats.length >= 2 && (maxStat - minStat <= umbralBalance);
  
  // 🔍 LOGS DE RESULTADO
  console.log(`  Umbral de balance: ${umbralBalance}`);
  console.log(`  ¿Está balanceado? ${estaBalanceado} (diferencia ${maxStat - minStat} ${estaBalanceado ? '≤' : '>'} ${umbralBalance})`);
  
  // Construir el resultado
  let resultados = [];
  
if (estaBalanceado) {
  resultados.push(translate('Balanceado'));
}
  
  // Siempre agregar el stat superior
  resultados.push(statSuperior);
  
  const textoFinal = resultados.join(" / ");
  
  // 🔍 LOG FINAL
  console.log("✅ Resultado final:");
  console.log(`  Texto: "${textoFinal}"`);
  console.log(`  Está balanceado: ${estaBalanceado}`);
  console.log(`  Stat superior: ${statSuperior}`);
  console.log("🧮 === FIN CÁLCULO ===");
  
  return {
    texto: textoFinal,
    estaBalanceado: estaBalanceado,
    statSuperior: statSuperior
  };
}

// Función para validar rangos de inputs numéricos
function validarRangoInput(input, fieldName, min, max) {
  const valor = parseFloat(input.value);

  if (isNaN(valor)) return true; // Si está vacío o no es número, es válido

  console.log(`🔍 Validando ${fieldName}: valor=${valor}, min=${min}, max=${max}`);

  if (valor < min || valor > max) {
    console.log(`❌ Error: ${fieldName} fuera de rango (${min}-${max})`);

    // Mostrar error visual
    input.style.border = '2px solid red';
    input.style.backgroundColor = '#ffe6e6';

    // Limpiar el valor
    input.value = '';

    // Mostrar mensaje de error
    let mensaje = '';
    if (fieldName === 'Peso') {
      mensaje = 'Error: El Peso debe estar entre 1 y 99.\n\nSe ha limpiado el valor.';
    } else if (fieldName === 'Error Maximo' || fieldName === 'Errores') {
      mensaje = 'Error: Los Errores deben estar entre 0 y 6.\n\nSe ha limpiado el valor.';
    } else if (fieldName === '% Entrenamiento') {
      mensaje = 'Error: El % Entrenamiento debe estar entre 0 y 100.\n\nSe ha limpiado el valor.';
    } else if (fieldName === 'WinRate') {
      mensaje = 'Error: El WinRate debe estar entre 0 y 100.\n\nSe ha limpiado el valor.';
    } else if (fieldName === 'Vinculo Minimo alcanzado' || fieldName === 'Bonus Vinculo al momento de evolucionar' || fieldName === 'Vinculo al momento de evolucionar') {
      mensaje = 'Error: El Vínculo debe estar entre -50 y 100.\n\nSe ha limpiado el valor.';
    } else if (fieldName === 'Combates Minimos' || fieldName === 'Batallas') {
      mensaje = `Error: Las Batallas deben ser mayor o igual a 0.\n\nSe ha limpiado el valor.`;
    } else {
      mensaje = `Error: El valor debe estar entre ${min} y ${max}.\n\nSe ha limpiado el valor.`;
    }

    alert(mensaje);
    return false;
  } else {
    // Remover estilos de error si el valor es válido
    input.style.border = '';
    input.style.backgroundColor = '';
    console.log(`✅ ${fieldName} válido: ${valor}`);
    return true;
  }
}

// Función para validar que la suma de HP%, ATK% y SPD% no exceda 100%
function validarSumaStats() {
  const hpInput = document.getElementById('field_HP Entrenado');
  const atkInput = document.getElementById('field_ATK Entrenado');
  const spdInput = document.getElementById('field_SPD Entrenado');

  if (!hpInput || !atkInput || !spdInput) return;

  const hpPct = parseFloat(hpInput.value) || 0;
  const atkPct = parseFloat(atkInput.value) || 0;
  const spdPct = parseFloat(spdInput.value) || 0;

  const suma = hpPct + atkPct + spdPct;

  console.log(`🔍 Validación de suma de stats: HP=${hpPct}% + ATK=${atkPct}% + SPD=${spdPct}% = ${suma}%`);

  if (suma > 100) {
    console.log(`❌ Error: La suma de stats (${suma}%) excede 100%`);
    // Mostrar error visual
    [hpInput, atkInput, spdInput].forEach(input => {
      input.style.border = '2px solid red';
      input.style.backgroundColor = '#ffe6e6';
    });

    // Limpiar todos los valores
    hpInput.value = '';
    atkInput.value = '';
    spdInput.value = '';

    // Mostrar mensaje de error
    alert('Error: La suma de HP%, ATK% y SPD% no puede exceder 100%.\n\nSe han limpiado los valores.');
  } else {
    // Remover estilos de error si la suma es válida
    [hpInput, atkInput, spdInput].forEach(input => {
      input.style.border = '';
      input.style.backgroundColor = '';
    });
    console.log(`✅ Suma de stats válida: ${suma}%`);
  }
}

// Función para recalcular campos calculados (ACTUALIZADA)
function recalcularCamposCalculados() {
  const datosActuales = {};
  
  document.querySelectorAll('[id^="field_"]').forEach(element => {
    const campo = element.id.replace('field_', '');
    datosActuales[campo] = element.value;
  });
  
  Object.entries(CAMPOS_ESTATICOS).forEach(([campo, config]) => {
    if (config.tipo === "calculado") {
      const elemento = document.getElementById(`calc_${campo}`);
      if (elemento && config.calcular) {
        const resultado = config.calcular(datosActuales);
        
        if (campo === "Stat Superior" || campo === "Bonus Stat Superior") {
          // Manejar el nuevo formato de resultado para Stat Superior / Bonus Stat Superior
          elemento.textContent = resultado.texto || "";
          elemento.style.fontWeight = resultado.texto ? "bold" : "normal";
          
          // Aplicar colores según el resultado
          if (resultado.estaBalanceado) {
            elemento.style.backgroundColor = "#d4edda"; // Verde claro para balanceado
            elemento.style.color = "#155724"; // Verde oscuro
            elemento.style.border = "1px solid #c3e6cb";
          } else {
            // Color según el stat superior
            const colores = {
              "HP": { bg: "#f8d7da", color: "#721c24", border: "#f1aeb5" },
              "ATK": { bg: "#fff3cd", color: "#856404", border: "#ffeaa7" },
              "SPD": { bg: "#d1ecf1", color: "#0c5460", border: "#bee5eb" }
            };
            
            const colorConfig = colores[resultado.statSuperior] || 
                               { bg: "#f8f9fa", color: "#6c757d", border: "#ddd" };
            
            elemento.style.backgroundColor = colorConfig.bg;
            elemento.style.color = colorConfig.color;
            elemento.style.border = `1px solid ${colorConfig.border}`;
          }
        } else {
          // Para otros campos calculados (si los hay en el futuro)
          elemento.textContent = resultado;
          elemento.style.fontWeight = resultado ? "bold" : "normal";
          elemento.style.color = "#6c757d";
        }
      }
    }
  });
}
// #endregion

// #region function generar formulario MEJORADA
// Generar formulario según selección
function generarFormulario() {
  const selected = digimonSelect.value;
  const data = digimonReqDict[selected];
  if (!data) return;

  autoFields.innerHTML = `
    <tr>
      <td>${data.ID}</td>
      <td>${data.Tama}</td>
      <td>${data.Nivel}</td>
      <td>${nivelAEtapa[data.Nivel] || "Desconocida"}</td>
      <td>${data.Atributo || ""}</td>
      <td>${data.Tipo || ""}</td>
    </tr>
  `;
  translateAutoFieldsContent();

  // Usar directamente la información de digimonstattier.js
  let nextDigimons = [];
  const evolucionesDisponibles = digimonstattier[selected]?.["Evoluciona"] || [];
  evolucionesDisponibles.forEach(nombreEvo => {
    if (digimonReqDict[nombreEvo]) {
      nextDigimons.push([nombreEvo, digimonReqDict[nombreEvo]]);
    }
  });

  console.log("Lista ANTES de filtrar por Tama (desde digimonstattier):", nextDigimons.map(([name]) => name));

  // FILTRADO UNIFICADO: Tama + Cross Tama Evolution + Bloqueos Evolución
  if (tamaElegido !== "Todos") {
    console.log(`Filtrando por Tama: ${tamaElegido}`);
    const selectedNormalizado = selected.toLowerCase().trim();
    
    nextDigimons = nextDigimons.filter(([name, _]) => {
      // Excepción especial para Numemon y Scumon - nunca eliminar
      if (name === "Numemon" || name === "Scumon" || name === "Nanimon") {
        console.log(`${name} mantenido por excepción especial`);
        return true;
      }
      
      // Buscar el digimon en digimonReqDict
      const digimonData = digimonReqDict[name];
      
      if (digimonData && digimonData["Tama"]) {
        const tamaDigimon = digimonData["Tama"];
        
        // Si el Tama coincide, mantenerlo
        if (tamaDigimon === tamaElegido) {
          console.log(`${name} mantenido - Tama coincide: ${tamaDigimon}`);
          return true;
        }
        
        // Si el Tama NO coincide, verificar Cross Tama Evolution
        console.log(`${name} tiene Tama diferente: ${tamaDigimon} vs ${tamaElegido}`);
        
        // Verificar si este digimon puede ser obtenido por Cross Tama Evolution
        const crossEvoData = crosstamaevo[name];
        if (crossEvoData && Array.isArray(crossEvoData)) {
          // Verificar si el digimon selected está en la lista de fuentes para este cross evo
          const puedeHacerCrossEvo = crossEvoData.some(source => 
            source.toLowerCase().trim() === selectedNormalizado
          );
          
          if (puedeHacerCrossEvo) {
            console.log(`${name} mantenido por Cross Tama Evolution - ${selected} puede evolucionar a ${name}`);
            return true;
          }
        }
        
        // Verificar si el selected está en bloqueosEvolucion y este digimon es el valor principal
        if (bloqueosEvolucion[name] && Array.isArray(bloqueosEvolucion[name])) {
          const estaEnBloqueos = bloqueosEvolucion[name].some(blockedSource => 
            blockedSource.toLowerCase().trim() === selectedNormalizado
          );
          
          if (estaEnBloqueos) {
            console.log(`${name} mantenido por Bloqueos Evolución - ${selected} está en la lista de bloqueos para ${name}`);
            return true;
          }
        }
        
        // Si no cumple ninguna condición, eliminarlo
        console.log(`${name} eliminado - No hay Cross Tama Evolution ni Bloqueos Evolución disponible desde ${selected}`);
        return false;
      }
      
      console.log(`${name} eliminado - No encontrado en digimonReqDict o sin Tama`);
      return false;
    });
    
    console.log("Lista después de filtrar por Tama + Cross Tama Evolution + Bloqueos Evolución:", nextDigimons.map(([name]) => name));
  }

  // Buscar si el digimon actual tiene excepciones absolutas
  let tieneExcepcionAbsoluta = false;
  let digimonExcepcion = null;
  for (const [resultado, permitido] of Object.entries(bloqueosexcepciones)) {
    if (permitido.toLowerCase().trim() === selected.toLowerCase().trim()) {
      tieneExcepcionAbsoluta = true;
      digimonExcepcion = resultado;
      break;
    }
  }

  if (tieneExcepcionAbsoluta) {
    console.log(`EXCEPCIÓN ABSOLUTA: ${selected} solo puede evolucionar a ${digimonExcepcion}`);
    
    // Filtrar para mostrar ÚNICAMENTE el digimon de excepción
    nextDigimons = nextDigimons.filter(([name, _]) => {
      const nameNormalizado = name.toLowerCase().trim();
      const excepcionNormalizada = digimonExcepcion.toLowerCase().trim();
      return nameNormalizado === excepcionNormalizada;
    });
    
    console.log("Lista después de aplicar excepción absoluta:", nextDigimons.map(([name]) => name));
  } else {
    // Si no hay excepción absoluta, aplicar lógica normal de bloqueos
    console.log(`No hay excepciones absolutas para ${selected}, aplicando bloqueos normales`);
    nextDigimons = nextDigimons.filter(([name, _]) => {
      // Si el digimon resultado está en la lista de bloqueos
      if (bloqueosEvolucion.hasOwnProperty(name)) {
        const permitidos = bloqueosEvolucion[name] || [];
        
        // Normalizar nombres para comparación
        const permitidosNormalizados = permitidos.map(perm => perm.toLowerCase().trim());
        const selectedNormalizado = selected.toLowerCase().trim();
        
        // Si el digimon actual NO está en la lista de permitidos, se bloquea
        if (!permitidosNormalizados.includes(selectedNormalizado)) {
          console.log(`Bloqueando ${name} porque ${selected} no está en su lista de permitidos: [${permitidos.join(", ")}]`);
          return false;
        } else {
          console.log(`Permitiendo ${name} porque ${selected} SÍ está en su lista de permitidos`);
        }
      }
      
      return true; // Mantener si no está en bloqueos o si está permitido
    });
    
    console.log("Lista después del filtro de bloqueos:", nextDigimons.map(([name]) => name));
  }

  // Ya no necesitamos filtrar sides manualmente, digimonstattier ya tiene toda la info correcta
  console.log("Lista después de aplicar filtros (las evoluciones ya incluyen sides correctas):", nextDigimons.map(([name]) => name));
  const burpmonNombre = "Burpmon";
  const burpmonExiste = nextDigimons.some(([name, _]) => name.toLowerCase().trim() === burpmonNombre.toLowerCase());

  if (!burpmonExiste) {
    // Si Burpmon no está, lo agregamos
    // Opcional: obtener info de digimonReqDict o asignar objeto vacío si no existe
    const burpmonInfo = digimonReqDict[burpmonNombre] || {};
    nextDigimons.push([burpmonNombre, burpmonInfo]);
    console.log("⚠️ Burpmon añadido manualmente a la lista post-filtrado");
  } else {
    console.log("✅ Burpmon ya está presente en la lista post-filtrado");
  }

  console.log("Lista final después de filtrar sides por Tama y añadir Burpmon:", nextDigimons.map(([name]) => name));


  // NUEVA LÓGICA: Combinar campos dinámicos + estáticos CON DEBUG
  const fieldSet = new Set();
  
  console.log("🔍 === INICIO GENERACIÓN DE CAMPOS ===");
  
  // PRIMERO: Agregar campos estáticos SIEMPRE (independiente de nextDigimons)
  console.log("📋 Agregando campos estáticos...");
  Object.keys(CAMPOS_ESTATICOS).forEach(campo => {
    fieldSet.add(campo);
    console.log(`✅ Campo estático agregado: ${campo}`);
  });
  
  console.log(`📊 Campos estáticos en fieldSet: ${Array.from(fieldSet)}`);
  
  // DESPUÉS: Agregar campos dinámicos (lógica original)
  console.log("📋 Agregando campos dinámicos...");
  nextDigimons.forEach(([name, info]) => {
    // Obtener campos a ocultar para esta evolución según el origen
    const camposAOcultar = ocultarCamposPorOrigen[name]?.[selected] || [];

    for (const key in info) {
      if (!excludelist.includes(key) && key !== "Stat Superior" && key !== "Bonus Stat Superior" && !camposAOcultar.includes(key)) {
        fieldSet.add(key);
        console.log(`✅ Campo dinámico agregado: ${key}`);
      }
    }
  });

  // EXCEPCIÓN: Si alguna evolución tiene "Bonus Vinculo Alcanzado", agregar "Vinculo Minimo alcanzado"
  const tieneBonusVinculo = nextDigimons.some(([_, info]) => info["Bonus Vinculo Alcanzado"] !== undefined);
  if (tieneBonusVinculo && !fieldSet.has("Vinculo Minimo alcanzado")) {
    fieldSet.add("Vinculo Minimo alcanzado");
    console.log("✅ Campo 'Vinculo Minimo alcanzado' agregado por excepción (existe Bonus Vinculo Alcanzado)");
  }

  // EXCEPCIÓN: Si alguna evolución tiene "Bonus Victorias", agregar "Victorias"
  const tieneBonusVictorias = nextDigimons.some(([_, info]) => info["Bonus Victorias"] !== undefined);
  if (tieneBonusVictorias && !fieldSet.has("Victorias")) {
    fieldSet.add("Victorias");
    console.log("✅ Campo 'Victorias' agregado por excepción (existe Bonus Victorias)");
  }

  console.log(`📊 Todos los campos en fieldSet: ${Array.from(fieldSet)}`);
  console.log(`📏 Total de campos: ${fieldSet.size}`);

  console.log(`CHEQUEAR NEXT DIGIMON RAR: ${nextDigimons}`);

  console.log("🏗️ Limpiando y generando headers...");
  // Limpiar las 3 filas
  editableFieldsHeaders1.innerHTML = "";
  editableFields1.innerHTML = "";
  editableFieldsHeaders2.innerHTML = "";
  editableFields2.innerHTML = "";
  editableFieldsHeaders3.innerHTML = "";
  editableFields3.innerHTML = "";

  // NUEVO: Verificar que los elementos existen antes de continuar
  if (!editableFieldsHeaders1 || !editableFields1 ||
      !editableFieldsHeaders2 || !editableFields2 ||
      !editableFieldsHeaders3 || !editableFields3) {
    console.error("❌ ERROR: Alguna de las 3 filas de campos no existe!");
    return;
  }

  console.log("✅ Elementos DOM de 3 filas confirmados como existentes");

  // Definir qué campos van a cada fila
  const fila1Fields = ['HP Entrenado', 'ATK Entrenado', 'SPD Entrenado', 'Stat Superior'];
  const fila2Fields = ['Peso', 'Error Maximo', '% Entrenamiento', 'Vinculo Minimo alcanzado', 'WinRate', 'Combates Minimos'];

  // DEBUG: Imprimir todos los campos disponibles
  console.log("🔍 === CAMPOS DISPONIBLES ===");
  console.log("Todos los campos en fieldSet:", Array.from(fieldSet));
  console.log("Fila 1 esperada:", fila1Fields);
  console.log("Fila 2 esperada:", fila2Fields);

  // Función auxiliar para determinar a qué fila pertenece un campo
  function getRowForField(field) {
    const row1 = fila1Fields.includes(field);
    const row2 = fila2Fields.includes(field);

    console.log(`Campo "${field}": ¿en fila1? ${row1}, ¿en fila2? ${row2}, va a fila: ${row1 ? 1 : row2 ? 2 : 3}`);

    if (row1) return 1;
    if (row2) return 2;
    return 3; // Todo lo demás va a la fila 3
  }

  // Generar headers y campos para las 3 filas
  console.log("🏷️ Creando headers y campos...");
  fieldSet.forEach(field => {
    console.log(`🏷️ Procesando campo: ${field}`);

    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Entrenamiento Hecho en Baby 2?" :
      field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
      field === "Combates Minimos" ? "Batallas":
      field === "Vinculo Minimo alcanzado"?"Vinculo Maximo Alcanzado":
      field === "Muerte inducida sin Carne X o Program (30% de salir)" ? "Muerte inducida sin Carne X o Program":
      CAMPOS_ESTATICOS[field]?.header || field; // Usar header personalizado si existe

    // Determinar en qué fila va el campo
    const rowNumber = getRowForField(field);
    const targetHeaders = rowNumber === 1 ? editableFieldsHeaders1 :
                         rowNumber === 2 ? editableFieldsHeaders2 : editableFieldsHeaders3;
    const targetFields = rowNumber === 1 ? editableFields1 :
                        rowNumber === 2 ? editableFields2 : editableFields3;

    // Crear header
    const th = document.createElement("th");
    th.textContent = header;
    targetHeaders.appendChild(th);
    console.log(`✅ Header creado en fila ${rowNumber}: ${header}`);
  });

  console.log("🔧 Creando campos de input...");
  // Generar campos (lógica mejorada)
  fieldSet.forEach(field => {
    console.log(`🔧 Procesando campo: ${field}`);

    // Determinar en qué fila va el campo
    const rowNumber = getRowForField(field);
    const targetFields = rowNumber === 1 ? editableFields1 :
                        rowNumber === 2 ? editableFields2 : editableFields3;

    // Verificar si es campo estático primero
    if (CAMPOS_ESTATICOS[field]) {
      console.log(`🎯 ${field} es campo ESTÁTICO en fila ${rowNumber}`);
      const config = CAMPOS_ESTATICOS[field];
      
      const td = document.createElement("td");
      
      if (config.tipo === "calculado") {
        console.log(`⚙️ Creando campo calculado: ${field} en fila ${rowNumber}`);
        // Campo calculado - mostrar resultado
        const span = document.createElement("span");
        span.id = `calc_${field}`;
        span.textContent = "";
        span.style.fontWeight = "bold";
        span.style.padding = "6px 8px";
        span.style.display = "inline-block";
        span.style.minWidth = "120px"; // Aumentar ancho para dos resultados
        span.style.textAlign = "center";
        span.style.border = "1px solid #ddd";
        span.style.borderRadius = "4px";
        span.style.backgroundColor = "#f8f9fa";
        span.style.fontSize = "14px";
        span.style.lineHeight = "1.2";
        span.title = "Formato: [Balanceado /] Stat Superior"; // Tooltip explicativo
        td.appendChild(span);
        targetFields.appendChild(td);
        console.log(`✅ Campo calculado creado: ${field} en fila ${rowNumber}`);
        return; // Salir temprano para campos calculados
      } else if (config.tipo === "input") {
        console.log(`📝 Creando campo input estático: ${field} en fila ${rowNumber}`);
        // Campo estático input
        const input = document.createElement("input");
        input.type = config.inputType || "text";
        input.id = `field_${field}`;

        // Validación especial para HP%, ATK% y SPD%
        if (field === "HP Entrenado" || field === "ATK Entrenado" || field === "SPD Entrenado") {
          input.addEventListener('input', function() {
            validarSumaStats();
            recalcularCamposCalculados();
          });
        } else {
          input.addEventListener('input', recalcularCamposCalculados);
        }

        if (config.min !== undefined) input.min = config.min;
        if (config.max !== undefined) input.max = config.max;

        td.appendChild(input);
        targetFields.appendChild(td);
        console.log(`✅ Campo input estático creado: ${field} en fila ${rowNumber}`);
        return; // Salir temprano para campos estáticos
      }
    } else {
      console.log(`🎯 ${field} es campo DINÁMICO`);
    }

    // LÓGICA ORIGINAL PARA CAMPOS DINÁMICOS (mantener exacta)
    const sampleValue = nextDigimons.find(([_, info]) => info[field] !== undefined)?.[1][field];
    let td = document.createElement("td");
    let select = document.createElement("select");
    select.id = `field_${field}`;
    select.addEventListener('change', recalcularCamposCalculados); // Agregar recálculo
    console.log("SELECTED CHEQUEAR", selected);

    // Funciones para obtener opciones (mantener exactas)
    function getXrossOptions(selected) {
        let opciones = [];
        if (xrossinstallop[selected]) {
            opciones = [...xrossinstallop[selected]];
        }
        opciones.push("Ninguno");
        return opciones;
    }

    function getDriverEquipadoOptions(selected) {
        let opciones = [];
        if (driverEquipadoOp[selected]) {
            opciones = [...driverEquipadoOp[selected]];
        }
        opciones.push("Ninguno");
        return opciones;
    }

    function getBonusComidaOptions(selected) {
        let opciones = [];
        nextDigimons.forEach(([name, requisitos]) => {
            if (specialfoodcases[name] && Array.isArray(specialfoodcases[name])) {
                opciones.push(...specialfoodcases[name]);
            }
            if (requisitos && requisitos["Comida"]) {
                opciones.push(requisitos["Comida"]);
            }
        });
        opciones = [...new Set(opciones)];
        opciones.push("Ninguno");
        return opciones;
    }

    // Debug logs (mantener exactos)
    console.log("=== DEBUG FIELD ===");
    console.log("Field:", field);
    console.log("Sample value:", sampleValue);
    console.log("typeof sampleValue:", typeof sampleValue);
    console.log("td existe:", td);
    console.log("editableFields existe:", editableFields);

    // Caso especial (mantener exacto)
    if (field === "Bonus Vinculo al momento de evolucionar") {
        let input = document.createElement("input");
        input.type = "text";
        input.id = `field_${field}`;
        input.min = -50;
        input.max = 100;

        // Agregar validación con limpieza automática
        input.addEventListener('input', function() {
          validarRangoInput(input, field, -50, 100);
          recalcularCamposCalculados();
        });

        td.appendChild(input);
        targetFields.appendChild(td);

        setTimeout(() => {
            if (typeof reorganizeTableColumns === "function") {
                reorganizeTableColumns();
            }
        }, 0);

        return; // Salir temprano
    }

    // EXCEPCIÓN ESPECIAL: Vinculo Minimo alcanzado siempre debe crear un input
    if (field === "Vinculo Minimo alcanzado") {
        console.log("⚠️ CREANDO INPUT ESPECIAL PARA VINCULO MINIMO ALCANZADO");
        let input = document.createElement("input");
        input.type = "text";
        input.id = `field_${field}`;
        input.min = -50;
        input.max = 100;

        // Agregar validación con limpieza automática
        input.addEventListener('input', function() {
          validarRangoInput(input, field, -50, 100);
          recalcularCamposCalculados();
        });

        td.appendChild(input);
        targetFields.appendChild(td);
        console.log("✅ INPUT CREADO PARA VINCULO MINIMO ALCANZADO");
        return; // Salir temprano
    }

    // Lógica principal para campos string (mantener exacta pero sin Stat Superior)
    // EXCEPCIÓN: % Entrenamiento, Hora, Vinculo Minimo alcanzado y Nickname siempre deben ser inputs, incluso si el valor esperado es string o undefined
    if (typeof sampleValue === "string" && field !== "% Entrenamiento" && field !== "Hora" && field !== "Vinculo Minimo alcanzado" && field !== "Nickname") {
        let opciones = [];
        if (field === "EntrenamientoHecho") {
            opciones = ["Si", "No"];
        } else if (field === "Program") {
            opciones = ["Virus", "Frost", "Combat", "Vaccine", "Royal", "Trash", "Ore", "Mecha", "Death","Mushroom", "Ninguno"];
        } else if (field === "Driver Equipado") {
            opciones = getDriverEquipadoOptions(selected);
            console.log("opciones 1 de asignar:", opciones);
            console.log("Digimon seleccionado para Driver:", selected);
        } else if (field === "Comida") {
            opciones = getBonusComidaOptions();
            console.log("REVISAR OPCIONES:", opciones);
        } else if (field === "Xross") {
            opciones = getXrossOptions(selected);
            console.log("opciones 2 de asignar:", opciones);
            console.log("Digimon seleccionado para Xross:", selected);
        } else if (field === "Muerte inducida sin Carne X o Program (30% de salir)") {
            opciones = ["Si", "No"];
        } else if (field === "2Ciclos") {
            opciones = ["Si", "No"];
        } else if (field === "Alcanzo vinculo negativo?") {
            opciones = ["Si", "No"];
        } else if (field === "Menos de 15 entrenamientos?") {
            opciones = ["Si", "No"];
        } else if (field === "Tienes registrado a DexDorugamon y Dorugamon?") {
            opciones = ["Si", "No"];
        } else if (field === "Tienes registrado a DexDoruguremon y Doruguremon?") {
            opciones = ["Si", "No"];
        } else {
            opciones = Array.from(new Set(nextDigimons.map(([_, info]) => info[field]).filter(v => v !== undefined)));
        }
        
        // Agregar "--Selecciona--" si aplica
        if (field !== "Program" && field !== "Comida" && field !== "Driver Equipado" && field !== "Xross" && field !== "Bonus Comida") {
            let defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "--Selecciona--";
            select.appendChild(defaultOption);
            translateSelectOptions(select);
        }
        
        // Agregar opciones
        opciones.forEach(op => {
            let option = document.createElement("option");
            option.value = op;
            option.textContent = op;
            select.appendChild(option);
        });
        
        // Auto seleccionar "Ninguno" si aplica
        if (field === "Program" || field === "Comida" || field === "Driver Equipado" || field === "Xross" || field === "Bonus Comida") {
            setTimeout(() => {
                const ningunoOption = Array.from(select.options).find(opt => opt.textContent === "Ninguno");
                if (ningunoOption) {
                    ningunoOption.selected = true;
                }
            });
        }
        
        td.appendChild(select);
        targetFields.appendChild(td);
        
        // Forzar reorganización justo después de agregar el campo
        setTimeout(() => {
            if (typeof reorganizeTableColumns === "function") {
                reorganizeTableColumns();
            }
        }, 0);
    } else {
        // Input numérico (lógica original exacta)
        let input = document.createElement("input");
        input.type = field === "Hora" ? "time" :
                     (field === "Vinculo Minimo alcanzado" || field === "Vinculo al momento de evolucionar" || field === "Nickname") ? "text" : "number";
        input.id = `field_${field}`;

        // Placeholder para Hora y Nickname
        if (field === "Hora") {
            input.placeholder = "HH:MM";
        } else if (field === "Nickname") {
            input.placeholder = "Ingresa el nickname";
        }

        // Definir rangos de validación
        const min = (field === "Vinculo Minimo alcanzado" || field === "Vinculo al momento de evolucionar") ? -50 :
                    field === "Peso" ? 1 : 0;
        const max = field === "Peso" ? 99 :
                    field === "Error Maximo" ? 6 :
                    (field === "% Entrenamiento" || field === "WinRate" || field === "Vinculo Minimo alcanzado" || field === "Vinculo al momento de evolucionar") ? 100 :
                    undefined;

        // Solo aplicar min/max para campos numéricos, no para Hora ni Nickname
        if (field !== "Hora" && field !== "Nickname") {
            input.min = min;
            input.max = max;
        }

        // Agregar validación con limpieza automática para campos con límites definidos
        if (max !== undefined && field !== "Hora" && field !== "Nickname") {
          input.addEventListener('input', function() {
            validarRangoInput(input, field, min, max);
            recalcularCamposCalculados();
          });
        } else {
          input.addEventListener('input', recalcularCamposCalculados);
        }

        td.appendChild(input);

        // Si es el campo Hora, agregar botón "Seleccionar Hoy"
        if (field === "Hora") {
            const btnHoy = document.createElement("button");
            btnHoy.textContent = "📅 Hoy";
            btnHoy.type = "button";
            btnHoy.style.marginLeft = "8px";
            btnHoy.style.padding = "4px 8px";
            btnHoy.style.fontSize = "0.85rem";
            btnHoy.style.cursor = "pointer";
            btnHoy.style.backgroundColor = "#2196F3";
            btnHoy.style.color = "white";
            btnHoy.style.border = "none";
            btnHoy.style.borderRadius = "4px";
            btnHoy.title = "Seleccionar hora actual";
            btnHoy.addEventListener('click', function() {
                const ahora = new Date();
                // Obtener hora local del sistema
                const horas = String(ahora.getHours()).padStart(2, '0');
                const minutos = String(ahora.getMinutes()).padStart(2, '0');
                input.value = `${horas}:${minutos}`;

                // Disparar evento input para que se recalculen los campos
                const event = new Event('input', { bubbles: true });
                input.dispatchEvent(event);
            });
            td.appendChild(btnHoy);
        }

        targetFields.appendChild(td);
    }
  });

  // Calcular valores iniciales después de generar todo
  setTimeout(() => {
    recalcularCamposCalculados();
  }, 100);

  // NUEVO: Debug final del DOM
  setTimeout(() => {
    console.log("🔍 === DEBUG FINAL DEL DOM ===");
    console.log("Headers en DOM:", editableFieldsHeaders.children.length);
    console.log("Campos en DOM:", editableFields.children.length);
    console.log("Headers HTML:", editableFieldsHeaders.innerHTML);
    console.log("Campos HTML:", editableFields.innerHTML);
    
    // Verificar visibilidad
    const tabla = editableFieldsHeaders.closest('table');
    if (tabla) {
      console.log("Tabla encontrada:", tabla);
      console.log("Tabla visible:", window.getComputedStyle(tabla).display);
      console.log("Tabla opacity:", window.getComputedStyle(tabla).opacity);
      console.log("Tabla height:", window.getComputedStyle(tabla).height);
    }
    
    // Verificar si los elementos están en el documento
    console.log("editableFieldsHeaders en documento:", document.contains(editableFieldsHeaders));
    console.log("editableFields en documento:", document.contains(editableFields));
    
    // NUEVO: Verificar si reorganizeTableColumns está interfiriendo
    console.log("🔧 Verificando si reorganizeTableColumns existe:", typeof reorganizeTableColumns);
    
    // NUEVO: Forzar visibility si están ocultos
    if (editableFieldsHeaders.children.length > 0 && editableFields.children.length > 0) {
      console.log("✅ Los campos existen, verificando visibilidad...");
      
      // Verificar cada campo individualmente
      Array.from(editableFields.children).forEach((campo, index) => {
        const estilo = window.getComputedStyle(campo);
        console.log(`Campo ${index}: display=${estilo.display}, visibility=${estilo.visibility}, opacity=${estilo.opacity}`);
      });
      
      // Forzar mostrar la tabla
      if (tabla) {
        tabla.style.display = 'table';
        tabla.style.visibility = 'visible';
        tabla.style.opacity = '1';
        console.log("🔧 Forzando visibilidad de la tabla");
      }
    } else {
      console.log("❌ Los campos NO existen en el DOM");
    }
  }, 1000); // Aumentar el timeout para dar más tiempo

  // 🆕 NUEVO: Deshabilitar reorganizeTableColumns temporalmente
  const originalReorganizeTableColumns = window.reorganizeTableColumns;
  window.reorganizeTableColumns = function() {
    console.log("⚠️ reorganizeTableColumns BLOQUEADO - no se ejecutará para preservar campos estáticos");
    // No hacer nada - función vacía
  };
  
  // Restaurar la función original después de un tiempo (opcional)
  setTimeout(() => {
    window.reorganizeTableColumns = originalReorganizeTableColumns;
    console.log("🔄 reorganizeTableColumns restaurado");
  }, 2000);
}

// Event listeners actualizados
digimonSelect.addEventListener("change", () => {
  localStorage.setItem('selectedDigimon', digimonSelect.value);

  // Actualizar el título con el nombre del Digimon seleccionado
  const digimonDataTitle = document.getElementById('digimonDataTitle');
  if (digimonDataTitle) {
    const selectedDigimon = digimonSelect.value;
    if (selectedDigimon && selectedDigimon !== '') {
      // Actualizar título según el idioma
      const titlePrefix = currentLanguage === 'es' ? 'Datos de' : 'Data of';
      digimonDataTitle.textContent = `${titlePrefix} ${selectedDigimon}`;
    } else {
      // Restaurar título por defecto si no hay selección
      digimonDataTitle.textContent = currentLanguage === 'es' ? 'Datos del Digimon' : 'Digimon Data';
    }
  }

  generarFormulario();
});

// Función auxiliar para validar campos de vínculo
function validarCampoVinculo(input) {
    let val = input.value;

    // Permitir campo vacío
    if (val === '') {
      return;
    }

    // Limpiar el valor: solo permitir números y un guión opcional al inicio
    let cleanedVal = val;

    // Paso 1: Eliminar cualquier carácter que no sea dígito o guión
    cleanedVal = cleanedVal.replace(/[^\d-]/g, '');

    // Paso 2: Asegurar que el guión solo esté al inicio (si existe)
    if (cleanedVal.includes('-')) {
      const hasLeadingDash = cleanedVal.startsWith('-');
      cleanedVal = cleanedVal.replace(/-/g, ''); // Eliminar todos los guiones
      if (hasLeadingDash) {
        cleanedVal = '-' + cleanedVal; // Agregar un solo guión al inicio si había uno
      }
    }

    // Paso 3: Actualizar el campo si se limpió algo
    if (cleanedVal !== val) {
      input.value = cleanedVal;
    }

    // Paso 4: Validar el rango numérico si hay un valor completo
    if (cleanedVal !== '' && cleanedVal !== '-') {
      const num = Number(cleanedVal);

      if (!isNaN(num)) {
        if (num > 100) {
          alert('⚠️ El valor máximo permitido es 100');
          input.value = '100';
        } else if (num < -50) {
          alert('⚠️ El valor mínimo permitido es -50');
          input.value = '-50';
        }
      }
    }
}

editableFields.addEventListener('input', (e) => {
  if (!e.target) return;

  // Llamar recálculo para cualquier cambio
  recalcularCamposCalculados();

  // Tu lógica de validación existente (mantener exacta)
  if (e.target.id === 'field_Error Maximo') {
    let val = e.target.value.replace(/\D/g, ''); // solo dígitos
    e.target.value = val;
    let num = Number(val);
    if (num > 6) e.target.value = 6;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  if (e.target.id === 'field_Peso') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 99) e.target.value = 99;
    else if (num <= 0 || isNaN(num)) e.target.value = 1;
  }

  if (e.target.id === 'field_% Entrenamiento') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 100) e.target.value = 100;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  // Validación de campos de vínculo
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }

  if (e.target.id === 'field_WinRate') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 100) e.target.value = 100;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  if (e.target.id === 'field_Combates Minimos') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num < 0 || isNaN(num)) e.target.value = 0;
  }
  // NUEVAS VALIDACIONES para campos estáticos
if (e.target.id === 'field_HP Base' || 
    e.target.id === 'field_HP Entrenado' || 
    e.target.id === 'field_ATK Entrenado' || 
    e.target.id === 'field_SPD Entrenado') {
  
  let val = e.target.value;
  let cleanedVal = val;
  let alertMessage = '';
  
  // 1. Eliminar dobles guiones
  if (val.includes('--')) {
    cleanedVal = val.replace(/--+/g, '-');
    alertMessage = '⚠️ No se permiten múltiples guiones';
  }
  
  // 2. Verificar guiones en posición incorrecta (no al inicio)
  const dashIndex = cleanedVal.indexOf('-');
  if (dashIndex > 0) {
    const originalFirstChar = val.charAt(0);
    cleanedVal = cleanedVal.replace(/-/g, '');
    if (originalFirstChar === '-') cleanedVal = '-' + cleanedVal;
    alertMessage = '⚠️ El guion solo puede estar al inicio';
  }
  
  // 3. Limpiar múltiples guiones al inicio
  if (cleanedVal.match(/^-{2,}/)) {
    cleanedVal = '-' + cleanedVal.replace(/^-+/, '');
    alertMessage = '⚠️ Solo se permite un guion al inicio';
  }
  
  // 4. Solo permitir números y un guión al inicio
  const parts = cleanedVal.split('');
  let result = '';
  for (let i = 0; i < parts.length; i++) {
    if (i === 0 && parts[i] === '-') {
      result += parts[i];
    } else if (/\d/.test(parts[i])) {
      result += parts[i];
    } else if (parts[i] !== '-') {
      alertMessage = '⚠️ Solo se permiten números';
    }
  }
  cleanedVal = result;
  
  // 5. Aplicar cambios si es necesario
  if (cleanedVal !== val) {
    e.target.value = cleanedVal;
    if (alertMessage) {
      alert(alertMessage);
    }
  }
  
  // 6. Validar rango (NO negativos y máximo 700)
  if (cleanedVal !== '' && cleanedVal !== '-') {
    const num = Number(cleanedVal);
    
    if (num < 0) {
      alert('⚠️ No se permiten números negativos');
      e.target.value = '0';
    } else if ((e.target.id === 'field_HP Base' || e.target.id === 'field_HP Entrenado') && num > 99999) {
      alert('⚠️ El valor máximo permitido para HP es 99999');
      e.target.value = '99999';
    } else if ((e.target.id === 'field_ATK Entrenado' || e.target.id === 'field_SPD Entrenado') && num > 700) {
      alert('⚠️ El valor máximo permitido es 700');
      e.target.value = '700';
    }
  }
  
  // Si el campo quedó solo con un guión, limpiar
  if (cleanedVal === '-') {
    e.target.value = '';
  }
}
});

// Agregar los mismos event listeners a las filas 2 y 3
editableFields2.addEventListener('input', (e) => {
  if (!e.target) return;

  // Llamar recálculo para cualquier cambio
  recalcularCamposCalculados();

  // Validación de campos de vínculo
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }

  // Validaciones de otros campos (copiar de arriba si están en esta fila)
  if (e.target.id === 'field_Error Maximo') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 6) e.target.value = 6;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  if (e.target.id === 'field_Peso') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 99) e.target.value = 99;
    else if (num <= 0 || isNaN(num)) e.target.value = 1;
  }

  if (e.target.id === 'field_% Entrenamiento') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 100) e.target.value = 100;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  if (e.target.id === 'field_WinRate') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num > 100) e.target.value = 100;
    else if (num < 0 || isNaN(num)) e.target.value = 0;
  }

  if (e.target.id === 'field_Combates Minimos') {
    let val = e.target.value.replace(/\D/g, '');
    e.target.value = val;
    let num = Number(val);
    if (num < 0 || isNaN(num)) e.target.value = 0;
  }
});

editableFields3.addEventListener('input', (e) => {
  if (!e.target) return;

  // Llamar recálculo para cualquier cambio
  recalcularCamposCalculados();

  // Validación de campos de vínculo
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }
});

// Event listener para validar cuando el campo pierde el foco (blur) - para las 3 filas
editableFields1.addEventListener('blur', (e) => {
  if (!e.target) return;
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }
}, true);

editableFields2.addEventListener('blur', (e) => {
  if (!e.target) return;
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }
}, true);

editableFields3.addEventListener('blur', (e) => {
  if (!e.target) return;
  if (e.target.id === 'field_Vinculo Minimo alcanzado' || e.target.id === 'field_Bonus Vinculo al momento de evolucionar' || e.target.id === 'field_Vinculo al momento de evolucionar') {
    validarCampoVinculo(e.target);
  }
}, true);

// #endregion

// #region calcularBtn Event Listener
calcularBtn.addEventListener("click", () => {
const selected = digimonSelect.value;
const data = digimonReqDict[selected];
if (!data) return;

// Calcular el siguiente nivel para la evaluación de puntajes
const nextLevel = data["Nivel"] + 1;
console.log(`📊 Digimon seleccionado: ${selected} (Nivel ${data["Nivel"]}), nextLevel: ${nextLevel}`);

// Usar directamente la información de digimonstattier.js
let nextDigimons = [];
const evolucionesDisponibles = digimonstattier[selected]?.["Evoluciona"] || [];
evolucionesDisponibles.forEach(nombreEvo => {
  if (digimonReqDict[nombreEvo]) {
    nextDigimons.push([nombreEvo, digimonReqDict[nombreEvo]]);
  }
});

console.log("Lista de evoluciones desde digimonstattier (botón):", nextDigimons.map(([name]) => name));
console.log("Seleccionado:", selected);
console.log("Digis:", nextDigimons);

// Primero verificar si hay excepciones absolutas
console.log(`Verificando excepciones absolutas para ${selected}`);

// Buscar si el digimon actual tiene excepciones absolutas
let tieneExcepcionAbsoluta = false;
let digimonExcepcion = null;

for (const [resultado, permitido] of Object.entries(bloqueosexcepciones)) {
  if (permitido.toLowerCase().trim() === selected.toLowerCase().trim()) {
    tieneExcepcionAbsoluta = true;
    digimonExcepcion = resultado;
    break;
  }
}

if (tieneExcepcionAbsoluta) {
  console.log(`EXCEPCIÓN ABSOLUTA: ${selected} solo puede evolucionar a ${digimonExcepcion}`);
  
  // Filtrar para mostrar ÚNICAMENTE el digimon de excepción
  nextDigimons = nextDigimons.filter(([name, _]) => {
    const nameNormalizado = name.toLowerCase().trim();
    const excepcionNormalizada = digimonExcepcion.toLowerCase().trim();
    return nameNormalizado === excepcionNormalizada;
  });
  
  console.log("Lista después de aplicar excepción absoluta:", nextDigimons.map(([name]) => name));
} else {
  // Si no hay excepción absoluta, aplicar lógica normal de bloqueos
  console.log(`No hay excepciones absolutas para ${selected}, aplicando bloqueos normales`);
  nextDigimons = nextDigimons.filter(([name, _]) => {
    // Si el digimon resultado está en la lista de bloqueos
    if (bloqueosEvolucion.hasOwnProperty(name)) {
      const permitidos = bloqueosEvolucion[name] || [];
      
      // Normalizar nombres para comparación
      const permitidosNormalizados = permitidos.map(perm => perm.toLowerCase().trim());
      const selectedNormalizado = selected.toLowerCase().trim();
      
      // Si el digimon actual NO está en la lista de permitidos, verificar si puede acceder por otras vías
      if (!permitidosNormalizados.includes(selectedNormalizado)) {
        // Verificar si puede acceder por Cross Tama Evolution
        const crossEvoData = crosstamaevo[name];
        const puedeHacerCrossEvo = crossEvoData && Array.isArray(crossEvoData) && 
          crossEvoData.some(source => source.toLowerCase().trim() === selectedNormalizado);
        
        if (puedeHacerCrossEvo) {
          console.log(`Manteniendo ${name} - aunque está bloqueado, puede acceder por Cross Tama Evolution`);
          return true;
        }
        
        // Si no puede acceder por Cross Tama Evolution, bloquearlo
        console.log(`Bloqueando ${name} porque ${selected} no está en su lista de permitidos: [${permitidos.join(", ")}] y no hay Cross Tama Evolution`);
        return false;
      } else {
        console.log(`Permitiendo ${name} porque ${selected} SÍ está en su lista de permitidos`);
      }
    }
    
    return true; // Mantener si no está en bloqueos o si está permitido
  });
  
  console.log("Lista después del filtro de bloqueos:", nextDigimons.map(([name]) => name));
}

// FILTRADO UNIFICADO: Tama + Cross Tama Evolution + Bloqueos Evolución
if (!tieneExcepcionAbsoluta && tamaElegido !== "Todos") {
  console.log(`Filtrando por Tama: ${tamaElegido}`);
  const selectedNormalizado = selected.toLowerCase().trim();
  
  nextDigimons = nextDigimons.filter(([name, _]) => {
    // Excepción especial para Numemon y Scumon - nunca eliminar
    if (name === "Numemon" || name === "Scumon" || name === "Nanimon") {
      console.log(`${name} mantenido por excepción especial`);
      return true;
    }
    
    // Buscar el digimon en digimonReqDict
    const digimonData = digimonReqDict[name];
    
    if (digimonData && digimonData["Tama"]) {
      const tamaDigimon = digimonData["Tama"];
      
      // Si el Tama coincide, mantenerlo
      if (tamaDigimon === tamaElegido) {
        console.log(`${name} mantenido - Tama coincide: ${tamaDigimon}`);
        return true;
      }
      
      // Si el Tama NO coincide, verificar condiciones especiales
      console.log(`${name} tiene Tama diferente: ${tamaDigimon} vs ${tamaElegido}`);
      
      // 1. Verificar Cross Tama Evolution
      const crossEvoData = crosstamaevo[name];
      if (crossEvoData && Array.isArray(crossEvoData)) {
        const puedeHacerCrossEvo = crossEvoData.some(source => 
          source.toLowerCase().trim() === selectedNormalizado
        );
        
        if (puedeHacerCrossEvo) {
          console.log(`${name} mantenido por Cross Tama Evolution - ${selected} puede evolucionar a ${name}`);
          return true;
        }
      }
      
      // 2. Verificar Bloqueos Evolución (selected está en la lista de permitidos)
      if (bloqueosEvolucion[name] && Array.isArray(bloqueosEvolucion[name])) {
        const estaEnBloqueos = bloqueosEvolucion[name].some(blockedSource => 
          blockedSource.toLowerCase().trim() === selectedNormalizado
        );
        
        if (estaEnBloqueos) {
          console.log(`${name} mantenido por Bloqueos Evolución - ${selected} está en la lista de permitidos para ${name}`);
          return true;
        }
      }
      
      // Si no cumple ninguna condición especial, eliminarlo
      console.log(`${name} eliminado - Tama diferente y sin condiciones especiales desde ${selected}`);
      return false;
    }
    
    console.log(`${name} eliminado - No encontrado en digimonReqDict o sin Tama`);
    return false;
  });
  
  console.log("Lista después de filtrar por Tama + Cross Tama Evolution + Bloqueos Evolución:", nextDigimons.map(([name]) => name));
}

console.log("Lista después del filtro de bloqueos:", nextDigimons.map(([name]) => name));
fieldSet = new Set();
let hayBonus = false;
		console.log("Lista después de filtrar sides por Tama:", nextDigimons.map(([name]) => name));
	const burpmonNombre = "Burpmon";
	const burpmonExiste = nextDigimons.some(([name, _]) => name.toLowerCase().trim() === burpmonNombre.toLowerCase());

	if (!burpmonExiste) {
	  // Si Burpmon no está, lo agregamos
	  // Opcional: obtener info de digimonReqDict o asignar objeto vacío si no existe
	  const burpmonInfo = digimonReqDict[burpmonNombre] || {};
	  nextDigimons.push([burpmonNombre, burpmonInfo]);
	  console.log("⚠️ Burpmon añadido manualmente a la lista post-filtrado");
	} else {
	  console.log("✅ Burpmon ya está presente en la lista post-filtrado");
	}

	console.log("Lista final después de filtrar sides por Tama y añadir Burpmon:", nextDigimons.map(([name]) => name));		
		
nextDigimons.forEach(([_, info]) => {
  for (const key in info) {
    if (!["ID", "Tama", "Nivel", "Tipo", "Atributo", "Stat Superior 2", "Errores Minimos", "Placeholder", "RequisitosCondicionados"].includes(key)) {
      if (key.includes("Bonus")) {
        hayBonus = true;
      } else {
        fieldSet.add(key);
      }
    }
  }
});

if (hayBonus) {
  fieldSet.add("Bonus"); // Agrupamos todos los Bonus en una sola entrada
}
if (nextDigimons.some(([_, info]) => "Program" in info)) {
    fieldSet.add("Program");
    console.log("Program field added to fieldSet");
} else {
    console.log("No Program field found in any digimon");
}

// EXCEPCIÓN: Si alguna evolución tiene "Bonus Vinculo Alcanzado", agregar "Vinculo Minimo alcanzado"
const tieneBonusVinculo = nextDigimons.some(([_, info]) => info["Bonus Vinculo Alcanzado"] !== undefined);
if (tieneBonusVinculo && !fieldSet.has("Vinculo Minimo alcanzado")) {
  fieldSet.add("Vinculo Minimo alcanzado");
  console.log("✅ Campo 'Vinculo Minimo alcanzado' agregado por excepción en Calcular (existe Bonus Vinculo Alcanzado)");
}

const allKeys = new Set();
nextDigimons.forEach(([_, info]) => {
  Object.keys(info).forEach(key => allKeys.add(key));
});
console.log("Todas las claves encontradas en nextDigimons:", Array.from(allKeys));
console.log("Campos finales:", Array.from(fieldSet));


  const inputValues = {};
  let camposIncompletos = [];

fieldSet.forEach(field => {
    const element = document.getElementById(`field_${field}`);

    console.log(`🔎 Buscando campo: ${field}, elemento encontrado:`, element);

    // Si el elemento no existe (campo calculado), buscar el span calculado
    if (!element) {
      const calcElement = document.getElementById(`calc_${field}`);
      inputValues[field] = calcElement ? calcElement.textContent : "";
      console.log(`⏭️ Saltando validación de campo calculado: ${field}`);
      return; // Saltar a la siguiente iteración
    }
    
    let val = element.value.trim();
// Excluir Digimon Bonus de validacion de campo
	  if (!excludelist.includes(field)){
		if (!val) {
		  camposIncompletos.push(field);
		  if (element) element.classList.add("invalido");
		} else {
		  if (element) element.classList.remove("invalido");
		}
	  } else {
		// Para Digimon Bonus, quitar clase invalido si existe (opcional)
		if (element) element.classList.remove("invalido");
	  }

    if (field === "Error Maximo") {
      val = Math.min(Math.max(Number(val) || 0, 0), 6).toString();
      if (element) element.value = val;
    }
    if (field === "Peso") {
      val = Math.min(Math.max(Number(val) || 0, 0), 99).toString();
      if (element) element.value = val;
    }
    if (field === "Vinculo al momento de evolucionar") {
      val = Math.min(Math.max(Number(val) || 0, -50), 100).toString();
      if (element) element.value = val;
    }

    inputValues[field] = val;
  });

  if (camposIncompletos.length > 0) {
    alert("Por favor, completa todos los campos antes de calcular.");
    return;
  }

// Crear dos tablas: una simple y una completa
// Tabla simple (solo 3 columnas)
let tablaSimple = `
<div style="text-align: center; margin-bottom: 10px;">
  <button id="toggleDetailsBtn" style="
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  " onmouseover="this.style.backgroundColor='#0056b3'" onmouseout="this.style.backgroundColor='#007bff'">
    <span id="toggleIcon">▶</span> <span id="toggleText">${currentLanguage === 'es' ? 'Mostrar Detalles' : 'Show Details'}</span>
  </button>
</div>
<div class="table-container">
<table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><thead><tr>` +
            `<th data-translate='digimon'>${translate('digimon')}</th>` +
            `<th data-translate='etapa'>${translate('etapa')}</th>` +
            `<th data-translate='puntaje'>${translate('puntaje')}</th>`;
tablaSimple += "</tr></thead><tbody>";

// Tabla completa (todas las columnas)
let tablaCompleta = `
<div style="text-align: center; margin-bottom: 10px;">
  <button id="toggleDetailsBtn2" style="
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  " onmouseover="this.style.backgroundColor='#0056b3'" onmouseout="this.style.backgroundColor='#007bff'">
    <span id="toggleIcon2">▼</span> <span id="toggleText2">${currentLanguage === 'es' ? 'Ocultar Detalles' : 'Hide Details'}</span>
  </button>
</div>
<table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><thead><tr>` +
            `<th data-translate='digimon'>${translate('digimon')}</th>` +
            `<th data-translate='etapa'>${translate('etapa')}</th>` +
            `<th data-translate='puntaje'>${translate('puntaje')}</th>`;

fieldSet.forEach(field => {
    // Excluir "Vinculo Minimo alcanzado" SOLO si ninguna evolución lo tiene como campo directo
    // (es decir, solo existe por el Bonus Vinculo Alcanzado)
    if (field === "Vinculo Minimo alcanzado") {
        const tieneVinculoDirecto = nextDigimons.some(([_, info]) => info["Vinculo Minimo alcanzado"] !== undefined);
        if (!tieneVinculoDirecto) {
            console.log("⚠️ Vinculo Minimo alcanzado NO se muestra en tabla (solo existe por Bonus)");
            return; // Saltar si solo existe por el bonus
        }
        console.log("✅ Vinculo Minimo alcanzado SÍ se muestra en tabla (es requisito directo)");
    }

    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Entrenamiento Hecho en Baby 2?" :
      field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
      field === "Combates Minimos" ? "Batallas":
      field === "Vinculo Minimo alcanzado" ? "Vinculo" :
      field;

    const translateKey = headerMappingJS[header] || header.toLowerCase();
    const translatedHeader = translate(translateKey);
    tablaCompleta += `<th data-translate="${translateKey}">${translatedHeader}</th>`;
});
tablaCompleta += "</tr></thead><tbody>";

  let puntajes = [];
nextDigimons.forEach(([name, requisitos]) => {
    let puntaje = 0;
    let etapa = nivelAEtapa[requisitos["Nivel"]] || "Desconocida";
    let filaSimple = `<tr><td>${name}</td><td>${etapa}</td>`;
    let filaCompleta = `<tr><td>${name}</td><td>${etapa}</td>`;

// Agregar esta variable ANTES del map
let pillomonEvaluated = false;
let skullGreymonEvaluated = false; // AGREGADO PARA SKULLGREYMON
let dexDorugamonEvaluated = false; // AGREGADO PARA DEXDORUGAMON
let dexDoruguremonEvaluated = false; // AGREGADO PARA DEXDORUGUREMON
let bakemonLTEvaluated = false; // AGREGADO PARA BAKEMON LT
let shoutmonEvaluated = false; // AGREGADO PARA SHOUTMON
let shoutmonBlackEvaluated = false; // AGREGADO PARA SHOUTMON BLACK
let warGreymonEvaluated = false; // AGREGADO PARA WARGREYMON Y BLACKWARGREYMON

const celdas = Array.from(fieldSet)
  .filter(field => {
    // Excluir "Vinculo Minimo alcanzado" SOLO si no es requisito directo
    if (field === "Vinculo Minimo alcanzado") {
      const tieneVinculoDirecto = nextDigimons.some(([_, info]) => info["Vinculo Minimo alcanzado"] !== undefined);
      return tieneVinculoDirecto; // Solo incluir si es requisito directo
    }
    return true; // Incluir todos los demás campos
  })
  .map(field => {
  // Para "Stat Superior", también verificar si el requisito es "Bonus Stat Superior" (caso Tyranomon)
  let esperado = requisitos[field];
  let fieldToEvaluate = field;
  if (field === "Stat Superior" && esperado === undefined && requisitos["Bonus Stat Superior"] !== undefined) {
    esperado = requisitos["Bonus Stat Superior"];
    fieldToEvaluate = "Bonus Stat Superior";
  }
  const ingresado = inputValues[field];
  let punto = 0;

console.log(`✅ Esperado Nombre: "${name}" esperado "${esperado}"`);

        // LÓGICA ESPECIAL PARA SKULLGREYMON - AGREGADO
        if (name === "SkullGreymon" && !skullGreymonEvaluated) {
            console.log("🔥 Evaluando SkullGreymon con lógica especial");
            
            // Obtener valores de los campos obligatorios
            const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
            const erroresMinimos = Number(inputValues["Error Maximo"]);
            const combatesMinimos = Number(inputValues["Combates Minimos"]);
            
            // Para el vínculo, buscar en diferentes campos posibles
            let vinculoMomento = 0;
            if (inputValues["Vinculo al momento de evolucionar"]) {
                vinculoMomento = Number(inputValues["Vinculo al momento de evolucionar"]);
            } else if (inputValues["Bonus Vinculo al momento de evolucionar"]) {
                const vinculoStr = inputValues["Bonus Vinculo al momento de evolucionar"].toString();
                vinculoMomento = Number(vinculoStr.replace(/[<>=\s]/g, ''));
            }
            
            // Verificar si los 4 campos obligatorios se cumplen
            const entrenamientoCorrecto = porcentajeEntrenamiento >= requisitos["% Entrenamiento"];
            const erroresCorrecto = erroresMinimos >= requisitos["Errores Minimos"];
            const combatesCorrecto = combatesMinimos >= requisitos["Victorias Minimas"];
            const vinculoCorrecto = vinculoMomento <= requisitos["Vinculo al momento de evolucionar"];

            console.log(`🔥 SkullGreymon - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= ${requisitos["% Entrenamiento"]})`);
            console.log(`🔥 SkullGreymon - Errores: ${erroresCorrecto} (${erroresMinimos} >= ${requisitos["Errores Minimos"]})`);
            console.log(`🔥 SkullGreymon - Victorias Minimas: ${combatesCorrecto} (${combatesMinimos} >= ${requisitos["Victorias Minimas"]})`);
            console.log(`🔥 SkullGreymon - Vinculo: ${vinculoCorrecto} (${vinculoMomento} <= ${requisitos["Vinculo al momento de evolucionar"]})`);
            
            // Si TODOS los campos obligatorios se cumplen, dar +4
            if (entrenamientoCorrecto && erroresCorrecto && combatesCorrecto && vinculoCorrecto) {
                puntaje += 4;
                console.log("🔥 SkullGreymon - Todos los campos obligatorios cumplidos: +4 puntos");
            } else {
                puntaje += -10;
                console.log("🔥 SkullGreymon - No todos los campos obligatorios cumplidos: -10 puntos");
            }
            
            // Evaluar Program y Comida (al menos uno debe cumplirse)
            const programCorrecto = inputValues["Program"] && requisitos["Program"] &&
                inputValues["Program"].toLowerCase() === requisitos["Program"].toLowerCase();
            const comidaCorrecta = inputValues["Comida"] && requisitos["Comida"] &&
                inputValues["Comida"].toLowerCase() === requisitos["Comida"].toLowerCase();
            
            console.log(`🔥 SkullGreymon - Program correcto: ${programCorrecto} ("${inputValues["Program"]}" vs "${requisitos["Program"]}")`);
            console.log(`🔥 SkullGreymon - Comida correcta: ${comidaCorrecta} ("${inputValues["Comida"]}" vs "${requisitos["Comida"]}")`);
            
            if (programCorrecto || comidaCorrecta) {
                // Al menos uno se cumple: +0
                console.log("🔥 SkullGreymon - Al menos Program o Comida cumplidos: +0 puntos");
            } else {
                puntaje += -10;
                console.log("🔥 SkullGreymon - Ni Program ni Comida cumplidos: -10 puntos");
            }
            
            skullGreymonEvaluated = true;
            
            // Para SkullGreymon, mostrar "Evaluado" en sus campos especiales
            if (["% Entrenamiento", "Error Maximo", "Combates Minimos", "Vinculo al momento de evolucionar", "Program", "Comida"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó SkullGreymon y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "SkullGreymon" && skullGreymonEvaluated &&
            ["% Entrenamiento", "Error Maximo", "Combates Minimos", "Vinculo al momento de evolucionar", "Program", "Comida"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA SKULLGREYMON

        // ⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen
        // La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
        // Se mantiene como referencia hasta que se conozcan los nuevos requisitos
        // LÓGICA ESPECIAL PARA DEXDORUGAMON - Condicionada por origen
        if (name === "DexDorugamon" && !dexDorugamonEvaluated) {
            console.log("🔮 Evaluando DexDorugamon con lógica especial (⚠️ REQUISITOS ANTIGUOS)");

            const selectedNormalizado = selected.toLowerCase().trim();
            const vieneDeDorumon = selectedNormalizado === "dorumon";
            const vieneDeDorugamon = selectedNormalizado === "dorugamon";

            // Verificar Program Death (obligatorio en ambos casos)
            const programCorrecto = inputValues["Program"] &&
                inputValues["Program"].toLowerCase() === "death";

            if (vieneDeDorumon) {
                // CASO PLACEHOLDER: Desde Dorumon - probabilidad basada en % entrenamiento
                console.log("🔮 DexDorugamon desde Dorumon (PLACEHOLDER)");
                const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
                const entrenamientoCorrecto = porcentajeEntrenamiento >= 50;

                console.log(`🔮 DexDorugamon - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= 50)`);
                console.log(`🔮 DexDorugamon - Program Death: ${programCorrecto}`);

                if (entrenamientoCorrecto && programCorrecto) {
                    puntaje += 4; // Evolución al azar
                    console.log("🔮 DexDorugamon - Requisitos cumplidos: +4 puntos (evolución al azar)");
                } else {
                    puntaje += -10;
                    console.log("🔮 DexDorugamon - Requisitos no cumplidos: -10 puntos");
                }
            } else if (vieneDeDorugamon) {
                // CASO SIDE EVOLUTION: Desde Dorugamon - debe INCUMPLIR al menos un requisito de DexDoruguremon
                console.log("🔮 DexDorugamon desde Dorugamon (Side Evolution)");

                // Requisitos de DexDoruguremon que debe INCUMPLIR al menos uno
                const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
                const errores = Number(inputValues["Error Maximo"]);
                const combates = Number(inputValues["Combates Minimos"]);
                let vinculoMomento = 0;
                if (inputValues["Vinculo al momento de evolucionar"]) {
                    vinculoMomento = Number(inputValues["Vinculo al momento de evolucionar"]);
                }

                // Verificar si CUMPLE los requisitos de DexDoruguremon (lo que queremos evitar)
                const cumpleEntrenamiento = porcentajeEntrenamiento >= 50;
                const cumpleErrores = errores >= 6;
                const cumpleCombates = combates >= 30;
                const cumpleVinculo = vinculoMomento <= -50;

                // Para hacer side a DexDorugamon, debe INCUMPLIR al menos uno
                const incumpleAlMenosUno = !cumpleEntrenamiento || !cumpleErrores || !cumpleCombates || !cumpleVinculo;

                console.log(`🔮 DexDorugamon Side - Entrenamiento < 50: ${!cumpleEntrenamiento} (${porcentajeEntrenamiento})`);
                console.log(`🔮 DexDorugamon Side - Errores < 6: ${!cumpleErrores} (${errores})`);
                console.log(`🔮 DexDorugamon Side - Combates < 30: ${!cumpleCombates} (${combates})`);
                console.log(`🔮 DexDorugamon Side - Vinculo > -50: ${!cumpleVinculo} (${vinculoMomento})`);
                console.log(`🔮 DexDorugamon Side - Program Death: ${programCorrecto}`);
                console.log(`🔮 DexDorugamon Side - Incumple al menos uno: ${incumpleAlMenosUno}`);

                if (programCorrecto && incumpleAlMenosUno) {
                    puntaje += 6; // Side evolution exitoso
                    console.log("🔮 DexDorugamon - Side evolution: +6 puntos");
                } else {
                    puntaje += -10;
                    console.log("🔮 DexDorugamon - No cumple condiciones de side: -10 puntos");
                }
            } else {
                // Otro origen no válido
                puntaje += -10;
                console.log("🔮 DexDorugamon - Origen no válido: -10 puntos");
            }

            dexDorugamonEvaluated = true;

            // Para DexDorugamon, mostrar "Evaluado" en sus campos especiales
            if (["% Entrenamiento", "Program", "Error Maximo", "Combates Minimos", "Vinculo al momento de evolucionar"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó DexDorugamon y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "DexDorugamon" && dexDorugamonEvaluated &&
            ["% Entrenamiento", "Program", "Error Maximo", "Combates Minimos", "Vinculo al momento de evolucionar"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA DEXDORUGAMON

        // ⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen
        // La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
        // Se mantiene como referencia hasta que se conozcan los nuevos requisitos
        // LÓGICA ESPECIAL PARA DEXDORUGUREMON (similar a SkullGreymon pero condicionado)
        if (name === "DexDoruguremon" && !dexDoruguremonEvaluated) {
            console.log("🔮 Evaluando DexDoruguremon con lógica especial (⚠️ REQUISITOS ANTIGUOS)");

            // Verificar si viene de Dorugamon (requisitos conocidos) o de otros (requisitos no claros)
            const selectedNormalizado = selected.toLowerCase().trim();
            const vieneDeDorugamon = selectedNormalizado === "dorugamon";

            if (vieneDeDorugamon) {
                // Misma lógica que SkullGreymon
                const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
                const erroresMinimos = Number(inputValues["Error Maximo"]);
                const combatesMinimos = Number(inputValues["Combates Minimos"]);

                let vinculoMomento = 0;
                if (inputValues["Vinculo al momento de evolucionar"]) {
                    vinculoMomento = Number(inputValues["Vinculo al momento de evolucionar"]);
                }

                const entrenamientoCorrecto = porcentajeEntrenamiento >= requisitos["% Entrenamiento"];
                const erroresCorrecto = erroresMinimos >= requisitos["Errores Minimos"];
                const combatesCorrecto = combatesMinimos >= requisitos["Victorias Minimas"];
                const vinculoCorrecto = vinculoMomento <= requisitos["Vinculo al momento de evolucionar"];

                console.log(`🔮 DexDoruguremon - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= ${requisitos["% Entrenamiento"]})`);
                console.log(`🔮 DexDoruguremon - Errores: ${erroresCorrecto} (${erroresMinimos} >= ${requisitos["Errores Minimos"]})`);
                console.log(`🔮 DexDoruguremon - Victorias Minimas: ${combatesCorrecto} (${combatesMinimos} >= ${requisitos["Victorias Minimas"]})`);
                console.log(`🔮 DexDoruguremon - Vinculo: ${vinculoCorrecto} (${vinculoMomento} <= ${requisitos["Vinculo al momento de evolucionar"]})`);

                if (entrenamientoCorrecto && erroresCorrecto && combatesCorrecto && vinculoCorrecto) {
                    puntaje += 4;
                    console.log("🔮 DexDoruguremon - Todos los campos obligatorios cumplidos: +4 puntos");
                } else {
                    puntaje += -10;
                    console.log("🔮 DexDoruguremon - No todos los campos obligatorios cumplidos: -10 puntos");
                }

                // Evaluar Program (requisito obligatorio)
                const programCorrecto = inputValues["Program"] &&
                    inputValues["Program"].toLowerCase() === requisitos["Program"].toLowerCase();

                console.log(`🔮 DexDoruguremon - Program correcto: ${programCorrecto}`);

                if (programCorrecto) {
                    console.log("🔮 DexDoruguremon - Program cumplido: +0 puntos");
                } else {
                    puntaje += -10;
                    console.log("🔮 DexDoruguremon - Program no cumplido: -10 puntos");
                }
                dexDoruguremonEvaluated = true;
            } else if (selectedNormalizado === "doruguremon") {
                // Viene de Doruguremon - Solo necesita Death Program
                const programCorrecto = inputValues["Program"] &&
                    inputValues["Program"].toLowerCase() === "death";

                if (programCorrecto) {
                    puntaje += 5; // Puntaje especial para evolución directa
                    console.log("🔮 DexDoruguremon desde Doruguremon - Death Program cumplido: +5 puntos (evolución directa)");
                } else {
                    puntaje += -10;
                    console.log("🔮 DexDoruguremon desde Doruguremon - Death Program no cumplido: -10 puntos");
                }
                dexDoruguremonEvaluated = true;
            } else if (selectedNormalizado === "dexdorugamon") {
                // Viene de DexDorugamon - Requisitos específicos
                // Obligatorio: Combates Minimos >= 30 (no da puntaje, pero si no cumple -10)
                // Da puntaje: % Entrenamiento >= 100, Peso >= 36, Error Maximo <= 6
                const combatesMinimos = Number(inputValues["Combates Minimos"]) || 0;
                const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]) || 0;
                const pesoActual = Number(inputValues["Peso"]) || 0;
                const errores = Number(inputValues["Error Maximo"]) || 0;

                // Combates Minimos >= 30: +1 si cumple, 0 si no
                const combatesCumplido = combatesMinimos >= 30;

                console.log(`🔮 DexDoruguremon desde DexDorugamon:`);
                console.log(`   - Combates: ${combatesCumplido} (${combatesMinimos} >= 30)`);

                if (combatesCumplido) {
                    puntaje += 1;
                    console.log("🔮 DexDoruguremon - Combates cumplido: +1 punto");
                } else {
                    console.log("🔮 DexDoruguremon - Combates NO cumplido: 0 puntos");
                }

                // % Entrenamiento >= 100: +1 si cumple
                if (porcentajeEntrenamiento >= 100) {
                    puntaje += 1;
                    console.log(`🔮 DexDoruguremon - Entrenamiento cumplido (${porcentajeEntrenamiento} >= 100): +1 punto`);
                } else {
                    console.log(`🔮 DexDoruguremon - Entrenamiento NO cumplido (${porcentajeEntrenamiento} < 100): 0 puntos`);
                }

                // Peso >= 36: +1 si cumple
                if (pesoActual >= 36) {
                    puntaje += 1;
                    console.log(`🔮 DexDoruguremon - Peso cumplido (${pesoActual} >= 36): +1 punto`);
                } else {
                    console.log(`🔮 DexDoruguremon - Peso NO cumplido (${pesoActual} < 36): 0 puntos`);
                }

                // Error Maximo <= 6: +1 si cumple
                if (errores <= 6) {
                    puntaje += 1;
                    console.log(`🔮 DexDoruguremon - Errores cumplido (${errores} <= 6): +1 punto`);
                } else {
                    console.log(`🔮 DexDoruguremon - Errores NO cumplido (${errores} > 6): 0 puntos`);
                }

                console.log(`🔮 DexDoruguremon desde DexDorugamon - Puntaje total: ${puntaje}`);

                dexDoruguremonEvaluated = true;

                // Retornar puntaje individual para cada campo
                if (field === "Combates Minimos") {
                    return `<td class="detail-column">${combatesCumplido ? 1 : 0}</td>`;
                }
                if (field === "% Entrenamiento") {
                    return `<td class="detail-column">${porcentajeEntrenamiento >= 100 ? 1 : 0}</td>`;
                }
                if (field === "Peso") {
                    return `<td class="detail-column">${pesoActual >= 36 ? 1 : 0}</td>`;
                }
                if (field === "Error Maximo") {
                    return `<td class="detail-column">${errores <= 6 ? 1 : 0}</td>`;
                }
                // Campos no usados para DexDorugamon
                if (["Vinculo al momento de evolucionar", "Program", "Comida"].includes(field)) {
                    return `<td class="detail-column">-</td>`;
                }
            }
        }

        // Si ya se evaluó DexDoruguremon y es uno de sus campos especiales, retornar puntaje individual
        if (name === "DexDoruguremon" && dexDoruguremonEvaluated) {
            const selectedNorm = selected.toLowerCase().trim();
            if (selectedNorm === "dexdorugamon") {
                const combatesMinimos = Number(inputValues["Combates Minimos"]) || 0;
                const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]) || 0;
                const pesoActual = Number(inputValues["Peso"]) || 0;
                const errores = Number(inputValues["Error Maximo"]) || 0;

                if (field === "Combates Minimos") {
                    return `<td class="detail-column">${combatesMinimos >= 30 ? 1 : 0}</td>`;
                }
                if (field === "% Entrenamiento") {
                    return `<td class="detail-column">${porcentajeEntrenamiento >= 100 ? 1 : 0}</td>`;
                }
                if (field === "Peso") {
                    return `<td class="detail-column">${pesoActual >= 36 ? 1 : 0}</td>`;
                }
                if (field === "Error Maximo") {
                    return `<td class="detail-column">${errores <= 6 ? 1 : 0}</td>`;
                }
                if (["Vinculo al momento de evolucionar", "Program", "Comida"].includes(field)) {
                    return `<td class="detail-column">-</td>`;
                }
            }
            // Desde Doruguremon - Solo Program aplica, todos los demás campos muestran "-"
            if (selectedNorm === "doruguremon") {
                if (field === "Program") {
                    const programCorrecto = inputValues["Program"] &&
                        inputValues["Program"].toLowerCase() === "death";
                    return `<td class="detail-column">${programCorrecto ? 5 : -10}</td>`;
                }
                // Todos los demás campos no aplican desde Doruguremon
                if (["% Entrenamiento", "Errores Minimos", "Combates Minimos", "Vinculo al momento de evolucionar", "Peso", "Error Maximo", "Comida"].includes(field)) {
                    return `<td class="detail-column">-</td>`;
                }
            }
        }
        // FIN LÓGICA ESPECIAL PARA DEXDORUGUREMON

        // LÓGICA ESPECIAL PARA WARGREYMON Y BLACKWARGREYMON
        if ((name === "Wargreymon" || name === "BlackWargreymon") && !warGreymonEvaluated) {
            console.log(`🔥 Evaluando ${name} con lógica especial`);

            // Caso especial: Wargreymon desde Metal Greymon - requisitos no claros
           /* const selectedNormalizado = selected.toLowerCase().trim();
            if (name === "Wargreymon" && selectedNormalizado === "metal greymon") {
                // Requisitos no claros - dar 0 puntos (neutro)
                puntaje += 0;
                console.log("🔥 Wargreymon desde Metal Greymon - Requisitos no claros: 0 puntos (neutro)");
                warGreymonEvaluated = true;

                if (["% Entrenamiento", "Error Maximo", "Vinculo al momento de evolucionar", "Combates Minimos", "Victorias"].includes(field)) {
                    return `<td class="detail-column" style="display: none;">Evaluado</td>`;
                }
                return;
            }*/

            // Obtener valores de los campos obligatorios
            const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
            const errores = Number(inputValues["Error Maximo"]);
            const combates = Number(inputValues["Combates Minimos"]);
            const victorias = Number(inputValues["Victorias"]);
            let vinculoMomento = 0;
            if (inputValues["Vinculo al momento de evolucionar"]) {
                vinculoMomento = Number(inputValues["Vinculo al momento de evolucionar"]);
            }

            // Obtener requisitos esperados (considerando casos especiales)
            let batallasEsperadas = requisitos["Combates Minimos"];
            let victoriasEsperadas = requisitos["Victorias"];

            // Aplicar casos especiales si existen
            if (specialBatallasCases[name] && selected && specialBatallasCases[name][selected]) {
                batallasEsperadas = specialBatallasCases[name][selected];
            }
            if (specialVictoriasCases[name] && selected && specialVictoriasCases[name][selected]) {
                victoriasEsperadas = specialVictoriasCases[name][selected];
            }

            // Verificar campos obligatorios comunes (para ambos)
            const entrenamientoCorrecto = porcentajeEntrenamiento >= requisitos["% Entrenamiento"];
            const batallasCorrecto = combates >= batallasEsperadas;
            const victoriasCorrecto = victorias >= victoriasEsperadas;

            // Para WarGreymon: vinculo >= 100, para BlackWarGreymon: vinculo <= -50
            let vinculoCorrecto = false;
            if (name === "Wargreymon") {
                vinculoCorrecto = vinculoMomento >= requisitos["Vinculo al momento de evolucionar"];
            } else { // BlackWargreymon
                vinculoCorrecto = vinculoMomento <= requisitos["Vinculo al momento de evolucionar"];
            }

            console.log(`🔥 ${name} - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= ${requisitos["% Entrenamiento"]})`);
            console.log(`🔥 ${name} - Batallas: ${batallasCorrecto} (${combates} >= ${batallasEsperadas})`);
            console.log(`🔥 ${name} - Victorias: ${victoriasCorrecto} (${victorias} >= ${victoriasEsperadas})`);
            console.log(`🔥 ${name} - Vinculo: ${vinculoCorrecto} (${vinculoMomento} vs ${requisitos["Vinculo al momento de evolucionar"]})`);

            if (name === "Wargreymon") {
                // Para WarGreymon: Errores también son obligatorios
                const erroresCorrecto = errores <= requisitos["Error Maximo"];
                console.log(`🔥 ${name} - Errores: ${erroresCorrecto} (${errores} <= ${requisitos["Error Maximo"]})`);

                if (entrenamientoCorrecto && erroresCorrecto && vinculoCorrecto && batallasCorrecto && victoriasCorrecto) {
                    puntaje += 3;
                    console.log(`🔥 ${name} - Todos los campos obligatorios cumplidos: +3 puntos`);
                } else {
                    puntaje += -10;
                    console.log(`🔥 ${name} - Al menos un campo obligatorio no cumplido: -10 puntos`);
                }
            } else { // BlackWargreymon
                // Para BlackWarGreymon: Solo entrenamiento, vínculo, batallas y victorias son obligatorios
                if (entrenamientoCorrecto && vinculoCorrecto && batallasCorrecto && victoriasCorrecto) {
                    puntaje += 3;
                    console.log(`🔥 ${name} - Todos los campos obligatorios cumplidos: +3 puntos`);
                } else {
                    puntaje += -10;
                    console.log(`🔥 ${name} - Al menos un campo obligatorio no cumplido: -10 puntos`);
                }
            }

            warGreymonEvaluated = true;

            // Para WarGreymon/BlackWarGreymon, mostrar "Evaluado" en sus campos especiales
            if (name === "Wargreymon" && ["% Entrenamiento", "Error Maximo", "Vinculo al momento de evolucionar", "Combates Minimos", "Victorias"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            } else if (name === "BlackWargreymon" && ["% Entrenamiento", "Vinculo al momento de evolucionar", "Combates Minimos", "Victorias"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó WarGreymon/BlackWarGreymon y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "Wargreymon" && warGreymonEvaluated &&
            ["% Entrenamiento", "Error Maximo", "Vinculo al momento de evolucionar", "Combates Minimos", "Victorias"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        if (name === "BlackWargreymon" && warGreymonEvaluated &&
            ["% Entrenamiento", "Vinculo al momento de evolucionar", "Combates Minimos", "Victorias"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA WARGREYMON Y BLACKWARGREYMON

        // LÓGICA ESPECIAL PARA BAKEMON LT - AGREGADO
        if (name === "Bakemon LT" && !bakemonLTEvaluated) {
            console.log("🦴 Evaluando Bakemon LT con lógica especial");
            
            // Verificar primero el campo de muerte inducida
            const muerteInducida = inputValues["Muerte inducida sin Carne X o Program (30% de salir)"];
            
            if (muerteInducida && muerteInducida.toLowerCase() === "si") {
                puntaje += 4;
                console.log("🦴 Bakemon LT - Muerte inducida 'Si': +4 puntos (30% probabilidad)");
            } else {
                // Si no tiene muerte inducida como "Si", evaluar Comida y Program
                const comidaCorrecta = inputValues["Comida"] && 
                    inputValues["Comida"].toLowerCase() === requisitos["Comida"].toLowerCase();
                const programCorrecto = inputValues["Program"] && 
                    inputValues["Program"].toLowerCase() === requisitos["Program"].toLowerCase();
                
                console.log(`🦴 Bakemon LT - Comida correcta: ${comidaCorrecta} ("${inputValues["Comida"]}" vs "${requisitos["Comida"]}")`);
                console.log(`🦴 Bakemon LT - Program correcto: ${programCorrecto} ("${inputValues["Program"]}" vs "${requisitos["Program"]}")`);
                
                if (comidaCorrecta || programCorrecto) {
                    puntaje += 4;
                    console.log("🦴 Bakemon LT - Comida o Program correctos: +4 puntos (evolución directa)");
                } else {
                    puntaje += -10;
                    console.log("🦴 Bakemon LT - Ni muerte inducida, ni comida, ni program correctos: -10 puntos");
                }
            }
            
            bakemonLTEvaluated = true;
            
            // Para Bakemon LT, mostrar "Evaluado" en sus campos especiales
            if (["Muerte inducida sin Carne X o Program (30% de salir)", "Comida", "Program"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó Bakemon LT y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "Bakemon LT" && bakemonLTEvaluated &&
            ["Muerte inducida sin Carne X o Program (30% de salir)", "Comida", "Program"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA BAKEMON LT

        // LÓGICA ESPECIAL PARA SHOUTMON
        if (name === "Shoutmon" && !shoutmonEvaluated) {
            console.log("🔥 Evaluando Shoutmon con lógica especial");

            // Obtener valores de los campos obligatorios
            const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
            const statSuperior = inputValues["Stat Superior"] || "";

            // Verificar si cumple los requisitos obligatorios
            const entrenamientoCorrecto = porcentajeEntrenamiento >= 80;

            // Normalizar stat superior para comparación
            let statSuperiorNorm = statSuperior.toLowerCase();
            if (statSuperiorNorm.includes("spd")) {
                statSuperiorNorm = statSuperiorNorm.replace("spd", "vel");
            }
            const partesStatSuperior = statSuperiorNorm.split("/").map(p => p.trim());
            const tieneATK = partesStatSuperior.some(p => p === "atk");

            console.log(`🔥 Shoutmon - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= 80)`);
            console.log(`🔥 Shoutmon - Stat Superior contiene ATK: ${tieneATK} (${statSuperior})`);

            // Si AMBOS requisitos se cumplen, dar +2 (1 por cada campo)
            if (entrenamientoCorrecto && tieneATK) {
                puntaje += 2;
                console.log("🔥 Shoutmon - Ambos requisitos cumplidos: +2 puntos");
            } else {
                puntaje += -10;
                console.log("🔥 Shoutmon - No cumple requisitos obligatorios: -10 puntos");
            }

            shoutmonEvaluated = true;

            // Para Shoutmon, mostrar "Evaluado" en sus campos especiales
            if (["% Entrenamiento", "Stat Superior"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó Shoutmon y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "Shoutmon" && shoutmonEvaluated &&
            ["% Entrenamiento", "Stat Superior"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA SHOUTMON

        // LÓGICA ESPECIAL PARA SHOUTMON (BLACK)
        if (name === "Shoutmon (Black)" && !shoutmonBlackEvaluated) {
            console.log("🔥 Evaluando Shoutmon (Black) con lógica especial");

            // Obtener valores de los campos obligatorios
            const porcentajeEntrenamiento = Number(inputValues["% Entrenamiento"]);
            const statSuperior = inputValues["Stat Superior"] || "";

            // Verificar si cumple los requisitos obligatorios
            const entrenamientoCorrecto = porcentajeEntrenamiento >= 80;

            // Normalizar stat superior para comparación
            let statSuperiorNorm = statSuperior.toLowerCase();
            if (statSuperiorNorm.includes("spd")) {
                statSuperiorNorm = statSuperiorNorm.replace("spd", "vel");
            }
            const partesStatSuperior = statSuperiorNorm.split("/").map(p => p.trim());
            const tieneATK = partesStatSuperior.some(p => p === "atk");

            console.log(`🔥 Shoutmon (Black) - Entrenamiento: ${entrenamientoCorrecto} (${porcentajeEntrenamiento} >= 80)`);
            console.log(`🔥 Shoutmon (Black) - Stat Superior contiene ATK: ${tieneATK} (${statSuperior})`);

            // Si AMBOS requisitos se cumplen, dar +2 (1 por cada campo)
            if (entrenamientoCorrecto && tieneATK) {
                puntaje += 2;
                console.log("🔥 Shoutmon (Black) - Ambos requisitos cumplidos: +2 puntos");
            } else {
                puntaje += -10;
                console.log("🔥 Shoutmon (Black) - No cumple requisitos obligatorios: -10 puntos");
            }

            shoutmonBlackEvaluated = true;

            // Para Shoutmon (Black), mostrar "Evaluado" en sus campos especiales
            if (["% Entrenamiento", "Stat Superior"].includes(field)) {
                return `<td class="detail-column" style="display: none;">Evaluado</td>`;
            }
        }

        // Si ya se evaluó Shoutmon (Black) y es uno de sus campos especiales, no evaluar de nuevo
        if (name === "Shoutmon (Black)" && shoutmonBlackEvaluated &&
            ["% Entrenamiento", "Stat Superior"].includes(field)) {
            return `<td class="detail-column" style="display: none;">-</td>`;
        }
        // FIN LÓGICA ESPECIAL PARA SHOUTMON (BLACK)

  if (field === "Bonus") {
    // Aquí se calculan los puntos por campos de bonus
    const bonusFields = Object.keys(requisitos).filter(k => k.includes("Bonus"));
    let totalBonus = 0;

bonusFields.forEach(bonusField => {
  const esperadoBonus = requisitos[bonusField];
  const ingresadoBonus = inputValues[bonusField];
  
  if (bonusField === "Bonus Errores") {
    const ingNum = Number(inputValues["Error Maximo"]);
    if (esperadoBonus.toString().includes("+")) {
      const valorEsperado = Number(esperadoBonus.toString().replace("+", ""));
      totalBonus += (ingNum >= valorEsperado) ? 1 : 0;
    } else {
      totalBonus += (ingNum === Number(esperadoBonus)) ? 1 : 0;
    }
  } else if (bonusField === "Bonus Vinculo al momento de evolucionar") {
  const vinculoValue = document.getElementById("field_Bonus Vinculo al momento de evolucionar")?.value;
  const cleanValue = vinculoValue?.replace(/[<>=\s]/g, '') || '0';
  const ingNum = Number(cleanValue);
  
  if (esperadoBonus.toString().includes("<=")) {
    const valorEsperado = Number(esperadoBonus.toString().replace(/[<=\s]/g, ''));
    totalBonus += (ingNum <= valorEsperado) ? 1 : 0;
  } else if (esperadoBonus.toString().includes(">=")) {
    const valorEsperado = Number(esperadoBonus.toString().replace(/[>=\s]/g, ''));
    totalBonus += (ingNum >= valorEsperado) ? 1 : 0;
  } else if (esperadoBonus.toString().includes("<")) {
    const valorEsperado = Number(esperadoBonus.toString().replace(/[<\s]/g, ''));
    totalBonus += (ingNum < valorEsperado) ? 1 : 0;
  } else if (esperadoBonus.toString().includes(">")) {
    const valorEsperado = Number(esperadoBonus.toString().replace(/[>\s]/g, ''));
    totalBonus += (ingNum > valorEsperado) ? 1 : 0;
  } else {
    totalBonus += (ingNum === Number(esperadoBonus)) ? 1 : 0;
  }
} 

else if (bonusField === "Digimon Bonus") {
    const digimonBonus = selected;
    if (digimonBonus && typeof digimonBonus === 'string') {
      // Normalizar valores
      const digimonBonusNormalizado = digimonBonus.toLowerCase().trim();
      const esperadoBonusNormalizado = esperadoBonus.toLowerCase().trim();

      // Excepciones conocidas: casos donde variantes LT/MT/etc son válidas
      const excepciones = [
        { base: 'bakemon', variantes: ['bakemon lt', 'bakemon mt'] },
        { base: 'soulmon', variantes: ['soulmon lt', 'soulmon mt'] }
      ];

      let coincide = false;

      // Primero verificar coincidencia exacta
      if (digimonBonusNormalizado === esperadoBonusNormalizado) {
        coincide = true;
      } else {
        // Solo verificar excepciones si no hay coincidencia exacta
        for (const excepcion of excepciones) {
          const enVariantes = excepcion.variantes.includes(digimonBonusNormalizado) &&
                              excepcion.variantes.includes(esperadoBonusNormalizado);
          if (enVariantes) {
            coincide = true;
            break;
          }
        }
      }

      if (coincide) {
        totalBonus += 1;
        console.log(`✅ Digimon Bonus correcto: "${digimonBonus}" coincide con "${esperadoBonus}"`);
      } else {
        console.log(`❌ Digimon Bonus incorrecto: "${digimonBonus}" no coincide con "${esperadoBonus}"`);
      }
    } else {
      console.log(`⚠️ Digimon Bonus vacío o inválido`);
    }
}




else if (bonusField === "Bonus Batallas") {
    const ingNum = Number(inputValues["Combates Minimos"]);
    if (typeof esperadoBonus === "string" && esperadoBonus.includes("-")) {
      const [min, max] = esperadoBonus.split("-").map(Number);
      if (!isNaN(ingNum) && ingNum >= min && ingNum <= max) {
        totalBonus += 1;
      }
    } else {
      if (!isNaN(ingNum)) {
        if (Number(esperadoBonus) === 0) {
          if (ingNum === 0) {
            totalBonus += 1;
          }
        } else {
          if (ingNum >= esperadoBonus) {
            totalBonus += 1;
          }
        }
      }
    }
  } else if (bonusField === "Bonus WinRate") {
    const winRateNum = Number(inputValues["WinRate"]);
    if (!isNaN(winRateNum) && winRateNum >= 70) {
      totalBonus += 1;
    }
  } else if (bonusField === "Bonus WinRate") {
    const winRateNum = Number(inputValues["WinRate"]);
    if (!isNaN(winRateNum) && winRateNum >= 70) {
      totalBonus += 1;
    }
  } else if (bonusField === "Bonus Comida") {
    const digimonName = name;
    const comidaIngresada = inputValues["Comida"];

    if (specialfoodcases[digimonName] && comidaIngresada && comidaIngresada !== "Ninguno") {
        const validFood = specialfoodcases[digimonName];

        if (Array.isArray(validFood)) {
            const isValid = validFood.some(food =>
                comidaIngresada.toLowerCase() === food.toLowerCase()
            );

            if (isValid) {
                totalBonus += 1;
            }
        }
    }
} else if (bonusField === "Bonus Vinculo Alcanzado") {
    console.log("🔍 === DEBUG BONUS VINCULO ALCANZADO ===");
    console.log("inputValues disponibles:", Object.keys(inputValues));
    console.log("Valor esperado del bonus:", esperadoBonus);

    const vinculoValue = inputValues["Vinculo Minimo alcanzado"];
    console.log("Valor de 'Vinculo Minimo alcanzado' en inputValues:", vinculoValue);

    const cleanValue = vinculoValue?.toString().replace(/[<>=\s]/g, '') || '0';
    const ingNum = Number(cleanValue);
    console.log("Valor limpio:", cleanValue, "Número:", ingNum);

    if (esperadoBonus.toString().includes("<=")) {
        const valorEsperado = Number(esperadoBonus.toString().replace(/[<=\s]/g, ''));
        const cumple = ingNum <= valorEsperado;
        console.log(`Condición <=: ${ingNum} <= ${valorEsperado} = ${cumple}`);
        totalBonus += cumple ? 1 : 0;
    } else if (esperadoBonus.toString().includes(">=")) {
        const valorEsperado = Number(esperadoBonus.toString().replace(/[>=\s]/g, ''));
        const cumple = ingNum >= valorEsperado;
        console.log(`Condición >=: ${ingNum} >= ${valorEsperado} = ${cumple}`);
        totalBonus += cumple ? 1 : 0;
    } else if (esperadoBonus.toString().includes("<")) {
        const valorEsperado = Number(esperadoBonus.toString().replace(/[<\s]/g, ''));
        const cumple = ingNum < valorEsperado;
        console.log(`Condición <: ${ingNum} < ${valorEsperado} = ${cumple}`);
        totalBonus += cumple ? 1 : 0;
    } else if (esperadoBonus.toString().includes(">")) {
        const valorEsperado = Number(esperadoBonus.toString().replace(/[>\s]/g, ''));
        const cumple = ingNum > valorEsperado;
        console.log(`Condición >: ${ingNum} > ${valorEsperado} = ${cumple}`);
        totalBonus += cumple ? 1 : 0;
    } else {
        // Por defecto, usar >= para valores numéricos sin símbolo
        const valorEsperado = Number(esperadoBonus);
        const cumple = ingNum >= valorEsperado;
        console.log(`Condición >= (por defecto): ${ingNum} >= ${valorEsperado} = ${cumple}`);
        totalBonus += cumple ? 1 : 0;
    }
    console.log("Total bonus después de Bonus Vinculo Alcanzado:", totalBonus);
} else if (bonusField === "Bonus Victorias") {
    const victoriasNum = Number(inputValues["Victorias"]);
    const valorEsperado = Number(esperadoBonus);
    if (!isNaN(victoriasNum) && victoriasNum >= valorEsperado) {
      totalBonus += 1;
      console.log(`✅ Bonus Victorias: ${victoriasNum} >= ${valorEsperado}`);
    } else {
      console.log(`❌ Bonus Victorias no cumplido: ${victoriasNum} < ${valorEsperado}`);
    }
}
});
punto = totalBonus;}
	// Dentro del map, después de "Driver Equipado":
	if (name === "Pillomon" && (field === "% Entrenamiento" || field === "EntrenamientoHecho") && !pillomonEvaluated) {
	  // Caso especial para Pillomon: evaluar ambos campos juntos
	  const porcentajeEntrenamiento = inputValues["% Entrenamiento"];
	  const entrenamientoHecho = inputValues["EntrenamientoHecho"];
	  
	  const esperadoPorcentaje = requisitos["% Entrenamiento"];
	  const esperadoEntrenamiento = requisitos["EntrenamientoHecho"];
	  
	  // Verificar si ambos campos coinciden con lo esperado
	  const porcentajeCorrecto = Number(porcentajeEntrenamiento) === esperadoPorcentaje;
	  const entrenamientoCorrecto = entrenamientoHecho && entrenamientoHecho.toLowerCase() === String(esperadoEntrenamiento).toLowerCase();
	  
	  if (porcentajeCorrecto && entrenamientoCorrecto) {
		punto = 1;
	  } else {
		punto = -10;
	  }
	  
	  pillomonEvaluated = true; // Marcar como evaluado
	}
	else if (name === "Pillomon" && (field === "% Entrenamiento" || field === "EntrenamientoHecho") && pillomonEvaluated) {
	  // Ya se evaluó, no hacer nada
	  punto = 0;
	}
	else if (esperado !== undefined) {
	if (field === "Peso") {
	  // Verificar caso especial usando EvoListSpecial
	  let isSpecialCase = false;
	  if (EvoListSpecial[selected] && EvoListSpecial[selected].includes(name)) {
		isSpecialCase = true;
	  }
    if (name === "Burpmon") {
      if (ingresado == esperado) {
        // Excepción Burpmon: si peso ingresado es igual al esperado, da +30 automáticamente
        punto = 3;
      } else {
        // Si no es igual, penaliza con -10
        punto = -10;
      }
	  } else if (name === "Bakemon LT" || name === "SkullGreymon" || name === "DexDorugamon" || name === "DexDoruguremon") {
      punto = 0;
    } else if (isSpecialCase) {
		punto = 0;
	  } else if (PesoSet.has(name)) {
		punto = 0;
	  } else {
		const ingNum = Number(ingresado);
		const minPeso = esperado - 5;
		const maxPeso = esperado + 5;
		if (!isNaN(ingNum) && ingNum >= minPeso && ingNum <= maxPeso) {
		  punto = 1;
		} else {
		  punto = 0;
		}
	  }
	}

	// Error Maximo - Actualizado
else if (field === "Error Maximo") { 
	// Verificar caso especial usando EvoListSpecial 
	let isSpecialCase = false; 
	if (EvoListSpecial[selected] && EvoListSpecial[selected].includes(name)) { 
		isSpecialCase = true; 
	} 
	if (isSpecialCase) { 
		punto = 0; 
	} else if (["V-Dramon", "V-Dramon (Black)", "Aero V-dramon", "Monzaemon", "Etemon", "Aero V-dramon (Black)", "Insekimon High Tier", "Fantomon", "Digitamamon", "Grademon VICE"].includes(name)) {
		// Nuevo caso especial: penalización por error (requiere exactamente el valor esperado)
		const ingNum = Number(ingresado);
		const espNum = Number(esperado);
		if (!isNaN(ingNum) && !isNaN(espNum) && ingNum === espNum) {
			punto = 1;
		} else {
			punto = -10;
		}
	} else if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)", "Kokuwamon", "Pillomon", "Numemon", "Gotsumon", "Starmons", "GreatKingScumon", "Shoutmon", "Shoutmon (Black)"].includes(name)) {
		punto = 0; 
	} else { 
		const ingNum = Number(ingresado); 
		if (typeof esperado === "string" && esperado.includes("-")) { 
			const [min, max] = esperado.split("-").map(Number); 
			if (!isNaN(ingNum) && ingNum >= min && ingNum <= max) { 
				punto = 1; 
			} else { 
				punto = 0; 
			} 
		} else { 
			if (!isNaN(ingNum) && ingNum <= esperado) { 
				punto = 1; 
			} else { 
				punto = 0; 
			} 
		} 
	} 
}

	  else if (field === "EntrenamientoHecho") {
		if (name.toLowerCase().trim() === "pillomon") {
	    punto = 0;}
		else if (["Kokuwamon"].includes(name) && ingresado.toLowerCase() === "no") {
		punto = 1; }
		else if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)"].includes(name) && ingresado.toLowerCase() === "no") {
		punto = -10 } 
		else {
		punto = 0; 
	  }}
		else if (field === "2Ciclos") {
		  if (ingresado.toLowerCase() === esperado.toLowerCase()) {
			punto = 1;
		  } else {
			punto = -10;
		  }
		} 
    else if (fieldToEvaluate === "Stat Superior" || fieldToEvaluate === "Bonus Stat Superior") {
  console.log(`🎯 Evaluando ${fieldToEvaluate} para ${name}`);
  console.log(`  Esperado: "${esperado}"`);
  console.log(`  Ingresado: "${ingresado}"`);
  
  // Normalizar SPD -> Vel en el valor ingresado para comparación
  let ingresadoNormalizado = ingresado.toLowerCase();
  if (ingresadoNormalizado.includes("spd")) {
    ingresadoNormalizado = ingresadoNormalizado.replace("spd", "vel");
  }
  
  // Extraer partes del resultado (ej: "Balanceado / ATK" -> ["balanceado", "atk"])
  const partesIngresado = ingresadoNormalizado.split("/").map(p => p.trim());
// Verificar "balanceado" en ambos idiomas
const tieneBalanceado = partesIngresado.some(p => 
  p === "balanceado" || p === "balanced"
);
  const statPrincipal = partesIngresado.find(p => ["hp", "atk", "vel"].includes(p)) || "";
  
  console.log(`  Partes ingresadas: [${partesIngresado.join(", ")}]`);
  console.log(`  ¿Tiene balanceado? ${tieneBalanceado}`);
  console.log(`  Stat principal: "${statPrincipal}"`);
  
  // Verificar si este Digimon tiene "Stat Superior 2"
  if (requisitos["Stat Superior 2"]) {
    const esperado1 = (requisitos["Stat Superior"] || "").toLowerCase();
    const esperado2 = (requisitos["Stat Superior 2"] || "").toLowerCase();

    console.log(`  ${name} tiene Stat Superior 2`);
    console.log(`  Esperado1: "${esperado1}", Esperado2: "${esperado2}"`);

    // Verificar si alguna parte del ingresado coincide con esperado1 o esperado2
    const coincideEsperado1 = partesIngresado.some(p => p === esperado1);
    const coincideEsperado2 = partesIngresado.some(p => p === esperado2);

    if (coincideEsperado1 || coincideEsperado2) {
      punto = 1;
      console.log(`  ✅ Coincide con esperado1 o esperado2 - Punto: ${punto}`);
    } else {
      punto = 0;
      console.log(`  ❌ No coincide con ninguno - Punto: ${punto}`);
    }
  } else if (requisitos["Nivel"] === 3) {
    const esperadoLower = String(esperado).toLowerCase();
    
    // Para nivel 3, verificar si alguna parte coincide con lo esperado
    const coincide = partesIngresado.some(p => p === esperadoLower);
    
    if (coincide) {
      punto = 1;
      console.log(`  ✅ Coincide para nivel 3 - Punto: ${punto}`);
    } else {
      punto = 0;
      console.log(`  ❌ No coincide para nivel 3 - Punto: ${punto}`);
    }
  } else {
    // Para niveles distintos de 3 (nivel 4, 5, etc.)
    const esperadoLower = String(esperado).toLowerCase();

    // "Bonus Stat Superior" siempre usa puntaje +1/0
    if (fieldToEvaluate === "Bonus Stat Superior") {
      const coincide = (esperadoLower === "balanceado" || esperadoLower === "balanced")
        ? tieneBalanceado
        : partesIngresado.some(p => p === esperadoLower);
      punto = coincide ? 1 : 0;
      console.log(`  Bonus Stat Superior - ¿Coincide? ${coincide} - Punto: ${punto}`);
    } else if (esperadoLower === "balanceado" || esperadoLower === "balanced") {
      // Si se espera balanceado, debe tener "balanceado" en el resultado
      punto = tieneBalanceado ? 1 : 0;
      console.log(`  Se espera balanceado - ¿Tiene balanceado? ${tieneBalanceado} - Punto: ${punto}`);
    } else {
      // Si se espera un stat específico
      const coincide = partesIngresado.some(p => p === esperadoLower);
      punto = coincide ? 0 : -10;
      console.log(`  Se espera stat específico (${esperadoLower}) - ¿Coincide? ${coincide} - Punto: ${punto}`);
    }
  }
  
  console.log(`  Resultado final para ${name}: ${punto} puntos`);
}
			else if (field === "% Entrenamiento") {
				// Verificar si es un caso especial
				if (specialEntrenamientoCases[name]) {
					const validEntrenamiento = specialEntrenamientoCases[name];

					// Si hay un digimon seleccionado y existe un entrenamiento válido para él
					if (selected && validEntrenamiento[selected]) {
						const expectedEntrenamiento = validEntrenamiento[selected];
						const ingNum = Number(ingresado);
						if (!isNaN(ingNum) && ingNum >= expectedEntrenamiento) {
							punto = 1;
						} else {
							punto = 0;
						}
					}
				} else {
					// Código para casos normales
					const ingNum = Number(ingresado);

					if (["Pillomon","Numemon"].includes(name)) {
						punto = 0;
					} else if (typeof esperado === "string" && esperado.includes("-")) {
						// Si esperado es un rango (ej: "0-79" o "80-100")
						const [min, max] = esperado.split("-").map(Number);
						if (!isNaN(ingNum) && ingNum >= min && ingNum <= max) {
							punto = 1;
						} else {
							punto = 0;
						}
					} else if (!isNaN(ingNum) && ingNum >= esperado) {
						// Lógica normal: mayor o igual
						punto = 1;
					} else {
						punto = 0;
					}
				}
			}
		else if (field === "Vinculo Minimo alcanzado") {
		const ingNum = Number(ingresado);
		  if (["RedVDramon"].includes(name)) {
			// Condición especial para RedVDramon: debe coincidir exactamente
			if (!isNaN(ingNum) && ingNum === esperado) {
			  punto = 0;
			} else {
			  punto = -10;
			}
		  } else if (name === "Grademon VICE") {
			// Grademon VICE: requiere alcanzar vínculo negativo de -50 o menos
			if (!isNaN(ingNum) && ingNum <= esperado) {
			  punto = 1; // Cumple: alcanzó -50 o menos
			} else {
			  punto = -10; // No cumple: no alcanzó el vínculo negativo requerido
			}
		  } else {
			// Lógica normal para otros Digimon: menor que esperado = -10

			if (!isNaN(ingNum) && ingNum < esperado) {
			  punto = -10;
			} else {
			  punto = 0;
			}
		  }
		}
// WinRate - Actualizado
else if (field === "WinRate") {
    // Verificar caso especial usando EvoListSpecial
    let isSpecialCase = false;
    if (EvoListSpecial[selected] && EvoListSpecial[selected].includes(name)) {
        isSpecialCase = true;
    }

    // Caso especial Clockmon: si Combates Minimos = 0 (variante Con Bonus), WinRate da 0
    if (name === "Clockmon") {
        const combatesIngresados = Number(inputValues["Combates Minimos"]) || 0;
        if (combatesIngresados === 0) {
            isSpecialCase = true;
        }
    }

    if (isSpecialCase) {
        punto = 0;
    } else {
        const ingNum = Number(ingresado);

        // Evaluar WinRate: >= esperado da 0, < esperado da -10
        if (!isNaN(ingNum) && ingNum >= esperado) {
            punto = 0;
        } else {
            punto = -10;
        }
    }
}

// Combates Minimos - Actualizado
else if (field === "Combates Minimos") {
    // Verificar caso especial usando EvoListSpecial
    let isSpecialCase = false;
    if (EvoListSpecial[selected] && EvoListSpecial[selected].includes(name)) {
        isSpecialCase = true;
    }

    if (isSpecialCase) {
        punto = 0;
    } else {
        const ingNum = Number(ingresado);

        // Verificar si es un caso especial de batallas
        if (specialBatallasCases[name]) {
            const validBatallas = specialBatallasCases[name];

            // Si hay un digimon seleccionado y existe un valor válido para él
            if (selected && validBatallas[selected]) {
                const expectedBatallas = validBatallas[selected];
                if (!isNaN(ingNum) && ingNum >= expectedBatallas) {
                    punto = 0;
                } else {
                    punto = -10;
                }
            }
        } else {
            const bonusBatallas = requisitos["Bonus Batallas"];

            if (bonusBatallas === ingNum) {
                // Si Bonus Batallas es igual al valor ingresado
                if (!isNaN(ingNum) && ingNum === bonusBatallas) {
                    punto = 0;
                } else {
                    punto = -10;
                }
            } else {
                // Lógica normal si Bonus Batallas no es igual al valor ingresado
                if (!isNaN(ingNum) && ingNum >= esperado) {
                    punto = 0;
                } else {
                    punto = -10;
                }
            }
        }
    }
}
// CÓDIGO DE EVALUACIÓN MODIFICADO
else if (field === "Program") {
    // NUEVO: Caso especial para Mushmon
    if (["Mushmon"].includes(name)) {
        if (esperado && ingresado.toLowerCase() === esperado.toLowerCase()) {
            punto = 3;  // +3 si el program es igual
        } else {
            punto = -10; // -10 si el program es desigual
        }
    }
    // Verificar si es un caso especial
    else if (specialProgramCases[name]) {
        const validPrograms = specialProgramCases[name];
        
        // Si hay un digimon seleccionado y existe un programa válido para él
        if (selected && validPrograms[selected]) {
            const expectedProgram = validPrograms[selected];
            if (ingresado.toLowerCase() === expectedProgram.toLowerCase()) {
                punto = 0;
            } else {
                punto = -10;
            }
        }
    } else {
        // Código original para casos normales
        const excepcionesOrigen = excepcionesProgram[name] || [];
        if (
            (esperado && ingresado.toLowerCase() === esperado.toLowerCase()) ||
            excepcionesOrigen.map(e => e.toLowerCase()).includes(selected.toLowerCase())
        ) {
            punto = 0;
        } else {
            punto = -10;
        }
    }
}

	else if (field === "Victorias") {
	  const ingNum = Number(ingresado);

	  // Verificar si es un caso especial de victorias
	  if (specialVictoriasCases[name]) {
		const validVictorias = specialVictoriasCases[name];

		// Si hay un digimon seleccionado y existe un valor válido para él
		if (selected && validVictorias[selected]) {
		  const expectedVictorias = validVictorias[selected];
		  if (!isNaN(ingNum) && ingNum >= expectedVictorias) {
			punto = 0;
		  } else {
			punto = -10;
		  }
		}
	  } else {
		// Lógica normal
		if (!isNaN(ingNum) && ingNum >= esperado) {
		  punto = 0;
		} else {
		  punto = -10;
		}
	  }
	}
	else if (field === "Alcanzo vinculo negativo?") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Menos de 15 entrenamientos?") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Tienes registrado a DexDorugamon y Dorugamon?") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Tienes registrado a DexDoruguremon y Doruguremon?") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}


// CÓDIGO DE EVALUACIÓN MODIFICADO PARA XROSS
else if (field === "Xross") {
	// Verificar si es un caso especial
	if (specialxrossCases[name]) {
		const validXross = specialxrossCases[name];
		
		// Si hay un digimon seleccionado y existe un xross válido para él
		if (selected && validXross[selected]) {
			const expectedXross = validXross[selected];
			let isValid = false;
			
			// Verificar si expectedXross es un array o un string
			if (Array.isArray(expectedXross)) {
				// Si es un array, verificar si ingresado coincide con alguno de los elementos
				isValid = expectedXross.some(xross =>
					ingresado.toLowerCase() === xross.toLowerCase()
				);
			} else {
				// Si es un string, comparar directamente
				isValid = ingresado.toLowerCase() === expectedXross.toLowerCase();
			}

			if (isValid) {
				// Shoutmon SH y Shoutmon + Star Sword dan +3 puntos cuando el Xross es correcto
				if (name === "Shoutmon SH" || name === "Shoutmon + Star Sword") {
					punto = 3;
				} else {
					punto = 1; // Mantener el punto positivo para otros casos especiales
				}
			} else {
				punto = -10;
			}
		}
	} else {
	// Verificar si el name está en evonatural y si selected está en el array correspondiente
	if (evonatural.hasOwnProperty(name) && evonatural[name].includes(selected)) {
		// Si coincide ingresado con esperado
		if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
			punto = 1;
		} else {
			punto = 0;
		}
	} else if (xrossSpecialNames.has(String(name))) {
    // Case especial: cuando Penmon (origen) evoluciona
    if (selected === "Penmon") {
      if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
        // Penmon con Ice Spirit H correcto: +3 (como Xross normal)
        punto = 3;
      } else {
        // Penmon sin Ice Spirit H o Ice Spirit H incorrecto
        // Para evoluciones de hielo (Chackmon, Icemon, Yukidarumon): puede evolucionar naturalmente sin Xross
        if (name === "Chackmon" || name === "Icemon" || name === "Yukidarumon") {
          punto = 0; // Evolución natural sin Ice Spirit H
        } else {
          punto = -10; // Otras evoluciones requieren Ice Spirit H
        }
      }
    }
    // Case para childs de Spirits como Penmon (cuando Penmon es el destino)
    else if (name === "Penmon") {
      if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
        punto = 3;
      } else {
        punto = -10;
      }
    }
		// Para nombres en la lista especial: 1 si coincide, -10 si no. Case para casos de otras Xross
		else if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
			punto = 1;
		} else {
			punto = -10;
		}
	} else {
		// Código original para otros casos: 0 si coincide, -10 si no
		if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
			punto = 0;
		} else {
			punto = -10;
		}
	}
}}
// CÓDIGO DE EVALUACIÓN PARA COMIDA (SIMPLIFICADO)
else if (field === "Comida") {
    // Solo evaluación normal (casos especiales se manejan en "Bonus Comida")
    if (["Scumon"].includes(name) && ingresado.toLowerCase() === String(esperado).toLowerCase()) {
		punto = 3} 
    else if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
        punto = 0; // Sin puntos si coincide con lo esperado
    } else {
        punto = -10; // Penalización si no coincide
    }
}

	else if (field === "Driver Equipado") {
	  if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Hora") {
	  // Comparar hora ingresada con el rango esperado
	  if (!ingresado || !esperado) {
		punto = 0;
	  } else {
		// Extraer el rango de horas del requisito
		// Formato esperado: "Día (8:00-20:00 UTC-3)" o "Noche (20:00-8:00 UTC-3)"
		const regex = /(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})\s*UTC-3/;
		const match = esperado.match(regex);

		if (!match) {
		  punto = 0;
		} else {
		  const horaInicioReq = parseInt(match[1]);
		  const minInicioReq = parseInt(match[2]);
		  const horaFinReq = parseInt(match[3]);
		  const minFinReq = parseInt(match[4]);

		  // Parsear hora ingresada (formato HH:MM)
		  const [horaIngStr, minIngStr] = ingresado.split(':');
		  const horaIng = parseInt(horaIngStr);
		  const minIng = parseInt(minIngStr || 0);

		  // Convertir todo a minutos desde medianoche para comparar
		  const minutosIng = horaIng * 60 + minIng;
		  const minutosInicio = horaInicioReq * 60 + minInicioReq;
		  const minutosFin = horaFinReq * 60 + minFinReq;

		  // Verificar si está en el rango
		  let estaEnRango = false;

		  if (minutosInicio <= minutosFin) {
			// Rango normal (ej: 7:00-19:00)
			estaEnRango = minutosIng >= minutosInicio && minutosIng <= minutosFin;
		  } else {
			// Rango que cruza medianoche (ej: 19:00-7:00)
			estaEnRango = minutosIng >= minutosInicio || minutosIng <= minutosFin;
		  }

		  // Para Shoutmon y Shoutmon (Black), penalizar con -10 si no está en el rango
		  if (name === "Shoutmon" || name === "Shoutmon (Black)") {
			punto = estaEnRango ? 1 : -10;
		  } else {
			punto = estaEnRango ? 1 : 0;
		  }
		  console.log(`⏰ Hora - Ingresado: ${ingresado}, Rango: ${horaInicioReq}:${minInicioReq}-${horaFinReq}:${minFinReq}, En rango: ${estaEnRango}, Punto: ${punto}`);
		}
	  }
	}
	else if (field === "Nickname") {
	  // Evaluación para Nickname - debe coincidir exactamente
	  if (ingresado.toLowerCase().trim() === String(esperado).toLowerCase().trim()) {
		punto = 1;
	  } else {
		punto = -10;
	  }
	}


	}

      puntaje += punto;
      return `<td>${punto}</td>`;
    });

    if (selected === "Botamon" && name === "Koromon" || selected === "Chibickmon" && name === "Pickmon" || selected === "Pickmon" && name === "Starmons" || selected === "Pickmon" && name === "Gotsumon" ) {
      puntaje += 1;
    }

    // Penalización por muerte inducida sin Carne X o Program X (excepto Bakemon LT)
    const muerteInducida = inputValues["Muerte inducida sin Carne X o Program (30% de salir)"];
    if (muerteInducida && muerteInducida.toLowerCase() === "si" && name !== "Bakemon LT") {
      puntaje += -10;
      console.log(`⚠️ ${name} - Penalización por muerte inducida: -10 puntos`);
    }

    // Completar fila simple (solo puntaje)
    filaSimple += `<td><strong>${puntaje}</strong></td></tr>`;

    // Completar fila completa (puntaje + todas las celdas de detalles)
    filaCompleta += `<td><strong>${puntaje}</strong></td>` + celdas.join("") + "</tr>";

    puntajes.push({ name, puntaje, filaSimple, filaCompleta, etapa });
  });

// APLICAR LÓGICA DE NUMEMON, NANIMON Y SCUMON ANTES DEL ORDENAMIENTO
puntajes.forEach((digi, index) => {
    if (digi.name === "Numemon" || digi.name === "Nanimon" || digi.name === "Scumon") {
        // Buscar todos los digis de nivel 4, Burpmon, o sides de nivel 3
        const digisNivel4yBurpmon = puntajes.filter(d => {
            const digimonData = nextDigimons.find(([nombre, req]) => nombre === d.name);
            if (digimonData) {
                const [nombre, requisitosDigimon] = digimonData;
                // Incluir nivel 4, Burpmon, o sides de nivel 3
                const esNivel4 = requisitosDigimon["Nivel"] === 4;
                const esBurpmon = nombre === "Burpmon";
                const esSideNivel3 = SideEvolutionlist.hasOwnProperty(nombre) && SideEvolutionlist[nombre].includes(3);
                return esNivel4 || esBurpmon || esSideNivel3;
            }
            return false;
        });

        // Verifica si todos tienen puntaje menor a 3
        const todosMenorA3 = digisNivel4yBurpmon.every(d => d.puntaje < 3);

        // Buscar Scumon
        const scumon = puntajes.find(d => d.name === "Scumon");
        const scumonPuntajeMenorA0 = !scumon || scumon.puntaje < 0;

        if (todosMenorA3 && scumonPuntajeMenorA0) {

            // Función auxiliar para obtener el vínculo desde el input del formulario
            function obtenerVinculoDOM() {
                const vinculoInput = document.getElementById('field_Vinculo al momento de evolucionar');
                if (vinculoInput && vinculoInput.value.trim() !== '') {
                    return parseInt(vinculoInput.value);
                }
                return null;
            }

            // Lógica específica según el digimon
            if (digi.name === "Nanimon") {
                const vinculoEvolucion = obtenerVinculoDOM();
                const numemonIndex = puntajes.findIndex(d => d.name === "Numemon");

                if (vinculoEvolucion === -50) {
                    // Vínculo = -50: Nanimon recibe +3, Numemon recibe 0
                    puntajes[index].puntaje = 3;

                    if (numemonIndex !== -1) {
                        puntajes[numemonIndex].puntaje = 0;
                    }

                } else if (vinculoEvolucion > -50) {
                    // Vínculo > -50: Nanimon recibe -10, Numemon recibe +3
                    puntajes[index].puntaje = -10;

                    if (numemonIndex !== -1) {
                        puntajes[numemonIndex].puntaje = 3;
                    }
                }

            } else if (digi.name === "Numemon") {
                // Para Numemon, verificar si Nanimon existe
                const nanimon = puntajes.find(d => d.name === "Nanimon");

                if (nanimon) {
                    const vinculoNanimon = obtenerVinculoDOM();

                    if (vinculoNanimon === -50) {
                        // Si Nanimon tiene vínculo = -50, Numemon recibe 0
                        puntajes[index].puntaje = 0;
                    } else if (vinculoNanimon > -50) {
                        // Si Nanimon tiene vínculo > -50, Numemon recibe +3
                        puntajes[index].puntaje = 3;
                    }
                } else {
                    // Si no hay Nanimon, Numemon recibe 0
                    puntajes[index].puntaje = 0;
                }

            }
        }
    }
});

// Reconstruir filas con puntajes actualizados
puntajes.forEach((digi) => {
    // Reconstruir filaSimple con el puntaje actualizado
    digi.filaSimple = `<tr><td>${digi.name}</td><td>${digi.etapa}</td><td><strong>${digi.puntaje}</strong></td></tr>`;

    // Reconstruir filaCompleta con el puntaje actualizado
    // Necesitamos extraer las celdas de detalles de la filaCompleta original
    const match = digi.filaCompleta.match(/<td><strong>.*?<\/strong><\/td>(.*?)<\/tr>/);
    const celdasDetalles = match ? match[1] : '';
    digi.filaCompleta = `<tr><td>${digi.name}</td><td>${digi.etapa}</td><td><strong>${digi.puntaje}</strong></td>${celdasDetalles}</tr>`;
});

  // Ordenar puntajes de mayor a menor
  puntajes.sort((a, b) => b.puntaje - a.puntaje);

  // Reconstruir ambas tablas con el orden correcto
  puntajes.forEach(({ filaSimple, filaCompleta }) => {
    tablaSimple += filaSimple;
    tablaCompleta += filaCompleta;
  });

	tablaSimple += "</tbody></table></div>";
	tablaCompleta += "</tbody></table>";

	// Guardar el mensaje de evolución antes de renderizar las tablas
	const mensajeEvolucion = evolucionTexto.textContent;

	// Renderizar ambas tablas
	resultados.innerHTML = tablaSimple;
	const resultadosCompletos = document.getElementById('resultadosCompletos');
	resultadosCompletos.innerHTML = tablaCompleta;

	translateresultadosContent();

	// Agregar event listeners para ambos botones de toggle
	setTimeout(() => {
		const toggleBtn = document.getElementById('toggleDetailsBtn');
		const toggleBtn2 = document.getElementById('toggleDetailsBtn2');

		if (toggleBtn) {
			toggleBtn.addEventListener('click', function() {
				// Mostrar tabla completa, ocultar tabla simple
				resultados.style.display = 'none';
				resultadosCompletos.style.display = 'block';
			});
		}

		if (toggleBtn2) {
			toggleBtn2.addEventListener('click', function() {
				// Mostrar tabla simple, ocultar tabla completa
				resultados.style.display = 'block';
				resultadosCompletos.style.display = 'none';
			});
		}
	}, 100);

	const maxPuntaje = Math.max(...puntajes.map(d => d.puntaje));
	let mejoresDigimons;
	let specialCaseHandled = false;

// VERIFICAR CASO ESPECIAL SKULLGREYMON CON PUNTAJE 4 - AGREGADO
const skullGreymonResult = puntajes.find(d => d.name === "SkullGreymon" && d.puntaje === 4);
if (skullGreymonResult) {
    const porcentajeEntrenamiento = inputValues["% Entrenamiento"];
    const textTranslationsSkull = {
        es: `Tu digimon tiene un chance de ${porcentajeEntrenamiento}% de evolucionar a SkullGreymon.`,
        en: `Your digimon has a ${porcentajeEntrenamiento}% chance of evolving to SkullGreymon.`
    };

    evolucionTexto.textContent = textTranslationsSkull[currentLanguage];
    specialCaseHandled = true;
}

// ⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen
// La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
// VERIFICAR CASO ESPECIAL DEXDORUGAMON CON PUNTAJE 4 (Placeholder) o 6 (Side Evolution)
const dexDorugamonResult = puntajes.find(d => d.name === "DexDorugamon" && (d.puntaje === 4 || d.puntaje === 6));
if (dexDorugamonResult) {
    if (dexDorugamonResult.puntaje === 4) {
        // Desde Dorumon - Requisitos desconocidos
        const textTranslationsDex = {
            es: `⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
            en: `⚠️ WARNING: DexDorugamon requirements have changed and are currently unknown. The information shown may not be accurate.`
        };
        evolucionTexto.textContent = textTranslationsDex[currentLanguage];
    } else if (dexDorugamonResult.puntaje === 6) {
        // Desde Dorugamon - Side Evolution
        const textTranslationsSide = {
            es: `⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
            en: `⚠️ WARNING: DexDorugamon requirements have changed and are currently unknown. The information shown may not be accurate.`
        };
        evolucionTexto.textContent = textTranslationsSide[currentLanguage];
    }
    specialCaseHandled = true;
}
// FIN CASO ESPECIAL DEXDORUGAMON

// ⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen
// La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
// VERIFICAR CASO ESPECIAL DEXDORUGUREMON
const selectedNormDex = selected.toLowerCase();
// Dorugamon: puntaje 4, DexDorugamon: puntaje >= 3, Doruguremon: puntaje 5
const dexDoruguremonFromDorugamon = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje === 4 && selectedNormDex === "dorugamon");
const dexDoruguremonFromDexDorugamon = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje >= 3 && selectedNormDex === "dexdorugamon");
const dexDoruguremonFromDoruguremon = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje === 5 && selectedNormDex === "doruguremon");

if (dexDoruguremonFromDorugamon) {
    // Viene de Dorugamon - Requisitos desconocidos
    const textTranslationsDexGure = {
        es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
        en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
    };
    evolucionTexto.textContent = textTranslationsDexGure[currentLanguage];
    specialCaseHandled = true;
} else if (dexDoruguremonFromDexDorugamon) {
    // Viene de DexDorugamon - Requisitos desconocidos
    const textTranslationsDexFromDex = {
        es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
        en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
    };
    evolucionTexto.textContent = textTranslationsDexFromDex[currentLanguage];
    specialCaseHandled = true;
} else if (dexDoruguremonFromDoruguremon) {
    // Viene de Doruguremon - Requisitos desconocidos
    const textTranslationsDirect = {
        es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
        en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
    };
    evolucionTexto.textContent = textTranslationsDirect[currentLanguage];
    specialCaseHandled = true;
}
// FIN CASO ESPECIAL DEXDORUGUREMON

// VERIFICAR CASO ESPECIAL WARGREYMON DESDE METAL GREYMON (NoClaro)
const wargreymonNoClaro = puntajes.find(d => d.name === "Wargreymon" && d.puntaje === 0 && selected.toLowerCase() === "metal greymon");
if (wargreymonNoClaro) {
    const textTranslationsWargreymonNoClaro = {
        es: `⚠️ Wargreymon: Requisitos no claros desde Metal Greymon, por confirmar.`,
        en: `⚠️ Wargreymon: Requirements unclear from Metal Greymon, to be confirmed.`
    };
    evolucionTexto.textContent = textTranslationsWargreymonNoClaro[currentLanguage];
    specialCaseHandled = true;
}
// FIN CASO ESPECIAL WARGREYMON METAL GREYMON

// VERIFICAR CASO ESPECIAL BAKEMON LT CON PUNTAJE 4 - AGREGADO
const bakemonLTResult = puntajes.find(d => d.name === "Bakemon LT" && d.puntaje === 4);
if (bakemonLTResult) {
    const muerteInducida = inputValues["Muerte inducida sin Carne X o Program (30% de salir)"];

    if (muerteInducida && muerteInducida.toLowerCase() === "si") {
        // Caso de muerte inducida - 30% de probabilidad
        const textTranslationsBakemon30 = {
            es: "Tu digimon tiene un 30% de probabilidad de evolucionar a Bakemon LT.",
            en: "Your digimon has a 30% chance of evolving to Bakemon LT."
        };
        evolucionTexto.textContent = textTranslationsBakemon30[currentLanguage];
    } else {
        // Caso de comida o program correctos - evolución directa
        const textTranslationsBakemonDirect = {
            es: "Tu digimon evoluciona a Bakemon LT.",
            en: "Your digimon evolves to Bakemon LT."
        };
        evolucionTexto.textContent = textTranslationsBakemonDirect[currentLanguage];
    }

    specialCaseHandled = true;
}
// FIN CASO ESPECIAL BAKEMON LT

// VERIFICAR CASO ESPECIAL SHOUTMON SH Y SHOUTMON + STAR SWORD CON PUNTAJE 3 - AGREGADO
const shoutmonSHResult = puntajes.find(d => d.name === "Shoutmon SH" && d.puntaje === 3);
const shoutmonStarResult = puntajes.find(d => d.name === "Shoutmon + Star Sword" && d.puntaje === 3);

if (shoutmonSHResult && shoutmonStarResult) {
    // Ambos tienen puntaje 3, mostrar mensaje de 50% de probabilidad
    const textTranslationsShoutmon50 = {
        es: "Tu digimon tiene 50% de probabilidad de evolucionar en Shoutmon SH o Shoutmon + Star Sword.",
        en: "Your digimon has a 50% chance of evolving to Shoutmon SH or Shoutmon + Star Sword."
    };
    evolucionTexto.textContent = textTranslationsShoutmon50[currentLanguage];
    specialCaseHandled = true;
}
// FIN CASO ESPECIAL SHOUTMON

// VERIFICAR CASO ESPECIAL DEATH PROGRAM - NUEVO
const programIngresado = inputValues["Program"];
if (programIngresado && programIngresado.toLowerCase() === "death") {
    // Lista de digimon que evolucionan con Death
    const deathDigimons = ["Ghostmon", "Bakemon LT", "SkullGreymon", "DexDorugamon", "DexDoruguremon"];

    // Verificar si alguno de estos digimon tiene puntaje válido
    const tieneEvolucionDeathValida = puntajes.some(d => {
        const esDeathDigimon = deathDigimons.includes(d.name);
        const tienePuntajeSuficiente = d.puntaje >= 0; // Ajustar según los requisitos mínimos

        return esDeathDigimon && tienePuntajeSuficiente;
    });

    // Si NO hay evolución válida con Death, mostrar mensaje de muerte
    if (!tieneEvolucionDeathValida) {
        const textTranslationsDeath = {
            es: "Tu Digimon se muere.",
            en: "Your Digimon dies."
        };

        evolucionTexto.textContent = textTranslationsDeath[currentLanguage];
        console.log("💀 Death Program sin evolución válida - El Digimon muere");
        specialCaseHandled = true;
    }
}
// FIN CASO ESPECIAL DEATH PROGRAM

  // Traducciones para los textos a mostrar
const textTranslations = {
  es: {
    slideEvolution: "Tu Digimon va a slide evolucionar a: ",
    normalEvolution: "Tu Digimon va a evolucionar a: ",
    consultGuide: " Favor, consultar el main hub, en el apartado de Prioridades de evolución"
  },
  en: {
    slideEvolution: "Your Digimon will side evolve to: ",
    normalEvolution: "Your Digimon will evolve to: ",
    consultGuide: " Please consult the main hub, in the Evolution Priority section"
  }
};

// Funcion nueva de desempate
// Función de desempate por Digipuntos
// forzarDesempate: si es true, siempre aplica desempate (usado para casos con Program)
function desempatarPorDigipuntos(digimons, forzarDesempate = false) {
  // Si solo hay un digimon, no hay empate
  if (digimons.length <= 1) {
    return digimons;
  }

  // Si hay 3 o más digimon empatados y NO es caso de Program, retornar todos (se elige al azar)
  if (digimons.length >= 3 && !forzarDesempate) {
    console.log(`🎲 Triple empate o más (${digimons.length} digimon): ${digimons.join(", ")} - Se elige al azar`);
    return digimons;
  }

  console.log(`🎯 Aplicando desempate por Digipuntos para: ${digimons.join(", ")}`);

  // Obtener los Digipuntos de cada digimon
  const digimonsConPuntos = digimons.map(name => {
    // Buscar en digimonstattier (asumiendo que está disponible globalmente)
    const stats = digimonstattier[name];
    const digipuntos = stats?.Digipuntos || 0;

    console.log(`   ${name}: ${digipuntos} Digipuntos`);

    return {
      name: name,
      digipuntos: digipuntos
    };
  });

  // Encontrar el máximo de Digipuntos
  const maxDigipuntos = Math.max(...digimonsConPuntos.map(d => d.digipuntos));

  // Filtrar solo los que tienen el máximo de Digipuntos
  const mejoresDigimons = digimonsConPuntos
    .filter(d => d.digipuntos === maxDigipuntos)
    .map(d => d.name);

  console.log(`   ✅ Resultado del desempate: ${mejoresDigimons.join(", ")} (${maxDigipuntos} Digipuntos)`);

  return mejoresDigimons;
}

// --- EVALUACIÓN A NIVEL 2 ---
if (nextLevel === 2) {
  const burpmon = puntajes.find(d => d.name === "Burpmon" && d.puntaje >= 3);
  if (burpmon) {
    mejoresDigimons = ["Burpmon"];
    console.log("👑 Excepción: Burpmon tiene puntaje >= 3, se selecciona directamente.");
  } else {
    // Aplicar desempate por Digipuntos
    const candidatos = puntajes.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
    mejoresDigimons = desempatarPorDigipuntos(candidatos);
  }
  console.log("🧾 Resultado final:", mejoresDigimons);
}

// --- EVALUACIÓN A NIVEL 3 (CORREGIDO) ---
if (nextLevel === 3) {
  const burpmon = puntajes.find(d => d.name === "Burpmon" && d.puntaje >= 3);
  if (burpmon) {
    mejoresDigimons = ["Burpmon"];
    console.log("👑 Excepción: Burpmon tiene puntaje >= 3, se selecciona directamente.");
  } else {
    // Filtrar todos los candidatos válidos (puntaje >= 1 para nivel 3)
    const candidatosValidos = puntajes.filter(d => {
      const req = digimonReqDict[d.name];
      return req?.Nivel === 3 && d.puntaje >= 1;
    });
    
    if (candidatosValidos.length > 0) {
      // CORRECCIÓN: Programs tienen prioridad absoluta sin importar puntaje
      const conProgram = candidatosValidos.filter(d => {
        const req = digimonReqDict[d.name];
        return req.Program !== undefined;
      });
      
      if (conProgram.length > 0) {
        // Si hay Programs, elegir solo de esos (el de mayor puntaje entre Programs)
        // forzarDesempate = true porque Program siempre tiene prioridad
        const maxPuntajeProgram = Math.max(...conProgram.map(d => d.puntaje));
        const mejoresProgram = conProgram.filter(d => d.puntaje === maxPuntajeProgram);
        const candidatos = mejoresProgram.map(d => d.name);
        mejoresDigimons = desempatarPorDigipuntos(candidatos, true);
        console.log("🏆 Programs encontrados - Mejor(es) con Program:", mejoresDigimons);
      } else {
        // Si no hay Programs, aplicar lógica original por puntaje máximo
        const maxPuntajeNivel3 = Math.max(...candidatosValidos.map(d => d.puntaje));
        const conMaxPuntaje = candidatosValidos.filter(d => d.puntaje === maxPuntajeNivel3);
        const candidatos = conMaxPuntaje.map(d => d.name);
        mejoresDigimons = desempatarPorDigipuntos(candidatos);
        console.log("✅ Sin Programs - Mejor(es) por puntaje máximo:", mejoresDigimons);
      }
    } else {
      mejoresDigimons = ["Ninguno"];
      console.log("🚫 No se encontraron evoluciones válidas para Nivel 3.");
    }
  }
  console.log("🧾 Resultado final:", mejoresDigimons);
}

// --- Función de normalización ---
function normalizar(txt = "") {
  return String(txt)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// --- Calcular side evolutions válidas ---
const sideEvosValidas = puntajes.filter(d => {
  const nombreNormalizado = normalizar(d.name);
  const nivelNormalizado = normalizar(data["Nivel"]);

  const keyNormalizada = Object.keys(SideEvolutionlist)
    .find(k => normalizar(k) === nombreNormalizado);

  const nivelesPermitidos = keyNormalizada
    ? SideEvolutionlist[keyNormalizada]
    : undefined;

  return nivelesPermitidos?.some(
    nivel => normalizar(nivel) === nivelNormalizado
  ) && d.puntaje >= 0;
});

// --- EVALUACIÓN NIVEL 4 o 5 (CORREGIDO) ---
if (nextLevel === 4 || nextLevel === 5) {
 console.log(`🧪 Evaluando evoluciones para Nivel ${nextLevel}`);
 console.log("📋 Nivel actual:", data["Nivel"]);
 
 const burpmon = puntajes.find(d => d.name === "Burpmon" && d.puntaje >= 3);
 if (burpmon) {
   mejoresDigimons = ["Burpmon"];
   console.log("👑 Excepción: Burpmon tiene puntaje >= 3, se selecciona directamente.");
 } else {
   const gks = puntajes.find(d => d.name === "GreatKingScumon" && d.puntaje >= 1);
   if (gks) {
     mejoresDigimons = ["GreatKingScumon"];
     console.log("👑 Excepción: GreatKingScumon tiene puntaje >= 1, se selecciona directamente.");
   } else {
     console.log("🔍 Side Evolutions válidas encontradas:", sideEvosValidas.map(d => `${d.name} (${d.puntaje})`));
     
     if (sideEvosValidas.length > 0) {
       const maxPuntajeSide = Math.max(...sideEvosValidas.map(d => d.puntaje));
       const candidatos = sideEvosValidas.filter(d => d.puntaje === maxPuntajeSide).map(d => d.name);
       mejoresDigimons = desempatarPorDigipuntos(candidatos);
       console.log("🎯 Mejor(es) Side Evolution (con desempate):", mejoresDigimons);
     } else {
       console.log("⛔ No hay Side Evolutions válidas. Buscando evoluciones normales...");
       
       const todosLosCandidatos = puntajes.filter(d => {
         const req = digimonReqDict[d.name];
         return req?.Nivel === nextLevel && d.puntaje >= 3;
       });
       
       if (todosLosCandidatos.length > 0) {
         // PRIORIDAD 1 (MÁXIMA): Driver/Xross USADOS correctamente
         // Si el usuario usa un Xross/Driver, SOLO se consideran las evoluciones que lo aprovechan
         console.log("🔍 DEBUG: Verificando prioridad Driver/Xross");
         console.log("🔍 DEBUG: inputValues['Xross']:", inputValues["Xross"]);
         console.log("🔍 DEBUG: todosLosCandidatos:", todosLosCandidatos.map(d => `${d.name} (${d.puntaje})`));

         const usuarioUsoXross = inputValues["Xross"] && inputValues["Xross"].trim() !== "" && inputValues["Xross"] !== "Ninguno";
         const usuarioUsoDriver = inputValues["Driver Equipado"] && inputValues["Driver Equipado"].trim() !== "" && inputValues["Driver Equipado"] !== "Ninguno";

         console.log("🔍 DEBUG: usuarioUsoXross:", usuarioUsoXross);
         console.log("🔍 DEBUG: usuarioUsoDriver:", usuarioUsoDriver);

         const conDriverXrossUsado = todosLosCandidatos.filter(d => {
           const req = digimonReqDict[d.name];

           // Verificar si el usuario usó un Xross y si esta evolución lo requiere y coincide
           if (usuarioUsoXross && req["Xross"] !== undefined) {
             // Verificar si el Xross ingresado coincide con el requerido
             const xrossRequerido = req["Xross"];
             const xrossIngresado = inputValues["Xross"];

             console.log(`🔍 DEBUG: ${d.name} - Xross requerido: "${xrossRequerido}", Ingresado: "${xrossIngresado}"`);

             if (xrossRequerido.toLowerCase() === xrossIngresado.toLowerCase()) {
               console.log(`✅ ${d.name} COINCIDE con Xross - será incluido en prioridad absoluta`);
               return true; // El usuario usó el Xross correcto para esta evolución
             } else {
               console.log(`❌ ${d.name} NO coincide con Xross`);
             }
           } else {
             if (usuarioUsoXross) {
               console.log(`❌ ${d.name} no tiene requisito de Xross`);
             }
           }

           // Verificar si el usuario usó un Driver y si esta evolución lo requiere y coincide
           if (usuarioUsoDriver && req["Driver Equipado"] !== undefined) {
             const driverRequerido = req["Driver Equipado"];
             const driverIngresado = inputValues["Driver Equipado"];

             if (driverRequerido.toLowerCase() === driverIngresado.toLowerCase()) {
               console.log(`✅ ${d.name} COINCIDE con Driver - será incluido en prioridad absoluta`);
               return true; // El usuario usó el Driver correcto para esta evolución
             }
           }

           return false;
         });

         console.log("🔍 DEBUG: conDriverXrossUsado final:", conDriverXrossUsado.map(d => `${d.name} (${d.puntaje})`));

         if (conDriverXrossUsado.length > 0) {
           // Si el usuario usó un Xross/Driver y hay evoluciones que lo aprovechan, SOLO considerar esas (PRIORIDAD MÁXIMA)
           const maxPuntajeDriverXross = Math.max(...conDriverXrossUsado.map(d => d.puntaje));
           const mejoresDriverXross = conDriverXrossUsado.filter(d => d.puntaje === maxPuntajeDriverXross);
           const candidatos = mejoresDriverXross.map(d => d.name);
           mejoresDigimons = desempatarPorDigipuntos(candidatos, true);
           console.log("🏆 Driver/Xross USADOS correctamente - Mejor(es) con Driver/Xross (PRIORIDAD MÁXIMA):", mejoresDigimons);
         } else {
           // PRIORIDAD 2: Programs/excepciones (solo si NO se usó Xross/Driver)
           const conProgram = todosLosCandidatos.filter(d => {
             const req = digimonReqDict[d.name];
             const tieneProgram = req.Program !== undefined;
             const selectedNormalizado = selected.toLowerCase().trim();
             const esExcepcion = Object.entries(excepcionesProgram).some(([resultado, permitidos]) => {
               return d.name.toLowerCase().trim() === resultado.toLowerCase().trim() &&
                      permitidos.some(p => p.toLowerCase().trim() === selectedNormalizado);
             });
             return tieneProgram || esExcepcion;
           });

           if (conProgram.length > 0) {
             // Si hay Programs/excepciones, elegir solo de esos (el de mayor puntaje entre Programs)
             // forzarDesempate = true porque Program siempre tiene prioridad y debe desempatar por Digipuntos
             const maxPuntajeProgram = Math.max(...conProgram.map(d => d.puntaje));
             const mejoresProgram = conProgram.filter(d => d.puntaje === maxPuntajeProgram);
             const candidatos = mejoresProgram.map(d => d.name);
             mejoresDigimons = desempatarPorDigipuntos(candidatos, true);
             console.log("🏆 Programs/Excepciones encontrados - Mejor(es) con Program/Excepciones:", mejoresDigimons);
           } else {
             // Si no hay Driver/Xross, aplicar lógica normal: puntaje máximo
             const maxPuntajeGlobal = Math.max(...todosLosCandidatos.map(d => d.puntaje));
             const conMaxPuntaje = todosLosCandidatos.filter(d => d.puntaje === maxPuntajeGlobal);

             // Si hay 3+ candidatos empatados, mostrar todos (se elige al azar en el juego)
             if (conMaxPuntaje.length >= 3) {
               mejoresDigimons = conMaxPuntaje.map(d => d.name);
               console.log(`🎲 Triple empate o más (${conMaxPuntaje.length} digimon): ${mejoresDigimons.join(", ")} - Se elige al azar`);
             } else {
               const candidatos = conMaxPuntaje.map(d => d.name);
               mejoresDigimons = desempatarPorDigipuntos(candidatos);
               console.log("✅ Sin Programs ni Driver/Xross - Mejor(es) normal(es):", mejoresDigimons);
             }
           }
         }
       } else {
         mejoresDigimons = ["Ninguno"];
         console.log("🚫 No se encontraron evoluciones válidas con puntaje >= 3.");
       }
     }
   }
 }
 console.log("🧾 Resultado final:", mejoresDigimons);
}

// --- NIVEL 5 (desde nivel 5) ---
let sideEvosValidas5 = []; // Definido fuera para usarlo en la condición de nivel 6
if (data["Nivel"] === 5) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${data["Nivel"]}`);

  const burpmon = puntajes.find(d => d.name === "Burpmon" && d.puntaje >= 3);
  if (burpmon) {
    mejoresDigimons = ["Burpmon"];
    console.log("👑 Excepción: Burpmon tiene puntaje >= 3, se selecciona directamente.");
  } else {
    sideEvosValidas5 = puntajes.filter(d => {
      const nivelesPermitidos = SideEvolutionlist[d.name];
      const esSideValido = nivelesPermitidos?.includes(data["Nivel"]) && d.puntaje >= 0;
      console.log(`valido ${esSideValido}`)
      if (esSideValido) {
        console.log(`✅ Side Evolution válida: ${d.name} (Puntaje: ${d.puntaje})`);
      }
      return esSideValido;
    });

    if (sideEvosValidas5.length > 0) {
      const maxPuntaje5 = Math.max(...sideEvosValidas5.map(d => d.puntaje));
      const candidatos = sideEvosValidas5.filter(d => d.puntaje === maxPuntaje5).map(d => d.name);
      mejoresDigimons = desempatarPorDigipuntos(candidatos);
      console.log(`🎯 Mejor(es) Digimon(es) (Side Evolution con desempate): ${mejoresDigimons.join(", ")}`);
    } else {
      mejoresDigimons = ["Ninguno"];
      console.log("🚫 No se encontraron Side Evolutions válidas para este nivel.");
    }
  }
  console.log("🧾 Resultado final:", mejoresDigimons);
}

// --- EVALUACIÓN NIVEL 6 ---
// Solo evaluar nivel 6 si no hay side evolutions válidas de nivel 5
if (nextLevel === 6 && sideEvosValidas5.length === 0) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${nextLevel}`);
  console.log("📋 Nivel actual:", data["Nivel"]);

  const burpmon = puntajes.find(d => d.name === "Burpmon" && d.puntaje >= 3);
  if (burpmon) {
    mejoresDigimons = ["Burpmon"];
    console.log("👑 Excepción: Burpmon tiene puntaje >= 3, se selecciona directamente.");
  } else {
    const digimonNivel6 = puntajes.filter(d => {
      const req = digimonReqDict[d.name];
      return req?.Nivel === nextLevel && d.puntaje >= 2;
    });

    console.log("🔍 Digimon válidos Nivel 6 (puntaje >= 2):", digimonNivel6.map(d => `${d.name} (${d.puntaje})`));

    if (digimonNivel6.length > 0) {
      const maxPuntajeNivel6 = Math.max(...digimonNivel6.map(d => d.puntaje));
      const candidatos = digimonNivel6.filter(d => d.puntaje === maxPuntajeNivel6).map(d => d.name);
      mejoresDigimons = desempatarPorDigipuntos(candidatos);
      console.log("🏆 Mejor(es) Digimon Nivel 6 (con desempate):", mejoresDigimons);
    } else {
      mejoresDigimons = ["Ninguno"];
      console.log("🚫 No se encontraron evoluciones válidas para Nivel 6 con puntaje >= 2.");
    }
  }
  console.log("🧾 Resultado final Nivel 6:", mejoresDigimons);
} else if (nextLevel === 6 && sideEvosValidas5.length > 0) {
  console.log("⏭️ Se encontró side evolution válida de nivel 5, saltando evaluación de nivel 6.");
}

// --- Construcción del texto según idioma y resultado ---
let texto;

console.log("=== DEBUG: Construcción del mensaje ===");
console.log("specialCaseHandled:", specialCaseHandled);
console.log("mejoresDigimons:", mejoresDigimons);
console.log("sideEvosValidas:", sideEvosValidas);
console.log("sideEvosValidas5:", sideEvosValidas5);

// Verificar si mejoresDigimons está definido (solo si no es un caso especial)
if (!specialCaseHandled) {
  if (!mejoresDigimons || !Array.isArray(mejoresDigimons)) {
    console.error("❌ mejoresDigimons no está definido o no es un array:", mejoresDigimons);
    evolucionTexto.textContent = "Error: No se pudieron calcular las evoluciones.";
  } else {
    // Verificar si hay side evolutions válidas (incluyendo las de nivel 5)
    if (sideEvosValidas.length > 0 || sideEvosValidas5.length > 0) {
      const nombres = mejoresDigimons.join(", ");
      texto = textTranslations[currentLanguage]?.slideEvolution + nombres + ".";
    } else {
      const nombres = mejoresDigimons.join(", ");
      texto = textTranslations[currentLanguage]?.normalEvolution + nombres + ".";
    }

    if (mejoresDigimons.length >= 2) {
      texto += textTranslations[currentLanguage]?.consultGuide;
    }

    evolucionTexto.textContent = texto;
    console.log("✅ Mensaje de evolución asignado:", texto);
  }
}

 // Función para actualizar el texto de evolución
  function actualizarTextoEvolucion() {
    let texto;

    // MODIFICADO: Verificar primero SkullGreymon
    const skullGreymonResult = puntajes.find(d => d.name === "SkullGreymon" && d.puntaje >= 4);
    if (skullGreymonResult) {
        const porcentajeEntrenamiento = inputValues["% Entrenamiento"];
        const textTranslationsSkull = {
            es: `Tu digimon tiene un chance de ${porcentajeEntrenamiento}% de evolucionar a SkullGreymon.`,
            en: `Your digimon has a ${porcentajeEntrenamiento}% chance of evolving to SkullGreymon.`
        };

        evolucionTexto.textContent = textTranslationsSkull[currentLanguage];
        return;
    }

    // ⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen
    // La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
    // VERIFICAR CASO ESPECIAL DEXDORUGAMON CON PUNTAJE 4 (Placeholder) o 6 (Side Evolution)
    const dexDorugamonResultFunc = puntajes.find(d => d.name === "DexDorugamon" && (d.puntaje === 4 || d.puntaje === 6));
    if (dexDorugamonResultFunc) {
        if (dexDorugamonResultFunc.puntaje === 4) {
            // Desde Dorumon - Requisitos desconocidos
            const textTranslationsDex = {
                es: `⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
                en: `⚠️ WARNING: DexDorugamon requirements have changed and are currently unknown. The information shown may not be accurate.`
            };
            evolucionTexto.textContent = textTranslationsDex[currentLanguage];
        } else if (dexDorugamonResultFunc.puntaje === 6) {
            // Desde Dorugamon - Requisitos desconocidos
            const textTranslationsSide = {
                es: `⚠️ ADVERTENCIA: Los requisitos de DexDorugamon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
                en: `⚠️ WARNING: DexDorugamon requirements have changed and are currently unknown. The information shown may not be accurate.`
            };
            evolucionTexto.textContent = textTranslationsSide[currentLanguage];
        }
        return;
    }
    // FIN CASO ESPECIAL DEXDORUGAMON

    // ⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen
    // La siguiente lógica está basada en requisitos antiguos y puede no ser precisa
    // VERIFICAR CASO ESPECIAL DEXDORUGUREMON
    const selectedNormFuncDex = selected.toLowerCase();
    // Dorugamon: puntaje 4, DexDorugamon: puntaje >= 3, Doruguremon: puntaje 5
    const dexDoruguremonFromDorugamonFunc = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje === 4 && selectedNormFuncDex === "dorugamon");
    const dexDoruguremonFromDexDorugamonFunc = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje >= 3 && selectedNormFuncDex === "dexdorugamon");
    const dexDoruguremonFromDoruguremonFunc = puntajes.find(d => d.name === "DexDoruguremon" && d.puntaje === 5 && selectedNormFuncDex === "doruguremon");

    if (dexDoruguremonFromDorugamonFunc) {
        // Viene de Dorugamon - Requisitos desconocidos
        const textTranslationsDexGure = {
            es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
            en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
        };
        evolucionTexto.textContent = textTranslationsDexGure[currentLanguage];
        return;
    } else if (dexDoruguremonFromDexDorugamonFunc) {
        // Viene de DexDorugamon - Requisitos desconocidos
        const textTranslationsDexFromDex = {
            es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
            en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
        };
        evolucionTexto.textContent = textTranslationsDexFromDex[currentLanguage];
        return;
    } else if (dexDoruguremonFromDoruguremonFunc) {
        // Viene de Doruguremon - Requisitos desconocidos
        const textTranslationsDirect = {
            es: `⚠️ ADVERTENCIA: Los requisitos de DexDoruguremon han cambiado y actualmente se desconocen. La información mostrada puede no ser precisa.`,
            en: `⚠️ WARNING: DexDoruguremon requirements have changed and are currently unknown. The information shown may not be accurate.`
        };
        evolucionTexto.textContent = textTranslationsDirect[currentLanguage];
        return;
    }
    // FIN CASO ESPECIAL DEXDORUGUREMON

    // VERIFICAR CASO ESPECIAL BAKEMON LT - AGREGADO
    const bakemonLTResult = puntajes.find(d => d.name === "Bakemon LT" && d.puntaje >= 4);
    if (bakemonLTResult) {
        const muerteInducida = inputValues["Muerte inducida sin Carne X o Program (30% de salir)"];

        if (muerteInducida && muerteInducida.toLowerCase() === "si") {
            // Caso de muerte inducida - 30% de probabilidad
            const textTranslationsBakemon30 = {
                es: "Tu digimon tiene un 30% de probabilidad de evolucionar a Bakemon LT.",
                en: "Your digimon has a 30% chance of evolving to Bakemon LT."
            };
            evolucionTexto.textContent = textTranslationsBakemon30[currentLanguage];
        } else {
            // Caso de comida o program correctos - evolución directa
            const textTranslationsBakemonDirect = {
                es: "Tu digimon evoluciona a Bakemon LT.",
                en: "Your digimon evolves to Bakemon LT."
            };
            evolucionTexto.textContent = textTranslationsBakemonDirect[currentLanguage];
        }
        return;
    }

    // VERIFICAR CASO ESPECIAL SHOUTMON SH Y SHOUTMON + STAR SWORD - AGREGADO
    const shoutmonSHResult = puntajes.find(d => d.name === "Shoutmon SH" && d.puntaje === 3);
    const shoutmonStarResult = puntajes.find(d => d.name === "Shoutmon + Star Sword" && d.puntaje === 3);

    if (shoutmonSHResult && shoutmonStarResult) {
        // Ambos tienen puntaje 3, mostrar mensaje de 50% de probabilidad
        const textTranslationsShoutmon50 = {
            es: "Tu digimon tiene 50% de probabilidad de evolucionar en Shoutmon SH o Shoutmon + Star Sword.",
            en: "Your digimon has a 50% chance of evolving to Shoutmon SH or Shoutmon + Star Sword."
        };
        evolucionTexto.textContent = textTranslationsShoutmon50[currentLanguage];
        return;
    }

    // VERIFICAR CASO ESPECIAL DEATH PROGRAM - AGREGADO
    const programIngresado = inputValues["Program"];
    if (programIngresado && programIngresado.toLowerCase() === "death") {
        // Lista de digimon que evolucionan con Death
        const deathDigimons = ["Ghostmon", "Bakemon LT", "SkullGreymon", "DexDorugamon", "DexDoruguremon"];

        // Verificar si alguno de estos digimon tiene puntaje válido
        const tieneEvolucionDeathValida = puntajes.some(d => {
            const esDeathDigimon = deathDigimons.includes(d.name);
            const tienePuntajeSuficiente = d.puntaje >= 0;

            return esDeathDigimon && tienePuntajeSuficiente;
        });

        // Si NO hay evolución válida con Death, mostrar mensaje de muerte
        if (!tieneEvolucionDeathValida) {
            const textTranslationsDeath = {
                es: "Tu Digimon se muere.",
                en: "Your Digimon dies."
            };

            evolucionTexto.textContent = textTranslationsDeath[currentLanguage];
            return;
        }
    }
    // FIN CASO ESPECIAL DEATH PROGRAM

    // Verificar si mejoresDigimons está definido
    if (!mejoresDigimons || !Array.isArray(mejoresDigimons)) {
      console.error("❌ mejoresDigimons no está definido o no es un array:", mejoresDigimons);
      evolucionTexto.textContent = "Error: No se pudieron calcular las evoluciones.";
      return;
    }

    // Verificar si hay side evolutions válidas (incluyendo las de nivel 5)
    if (sideEvosValidas.length > 0 || sideEvosValidas5.length > 0) {
      const nombres = mejoresDigimons.join(", ");
      texto = textTranslations[currentLanguage].slideEvolution + nombres + ".";
    } else {
      const nombres = mejoresDigimons.join(", ");
      texto = textTranslations[currentLanguage].normalEvolution + nombres + ".";
    }

    if (mejoresDigimons.length >= 2) {
      texto += textTranslations[currentLanguage].consultGuide;
    }

    evolucionTexto.textContent = texto;
  }

  // Evento para cambiar idioma automáticamente
  languageSelector.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    actualizarTextoEvolucion();
  });

  // Llamada inicial para mostrar el texto al cargar la página
  actualizarTextoEvolucion();



});

// #endregion