const digimonReqDict = {
  "Botamon": { ID: 0, Tama: "V0", Nivel: 1, Peso: 4 },
  "Koromon": { ID: 1, Tama: "V0", Nivel: 2, Peso: 6 },
  "Agumon": { ID: 2, Tama: "V0", Nivel: 3, Peso: 15, "Error Maximo": 6, EntrenamientoHecho: "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK" },
  "Kokuwamon": { ID: 3, Tama: "V0", Nivel: 3, Peso: 20, EntrenamientoHecho: "No", "Stat Superior": "HP" }
};

const digimonSelect = document.getElementById("digimonSelect");
const infoId = document.getElementById("infoId");
const infoTama = document.getElementById("infoTama");
const infoNivel = document.getElementById("infoNivel");
const form = document.getElementById("evolutionForm");

// Rellenar el select
for (const name in digimonReqDict) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  digimonSelect.appendChild(option);
}

// Evento al seleccionar un Digimon
digimonSelect.addEventListener("change", function () {
  const selectedName = digimonSelect.value;
  const selectedData = digimonReqDict[selectedName];

  if (!selectedData) return;

  // Mostrar info automática
  infoId.textContent = selectedData.ID ?? "—";
  infoTama.textContent = selectedData.Tama ?? "—";
  infoNivel.textContent = selectedData.Nivel ?? "—";

  // Calcular siguiente nivel
  const currentLevel = parseInt(selectedData.Nivel);
  const nextLevel = currentLevel + 1;

  // Limpiar formulario
  form.innerHTML = "";

  // Filtrar Digimon del siguiente nivel
  const nextDigimons = Object.entries(digimonReqDict).filter(
    ([_, data]) => parseInt(data.Nivel) === nextLevel
  );

  if (nextDigimons.length === 0) {
    form.innerHTML = "<p>No hay evoluciones conocidas para este nivel.</p>";
    return;
  }

  // Determinar campos editables
  const camposEditables = new Set();
  nextDigimons.forEach(([_, data]) => {
    for (const key in data) {
      if (!["ID", "Tama", "Nivel", "Stat Superior 2"].includes(key)) {
        camposEditables.add(key);
      }
    }
  });

  // Crear inputs
  camposEditables.forEach(field => {
    const label = document.createElement("label");
    label.textContent = field + ": ";
    const input = document.createElement("input");
    input.type = "text";
    input.name = field;
    input.id = `field_${field}`;
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
});
