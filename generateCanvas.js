// Script para generar un canvas de Obsidian con el árbol evolutivo
// Uso: node generateCanvas.js [digimonInicial]

const fs = require('fs');
const path = require('path');

// Leer y evaluar los archivos JS
const reqDictContent = fs.readFileSync(path.join(__dirname, 'digimonReqDict.js'), 'utf8');
const statTierContent = fs.readFileSync(path.join(__dirname, 'digimonstattier.js'), 'utf8');

// Extraer los objetos usando eval (solo para scripts locales de confianza)
let digimonReqDict, digimonstattier;
eval(reqDictContent);
eval(statTierContent.replace(/const ORIGENES_BASURA[\s\S]*$/, '')); // Ignorar el código extra al final

// Configuración del canvas
const NODE_WIDTH = 180;
const NODE_HEIGHT = 100;
const HORIZONTAL_SPACING = 250;
const VERTICAL_SPACING = 130;

// Niveles para organizar verticalmente
const nivelAEtapa = {
  1: "Baby I",
  2: "Baby II",
  3: "Child",
  4: "Adult",
  5: "Perfect",
  6: "Ultimate"
};

// Colores por nivel
const nivelColor = {
  1: "1", // Rojo
  2: "2", // Naranja
  3: "3", // Amarillo
  4: "4", // Verde
  5: "5", // Cyan
  6: "6"  // Púrpura
};

function construirArbol(tamaFilter = null) {
  const nodes = [];
  const edges = [];
  const processedNodes = new Set();

  // Filtrar Digimon por Tama si se especifica
  let digimons = Object.entries(digimonReqDict);
  if (tamaFilter) {
    digimons = digimons.filter(([_, data]) => data.Tama === tamaFilter);
  }

  // Agrupar por nivel
  const niveles = {};
  digimons.forEach(([nombre, data]) => {
    const nivel = data.Nivel || 0;
    if (!niveles[nivel]) niveles[nivel] = [];
    niveles[nivel].push(nombre);
  });

  // Crear nodos organizados por nivel
  Object.keys(niveles).sort((a, b) => a - b).forEach((nivel, nivelIndex) => {
    const digimonsEnNivel = niveles[nivel];

    digimonsEnNivel.forEach((nombre, index) => {
      const data = digimonReqDict[nombre];
      const stats = digimonstattier[nombre];

      const nodeId = `node-${nombre.replace(/[^a-zA-Z0-9]/g, '_')}`;

      if (!processedNodes.has(nodeId)) {
        processedNodes.add(nodeId);

        // Crear texto del nodo con info relevante
        let nodeText = `## ${nombre}\n`;
        nodeText += `**${nivelAEtapa[nivel] || 'Nivel ' + nivel}**\n`;
        if (data.Atributo) nodeText += `${data.Atributo}`;
        if (data.Tipo && data.Tipo !== "Ninguno") nodeText += ` | ${data.Tipo}`;

        nodes.push({
          id: nodeId,
          type: "text",
          x: nivelIndex * HORIZONTAL_SPACING,
          y: index * VERTICAL_SPACING,
          width: NODE_WIDTH,
          height: NODE_HEIGHT,
          text: nodeText,
          color: nivelColor[nivel] || "0"
        });
      }
    });
  });

  // Crear edges basados en evoluciones
  Object.entries(digimonstattier).forEach(([nombre, data]) => {
    if (!data.Evoluciona) return;

    const fromNodeId = `node-${nombre.replace(/[^a-zA-Z0-9]/g, '_')}`;

    // Verificar que el nodo origen existe
    if (!processedNodes.has(fromNodeId)) return;

    const evoluciones = Array.isArray(data.Evoluciona)
      ? data.Evoluciona
      : data.Evoluciona.split(',').map(e => e.trim());

    evoluciones.forEach(evol => {
      // Ignorar Burpmon para no saturar el grafo
      if (evol === "Burpmon") return;

      const toNodeId = `node-${evol.replace(/[^a-zA-Z0-9]/g, '_')}`;

      // Solo crear edge si el nodo destino existe
      if (processedNodes.has(toNodeId)) {
        edges.push({
          id: `edge-${fromNodeId}-${toNodeId}`,
          fromNode: fromNodeId,
          toNode: toNodeId,
          fromSide: "right",
          toSide: "left"
        });
      }
    });
  });

  return { nodes, edges };
}

// Función para construir árbol desde un Digimon específico (como el HTML original)
function construirArbolDesde(nombreInicial, maxDepth = 10) {
  const nodes = [];
  const edges = [];
  const processedNodes = new Set();
  const nodePositions = new Map();

  function processNode(nombre, depth, yOffset) {
    if (depth > maxDepth) return yOffset;
    if (processedNodes.has(nombre)) return yOffset;
    if (nombre === "Burpmon") return yOffset; // Ignorar Burpmon

    const nodeId = `node-${nombre.replace(/[^a-zA-Z0-9]/g, '_')}`;
    processedNodes.add(nombre);

    const data = digimonReqDict[nombre] || {};
    const stats = digimonstattier[nombre] || {};
    const nivel = data.Nivel || 0;

    // Crear texto del nodo
    let nodeText = `## ${nombre}\n`;
    nodeText += `**${nivelAEtapa[nivel] || 'Nivel ' + nivel}**\n`;
    if (data.Atributo) nodeText += `${data.Atributo}`;
    if (data.Tipo && data.Tipo !== "Ninguno") nodeText += ` | ${data.Tipo}`;

    const x = depth * HORIZONTAL_SPACING;
    const y = yOffset;

    nodes.push({
      id: nodeId,
      type: "text",
      x: x,
      y: y,
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
      text: nodeText,
      color: nivelColor[nivel] || "0"
    });

    nodePositions.set(nombre, { x, y });

    // Procesar evoluciones
    let nextYOffset = yOffset;
    if (stats.Evoluciona) {
      const evoluciones = Array.isArray(stats.Evoluciona)
        ? stats.Evoluciona
        : stats.Evoluciona.split(',').map(e => e.trim());

      const validEvols = evoluciones.filter(e => e !== "Burpmon" && digimonReqDict[e]);

      validEvols.forEach((evol, idx) => {
        const toNodeId = `node-${evol.replace(/[^a-zA-Z0-9]/g, '_')}`;

        if (!processedNodes.has(evol)) {
          nextYOffset = processNode(evol, depth + 1, nextYOffset);
          nextYOffset += VERTICAL_SPACING;
        }

        // Crear edge
        edges.push({
          id: `edge-${nodeId}-${toNodeId}-${idx}`,
          fromNode: nodeId,
          toNode: toNodeId,
          fromSide: "right",
          toSide: "left"
        });
      });
    }

    return Math.max(yOffset, nextYOffset);
  }

  processNode(nombreInicial, 0, 0);

  return { nodes, edges };
}

// Generar canvas para un Tama específico
const tama = process.argv[2] || "V0";
const digimonInicial = process.argv[3] || "Botamon";

console.log(`Generando árbol evolutivo desde: ${digimonInicial}`);

const canvas = construirArbolDesde(digimonInicial);

console.log(`Nodos generados: ${canvas.nodes.length}`);
console.log(`Conexiones generadas: ${canvas.edges.length}`);

// Guardar canvas como JSON
const fs = require('fs');
const outputPath = `./DigimonTree_${digimonInicial}.canvas.json`;
fs.writeFileSync(outputPath, JSON.stringify(canvas, null, 2));
console.log(`Canvas guardado en: ${outputPath}`);

// Exportar para uso con curl
module.exports = { construirArbol, construirArbolDesde, canvas };
