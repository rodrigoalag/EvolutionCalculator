const digimonReqDict = {
  "Botamon": { "ID": 0, "Tama": "V0", "Nivel": 1, "Peso": 4 },
  "Koromon": { "ID": 1, "Tama": "V0", "Nivel": 2, "Peso": 6 },
  "Agumon": {
    "ID": 2, "Tama": "V0", "Nivel": 3,
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK"
  },
  "Kokuwamon": {
    "ID": 3, "Tama": "V0", "Nivel": 3,
    "Peso": 20, "Error Maximo": 6, "EntrenamientoHecho": "No",
    "Stat Superior": "HP"
  }
};

const digimonSelect = document.getElementById('digimonSelect');
const autoFields = document.getElementById('autoFields');
const editableFields = document.getElementById('editableFields');
const editableFieldsHeaders = document.getElementById('editableFieldsHeaders');
const resultados = document.getElementById('resultados');
const calcularBtn = document.getElementById('calcularBtn');
const evolucionTexto = document.getElementById('evolucionTexto');

// Cargar opciones del selector
Object.keys(digimonReqDict).forEach(d => {
  const option = document.createElement("option");
  option.value = d;
  option.textContent = d;
  digimonSelect.appendChild(option);
});

// Restaurar selección previa
const lastSelection = localStorage.getItem('selectedDigimon');
if (lastSelection) {
  digimonSelect.value = lastSelection;
}

// Generar formulario si hay una selección válida
const selected = digimonSelect.value;
const data = digimonReqDict[selected];
if (data) {
  autoFields.innerHTML = `
    <tr>
      <td>${data.ID}</td>
      <td>${data.Tama}</td>
      <td>${data.Nivel}</td>
    </tr>
  `;

  const nextLevel = data["Nivel"] + 1;
  const nextDigimons = Object.entries(digimonReqDict).filter(([_, info]) => info["Nivel"] === nextLevel);

  const fieldSet = new Set();
  nextDigimons.forEach(([_, info]) => {
    for (const key in info) {
      if (!["ID", "Tama", "Nivel", "Stat Superior 2"].includes(key)) {
        fieldSet.add(key);
      }
    }
  });

  editableFieldsHeaders.innerHTML = "";
  editableFields.innerHTML = "";

  fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" : field;
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
      } else {
        opciones = Array.from(new Set(nextDigimons.map(([_, info]) => info[field]).filter(v => v !== undefined)));
      }

      let select = document.createElement("select");
      select.id = `field_${field}`;
      let defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "--Selecciona--";
      select.appendChild(defaultOption);

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

// Guardar y recargar en selección
digimonSelect.addEventListener("change", () => {
  localStorage.setItem('selectedDigimon', digimonSelect.value);
  location.reload();
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
});

calcularBtn.addEventListener("click", () => {
  const selected = digimonSelect.value;
  const data = digimonReqDict[selected];
  if (!data) return;

  const nextLevel = data["Nivel"] + 1;
  const nextDigimons = Object.entries(digimonReqDict).filter(([_, info]) => info["Nivel"] === nextLevel);

  const fieldSet = new Set();
  nextDigimons.forEach(([_, info]) => {
    for (const key in info) {
      if (!["ID", "Tama", "Nivel", "Stat Superior 2"].includes(key)) {
        fieldSet.add(key);
      }
    }
  });

  const inputValues = {};
  let camposIncompletos = [];

  fieldSet.forEach(field => {
    const element = document.getElementById(`field_${field}`);
    let val = element ? element.value.trim() : "";

    if (!val) {
      camposIncompletos.push(field);
      if (element) element.classList.add("invalido");
    } else {
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

  let tabla = "<table border='1'><thead><tr><th>Digimon</th><th>Puntaje Total</th>";
  fieldSet.forEach(field => {
    const header = field === "Error Maximo" ? "Errores" :
      field === "EntrenamientoHecho" ? "¿Realizó Entrenamiento?" :
      field;
    tabla += `<th>${header}</th>`;
  });
  tabla += "</tr></thead><tbody>";

  let puntajes = [];
  nextDigimons.forEach(([name, requisitos]) => {
    let puntaje = 0;
    let fila = `<tr><td>${name}</td>`;

    const celdas = Array.from(fieldSet).map(field => {
      const esperado = requisitos[field];
      const ingresado = inputValues[field];
      let punto = 0;

      if (esperado !== undefined) {
        if (field === "Peso") {
          punto = 0;
        } else if (field === "Error Maximo") {
          const ingNum = Number(ingresado);
          if (!isNaN(ingNum) && ingNum <= esperado) {
            punto = 1;
          }
        } else if (field === "EntrenamientoHecho") {
          punto = 0;
        } else if (field === "Stat Superior") {
          if (ingresado.toLowerCase() === esperado.toLowerCase()) {
            punto = 1;
          }
        } else {
          if (String(esperado).toLowerCase() === ingresado.toLowerCase()) {
            punto = 1;
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

  const mejorDigimon = puntajes.reduce((a, b) => a.puntaje >= b.puntaje ? a : b);
  evolucionTexto.textContent = `El Digimon con mejor puntaje para evolucionar es: ${mejorDigimon.name} con ${mejorDigimon.puntaje} puntos.`;
});
