// Datos de enemigos de la red
// niveles: array de niveles donde aparece, o "todos" para todos
// entrenamientos: array de rangos donde aparece, o "todos" para todos
// boss: true si solo aparece con 80%+ de entrenamiento
// itemDrop puede ser:
//   - Item normal: { item: "NombreItem", cantidad: 1 }
//   - Driver: { tipo: "driver", driver: "W0010", cantidad: 1 } (color se obtiene de driverNombres.js)
const enemigosData = [
  {
    digimon: "AgumonBlack",
    nickName: "Blacky",
    niveles: [3],
    entrenamientos: ["0-39.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Carne Grande", cantidad: 1 }
    ]
  },
  {
    digimon: "YukiAgumon",
    nickName: "Rudolph",
    niveles: [3],
    entrenamientos: ["0-39.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Verdura Congelada", cantidad: 1 }
    ]
  },
  {
    digimon: "Mushmon",
    nickName: "Shemage",
    niveles: [3],
    entrenamientos: ["0-39.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Champiñon", cantidad: 1 }
    ]
  },
  {
    digimon: "Psychemon",
    nickName: "Psychemon",
    niveles: [3],
    entrenamientos: ["0-39.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Champiñon Feliz", cantidad: 1 }
    ]
  },
  {
    digimon: "Betamon",
    nickName: "SpookyFishy",
    niveles: [3],
    entrenamientos: ["0-39.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Digisardina", cantidad: 1 }
    ]
  },
  // Child 40-59.99%
  {
    digimon: "Ghostmon",
    nickName: "Sour",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0047", cantidad: 1 }
    ]
  },
  {
    digimon: "GabumonBlack",
    nickName: "Monoco",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0063", cantidad: 1 }
    ]
  },
  {
    digimon: "ShoutmonBlack",
    nickName: "Shoutmon Black",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "ST039", cantidad: 1 }
    ]
  },
  {
    digimon: "ModokiBetamon",
    nickName: "Modoki Betamon",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Digisardina", cantidad: "1-2" }
    ]
  },
  {
    digimon: "Agumon",
    nickName: "Zero",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Carne", cantidad: 1 }
    ]
  },
  {
    digimon: "Betamon",
    nickName: "SpookyFishy",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Digitrucha", cantidad: "1-2" }
    ]
  },
  {
    digimon: "CardmonChild",
    nickName: "Cardmon Child",
    niveles: [3],
    entrenamientos: ["40-59.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Booster C (C)", cantidad: 1 }
    ]
  },
  {
    digimon: "Bacomon Basico",
    nickName: "Bacomon",
    niveles: "todos",
    entrenamientos: "todos",
    errores: "0-6",
    itemDrop: [
      { item: "Caja Basica", cantidad: 1 }
    ]
  },
      {
    digimon: "AeroVDramonBlack",
    nickName: "1nst1g4t0r",
    niveles: "todos",
    entrenamientos: "todos",
    errores: "1-6",
    itemDrop: [
      { tipo: "driverGenerico", cantidad: 2 },
      { tipo: "bits", cantidad: 500 }
    ]
  },
  {
    digimon: "Bacomon Liston",
    nickName: "Bacomon Liston",
    niveles: "todos",
    entrenamientos: "todos",
    errores: "6",
    itemDrop: [
      { item: "Caja con Liston", cantidad: 1 }
    ]
  },
  {
    digimon: "Bacomon Rayas",
    nickName: "Bacomon Rayas",
    niveles: "todos",
    entrenamientos: "todos",
    errores: "6",
    itemDrop: [
      { item: "Caja con Rayas", cantidad: 1 }
    ]
  },
  {
    digimon: "Bacomon Lunar",
    nickName: "Bacomon Lunar",
    niveles: "todos",
    entrenamientos: "todos",
    errores: "1-6",
    itemDrop: [
      { item: "Caja Lunar", cantidad: 1 }
    ]
  },
  {
    digimon: "Kuramon",
    nickName: "Kuramon",
    niveles: [3],
    entrenamientos: "todos",
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0010", cantidad: 1 }
    ]
  },
  // Child 60-100%
  {
    digimon: "Gabumon",
    nickName: "Gabumon",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0062", cantidad: 1 }
    ]
  },
  {
    digimon: "Agumon 2006",
    nickName: "Koi",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Bebida Deportiva", cantidad: "2-3" }
    ]
  },
  {
    digimon: "Gotsumon",
    nickName: "Gotsumon",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Mega Verdura", cantidad: 1 }
    ]
  },
  {
    digimon: "Pillomon",
    nickName: "Dolly",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Bandita", cantidad: 1 }
    ]
  },
  {
    digimon: "Pteromon",
    nickName: "ISA K",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0027", cantidad: 1 }
    ]
  },
  {
    digimon: "Betamon",
    nickName: "SpookyFishy",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { item: "DigiTruchaNegra", cantidad: 1 }
    ]
  },
  {
    digimon: "Mushmon",
    nickName: "Shemage",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "6",
    diaSemana: "lunes",
    itemDrop: [ { item: "HongoExtraño", cantidad: 1 } ]
  },
  {
    digimon: "Dorumon",
    nickName: "DORUmon",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "6",
    diaSemana: "lunes",
    entreno100: true,
    itemDrop: [{ item: "Clave Prototipo", cantidad: 1 }]
  },

  {
    digimon: "CardmonChild",
    nickName: "Cardmon Child",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Booster C (C)", cantidad: 1 }
    ]
  },

  // Bosses Child - Solo aparecen con 80%+ de entrenamiento
  {
    digimon: "Botamon",
    nickName: "Smoll",
    niveles: [3],
    entrenamientos: ["60-100"],
    errores: "0-6",
    boss: true,
    itemDrop: [
      { item: "Solomillo", cantidad: 1 }
    ]
  },

  // ==================== ADULT ====================
  // Adult 0-49.99%
  {
    digimon: "Icemon",
    nickName: "_FRIEND",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Verdura Congelada", cantidad: 2 }
    ]
  },
  {
    digimon: "Shooting Starmon",
    nickName: "Shooting Starmon",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0034", cantidad: 1 }
    ]
  },
  {
    digimon: "Geremon",
    nickName: "Geremon",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Carne Anomala", cantidad: 1 }
    ]
  },
  {
    digimon: "Nanimon",
    nickName: "Princesa",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Manzana", cantidad: 2 }
    ]
  },
  {
    digimon: "Chamblemon",
    nickName: "Champiñonmaniaco",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Champiñon", cantidad: 2 }
    ]
  },
  {
    digimon: "Bakemon LT",
    nickName: "Bakemon",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "D001", cantidad: 2 }
    ]
  },
  {
    digimon: "Platinumscumon",
    nickName: "Platinumscumon",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Caca de platino", cantidad: 2 }
    ]
  },
  {
    digimon: "Clockmon",
    nickName: "Clockmon",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0040", cantidad: 1 }
    ]
  },
  {
    digimon: "Numemon",
    nickName: "Darling",
    niveles: [4],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Manzana verde", cantidad: 1 }
    ]
  },
  // Adult 50-69.99%
  {
    digimon: "GreymonBlack",
    nickName: "Blacky",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Solomillo", cantidad: 1 }
    ]
  },
  {
    digimon: "NiseDrimogemon",
    nickName: "Drimogemon?",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Champiñon Feliz", cantidad: 1 }
    ]
  },
  {
    digimon: "Drimogemon",
    nickName: "Taladrito",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Restos de Metal", cantidad: 1 }
    ]
  },
  {
    digimon: "Thunderballmon",
    nickName: "Ippo",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Mega zanahoria", cantidad: 1 }
    ]
  },
  {
    digimon: "GoldGuardromon",
    nickName: "Elyon",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0007", cantidad: 1 }
    ]
  },
  {
    digimon: "GoldNumemon",
    nickName: "Zehook",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Bellota de oro", cantidad: 1 }
    ]
  },
  {
    digimon: "Soulmon LT",
    nickName: "SpookySoul",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Nuez Magica", cantidad: 1 }
    ]
  },
  {
    digimon: "Seadramon",
    nickName: "SpookyFishy",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Digi Trucha", cantidad: 1 }
    ]
  },
  {
    digimon: "GeoGreymon",
    nickName: "Bimbodzilla",
    niveles: [4],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0031", cantidad: 1 }
    ]
  },
  // Adult 70-100%
  {
    digimon: "VDramon",
    nickName: "Zero",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Bandita", cantidad: 1 }
    ]
  },
  {
    digimon: "Cardmon Adult",
    nickName: "Cardmon Adult",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Booster C (A)", cantidad: 1 }
    ]
  },
  {
    digimon: "Tuchidarumon",
    nickName: "Pavitra mitti",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Papa", cantidad: 3 }
    ]
  },
  {
    digimon: "Tuskmon",
    nickName: "Gerardo",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Solomillo", cantidad: 2 }
    ]
  },
  {
    digimon: "RedVDramon",
    nickName: "Lee",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Manzana Azul", cantidad: 1 }
    ]
  },
  {
    digimon: "VDramonBlack",
    nickName: "Katsu",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "ST040", cantidad: 1 }
    ]
  },
  // Adult - Casos especiales (todos los estratos)
  {
    digimon: "Kuramon",
    nickName: "Kuramon",
    niveles: [4],
    entrenamientos: "todos",
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0009", cantidad: 1 }
    ]
  },
  // Bosses Adult - Solo aparecen con 80%+ de entrenamiento
  {
    digimon: "Starmon",
    nickName: "Seiya",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    boss: true,
    itemDrop: [
      { tipo: "driver", driver: "BO003", cantidad: 1 }
    ]
  },
  {
    digimon: "Gigantic Numemon",
    nickName: "Gigantic Numemon",
    niveles: [4],
    entrenamientos: ["70-100"],
    errores: "0-6",
    boss: true,
    itemDrop: [
      { tipo: "driver", driver: "BO007", cantidad: 1 }
    ]
  },

  // ==================== PERFECT ====================
  // Perfect - Casos especiales (todos los estratos)
  {
    digimon: "Kuramon",
    nickName: "Kuramon",
    niveles: [5],
    entrenamientos: "todos",
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0010", cantidad: 1 }
    ]
  },
  // Perfect - Caso especial de aparición (3-6 errores)
  {
    digimon: "Metal Fantomon",
    nickName: "Tarnished",
    niveles: [5],
    entrenamientos: "todos",
    errores: "3-6",
    itemDrop: [
      { item: "Carne X", cantidad: 1 }
    ]
  },
  // Bosses Perfect - Solo aparecen con 80%+ de entrenamiento
  {
    digimon: "Burpmon",
    nickName: "Chonky",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    boss: true,
    itemDrop: [
      { tipo: "driver", driver: "BO001", cantidad: 1 }
    ]
  },
  {
    digimon: "Giromon",
    nickName: "Giroman",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    boss: true,
    itemDrop: [
      { tipo: "driver", driver: "BO002", cantidad: 1 }
    ]
  },

  {
    digimon: "CardmonUltimate",
    nickName: "Cardmon Ultimate",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    boss: true,
    finDeSemana: true,
    itemDrop: [
      { tipo: "driver", driver: "BO005", cantidad: 1 }
    ]
  },

  // Perfect 0 - 49.99%
  {
    digimon: "Andromon",
    nickName: "Ichiban el 1°",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Verdura", cantidad: 2 }
    ]
  },
  {
    digimon: "Great King Scumon",
    nickName: "The King",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Caca", cantidad: 5 }
    ]
  },
  {
    digimon: "Blizzarmon",
    nickName: "Blizzarmon",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Champiñon Congelado", cantidad: 3 }
    ]
  },
  {
    digimon: "Master Tyranomon",
    nickName: "Earl Sinclair",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Carne Grande", cantidad: 3 }
    ]
  },
  {
    digimon: "Digitamamon",
    nickName: "Princesa",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Manzana", cantidad: 2 }
    ]
  },
  {
    digimon: "SuperStarmon",
    nickName: "Joseph",
    niveles: [5],
    entrenamientos: ["0-49.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0057", cantidad: 1 }
    ]
  },

  // Perfect 50 - 69.99%
  {
    digimon: "Triceramon",
    nickName: "Aku",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Mega Verdura", cantidad: 2 }
    ]
  },
  {
    digimon: "Big Mamemon",
    nickName: "B.I.G",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "V0019", cantidad: 1 }
    ]
  },
  {
    digimon: "Gigadramon",
    nickName: "Pancito",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Manzana Azul", cantidad: 2 }
    ]
  },
  {
    digimon: "Etemon",
    nickName: "Sp00kyF4rmer",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0011", cantidad: 1 }
    ]
  },
  {
    digimon: "Mamemon",
    nickName: "Polvo",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Bandita", cantidad: 1 }
    ]
  },
  {
    digimon: "Cardmon Perfect",
    nickName: "Chuzy",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { item: "Booster C (P)", cantidad: 1 }
    ]
  },
  {
    digimon: "SkullGreymon",
    nickName: "King Underbite",
    niveles: [5],
    entrenamientos: ["50-69.99"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "W0054", cantidad: 1 }
    ]
  },

  // Perfect 70 - 100%
  {
    digimon: "AeroVdramon",
    nickName: "Zero",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "ST016", cantidad: 1 },
      { tipo: "driver", driver: "ST018", cantidad: 1 },
      { tipo: "driver", driver: "ST032", cantidad: 1 },
      { tipo: "driver", driver: "ST043", cantidad: 1 },
      { tipo: "driver", driver: "ST056", cantidad: 1 }
    ]
  },
  {
    digimon: "MetalMamemon",
    nickName: "Metalmorph",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Restos de Metal", cantidad: 1 }
    ]
  },
  {
    digimon: "Black King Numemon",
    nickName: "Tiz",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Bellota de Cristal", cantidad: 1 }
    ]
  },
  {
    digimon: "Metal Greymon",
    nickName: "Digimaru",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "ST031", cantidad: 1 },
      { tipo: "driver", driver: "ST046", cantidad: 1 },
      { tipo: "driver", driver: "ST029", cantidad: 1 },
      { tipo: "driver", driver: "ST030", cantidad: 1 }
    ]
  },
  {
    digimon: "Megadramon",
    nickName: "Parry",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { tipo: "driver", driver: "ST047", cantidad: 1 },
      { tipo: "driver", driver: "ST040", cantidad: 1 },
      { tipo: "driver", driver: "ST038", cantidad: 1 }
    ]
  },
  {
    digimon: "Insekimon High Tier",
    nickName: "Tarnished",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Mega Zanahoria", cantidad: 3 }
    ]
  },
  {
    digimon: "Fantomon",
    nickName: "S.Eater.E",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Carne X", cantidad: 1 }
    ]
  },
  {
    digimon: "Daipenmon",
    nickName: "Jack O Lagger",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "DigiTrucha Negra", cantidad: 3 }
    ]
  },
  {
    digimon: "Cardmon Perfect",
    nickName: "Chuzy",
    niveles: [5],
    entrenamientos: ["70-100"],
    errores: "0-6",
    itemDrop: [
      { item: "Booster C (P)", cantidad: 1 }
    ]
  }
];
