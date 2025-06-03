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
	'Xross': 'xross'
	
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
  "Agumon (Black)": ["Greymon", "V-Dramon", "GeoGreymon", "Yukidarumon"],
  "Yuki Agumon": ["Greymon", "GeoGreymon", "Tuskmon"],
  "Kokuwamon": ["GeoGreymon", "Tuskmon", "Yukidarumon"],
  "Agumon": ["GeoGreymon", "Tuskmon", "Yukidarumon"],
  "Agumon (2006)": ["Tuskmon", "Yukidarumon"],
  "RedVdramon": ["Metal Greymon (Virus)", "Andromon", "Mametyramon", "Aero V-dramon", "Metal Tyranomon", "MetalMamemon", "Megadramon", "Metal Greymon",
  "Mamemon", "MetalGreymon Alterous", "Triceramon", "BigMamemon", "RizeGreymon", "Polarbearmon", "Master Tyranomon"],
  "Tyranomon": ["Mametyramon","RizeGreymon","PolarBearmon","Aero V-dramon (Black)"],
  "Dark Tyranomon": ["Mametyramon","RizeGreymon","PolarBearmon","Master Tyranomon"],
  "V-dramon": ["Mametyramon","RizeGreymon","PolarBearmon","Master Tyranomon"],
  "Deltamon": ["Mametyramon","RizeGreymon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "Thunderballmon": ["RizeGreymon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "Guardromon": ["Mametyramon","RizeGreymon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "V-dramon (Black)": ["Mametyramon","RizeGreymon","PolarBearmon","Master Tyranomon"],
  "GoldGuardromon": ["Mametyramon","RizeGreymon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "GeoGreymon": ["Mametyramon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "Clockmon": ["Mametyramon","RizeGreymon","PolarBearmon","Aero V-dramon (Black)","Master Tyranomon"],
  "Tuskmon": ["Mametyramon","RizeGreymon","PolarBearmon","Master Tyranomon"],
  "Yukidarumon": ["Mametyramon","RizeGreymon","Aero V-dramon (Black)","Master Tyranomon"]
};
const SideEvolutionSelected = {
  "Tyranomon": ["Dark Tyranomon"],
  "Guardromon": ["GoldGuardromon"],
  "V-Dramon": ["RedVdramon"],
  "Metal Greymon": ["MetalGreymon Alterous"],
  "Mamemon": ["BigMamemon","MetalMamemon"]
};

const SideEvolutionlist = {
  "Dark Tyranomon": [4],
  "GoldGuardromon": [4],
  "RedVDramon": [4],
  "MetalGreymon Alterous": [5],
  "BigMamemon": [5],
  "MetalMamemon":[5],
  "Gigadramon":[6]
};

const excepcionesProgram = {
    "V-Dramon (Black)": ["Agumon (Black)"],
	"GeoGreymon": ["Agumon (2006)"],
	"Yukidarumon": ["Yuki Agumon"],
	"RizeGreymon": ["GeoGreymon"]
  };

const comidalistaside = ["Bellota Dorada", "Chatarra", "5 Sardinas", "Ninguno"];


const nivelAEtapa = {
  1: "Baby I",
  2: "Baby II",
  3: "Child",
  4: "Adult",
  5: "Perfect"
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


// Manejar cambio en Nivel (MODIFICADO)
nivelSelect.addEventListener("change", () => {
  const nivelElegido = parseInt(nivelSelect.value);
  const tamaElegido = tamaSelect.value;

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
///original

/*
// Crear el label y el select del Tama
const tamaLabel = document.createElement("label");
tamaLabel.textContent = "Selecciona tu Tama:";
tamaLabel.setAttribute("for", "tamaSelect");

const tamaSelect = document.createElement("select");
tamaSelect.id = "tamaSelect";

const defaultTamaOption = document.createElement("option");
defaultTamaOption.value = "";
defaultTamaOption.textContent = "--Selecciona Tama--";
tamaSelect.appendChild(defaultTamaOption);

// Obtener valores únicos de Tama
const tamanosUnicos = [...new Set(Object.values(digimonReqDict).map(d => d["Tama"]))];
tamanosUnicos.forEach(tama => {
  const option = document.createElement("option");
  option.value = tama;
  option.textContent = tama;
  tamaSelect.appendChild(option);
});

// Crear el label y select del nivel
const nivelLabel = document.createElement("label");
nivelLabel.textContent = "Escoge el nivel de tu digimon:";
nivelLabel.setAttribute("for", "nivelSelect");

const nivelSelect = document.createElement("select");
nivelSelect.id = "nivelSelect";

const defaultNivelOption = document.createElement("option");
defaultNivelOption.value = "";
defaultNivelOption.textContent = "--Selecciona Nivel--";
nivelSelect.appendChild(defaultNivelOption);

// Crear el label para el selector de Digimon
const digimonLabel = document.createElement("label");
digimonLabel.textContent = "Selecciona un Digimon:";
digimonLabel.setAttribute("for", "digimonSelect");

// Insertar los selectores en orden
digimonSelect.parentNode.insertBefore(tamaLabel, digimonSelect);
digimonSelect.parentNode.insertBefore(tamaSelect, digimonSelect);
digimonSelect.parentNode.insertBefore(nivelLabel, digimonSelect);
digimonSelect.parentNode.insertBefore(nivelSelect, digimonSelect);
digimonSelect.parentNode.insertBefore(digimonLabel, digimonSelect);

// Manejar cambio en Tama
tamaSelect.addEventListener("change", () => {
  const tamaElegido = tamaSelect.value;

  // Limpiar nivel y digimon
  nivelSelect.innerHTML = "";
  digimonSelect.innerHTML = "";

  const defaultNivelOption = document.createElement("option");
  defaultNivelOption.value = "";
  defaultNivelOption.textContent = "--Selecciona Nivel--";
  nivelSelect.appendChild(defaultNivelOption);

  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = "--Selecciona Digimon--";
  digimonSelect.appendChild(defaultDigiOption);

  if (!tamaElegido) return;

  // Filtrar niveles disponibles para ese Tama
  const nivelesFiltrados = [...new Set(
    Object.values(digimonReqDict)
      .filter(d => d.Tama === tamaElegido)
      .map(d => d.Nivel)
  )];

  nivelesFiltrados.sort((a, b) => a - b);
  nivelesFiltrados.forEach(nivel => {
    const option = document.createElement("option");
    option.value = nivel;
    option.textContent = `Nivel ${nivel}`;
    nivelSelect.appendChild(option);
  });
});

// Manejar cambio en Nivel
nivelSelect.addEventListener("change", () => {
  const nivelElegido = parseInt(nivelSelect.value);
  const tamaElegido = tamaSelect.value;

  // Limpiar digimon
  digimonSelect.innerHTML = "";

  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = "--Selecciona Digimon--";
  digimonSelect.appendChild(defaultDigiOption);

  if (!nivelElegido || !tamaElegido) return;

  // Agregar Digimon que coincidan con Tama y Nivel
  Object.entries(digimonReqDict).forEach(([nombre, datos]) => {
    if (datos.Tama === tamaElegido && datos.Nivel === nivelElegido) {
      const option = document.createElement("option");
      option.value = nombre;
      option.textContent = nombre;
      digimonSelect.appendChild(option);
    }
  });
});

// Restaurar selección y generar formulario si existe selección previa
const lastSelection = localStorage.getItem('selectedDigimon');
if (lastSelection && digimonReqDict[lastSelection]) {
  const digimon = digimonReqDict[lastSelection];
  tamaSelect.value = digimon.Tama;
  
  // Simular el cambio para llenar niveles y digimon
  const changeEvent = new Event('change');
  tamaSelect.dispatchEvent(changeEvent);
  
  setTimeout(() => {
    nivelSelect.value = digimon.Nivel;
    nivelSelect.dispatchEvent(changeEvent);
    digimonSelect.value = lastSelection;
    generarFormulario();
  }, 100);
}
*/

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
	// Si el seleccionado tiene side evolutions definidas, las añadimos
	if (SideEvolutionSelected.hasOwnProperty(selected)) {
	  const sideEvos = SideEvolutionSelected[selected]; // Array de nombres de side evolutions

	  // Filtrar solo los side evolutions que existen en digimonReqDict
	  const sideDigimons = Object.entries(digimonReqDict).filter(
		([name, _]) => sideEvos.includes(name)
	  );

	  // Combinar nextDigimons y sideDigimons sin duplicados usando un Map
	  const uniqueDigimons = new Map();

	  nextDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));
	  sideDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));

	  nextDigimons = Array.from(uniqueDigimons.entries());
	}

	// nextDigimons ya incluye las evoluciones normales y, si aplicaba, las laterales
	  
		const sideNames = Object.keys(SideEvolutionlist);

		//Elimina las sides del mismo nivel, falta poner un excepcion para los de Nivel 5
		nextDigimons = nextDigimons.filter(([name, info]) => {
		  // Verifica si está en la lista de side evolutions
		  if (SideEvolutionlist.hasOwnProperty(name)) {
			// Compara el nivel actual con el nivel de la side evolution
			const sideLevel = SideEvolutionlist[name][0];
			if (sideLevel === (data["Nivel"]+1)) {
			  return false; // Elimina si el nivel coincide
			}
		  }
		  return true; // Mantiene si no está en la lista o si el nivel no coincide
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
                "3 Monzaemon Driver",
                "3 WaruMonzaemon Driver",
                "Ninguno"
            ];
            console.log("opciones 2 de asignar:", opciones);
        } else if (field === "2Ciclos") {
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
// Si el seleccionado tiene side evolutions definidas, las añadimos
if (SideEvolutionSelected.hasOwnProperty(selected)) {
  const sideEvos = SideEvolutionSelected[selected]; // Array de nombres de side evolutions

  // Filtrar solo los side evolutions que existen en digimonReqDict
  const sideDigimons = Object.entries(digimonReqDict).filter(
    ([name, _]) => sideEvos.includes(name)
  );

  // Combinar nextDigimons y sideDigimons sin duplicados usando un Map
  const uniqueDigimons = new Map();

  nextDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));
  sideDigimons.forEach(([name, info]) => uniqueDigimons.set(name, info));

  nextDigimons = Array.from(uniqueDigimons.entries());
}

// nextDigimons ya incluye las evoluciones normales y, si aplicaba, las laterales
  
	const sideNames = Object.keys(SideEvolutionlist);

	//Elimina las sides del mismo nivel, falta poner un excepcion para los de Nivel 5
	nextDigimons = nextDigimons.filter(([name, info]) => {
	  // Verifica si está en la lista de side evolutions
	  if (SideEvolutionlist.hasOwnProperty(name)) {
		// Compara el nivel actual con el nivel de la side evolution
		const sideLevel = SideEvolutionlist[name][0];
		if (sideLevel === (data["Nivel"] + 1)) {
		  return false; // Elimina si el nivel coincide
		}
	  }
	  return true; // Mantiene si no está en la lista o si el nivel no coincide
	});
  
  console.log("Seleccionado:", selected);
  console.log("Digis:", nextDigimons);

  // Si el digimon actual está bloqueado para evolucionar a Greymon, filtramos esa opción
	const bloqueados = bloqueosEvolucion[selected] || [];
	if (bloqueados.length > 0) {
	  console.log(`Filtrando ${bloqueados.join(", ")} porque ${selected} está en bloqueosEvolucion`);

	  nextDigimons = nextDigimons.filter(([name, _]) => !bloqueados.includes(name));

	  console.log("Lista después del filtro:", nextDigimons.map(([name]) => name));
	} else {
	  console.log(`${selected} NO tiene bloqueos de evolución`);
}
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
            "<th data-translate='digimon'>Digimon</th>" +
            "<th data-translate='etapa'>Etapa</th>" +
            "<th data-translate='puntaje'>Puntaje Total</th>";  fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" : 
	  field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
	  field === "Combates Minimos" ? "Batallas":
	  field === "Vinculo Minimo alcanzado"?"Vinculo":
      field;
 //   tabla += `<th>${header}</th>`;
	//tabla += `<th data-field-key="${header}">${header}</th>`;
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
    if (!isNaN(ingNum) && ingNum === esperadoBonus) {
      totalBonus += 1;
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
	else if (esperado !== undefined) {
		if (field === "Peso") {
		  const ingNum = Number(ingresado);
		  const minPeso = esperado - 5;
		  const maxPeso = esperado + 5;
		  if (!isNaN(ingNum) && ingNum >= minPeso && ingNum <= maxPeso) {
			punto = 1;
		  } else {
			punto = 0;
		  }
		}

	else if (field === "Error Maximo") {
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

	  else if (field === "EntrenamientoHecho") {
		if (ingresado.toLowerCase() === esperado.toLowerCase()) {
		punto = 0; }
		if (["Agumon", "Yuki Agumon", "Agumon (2006)", "Agumon (Black)"].includes(name) && ingresado.toLowerCase() === "no") {
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
		  if (!isNaN(ingNum) && ingNum >= esperado) {
			punto = 1;
		  } else {
			punto = 0;
	  }}
	  else if (field === "Vinculo Minimo alcanzado") {
		  const ingNum = Number(ingresado);
		  if (!isNaN(ingNum) && ingNum < esperado) {
			punto = -10;
		  } else {
			punto = 0;
	  }}
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
		  if (ingresado.toLowerCase() === esperado.toLowerCase()) {
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

const sideEvosValidas = puntajes.filter(d => {
  const nivelesPermitidos = SideEvolutionlist[d.name];
  return nivelesPermitidos?.includes(data["Nivel"]) && d.puntaje >= 0;
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

    if (conProgram.length > 0) {
      const maxPuntajeProgram = Math.max(...conProgram.map(d => d.puntaje));
      mejoresDigimons = conProgram.filter(d => d.puntaje === maxPuntajeProgram).map(d => d.name);
      console.log("🏆 Mejor(es) con Program:", mejoresDigimons);
    } else {
      const sinProgram = puntajes.filter(d => {
        const req = digimonReqDict[d.name];
        return req?.Nivel === nextLevel && d.puntaje >= 3;
      });

      console.log("🔍 Digimon válidos sin Program:", sinProgram.map(d => `${d.name} (${d.puntaje})`));

      if (sinProgram.length > 0) {
        const maxPuntajeSinProgram = Math.max(...sinProgram.map(d => d.puntaje));
        mejoresDigimons = sinProgram.filter(d => d.puntaje === maxPuntajeSinProgram).map(d => d.name);
        console.log("✅ Mejor(es) sin Program:", mejoresDigimons);
      } else {
        mejoresDigimons = ["Ninguno"];
        console.log("🚫 No se encontraron evoluciones válidas.");
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
