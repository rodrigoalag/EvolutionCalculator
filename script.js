  // Mapeo de textos en español a claves de traducción
  const headerMappingJS = {
    'Peso': 'peso',
    'Weight': 'peso',
    'Errores': 'errores',
    'Errors': 'errores',
    '% Entrenamiento': 'entrenamiento',
    '% Training': 'entrenamiento',
    'Vínculo': 'vinculo',
    'Vinculo': 'vinculo',
    'Bond': 'vinculo',
    'Batallas': 'batallas',
    'Battles': 'batallas',
    'WinRate': 'winRate',
    '¿Realizó Entrenamiento?': 'entrenamientopregunta',
    'Did you make a training?': 'entrenamientopregunta',
    'Stat Superior': 'statsuperior',
    'Superior Stat': 'statsuperior',
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
	'Alcanzo vinculo negativo?': 'vnegativo'
	
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
    level: "Nivel"
  },
  en: {
    selectTama: "Select your Tama:",
    selectTamaDefault: "--Select Tama--",
    selectLevel: "Choose your digimon level:",
    selectLevelDefault: "--Select Level--",
    selectDigimon: "Select a Digimon:",
    selectDigimonDefault: "--Select Digimon--",
    level: "Level"
  }
};

// 2. Variables globales para los elementos
const languageSelector = document.getElementById('languageSelector');

// 3. Función para obtener texto traducido de los selects
function getSelectText(key) {
  return selectTranslations[currentLanguage][key] || selectTranslations['es'][key] || key;
}

// 4. Función para actualizar los textos de los selects
function updateSelectTexts() {
  // Actualizar labels
  if (tamaLabel) tamaLabel.textContent = getSelectText('selectTama');
  if (nivelLabel) nivelLabel.textContent = getSelectText('selectLevel');
  if (digimonLabel) digimonLabel.textContent = getSelectText('selectDigimon');
  
  // Actualizar opciones por defecto
  updateDefaultOptions();
  
  // Actualizar opciones de nivel si existen
  updateLevelOptions();
}

// 5. Función para actualizar opciones por defecto
function updateDefaultOptions() {
  // Actualizar opción por defecto del Tama
  const tamaDefaultOption = tamaSelect.querySelector('option[value=""]');
  if (tamaDefaultOption) {
    tamaDefaultOption.textContent = getSelectText('selectTamaDefault');
  }
  
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
      option.textContent = `${getSelectText('level')} ${levelNumber}`;
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
const editableFields = document.getElementById('editableFields');
const editableFieldsHeaders = document.getElementById('editableFieldsHeaders');
const resultados = document.getElementById('resultados');
const calcularBtn = document.getElementById('calcularBtn');
const evolucionTexto = document.getElementById('evolucionTexto');
const bloqueadosAGreymon = ["Agumon (Black)", "Yuki Agumon"];
const excludelist = ["ID", "Tama", "Nivel", "Stat Superior 2", "Tipo", "Atributo", "Digimon Bonus", "Bonus Batallas", "Bonus Errores", "Bonus", "Bonus WinRate"];


const bloqueosEvolucion = {
  "V-Dramon": ["Agumon", "Yuki Agumon", "Agumon (2006)", "Kokuwamon"],
  "Tuskmon": ["Agumon (Black)"],
  "Yukidarumon": ["Yuki Agumon"],
  "GeoGreymon": ["Agumon (2006)"],
  "Mametyramon": ["Mamemon"],
  "RizeGreymon":["GeoGreymon"],
  "Polarbearmon": ["Yukidarumon"],
  "Master Tyranomon": ["Tyranomon"],
  "Aero V-dramon (Black)": ["Tuskmon","Dark Tyranomon", "V-dramon (Black)"],
  "Aero V-dramon": ["Greymon","Tyranomon", "V-dramon", "Deltamon","Thunderballmon","Guardromon","Gold Guardromon","GeoGreymon","Clockmon","Yukidarumon"],
  "Geremon": ["Numemon"],
  "KaratsukiNumemon": ["Numemon"],
  "GoldNumemon": ["Numemon"],
  "Monzaemon": ["Numemon"],
  "Black King Numemon": ["Numemon"],
  "Etemon": ["Scumon","PlatinumScumon"],
  "MetalEtemon" : ["Etemon"],
  "PlatinumNumemon": ["Black King Numemon"]
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
  "WaruMonzaemon": ["GigaWaruMonzaemon"]
};
const crosstamaevo = {
"Icemon":"Yuki Agumon"}
	
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
  "Gigadramon":[5]
};

const SideandEvoList = {
  "Chackmon": ["Blizzarmon"],
  "Yuki Agumon": ["Chackmon"],
};

const excepcionesProgram = {
    "V-Dramon (Black)": ["Agumon (Black)"],
	"GeoGreymon": ["Agumon (2006)"],
	"Yukidarumon": ["Yuki Agumon"],
	"RizeGreymon": ["GeoGreymon"]
  };

const comidalistaside = ["Bellota Dorada", "Chatarra", "5 Sardinas", "5 caca","Ninguno"];


const nivelAEtapa = {
  1: "Baby I",
  2: "Baby II",
  3: "Child",
  4: "Adult",
  5: "Perfect",
  6: "Ultimate"
};

///// SELECTOR CON HTML?
// Crear el label y el select del Tama (MODIFICADO)
const tamaLabel = document.createElement("label");
tamaLabel.textContent = getSelectText('selectTama'); // Usar función de traducción
tamaLabel.setAttribute("for", "tamaSelect");

const tamaSelect = document.createElement("select");
tamaSelect.id = "tamaSelect";

const defaultTamaOption = document.createElement("option");
defaultTamaOption.value = "";
defaultTamaOption.textContent = getSelectText('selectTamaDefault'); // Usar función de traducción
tamaSelect.appendChild(defaultTamaOption);

// Obtener valores únicos de Tama (sin cambios)
const tamanosUnicos = [...new Set(Object.values(digimonReqDict).map(d => d["Tama"]))];
tamanosUnicos.forEach(tama => {
  const option = document.createElement("option");
  option.value = tama;
  option.textContent = tama;
  tamaSelect.appendChild(option);
});

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

// Crear el label para el selector de Digimon (MODIFICADO)
const digimonLabel = document.createElement("label");
digimonLabel.textContent = getSelectText('selectDigimon'); // Usar función de traducción
digimonLabel.setAttribute("for", "digimonSelect");

// Insertar los selectores en orden (sin cambios)
digimonSelect.parentNode.insertBefore(tamaLabel, digimonSelect);
digimonSelect.parentNode.insertBefore(tamaSelect, digimonSelect);
digimonSelect.parentNode.insertBefore(nivelLabel, digimonSelect);
digimonSelect.parentNode.insertBefore(nivelSelect, digimonSelect);
digimonSelect.parentNode.insertBefore(digimonLabel, digimonSelect);

// Manejar cambio en Tama (MODIFICADO)
tamaSelect.addEventListener("change", () => {
  const tamaElegido = tamaSelect.value;

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

  if (!tamaElegido) return;

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
    option.textContent = nivelAEtapa[nivel] || `${getSelectText('level')} ${nivel}`;
    nivelSelect.appendChild(option);
  });
});

let tamaElegido 
// Manejar cambio en Nivel (MODIFICADO)
nivelSelect.addEventListener("change", () => {
  const nivelElegido = parseInt(nivelSelect.value);
  tamaElegido = tamaSelect.value;

  // Limpiar digimon
  digimonSelect.innerHTML = "";

  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = getSelectText('selectDigimonDefault'); // Usar función de traducción
  digimonSelect.appendChild(defaultDigiOption);

  if (!nivelElegido || !tamaElegido) return;

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
  // Establecer idioma inicial basado en el selector
  if (languageSelector) {
    currentLanguage = languageSelector.value || 'es';
    updateSelectTexts();
  }
});

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

  const nextLevel = data["Nivel"] + 1;
  let nextDigimons = Object.entries(digimonReqDict).filter(([_, info]) => info["Nivel"] === nextLevel);
	console.log("Lista ANTES de filtrar por Tama:", nextDigimons.map(([name]) => name));
	if (tamaElegido !== "Todos") {
	  console.log(`Filtrando por Tama: ${tamaElegido}`);
	  
	  nextDigimons = nextDigimons.filter(([name, _]) => {
		// Excepción especial para Numemon - nunca eliminar
		if (name === "Numemon" || name === "Scumon") {
		  console.log(`${name} mantenido por excepción especial`);
		  return true;
		}
		
		// Buscar el digimon en digimonReqDict (mismo que usas para el select)
		const digimonData = digimonReqDict[name];
		
		if (digimonData && digimonData["Tama"]) {
		  const tamaDigimon = digimonData["Tama"];
		  console.log(`${name} tiene Tama: ${tamaDigimon}`);
		  return tamaDigimon === tamaElegido;
		}
		
		console.log(`${name} no encontrado en digimonReqDict o sin Tama`);
		return false; // Si no tiene info de Tama, no incluir
	  });
	  
	  console.log("Lista después de filtrar por Tama:", nextDigimons.map(([name]) => name));
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




		
	// Si el seleccionado tiene side evolutions definidas, las añadimos	
	console.log(`Digimon: ${selected}`);
	if (selected in SideEvolutionSelected) {
	  const sideEvos = SideEvolutionSelected[selected]; // Array de nombres de side evolutions
	  console.log(`Side evolutions encontradas:`, sideEvos); // Debug

	  // Filtrar solo los side evolutions que existen en digimonReqDict
	//  const sideDigimons = Object.entries(digimonReqDict).filter(
		//([name, _]) => sideEvos.includes(name)
	//  );
	// Función de normalización avanzada
	function normalizeDigimonName(str) {
	  return str
		.trim()                           // Eliminar espacios al inicio/final
		.toLowerCase()                    // Convertir a minúsculas
		.replace(/\s+/g, ' ')            // Múltiples espacios a uno solo
		.replace(/[^\w\s]/g, '')         // Eliminar caracteres especiales
		.replace(/\s/g, '');             // Eliminar todos los espacios (opcional)
	}

	// Filtrar solo los side evolutions que existen en digimonReqDict
	const sideDigimons = Object.entries(digimonReqDict).filter(
	  ([name, _]) => {
		const normalizedName = normalizeDigimonName(name);
		
		return sideEvos.some(sideEvo => {
		  const normalizedSideEvo = normalizeDigimonName(sideEvo);
		  const matches = normalizedName === normalizedSideEvo;
		  
		  // Debug detallado
		  console.log(`Comparando: "${name}" (${normalizedName}) vs "${sideEvo}" (${normalizedSideEvo}) = ${matches}`);
		  
		  return matches;
		});
	  }
	);

console.log(`Side digimons encontrados:`, sideDigimons.map(([name]) => name));
	  // Combinar nextDigimons y sideDigimons sin duplicados usando un Map
	  const uniqueDigimons = new Map();

	  nextDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));
	  sideDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));

	  nextDigimons = Array.from(uniqueDigimons.entries());
	}
	console.log("Lista después de añadir sides por Tama:", nextDigimons.map(([name]) => name));
	// nextDigimons ya incluye las evoluciones normales y, si aplicaba, las laterales
	  
		const sideNames = Object.keys(SideEvolutionlist);

		//Elimina las sides del mismo nivel, falta poner un excepcion para los de Nivel 5
		nextDigimons = nextDigimons.filter(([name, info]) => {
		  // Verifica si está en la lista de side evolutions
		  if (SideEvolutionlist.hasOwnProperty(name)) {
			const sideLevel = SideEvolutionlist[name][0];
			
			// Si es del mismo nivel (nivel + 1), eliminar
			if (sideLevel === (data["Nivel"] + 1)) {
			  return false;
			}
			
			// Si es de nivel más alto (nivel + 2 o más), verificar excepciones
			if (sideLevel > (data["Nivel"] + 1)) {
			  // Verificar si está en la lista de excepciones (side y evo natural)
			  if (SideandEvoList.hasOwnProperty(selected) && 
				  SideandEvoList[selected].includes(name)) {
				console.log(`Manteniendo ${name} porque ${selected} está en SideandEvoList`);
				return true; // Mantener por ser excepción
			  }
			  
			  console.log(`Eliminando side evolution de nivel superior: ${name} (nivel ${sideLevel})`);
			  return false; // Eliminar side de nivel superior
			}
		  }
		  
		  return true; // Mantiene si no está en la lista o si no aplican las condiciones
		});
 const fieldSet = new Set();
  nextDigimons.forEach(([_, info]) => {
    for (const key in info) {
      if (!excludelist.includes(key)) {
        fieldSet.add(key);
      }
    }
  });

  editableFieldsHeaders.innerHTML = "";
  editableFields.innerHTML = "";

  fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" : 
	  field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
	  field === "Combates Minimos" ? "Batallas":
	  field === "Vinculo Minimo alcanzado"?"Vinculo":
	  field;
    const th = document.createElement("th");
    th.textContent = header;
    editableFieldsHeaders.appendChild(th);
  });

fieldSet.forEach(field => {
    const sampleValue = nextDigimons.find(([_, info]) => info[field] !== undefined)?.[1][field];
    let td = document.createElement("td");

    if (typeof sampleValue === "string") {
        let opciones = [];

        if (field === "Stat Superior") {
            opciones = ["Balanceado", "ATK", "Vel", "HP"];
        } else if (field === "EntrenamientoHecho") {
            opciones = ["Si", "No"];
        } else if (field === "Program") {
            opciones = ["Virus", "Frost", "Combat", "Vaccine", "Royal", "Trash", "Ore", "Mecha", "Ninguno"];
        } else if (field === "Driver Equipado") {
            opciones = [
                "Tyranomon Driver",
                "SuperStarmon Driver",
                "DarkSuperStarmon Driver",
                "Starmon o ShootingStarmon Driver",
                "SuperStarmon y DarkSuperStarmon Driver",
                "Ninguno"
            ];
            console.log("opciones 1 de asignar:", opciones);
        } else if (field === "Comida") {
            opciones = comidalistaside;
        } else if (field === "Xross") {
            opciones = [
                "3 Mamemon Driver",
                "4 Pickmon Driver",
                "3 Monzaemon Driver en WaruMonzaemon o 3 WaruMonzaemon Driver en Monzaemon",
				"5 PlatinumNumemon Driver",
                "Ninguno"
            ];
            console.log("opciones 2 de asignar:", opciones);
        } else if (field === "2Ciclos") {
		opciones = ["Si", "No"];}
		  else if (field === "Alcanzo vinculo negativo?") {
            opciones = ["Si", "No"];
        } else {
            opciones = Array.from(new Set(nextDigimons.map(([_, info]) => info[field]).filter(v => v !== undefined)));
        }

        let select = document.createElement("select");
        select.id = `field_${field}`;

        // Agregar "--Selecciona--" si aplica
        if (field !== "Program" && field !== "Comida" && field !== "Driver Equipado" && field !== "Xross") {
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
        if (field === "Program" || field === "Comida" || field === "Driver Equipado" || field === "Xross") {
            setTimeout(() => {
                const ningunoOption = Array.from(select.options).find(opt => opt.textContent === "Ninguno");
                if (ningunoOption) {
                    ningunoOption.selected = true;
                }
            });
        }

        td.appendChild(select);
        editableFields.appendChild(td);

        // 🆕 Forzar reorganización justo después de agregar el campo
        setTimeout(() => {
            if (typeof reorganizeTableColumns === "function") {
                reorganizeTableColumns();
            }
        }, 0);

    } else {
        let input = document.createElement("input");
        input.type = field === "Vinculo Minimo alcanzado" ? "text" : "number";
        input.id = `field_${field}`;
        input.min =
            field === "Vinculo Minimo alcanzado" ? -999 :
            field === "Peso" ? 1 : 0;
        input.max =
            field === "Peso" ? 99 :
            field === "Error Maximo" ? 6 :
            (field === "% Entrenamiento" || field === "WinRate" || field === "Vinculo Minimo alcanzado") ? 100 :
            undefined;
        td.appendChild(input);
        editableFields.appendChild(td);
    }
});

}

digimonSelect.addEventListener("change", () => {
  localStorage.setItem('selectedDigimon', digimonSelect.value);
  generarFormulario();
});

editableFields.addEventListener('input', (e) => {
  if (!e.target) return;

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

// SOLUCIÓN: El problema es que input type="number" rechaza guiones automáticamente
// Necesitas cambiar el input a type="text" en el HTML

if (e.target.id === 'field_Vinculo Minimo alcanzado') {
  console.log('🔍 === INICIO VALIDACIÓN ===');
  console.log('⚡ Tipo de evento:', e.type);
  
  // IMPORTANTE: Si el input es type="number", los guiones se rechazan automáticamente
  // por el navegador ANTES de que lleguen a nuestro código
  
  let val = e.target.value;
  console.log('📝 Valor en input:', `"${val}"`);
  console.log('📝 Data del evento:', e.data);
  console.log('📝 InputType:', e.inputType);
  console.log('🔍 Input type:', e.target.type);
  
  // Si el campo es tipo "number", debemos detectar cuando se intenta escribir un guión
  if (e.target.type === 'number' && e.data === '-' && val === '') {
    console.log('🚨 DETECTADO: Intento de escribir guión en input number');
    console.log('💡 SOLUCIÓN: Cambiar el input a type="text" en el HTML');
    
    // Opción temporal: cambiar a text dinámicamente (no recomendado para producción)
    // e.target.type = 'text';
    // e.target.value = '-';
    
    alert('⚠️ Para permitir números negativos, el campo debe ser de tipo texto, no numérico');
    return;
  }
  
  // Si llegamos aquí con un valor vacío y no hay data, salir
  if (val === '' && !e.data) {
    console.log('ℹ️ Campo vacío sin datos del evento');
    return;
  }
  
  let cleanedVal = val;
  let alertMessage = '';
  
  // Resto de validaciones solo si hay contenido
  if (val !== '') {
    // Verificar dobles guiones
    console.log('🔎 Verificando dobles guiones...');
    if (val.includes('--')) {
      console.log('❌ DETECTADO: Dobles guiones');
      cleanedVal = val.replace(/--+/g, '-');
      console.log('🧹 Después de limpiar dobles guiones:', `"${cleanedVal}"`);
      alertMessage = '⚠️ No se permiten múltiples guiones';
    } else {
      console.log('✅ No hay dobles guiones');
    }
    
    // Verificar guiones en posición incorrecta
    console.log('🔎 Verificando posición de guiones...');
    const dashIndex = cleanedVal.indexOf('-');
    console.log('📍 Índice del primer guión:', dashIndex);
    
    if (dashIndex > 0) {
      console.log('❌ DETECTADO: Guión en posición incorrecta (después del inicio)');
      const originalFirstChar = val.charAt(0);
      cleanedVal = cleanedVal.replace(/-/g, '');
      if (originalFirstChar === '-') cleanedVal = '-' + cleanedVal;
      console.log('🧹 Después de corregir posición:', `"${cleanedVal}"`);
      alertMessage = '⚠️ El guion solo puede estar al inicio';
    } else if (dashIndex === 0) {
      console.log('✅ Guión en posición correcta (al inicio)');
    } else if (dashIndex === -1) {
      console.log('ℹ️ No hay guión en el valor');
    }
    
    // Verificar múltiples guiones al inicio
    console.log('🔎 Verificando múltiples guiones al inicio...');
    const multipleStartDashes = cleanedVal.match(/^-{2,}/);
    
    if (multipleStartDashes) {
      console.log('❌ DETECTADO: Múltiples guiones al inicio');
      cleanedVal = '-' + cleanedVal.replace(/^-+/, '');
      console.log('🧹 Después de limpiar múltiples guiones inicio:', `"${cleanedVal}"`);
      alertMessage = '⚠️ Solo se permite un guion al inicio';
    } else {
      console.log('✅ No hay múltiples guiones al inicio');
    }
    
    // Limpiar caracteres no numéricos
    console.log('🔎 Limpiando caracteres no numéricos...');
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
    console.log('🧹 Valor después de limpieza completa:', `"${cleanedVal}"`);
    
    // Aplicar cambios si es necesario
    if (cleanedVal !== val) {
      console.log('🔄 Aplicando valor limpio al input');
      e.target.value = cleanedVal;
      if (alertMessage) {
        console.log('🚨 Mostrando alerta:', alertMessage);
        alert(alertMessage);
      }
    }
    
    // Guardar valor anterior
    e.target.setAttribute('data-previous-value', cleanedVal);
    
    // Validar rango
    if (cleanedVal !== '' && cleanedVal !== '-') {
      const num = Number(cleanedVal);
      console.log('🔢 Validando rango:', num);
      
      if (!isNaN(num)) {
        if (num > 100) {
          console.log('❌ Valor superior a 100');
          alert('⚠️ El valor máximo permitido es 100');
          e.target.value = '100';
          e.target.setAttribute('data-previous-value', '100');
        } else if (num < -50) {
          console.log('❌ Valor inferior a -50');
          alert('⚠️ El valor mínimo permitido es -50');
          e.target.value = '-50';  
          e.target.setAttribute('data-previous-value', '-50');
        }
      }
    }
  }
  
  console.log('🏁 === FIN VALIDACIÓN ===');
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




calcularBtn.addEventListener("click", () => {
  const selected = digimonSelect.value;
  const data = digimonReqDict[selected];
  if (!data) return;

  const nextLevel = data["Nivel"] + 1;
  let nextDigimons = Object.entries(digimonReqDict).filter(([_, info]) => info["Nivel"] === nextLevel);
  
//Elimina las sides que NO están permitidas para el digimon seleccionado
nextDigimons = nextDigimons.filter(([name, info]) => {
  // Verifica si está en la lista de side evolutions
  if (SideEvolutionlist.hasOwnProperty(name)) {
    console.log(`${name} es una side evolution`);
    
    // Si el digimon seleccionado tiene side evolutions definidas
    if (selected in SideEvolutionSelected) {
      const allowedSides = SideEvolutionSelected[selected];
      
      // Solo mantener si está en la lista de sides permitidas para este digimon
      if (allowedSides.includes(name)) {
        console.log(`✓ Manteniendo ${name} porque está permitida para ${selected}`);
        return true;
      } else {
        console.log(`✗ Eliminando ${name} porque NO está permitida para ${selected}`);
        return false;
      }
    } else {
      // Si el digimon seleccionado no tiene sides definidas, eliminar todas las sides
      console.log(`✗ Eliminando ${name} porque ${selected} no tiene sides definidas`);
      return false;
    }
  }
  
  // Si no es una side evolution, mantener
  return true;
});
	// Si el seleccionado tiene side evolutions definidas, las añadimos	
	console.log(`Digimon: ${selected}`);
	if (selected in SideEvolutionSelected) {
	  const sideEvos = SideEvolutionSelected[selected]; // Array de nombres de side evolutions
	  console.log(`Side evolutions encontradas:`, sideEvos); // Debug

	  // Filtrar solo los side evolutions que existen en digimonReqDict
	//  const sideDigimons = Object.entries(digimonReqDict).filter(
		//([name, _]) => sideEvos.includes(name)
	//  );
	// Función de normalización avanzada
	function normalizeDigimonName(str) {
	  return str
		.trim()                           // Eliminar espacios al inicio/final
		.toLowerCase()                    // Convertir a minúsculas
		.replace(/\s+/g, ' ')            // Múltiples espacios a uno solo
		.replace(/[^\w\s]/g, '')         // Eliminar caracteres especiales
		.replace(/\s/g, '');             // Eliminar todos los espacios (opcional)
	}

	// Filtrar solo los side evolutions que existen en digimonReqDict
	const sideDigimons = Object.entries(digimonReqDict).filter(
	  ([name, _]) => {
		const normalizedName = normalizeDigimonName(name);
		
		return sideEvos.some(sideEvo => {
		  const normalizedSideEvo = normalizeDigimonName(sideEvo);
		  const matches = normalizedName === normalizedSideEvo;
		  
		  // Debug detallado
		  console.log(`Comparando: "${name}" (${normalizedName}) vs "${sideEvo}" (${normalizedSideEvo}) = ${matches}`);
		  
		  return matches;
		});
	  }
	);

console.log(`Side digimons encontrados:`, sideDigimons.map(([name]) => name));
	  // Combinar nextDigimons y sideDigimons sin duplicados usando un Map
	  const uniqueDigimons = new Map();

	  nextDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));
	  sideDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));

	  nextDigimons = Array.from(uniqueDigimons.entries());
	}
	console.log("Lista después de añadir sides por Tama:", nextDigimons.map(([name]) => name));
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

// CASO 1: Filtrado por Tama
if (!tieneExcepcionAbsoluta && tamaElegido !== "Todos") {
  console.log(`Filtrando por Tama: ${tamaElegido}`);
  
  nextDigimons = nextDigimons.filter(([name, _]) => {
    // Excepción especial para Numemon - nunca eliminar
    if (name === "Numemon" || name === "Scumon") {
      console.log(`${name} mantenido por excepción especial`);
      return true;
    }
    
    // Buscar el digimon en digimonReqDict (mismo que usas para el select)
    const digimonData = digimonReqDict[name];
    
    if (digimonData && digimonData["Tama"]) {
      const tamaDigimon = digimonData["Tama"];
      console.log(`${name} tiene Tama: ${tamaDigimon}`);
      return tamaDigimon === tamaElegido;
    }
    
    console.log(`${name} no encontrado en digimonReqDict o sin Tama`);
    return false; // Si no tiene info de Tama, no incluir
  });
  
  console.log("Lista después de filtrar por Tama:", nextDigimons.map(([name]) => name));
}

// CASO 2: Cross Tama Evolution
if (!tieneExcepcionAbsoluta) {
  console.log(`Verificando Cross Tama Evolution para: ${selected}`);
  
  // Buscar si el digimon actual puede hacer cross tama evolution
  const crossEvosDisponibles = [];
  
  for (const [crossEvoTarget, crossEvoSource] of Object.entries(crosstamaevo)) {
    const sourceNormalizado = crossEvoSource.toLowerCase().trim();
    const selectedNormalizado = selected.toLowerCase().trim();
    
    if (sourceNormalizado === selectedNormalizado) {
      console.log(`Cross Tama Evo encontrada: ${selected} puede evolucionar a ${crossEvoTarget}`);
      crossEvosDisponibles.push(crossEvoTarget);
    }
  }
  
  // Si hay cross evolutions disponibles, agregarlas a nextDigimons
  if (crossEvosDisponibles.length > 0) {
    crossEvosDisponibles.forEach(crossEvoName => {
      // Verificar si ya está en la lista
      const yaExiste = nextDigimons.some(([name, _]) => 
        name.toLowerCase().trim() === crossEvoName.toLowerCase().trim()
      );
      
      if (!yaExiste) {
        // Buscar los requisitos del cross evo target en digimonReqDict
        const crossEvoData = digimonReqDict[crossEvoName];
        if (crossEvoData) {
          // Crear requisitos básicos para cross evo
          const crossEvoRequisitos = {
            "Nivel": crossEvoData["Nivel"] || 0,
            "Atributo": crossEvoData["Atributo"] || "",
            "Tipo": crossEvoData["Tipo"] || "",
            "CrossTamaEvo": true // Marcar como cross tama evolution
          };
          
          nextDigimons.push([crossEvoName, crossEvoRequisitos]);
          console.log(`Agregado Cross Tama Evo: ${crossEvoName}`);
        }
      }
    });
    
    console.log("Lista después de agregar Cross Tama Evolutions:", nextDigimons.map(([name]) => name));
  }
}


console.log("Lista después del filtro de bloqueos:", nextDigimons.map(([name]) => name));
fieldSet = new Set();
let hayBonus = false;

nextDigimons.forEach(([_, info]) => {
  for (const key in info) {
    if (!["ID", "Tama", "Nivel", "Tipo", "Atributo", "Stat Superior 2"].includes(key)) {
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
    let val = element ? element.value.trim() : "";
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

    inputValues[field] = val;
  });

  if (camposIncompletos.length > 0) {
    alert("Por favor, completa todos los campos antes de calcular.");
    return;
  }

let tabla = "<table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><thead><tr>" +
            `<th data-translate='digimon'>${translate('digimon')}</th>` +
            `<th data-translate='etapa'>${translate('etapa')}</th>` +
            `<th data-translate='puntaje'>${translate('puntaje')}</th>`;

fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" : 
      field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
      field === "Combates Minimos" ? "Batallas":
      field === "Vinculo Minimo alcanzado"?"Vinculo":
      field;
    
    const translateKey = headerMappingJS[header] || header.toLowerCase();
    const translatedHeader = translate(translateKey);
    tabla += `<th data-translate="${translateKey}">${translatedHeader}</th>`;
});
  tabla += "</tr></thead><tbody>";

  let puntajes = [];
nextDigimons.forEach(([name, requisitos]) => {
    let puntaje = 0;
    let etapa = nivelAEtapa[requisitos["Nivel"]] || "Desconocida";
    let fila = `<tr><td>${name}</td><td>${etapa}</td>`;

// Agregar esta variable ANTES del map
let pillomonEvaluated = false;

const celdas = Array.from(fieldSet).map(field => {
  const esperado = requisitos[field];
  const ingresado = inputValues[field];
  let punto = 0;

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
} else if (bonusField === "Digimon Bonus") {
    const digimonBonus = selected;
    if (digimonBonus && typeof digimonBonus === 'string') {
      // Normalizar ambos valores para comparación
      const digimonBonusNormalizado = digimonBonus.toLowerCase().trim();
      const esperadoBonusNormalizado = esperadoBonus.toLowerCase().trim();
      
      if (digimonBonusNormalizado === esperadoBonusNormalizado) {
        totalBonus += 1;
        console.log(`✅ Digimon Bonus correcto: "${digimonBonus}" coincide con "${esperadoBonus}"`);
      } else {
        console.log(`❌ Digimon Bonus incorrecto: "${digimonBonus}" no coincide con "${esperadoBonus}"`);
      }
    } else {
      console.log(`⚠️ Digimon Bonus vacío o inválido`);
    }
  } else if (bonusField === "Bonus Batallas") {
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
		if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)","Kokuwamon","Pillomon", "Numemon","Daipenmon","Mugendramon","MetalEtemon", "PlatinumNumemon"].includes(name)) {
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

	else if (field === "Error Maximo") {
	  const ingNum = Number(ingresado);
	  if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)","Kokuwamon","Pillomon","Numemon"].includes(name)) {
	  punto = 0;}
	  else if (typeof esperado === "string" && esperado.includes("-")) {
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
		} else if (field === "Stat Superior") {
			  if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)"].includes(name)) {
				const esperado1 = requisitos["Stat Superior"] || "";
				const esperado2 = requisitos["Stat Superior 2"] || "";
				if (
				  ingresado.toLowerCase() === esperado1.toLowerCase() ||
				  ingresado.toLowerCase() === esperado2.toLowerCase()
				) {
				  punto = 1;
				} else {
				  punto = 0;
				}
			  } else if (requisitos["Nivel"] === 3) {
				if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
				  punto = 1;
				} else {
				  punto = 0;
				}
			  } else {
				// Para niveles distintos de 3 (nivel 4, 5, etc.)
				if (String(esperado).toLowerCase() === "balanceado") {
				  punto = (ingresado.toLowerCase() === "balanceado") ? 1 : 0;
				} else {
				  punto = (ingresado.toLowerCase() === String(esperado).toLowerCase()) ? 0 : -10;
				}
			  }
			}
	  else if (field === "% Entrenamiento") {
		  const ingNum = Number(ingresado);
		  if (["Pillomon","Numemon"].includes(name)) {
		  punto = 0;}
		  else if (!isNaN(ingNum) && ingNum >= esperado) {
			punto = 1;
		  } else {
			punto = 0;
	  }}
		else if (field === "Vinculo Minimo alcanzado") {
		const ingNum = Number(ingresado);
		  if (["RedVDramon"].includes(name)) {
			// Condición especial para RedVDramon: debe coincidir exactamente
			if (!isNaN(ingNum) && ingNum === esperado) {
			  punto = 0;
			} else {
			  punto = -10;
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
		else if (field === "WinRate") {
		  const ingNum = Number(ingresado);
		  const bonusBatallas = requisitos["Bonus Batallas"];
		  const combatesMinimosInput = Number(inputValues["Combates Minimos"]);

		  if (!isNaN(bonusBatallas) && !isNaN(combatesMinimosInput) && bonusBatallas === combatesMinimosInput) {
			punto = 0;
		  } else {
			if (!isNaN(ingNum) && ingNum >= esperado) {
			  punto = 0;
			} else {
			  punto = -10;
			}
		  }
		} else if (field === "Combates Minimos") {
	  const ingNum = Number(ingresado);
	  const bonusBatallas = requisitos["Bonus Batallas"];

	  if (bonusBatallas === ingNum) {
		// Si Bonus Batallas es 0, comparar directamente con ese valor
		if (!isNaN(ingNum) && ingNum === bonusBatallas) {
		  punto = 0;
		} else {
		  punto = -10;
		}
	  } else {
		// Lógica normal si Bonus Batallas no es 0
		if (!isNaN(ingNum) && ingNum >= esperado) {
		  punto = 0;
		} else {
		  punto = -10;
		}
	  }
	}
	  else if (field === "Program") {
		const excepcionesOrigen = excepcionesProgram[name] || [];

		  if (
			ingresado.toLowerCase() === esperado.toLowerCase() ||
			excepcionesOrigen.map(e => e.toLowerCase()).includes(selected.toLowerCase())
		  ) {
			punto = 0;
		  } else {
			punto = -10;
		  }
		}
	else if (field === "Comida") {
	  if (["Scumon"].includes(name)) {
		if (ingresado.toLowerCase() === esperado.toLowerCase()) {
		  punto = 3;
		} else {
		  punto = -10;
		}
	  } else if (ingresado.toLowerCase() === esperado.toLowerCase()) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}

	else if (field === "Victorias") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Alcanzo vinculo negativo?") {
	  if (ingresado === esperado) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}
	else if (field === "Xross") {
	  if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}

	else if (field === "Driver Equipado") {
	  if (ingresado.toLowerCase() === String(esperado).toLowerCase()) {
		punto = 0;
	  } else {
		punto = -10;
	  }
	}


	}

      puntaje += punto;
      return `<td>${punto}</td>`;
    });

    if (selected === "Botamon" && name === "Koromon") {
      puntaje += 3;
    }

    fila += `<td><strong>${puntaje}</strong></td>` + celdas.join("");
    tabla += fila + "</tr>";
    puntajes.push({ name, puntaje });
  });
  

	tabla += "</tbody></table>";
	resultados.innerHTML = tabla;
	translateresultadosContent();
	// AQUÍ es donde debes colocar tu lógica de Numemon
puntajes.forEach((digi, index) => {
    if (digi.name === "Numemon") {
        // Buscar todos los digis de nivel 4
        const digisNivel4 = puntajes.filter(d => {
            const digimonData = nextDigimons.find(([nombre, req]) => nombre === d.name);
            if (digimonData) {
                const [nombre, requisitosDigimon] = digimonData;
                return requisitosDigimon["Nivel"] === 4;
            }
            return false;
        });

        // Verifica si todos tienen puntaje menor a 3
        const todosMenorA3 = digisNivel4.every(d => d.puntaje < 3);

        // Buscar Scumon
        const scumon = puntajes.find(d => d.name === "Scumon");
        const scumonPuntajeMenorA0 = !scumon || scumon.puntaje < 0;

        if (todosMenorA3 && scumonPuntajeMenorA0) {
            // Asigna puntaje a Numemon
            puntajes[index].puntaje = 3;

            // Actualiza HTML
            const numemonRow = Array.from(document.querySelectorAll('tr')).find(row => {
                const firstCell = row.querySelector('td');
                return firstCell && firstCell.textContent.trim() === "Numemon";
            });
            if (numemonRow) {
                const scoreCell = numemonRow.querySelector('td strong');
                if (scoreCell) {
                    scoreCell.textContent = '3';
                }
            }
        }
    }
});

	const maxPuntaje = Math.max(...puntajes.map(d => d.puntaje));
	let mejoresDigimons;
	
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

// --- Tu código original adaptado ---

// Evaluacion a Nivel 2
if (nextLevel === 2) {
  mejoresDigimons = puntajes.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
}

// Evaluacion a Nivel 3
const conProgramPositivos = puntajes.filter(d => {
  const req = digimonReqDict[d.name];
  return req && req.Program !== undefined && req.Nivel === 3 && d.puntaje >= 2;
});

if (nextLevel === 3) {
  if (conProgramPositivos.length > 0) {
    const maxPuntajeProgram = Math.max(...conProgramPositivos.map(d => d.puntaje));
    mejoresDigimons = conProgramPositivos.filter(d => d.puntaje === maxPuntajeProgram).map(d => d.name);
  } else {
    mejoresDigimons = puntajes.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
  }
}

// --- utilitario de normalización -------------
function normalizar(txt = "") {
  return String(txt)                     // asegura que sea texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");    // quita tildes
}
// ---------------------------------------------

const sideEvosValidas = puntajes.filter(d => {
  const nombreNormalizado = normalizar(d.name);

  const nivelNormalizado = normalizar(data["Nivel"]);   // o data.Nivel

  // Buscamos la clave equivalente dentro de SideEvolutionlist
  const keyNormalizada = Object.keys(SideEvolutionlist)
    .find(k => normalizar(k) === nombreNormalizado);

  const nivelesPermitidos = keyNormalizada
    ? SideEvolutionlist[keyNormalizada]
    : undefined;

  return nivelesPermitidos?.some(
           nivel => normalizar(nivel) === nivelNormalizado
         ) && d.puntaje >= 0;
});

// Evaluación Nivel 4 o 5
if (nextLevel === 4 || nextLevel === 5) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${nextLevel}`);
  console.log("📋 Nivel actual:", data["Nivel"]);

  console.log("🔍 Side Evolutions válidas encontradas:", sideEvosValidas.map(d => `${d.name} (${d.puntaje})`));

  if (sideEvosValidas.length > 0) {
    const maxPuntajeSide = Math.max(...sideEvosValidas.map(d => d.puntaje));
    mejoresDigimons = sideEvosValidas.filter(d => d.puntaje === maxPuntajeSide).map(d => d.name);
    console.log("🎯 Mejor(es) Side Evolution:", mejoresDigimons);
  } else {
    console.log("⛔ No hay Side Evolutions válidas. Buscando evoluciones normales...");

    const conProgram = puntajes.filter(d => {
      const req = digimonReqDict[d.name];
      return req?.Nivel === nextLevel && req.Program !== undefined && d.puntaje >= 3;
    });

    console.log("🔍 Digimon válidos con Program:", conProgram.map(d => `${d.name} (${d.puntaje})`));

// Combinar digimons con Program y excepciones de Program (misma prioridad)
const conProgramYExcepciones = [
  ...conProgram.filter(d => d.puntaje >= 3), // Program ya está filtrado correctamente
  ...puntajes.filter(d => {
    const req = digimonReqDict[d.name];
    if (req?.Nivel !== nextLevel || d.puntaje < 3) return false;
    
    // Normalizar selected para comparación
    const selectedNormalizado = selected.toLowerCase().trim();
    
    // Verificar si el digimon está en excepciones Program
    return Object.entries(excepcionesProgram).some(([resultado, permitidos]) => {
      // Normalizar el nombre del resultado
      const resultadoNormalizado = resultado.toLowerCase().trim();
      const nombreDigimonNormalizado = d.name.toLowerCase().trim();
      
      // Si coincide el nombre del digimon resultado
      if (nombreDigimonNormalizado === resultadoNormalizado) {
        // Verificar si el selected está en la lista de permitidos (normalizado)
        return permitidos.some(permitido => 
          permitido.toLowerCase().trim() === selectedNormalizado
        );
      }
      return false;
    });
  })
];

console.log("🔍 Evaluando Program y excepciones Program (puntaje >= 3):", conProgramYExcepciones.map(d => `${d.name} (${d.puntaje})`));

if (conProgramYExcepciones.length > 0) {
  const maxPuntajePrioridad = Math.max(...conProgramYExcepciones.map(d => d.puntaje));
  mejoresDigimons = conProgramYExcepciones.filter(d => d.puntaje === maxPuntajePrioridad).map(d => d.name);
  console.log("🏆 Mejor(es) con Program/Excepciones Program:", mejoresDigimons);
} else {
  // Si no hay Program ni excepciones, evaluar sin Program
  const sinProgram = puntajes.filter(d => {
    const req = digimonReqDict[d.name];
    return req?.Nivel === nextLevel && d.puntaje >= 3;
  });
  
  console.log("🔍 Digimon válidos sin Program (puntaje >= 3):", sinProgram.map(d => `${d.name} (${d.puntaje})`));
  
  if (sinProgram.length > 0) {
    const maxPuntajeSinProgram = Math.max(...sinProgram.map(d => d.puntaje));
    mejoresDigimons = sinProgram.filter(d => d.puntaje === maxPuntajeSinProgram).map(d => d.name);
    console.log("✅ Mejor(es) sin Program:", mejoresDigimons);
  } else {
    mejoresDigimons = ["Ninguno"];
    console.log("🚫 No se encontraron evoluciones válidas con puntaje >= 3.");
  }
}
	}

  console.log("🧾 Resultado final:", mejoresDigimons);
}

// Nivel 5
if (data["Nivel"] === 5) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${data["Nivel"]}`);

  const sideEvosValidas5 = puntajes.filter(d => {
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
    mejoresDigimons = sideEvosValidas5.filter(d => d.puntaje === maxPuntaje5).map(d => d.name);
    console.log(`🎯 Mejor(es) Digimon(es) (Side Evolution): ${mejoresDigimons.join(", ")}`);
  } else {
    mejoresDigimons = ["Ninguno"];
    console.log("🚫 No se encontraron Side Evolutions válidas para este nivel.");
  }
}

// Evaluación Nivel 6
if (nextLevel === 6) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${nextLevel}`);
  console.log("📋 Nivel actual:", data["Nivel"]);

  // Filtrar Digimon del nivel 6 con puntaje >= 3
  const digimonNivel6 = puntajes.filter(d => {
    const req = digimonReqDict[d.name];
    return req?.Nivel === nextLevel && d.puntaje >= 2;
  });

  console.log("🔍 Digimon válidos Nivel 6 (puntaje >= 3):", digimonNivel6.map(d => `${d.name} (${d.puntaje})`));

  if (digimonNivel6.length > 0) {
    const maxPuntajeNivel6 = Math.max(...digimonNivel6.map(d => d.puntaje));
    mejoresDigimons = digimonNivel6.filter(d => d.puntaje === maxPuntajeNivel6).map(d => d.name);
    console.log("🏆 Mejor(es) Digimon Nivel 6:", mejoresDigimons);
  } else {
    mejoresDigimons = ["Ninguno"];
    console.log("🚫 No se encontraron evoluciones válidas para Nivel 6 con puntaje >= 3.");
  }

  console.log("🧾 Resultado final Nivel 6:", mejoresDigimons);
}

// --- Construcción del texto según idioma y resultado ---
let texto;

if (sideEvosValidas.length > 0) {
  const nombres = mejoresDigimons.join(", ");
  texto = textTranslations[currentLanguage]?.slideEvolution + nombres + ".";
} else {
  const nombres = mejoresDigimons.join(", ");
  texto = textTranslations[currentLanguage]?.normalEvolution + nombres + ".";
}

if (mejoresDigimons.length >= 2) {
  texto += textTranslations[currentLanguage]?.consultGuide;
}

 // Función para actualizar el texto de evolución
  function actualizarTextoEvolucion() {
    let texto;
    if (sideEvosValidas.length > 0) {
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
