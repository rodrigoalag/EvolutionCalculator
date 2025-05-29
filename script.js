const digimonReqDict = {
  "Botamon": { ID: 0, Tama: "V0", Nivel: 1, Peso: 4 },
  "Koromon": { ID: 1, Tama: "V0", Nivel: 2, Peso: 6 },
  "Agumon": { ID: 2, Tama: "V0", Nivel: 2, Peso: 15, "Error Maximo": 6, EntrenamientoHecho: "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK" },
  "Kokuwamon": { ID: 3, Tama: "V0", Nivel: 2, Peso: 20, EntrenamientoHecho: "No", "Stat Superior": "HP" }
};

const digimonSelect = document.getElementById("digimonSelect");
const infoId = document.getElementById("infoId");
const infoTama = document.getElementById("infoTama");
const infoNivel = document.getElementById("infoNivel");
const form = document.getElementById("evolutionForm");

// Cargar opciones en el selector
for (const name in digimonReqDict) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  digimonSelect.appendChild(option);
}

// Función para manejar cambios en el selector
digimonSelect.addEventListener("change", function () {
  const selected = digimonSelect.value;
  const data = digimonReqDict[selected];

  if (!data) return;

  // Mostrar datos automáticos
  infoId.textContent = data.ID ?? "—";
  infoTama.textContent = data.Tama ?? "—";
  infoNivel.textContent = data.Nivel ?? "—";

  // Calcular nivel siguiente
  const nextLevel = (data.Nivel ?? 0) + 1;

  // Limpiar el formulario
  form.innerHTML = "";

  // Buscar todos los Digimon del siguiente nivel
  const nextDigimon = Object.entries(digimonReqDict)
    .filter(([_, v]) => v.Nivel === nextLevel);

  // Determinar todos los campos editables del siguiente nivel
  const camposEditables = new Set();
  nextDigimon.forEach(([_, info]) => {
    for (const key in info) {
      if (!["ID", "Tama", "Nivel"].includes(key)) {
        camposEditables.add(key);
      }
    }
  });

  // Crear campos editables
  camposEditables.forEach(field => {
    const label = document.createElement("label");
    label.textContent = field + ": ";
    const input = document.createElement("input");
    input.name = field;
    input.id = `field_${field}`;
    input.type = "text";
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
});
