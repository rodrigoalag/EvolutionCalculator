const digimonSelect = document.getElementById("digimonSelect");
const autoFields = document.getElementById('autoFields');
const editableFields = document.getElementById('editableFields');
const editableFieldsHeaders = document.getElementById('editableFieldsHeaders');
const resultados = document.getElementById('resultados');
const calcularBtn = document.getElementById('calcularBtn');
const evolucionTexto = document.getElementById('evolucionTexto');
const bloqueadosAGreymon = ["Agumon (Black)", "Yuki Agumon"];
const excludelist = ["ID", "Tama", "Nivel", "Stat Superior 2", "Tipo", "Atributo", "Digimon Bonus", "Bonus Batallas", "Bonus Errores", "Bonus"];


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
};

const excepcionesProgram = {
    "V-Dramon (Black)": ["Agumon (Black)"],
	"GeoGreymon": ["Agumon (2006)"]
  };
const comidalistaside = ["Bellota Dorada", "Chatarra", "5 Sardinas", "Ninguno"];


const nivelAEtapa = {
  1: "Baby I",
  2: "Baby II",
  3: "Child",
  4: "Adult",
  5: "Perfect"
};
// Crear el label y el select del nivel
const nivelLabel = document.createElement("label");
nivelLabel.textContent = "Escoge el nivel de tu digimon:";
nivelLabel.setAttribute("for", "nivelSelect");

const nivelSelect = document.createElement("select");
nivelSelect.id = "nivelSelect";

const defaultNivelOption = document.createElement("option");
defaultNivelOption.value = "";
defaultNivelOption.textContent = "--Selecciona Nivel--";
nivelSelect.appendChild(defaultNivelOption);

// Agregar opciones del diccionario
for (const [nivel, etapa] of Object.entries(nivelAEtapa)) {
  const option = document.createElement("option");
  option.value = nivel;
  option.textContent = `${etapa} (Nivel ${nivel})`;
  nivelSelect.appendChild(option);
}

// Crear el label para el selector de Digimon
const digimonLabel = document.createElement("label");
digimonLabel.textContent = "Selecciona un Digimon:";
digimonLabel.setAttribute("for", "digimonSelect");

// Insertar elementos en el orden correcto
digimonSelect.parentNode.insertBefore(nivelLabel, digimonSelect);
digimonSelect.parentNode.insertBefore(nivelSelect, digimonSelect);
digimonSelect.parentNode.insertBefore(digimonLabel, digimonSelect);


// Cargar opciones selector
nivelSelect.addEventListener("change", () => {
  const nivelElegido = parseInt(nivelSelect.value);

  // Limpiar opciones actuales
  digimonSelect.innerHTML = "";

  // Crear opción por defecto para el Digimon
  const defaultDigiOption = document.createElement("option");
  defaultDigiOption.value = "";
  defaultDigiOption.textContent = "--Selecciona Digimon--";
  digimonSelect.appendChild(defaultDigiOption);

  // Agregar solo los Digimon del nivel seleccionado
  Object.entries(digimonReqDict).forEach(([nombre, datos]) => {
    if (datos["Nivel"] === nivelElegido) {
      const option = document.createElement("option");
      option.value = nombre;
      option.textContent = nombre;
      digimonSelect.appendChild(option);
    }
  });
});

// Restaurar selección y generar formulario inicial
const lastSelection = localStorage.getItem('selectedDigimon');
if (lastSelection && digimonReqDict[lastSelection]) {
  digimonSelect.value = lastSelection;
}
generarFormulario();

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
	  }
		else if (field === "Program") {
		opciones = ["Virus", "Frost", "Combat", "Vaccine", "Royal", "Trash", "Ore", "Mecha", "Ninguno"];
	  }
	    else if (field === "Driver Equipado") {
		opciones = ["Tyranomon Driver","SuperStarmon Driver", "DarkSuperStarmon Driver", "Starmon o ShootingStarmon Driver", "SuperStarmon y DarkSuperStarmon Driver", "Ninguno"];
	    console.log("opciones 1 de asignar:", opciones);
	  }
		else if (field === "Comida") {
		opciones = comidalistaside;
	  }
	    else if (field === "Xross") {
		opciones = ["3 Mamemon Driver", "4 Pickmon Driver", "3 Monzaemon Driver", "3 WaruMonzaemon Driver", "Ninguno"];
		console.log("opciones 2 de asignar:", opciones);
	  }
		else if (field === "2Ciclos") {
        opciones = ["Si", "No"];
      } else {
        opciones = Array.from(new Set(nextDigimons.map(([_, info]) => info[field]).filter(v => v !== undefined)));
      }

		let select = document.createElement("select");
		select.id = `field_${field}`;

		// Solo agregar "--Selecciona--" si no es el campo "Program" ni "Comida"
		if (field !== "Program" && field !== "Comida" && field !== "Driver Equipado" && field !== "Xross") {
		  let defaultOption = document.createElement("option");
		  defaultOption.value = "";
		  defaultOption.textContent = "--Selecciona--";
		  select.appendChild(defaultOption);
		}

		// Si el campo es "Program" o "Comida", seleccionar automáticamente "Ninguno" si existe
		if (field === "Program" || field === "Comida" || field === "Driver Equipado" || field === "Xross") {
		  setTimeout(() => {
			const ningunoOption = Array.from(select.options).find(opt => opt.textContent === "Ninguno");
			if (ningunoOption) {
			  ningunoOption.selected = true;
			}
		  });
		}


      opciones.forEach(op => {
        let option = document.createElement("option");
        option.value = op;
        option.textContent = op;
        select.appendChild(option);
      });

      td.appendChild(select);
    } else {
      let input = document.createElement("input");
      input.type = "number";
      input.id = `field_${field}`;
      input.min = 0;
      input.max = field === "Peso" ? 99 : 6;
      td.appendChild(input);
    }

    editableFields.appendChild(td);
  });
}

digimonSelect.addEventListener("change", () => {
  localStorage.setItem('selectedDigimon', digimonSelect.value);
  generarFormulario();
});

editableFields.addEventListener('input', (e) => {
  if (!e.target) return;
  if (e.target.id === 'field_Error Maximo') {
    let val = Number(e.target.value);
    if (val > 6) e.target.value = 6;
    else if (val < 0 || isNaN(val)) e.target.value = 0;
  }
  if (e.target.id === 'field_Peso') {
    let val = Number(e.target.value);
    if (val > 99) e.target.value = 99;
    else if (val < 0 || isNaN(val)) e.target.value = 0;
  }
  if (e.target.id === 'field_% Entrenamiento') {
    let val = Number(e.target.value);
    if (val > 99) e.target.value = 100;
    else if (val < 0 || isNaN(val)) e.target.value = 0;
  }
  if (e.target.id === 'field_Vinculo Minimo alcanzado') {
    let val = Number(e.target.value);
    if (val > 99) e.target.value = 100;
    else if (val < 0 || isNaN(val)) e.target.value = 0;
  }
  if (e.target.id === 'field_WinRate') {
    let val = Number(e.target.value);
    if (val > 99) e.target.value = 100;
    else if (val < 0 || isNaN(val)) e.target.value = 0;
  }
  if (e.target.id === 'field_Combates Minimos') {
    let val = Number(e.target.value);
	if (val < 0 || isNaN(val)) e.target.value = 0;
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

  let tabla = "<table border='1' style='border-collapse: collapse; width: 100%; text-align: center;'><thead><tr><th>Digimon</th><th>Etapa</th><th>Puntaje Total</th>";
  fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" : 
	  field === "2Ciclos" ? "¿Obtuviste dos perfect en las ultimas dos generaciones/Obtuviste antes a Agumon 06?" :
	  field === "Combates Minimos" ? "Batallas":
      field;
    tabla += `<th>${header}</th>`;
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
	}}}
		 else if (bonusField === "Digimon Bonus") {
				if (selected.toLowerCase() === String(esperadoBonus).toLowerCase()) {
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

	const maxPuntaje = Math.max(...puntajes.map(d => d.puntaje));
	let mejoresDigimons;
//Evaluacion a Nivel 3
	// Filtrar Digimon con Program, nivel 3 y puntaje >= 2
		const conProgramPositivos = puntajes.filter(d => {
		  const req = digimonReqDict[d.name];
		  const tieneProgram = req && req.Program !== undefined;
		  const esNivel3 = req && req.Nivel === 3;
		  const puntajeAlto = d.puntaje >= 2;
		  return tieneProgram && esNivel3 && puntajeAlto; 
		});
		  

		if (nextLevel === 3){
		if (conProgramPositivos.length > 0) {
		  // Si hay digimon con Program que cumplen, solo mostrar esos con el mayor puntaje
		  const maxPuntajeProgram = Math.max(...conProgramPositivos.map(d => d.puntaje));
		  mejoresDigimons = conProgramPositivos.filter(d => d.puntaje === maxPuntajeProgram).map(d => d.name);
		} else {
		  // Sino, mostrar los mejores normalmente
		  mejoresDigimons = puntajes.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
}}

  const sideEvosValidas = puntajes.filter(d => {
    const nivelesPermitidos = SideEvolutionlist[d.name];
    const esSideValido = nivelesPermitidos?.includes(data["Nivel"]) && d.puntaje >= 0;
    return esSideValido;
  });
// Evaluación Nivel 4 
if (nextLevel === 4 || nextLevel === 5) {

  console.log(`🧪 Evaluando evoluciones para Nivel 4`);
  console.log("📋 Nivel actual:", data["Nivel"]);

  // 1. Side Evolutions con prioridad (si están permitidas para este nivel)


  console.log("🔍 Side Evolutions válidas encontradas:", sideEvosValidas.map(d => `${d.name} (${d.puntaje})`));

  if (sideEvosValidas.length > 0) {
    const maxPuntaje = Math.max(...sideEvosValidas.map(d => d.puntaje));
    mejoresDigimons = sideEvosValidas.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
    console.log("🎯 Mejor(es) Side Evolution:", mejoresDigimons);
  } else {
    console.log("⛔ No hay Side Evolutions válidas. Buscando evoluciones normales...");

    // 2. Evaluación normal a nivel 4 o 5
    if (nextLevel === 4 || nextLevel === 5) {
      const conProgram = puntajes.filter(d => {
        const req = digimonReqDict[d.name];
        return req?.Nivel === nextLevel && req.Program !== undefined && d.puntaje >= 3;
      });

      console.log("🔍 Digimon válidos con Program:", conProgram.map(d => `${d.name} (${d.puntaje})`));

      if (conProgram.length > 0) {
        const maxPuntaje = Math.max(...conProgram.map(d => d.puntaje));
        mejoresDigimons = conProgram.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
        console.log("🏆 Mejor(es) con Program:", mejoresDigimons);
      } else {
        const sinProgram = puntajes.filter(d => {
          const req = digimonReqDict[d.name];
          return req?.Nivel === nextLevel && d.puntaje >= 3;
        });

        console.log("🔍 Digimon válidos sin Program:", sinProgram.map(d => `${d.name} (${d.puntaje})`));

        if (sinProgram.length > 0) {
          const maxPuntaje = Math.max(...sinProgram.map(d => d.puntaje));
          mejoresDigimons = sinProgram.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
          console.log("✅ Mejor(es) sin Program:", mejoresDigimons);
        } else {
          mejoresDigimons = ["Ninguno"];
          console.log("🚫 No se encontraron evoluciones válidas.");
        }
      }
    }
  }

  console.log("🧾 Resultado final:", mejoresDigimons);
}

//Nivel 5
if (data["Nivel"] === 5) {
  console.log(`🧪 Evaluando evoluciones para Nivel ${data["Nivel"]}`);

  // 1. Side Evolutions con prioridad (si están permitidas para este nivel)
  const sideEvosValidas = puntajes.filter(d => {
    const nivelesPermitidos = SideEvolutionlist[d.name];
    const esSideValido = nivelesPermitidos?.includes(data["Nivel"]) && d.puntaje >= 0;
    if (esSideValido) {
      console.log(`✅ Side Evolution válida: ${d.name} (Puntaje: ${d.puntaje})`);
    }
    return esSideValido;
  });

  if (sideEvosValidas.length > 0) {
    const maxPuntaje = Math.max(...sideEvosValidas.map(d => d.puntaje));
    mejoresDigimons = sideEvosValidas.filter(d => d.puntaje === maxPuntaje).map(d => d.name);
    console.log(`🎯 Mejor(es) Digimon(es) (Side Evolution): ${mejoresDigimons.join(", ")}`);
  } else {
    // Si no hay Side Evolutions válidas
    mejoresDigimons = ["Ninguno"];
    console.log("🚫 No se encontraron Side Evolutions válidas para este nivel.");
  }
}

let texto;

if (sideEvosValidas.length > 0) {
	const nombres = mejoresDigimons.join(", ");
	texto = `Tu Digimon va a slide evolucionar a: ${nombres}.`;
}
else { 	const nombres = mejoresDigimons.join(", ");
	texto = `Tu Digimon va a evolucionar a: ${nombres}.`;
}

	if (mejoresDigimons.length >= 2) {
	  texto += " Favor, consultar la guía de prioridades en el tab Prioridades";
	}

	evolucionTexto.textContent = texto;

});
