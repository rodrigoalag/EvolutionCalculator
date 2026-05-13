const fullDigimonReqDict = {

  // ===== BABY I =====
  "Botamon": {
    "ID": 0, "Tama": "V0", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 4 },
    "Stat Base": { "ATK": 6, "DEF": 6, "HP": 50, "Vel": 4, "Digipuntos": 2 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Chibickmon": {
    "ID": 55, "Tama": "VS", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 5 },
    "Stat Base": { "ATK": 7, "DEF": 4, "HP": 40, "Vel": 6, "Digipuntos": 2 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Yolkmon": {
    "ID": 47, "Tama": "VL", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 1 },
    "Stat Base": { "ATK": 3, "DEF": 1, "HP": 40, "Vel": 13, "Digipuntos": 2.1 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Kekomon": {
    "ID": 175, "Tama": "BG", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 5 },
    "Stat Base": { "ATK": 2, "DEF": 2, "HP": 150, "Vel": 2, "Digipuntos": 2.1 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Dodomon": {
    "ID": "146", "Tama": "PR", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 5 },
    "Stat Base": { "ATK": 7, "DEF": 4, "HP": 60, "Vel": 4, "Digipuntos": 2.1 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },

  // ===== BABY II =====
  // Viene y Evoluciona hacia Childs son auto-generados por _autoLinkBabyChain()
  "Koromon": {
    "ID": 1, "Tama": "V0", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 6 },
    "Stat Base": { "ATK": 9, "DEF": 6, "HP": 90, "Vel": 6, "Digipuntos": 3 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Pickmon": {
    "ID": 56, "Tama": "VS", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 10 },
    "Stat Base": { "ATK": 10, "DEF": 5, "HP": 70, "Vel": 8, "Digipuntos": 3 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Fluffymon": {
    "ID": 48, "Tama": "VL", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 4 },
    "Stat Base": { "ATK": 3, "DEF": 1, "HP": 50, "Vel": 21, "Digipuntos": 3 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Kekkomon": {
    "ID": 176, "Tama": "BG", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 10 },
    "Stat Base": { "ATK": 2, "DEF": 4, "HP": 220, "Vel": 2, "Digipuntos": 3.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },
  "Dorimon": {
    "ID": "147", "Tama": "PR", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno",
    "Requisitos": { "Peso": 10 },
    "Stat Base": { "ATK": 10, "DEF": 5, "HP": 100, "Vel": 5, "Digipuntos": 3.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": [] }
  },

  // ===== CHILD =====
  "Agumon": {
    "ID": 2, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK" },
    "Stat Base": { "ATK": 50, "DEF": 25, "HP": 250, "Vel": 50, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Greymon", "Tyranomon", "V-Dramon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Agumon Hakase": {
    "ID": 97, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 25, "Error Maximo": 6, "EntrenamientoHecho": "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Nickname": "HK2006" },
    "Stat Base": { "ATK": 45, "DEF": 35, "HP": 350, "Vel": 35, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Greymon", "Tyranomon", "V-Dramon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Agumon (Black)": {
    "ID": 21, "Tama": "V0", "Nivel": 3, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Virus" },
    "Stat Base": { "ATK": 55, "DEF": 25, "HP": 300, "Vel": 40, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Tyranomon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Tuskmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Agumon (2006)": {
    "ID": 71, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Combat", "2Ciclos": "Si" },
    "Stat Base": { "ATK": 55, "DEF": 25, "HP": 250, "Vel": 55, "Digipuntos": 16 },
    "Evoluciones": { "Evoluciona": ["GeoGreymon", "Tyranomon", "V-Dramon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Yuki Agumon": {
    "ID": 22, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si", "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Frost" },
    "Stat Base": { "ATK": 40, "DEF": 30, "HP": 350, "Vel": 45, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Tyranomon", "V-Dramon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Yukidarumon", "Icemon", "Chackmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Kokuwamon": {
    "ID": 3, "Tama": "V0", "Nivel": 3, "Atributo": "Data", "Tipo": "Maquina",
    "Requisitos": { "Peso": 20, "Error Maximo": 6, "EntrenamientoHecho": "No", "Stat Superior": "HP" },
    "Stat Base": { "ATK": 40, "DEF": 40, "HP": 450, "Vel": 25, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Greymon", "Tyranomon", "V-Dramon", "Deltamon", "V-Dramon (Black)", "Thunderballmon", "Guardromon", "Clockmon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Pillomon": {
    "ID": 75, "Tama": "M", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Mutante",
    "Requisitos": { "Peso": 5, "EntrenamientoHecho": "No", "% Entrenamiento": 0 },
    "Stat Base": { "ATK": 25, "DEF": 40, "HP": 500, "Vel": 35, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Numemon", "Scumon", "Bakemon LT", "Nanimon", "Mercuremon", "Burpmon"], "Viene": [] }
  },
  "Starmons": {
    "ID": 84, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "% Entrenamiento": "0-79", "Stat Superior": "HP", "Stat Superior 2": "Vel" },
    "Stat Base": { "ATK": 40, "DEF": 20, "HP": 300, "Vel": 60, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Shoutmon + Star Sword", "Shoutmon SH", "ShootingStarmon", "Starmon", "Bakemon LT", "Burpmon", "Nanimon", "Scumon", "Numemon"], "Viene": [] }
  },
  "Gotsumon": {
    "ID": 85, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Tierra",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "Program": "Ore" },
    "Stat Base": { "ATK": 35, "DEF": 40, "HP": 400, "Vel": 35, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Icemon", "Burpmon", "Bakemon LT", "Starmon", "Nanimon", "Scumon", "Numemon"], "Viene": [] }
  },
  "Shoutmon": {
    "ID": 158, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 15, "Hora": "Día (12:00-23:59 UTC-3)", "% Entrenamiento": "80-100", "Stat Superior": "ATK" },
    "Stat Base": { "ATK": 45, "DEF": 25, "HP": 300, "Vel": 40, "Digipuntos": 14 },
    "Evoluciones": { "Evoluciona": ["Shoutmon + Star Sword", "Shoutmon SH", "King Shoutmon", "Burpmon", "Numemon", "Nanimon", "Bakemon LT", "Scumon"], "Viene": [] }
  },
  "Shoutmon (Black)": {
    "ID": 159, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 15, "Hora": "Noche (0:00-11:59 UTC-3)", "% Entrenamiento": "80-100", "Stat Superior": "ATK" },
    "Stat Base": { "ATK": 40, "DEF": 25, "HP": 300, "Vel": 45, "Digipuntos": 14 },
    "Evoluciones": { "Evoluciona": ["Shoutmon + Star Sword", "Shoutmon SH", "King Shoutmon", "Burpmon", "Numemon", "Nanimon", "Bakemon LT", "Scumon"], "Viene": [] }
  },
  "Shoutmon SH": {
    "ID": 160, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 13,
      "Xross": { "Shoutmon": "1 VS001 Driver", "Shoutmon (Black)": "1 VS001 Driver", "Starmons": ["1 VS009 Driver", "1 VS010 Driver"] }
    },
    "Stat Base": { "ATK": 45, "DEF": 25, "HP": 300, "Vel": 60, "Digipuntos": 16 },
    "Evoluciones": { "Evoluciona": ["King Shoutmon", "Burpmon", "Numemon", "Nanimon", "Bakemon LT", "Scumon"], "Viene": ["Shoutmon", "Shoutmon (Black)", "Starmons"] }
  },
  "Shoutmon + Star Sword": {
    "ID": 161, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 17,
      "Xross": { "Shoutmon": "1 VS001 Driver", "Shoutmon (Black)": "1 VS001 Driver", "Starmons": ["1 VS009 Driver", "1 VS010 Driver"] }
    },
    "Stat Base": { "ATK": 65, "DEF": 25, "HP": 300, "Vel": 40, "Digipuntos": 16 },
    "Evoluciones": { "Evoluciona": ["King Shoutmon", "Burpmon", "Numemon", "Nanimon", "Bakemon LT", "Scumon"], "Viene": ["Shoutmon", "Shoutmon (Black)", "Starmons"] }
  },
  "Pteromon": {
    "ID": 49, "Tama": "VL", "Nivel": 3, "Atributo": "Data", "Tipo": "Viento",
    "Requisitos": { "Peso": 10, "Error Maximo": 6 },
    "Stat Base": { "ATK": 20, "DEF": 20, "HP": 250, "Vel": 65, "Digipuntos": 13 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "Galemon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Kiwimon"], "Viene": [] }
  },
  "Ghostmon": {
    "ID": 99, "Tama": "D", "Nivel": 3, "Atributo": "Data", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 10, "Program": "Death" },
    "Stat Base": { "ATK": 45, "DEF": 25, "HP": 250, "Vel": 65, "Digipuntos": 16 },
    "Evoluciones": { "Evoluciona": ["Bakemon LT", "Bakemon MT", "Numemon", "Scumon", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Mushmon": {
    "ID": 112, "Tama": "P", "Nivel": 3, "Atributo": "Virus", "Tipo": "Planta",
    "Requisitos": { "Peso": 12, "Program": "Mushroom" },
    "Stat Base": { "ATK": 30, "DEF": 25, "HP": 550, "Vel": 40, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Chamblemon", "Nanimon", "Scumon", "Numemon", "Bakemon LT", "Burpmon"], "Viene": [] }
  },
  "Penmon": {
    "ID": 179, "Tama": "SP", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Requisitos": { "Peso": 15, "Xross": ["1 SP004 Driver", "1 SP000 Driver + 1 SP001 Driver"] },
    "Stat Base": { "ATK": 35, "DEF": 25, "HP": 350, "Vel": 55, "Digipuntos": 15.0 },
    "Evoluciones": { "Evoluciona": ["Yukidarumon", "Icemon", "Chackmon", "Nanimon", "Scumon", "Numemon", "Bakemon LT", "Burpmon"], "Viene": [] }
  },
  "Tyumon": {
    "ID": 184, "Tama": "M", "Nivel": 3, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Program": "Trash" },
    "Stat Base": { "ATK": 30, "DEF": 25, "HP": 600, "Vel": 25, "Digipuntos": 14.0 },
    "Evoluciones": { "Evoluciona": ["ScumonTyumon", "ScumonTyumonHigh", "Mercuremon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Dorumon": {
    "ID": "148", "Tama": "PR", "Nivel": 3, "Atributo": "Data", "Tipo": "Bestia",
    "Requisitos": { "Peso": 18 },
    "Stat Base": { "ATK": 55, "DEF": 35, "HP": 400, "Vel": 25, "Digipuntos": 15.5 },
    "Evoluciones": { "Evoluciona": ["Dorugamon", "DexDorugamon", "Raptordramon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Gekkomon": {
    "ID": 177, "Tama": "BG", "Nivel": 3, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 18, "Error Maximo": 6, "Stat Superior": "ATK" },
    "Stat Base": { "ATK": 35, "DEF": 35, "HP": 450, "Vel": 35, "Digipuntos": 15.0 },
    "Evoluciones": { "Evoluciona": ["Armalizamon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Chiropmon": {
    "ID": 156, "Tama": "BG", "Nivel": 3, "Atributo": "Virus", "Tipo": "Bestia",
    "Requisitos": { "Peso": 15, "Error Maximo": 6, "Stat Superior": "Vel" },
    "Stat Base": { "ATK": 35, "DEF": 25, "HP": 300, "Vel": 60, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Armalizamon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Pristimon": {
    "ID": 999, "Tama": "BG", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Marioneta",
    "Requisitos": { "Peso": "", "Error Maximo": 6, "Stat Superior": "ATK" },
    "Stat Base": { "ATK": 60, "DEF": 25, "HP": 250, "Vel": 40, "Digipuntos": 15 },
    "Evoluciones": { "Evoluciona": ["Armalizamon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Pomumon": {
    "ID": 176, "Tama": "P", "Nivel": 3, "Atributo": "Data", "Tipo": "Planta",
    "Requisitos": { "Peso": "" },
    "Stat Base": { "ATK": 35, "DEF": 30, "HP": 550, "Vel": 35, "Digipuntos": 15.0 },
    "Evoluciones": { "Evoluciona": ["Kiwimon", "Parasaumon", "Numemon", "Scumon", "Bakemon LT", "Nanimon", "Burpmon"], "Viene": [] }
  },
  "Burpmon": {
    "ID": 33, "Tama": "M", "Nivel": 3, "Atributo": "Free", "Tipo": "Mutante",
    "Requisitos": { "Peso": 99 },
    "Stat Base": null,
    "Evoluciones": { "Evoluciona": [], "Viene": [] } // Viene se calcula automáticamente: todos los Digimon
  },

  // ===== ADULT =====
  "Greymon": {
    "ID": 4, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon", "Vinculo Minimo alcanzado": 70, "WinRate": 60, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 100, "DEF": 60, "HP": 1000, "Vel": 65, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "SkullGreymon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon"] }
  },
  "Tyranomon": {
    "ID": 5, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 40, "Bonus Stat Superior": "Balanceado", "WinRate": 50, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 65, "DEF": 70, "HP": 1150, "Vel": 50, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Master Tyranomon", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Dark Tyranomon", "SkullGreymon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "Dark Tyranomon": {
    "ID": 6, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Requisitos": { "Program": "Virus" },
    "Stat Base": { "ATK": 80, "DEF": 50, "HP": 1050, "Vel": 65, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon (Black)", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "SkullGreymon", "Burpmon"], "Viene": ["Tyranomon"] }
  },
  "V-Dramon": {
    "ID": 7, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Requisitos": { "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus WinRate": 70, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100 },
    "Stat Base": { "ATK": 100, "DEF": 55, "HP": 1050, "Vel": 90, "Digipuntos": 35 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "RedVDramon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Yuki Agumon", "Agumon (2006)"] }
  },
  "Deltamon": {
    "ID": 8, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 30, "Error Maximo": "3-6", "% Entrenamiento": 60, "Bonus Errores": 5, "WinRate": 50, "Combates Minimos": 15, "Stat Superior": "ATK" },
    "Stat Base": { "ATK": 115, "DEF": 40, "HP": 900, "Vel": 55, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "Thunderballmon": {
    "ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 5, "Error Maximo": 2, "% Entrenamiento": 60, "Digimon Bonus": "Kokuwamon", "WinRate": 50, "Combates Minimos": 15, "Stat Superior": "Vel" },
    "Stat Base": { "ATK": 85, "DEF": 50, "HP": 900, "Vel": 75, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Mametyramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "Guardromon": {
    "ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "Peso": 35, "Error Maximo": 2, "% Entrenamiento": 50, "Bonus Batallas": "15-20", "WinRate": 50, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 50, "DEF": 110, "HP": 1100, "Vel": 30, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "GoldGuardromon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "V-Dramon (Black)": {
    "ID": 34, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dragon",
    "Requisitos": {
      "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus Batallas": 25, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100, "Program": "Virus",
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "Agumon (Black)": { "Program": "-" }
      }
    },
    "Stat Base": { "ATK": 105, "DEF": 65, "HP": 1050, "Vel": 75, "Digipuntos": 35 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon (Black)", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "RedVDramon": {
    "ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dragon",
    "Requisitos": { "Vinculo Minimo alcanzado": -50 },
    "Stat Base": { "ATK": 110, "DEF": 45, "HP": 950, "Vel": 100, "Digipuntos": 35 },
    "Evoluciones": { "Evoluciona": ["Aero V-dramon (Black)", "Burpmon"], "Viene": ["V-Dramon"] }
  },
  "GoldGuardromon": {
    "ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Free", "Tipo": "Maquina",
    "Requisitos": { "Comida": "Bellota Dorada" },
    "Stat Base": { "ATK": 50, "DEF": 120, "HP": 1100, "Vel": 30, "Digipuntos": 31 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Burpmon"], "Viene": ["Guardromon"] }
  },
  "GeoGreymon": {
    "ID": 72, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 20, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (2006)", "WinRate": 60, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 110, "DEF": 60, "HP": 1000, "Vel": 70, "Digipuntos": 34 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "RizeGreymon", "Andromon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "SkullGreymon", "Burpmon"], "Viene": ["Agumon (2006)"] }
  },
  "Clockmon": {
    "ID": 79, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Requisitos": { "Peso": 18, "Error Maximo": "1-6", "% Entrenamiento": 50, "WinRate": 50, "Combates Minimos": 15, "Bonus Batallas": 0 },
    "Stat Base": { "ATK": 80, "DEF": 50, "HP": 1050, "Vel": 65, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Burpmon"], "Viene": ["Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (Black)", "Yuki Agumon", "Agumon (2006)"] }
  },
  "Tuskmon": {
    "ID": 80, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (Black)", "WinRate": 60, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 105, "DEF": 55, "HP": 1250, "Vel": 40, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon (Black)", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "SkullGreymon", "Burpmon"], "Viene": ["Agumon (Black)"] }
  },
  "Yukidarumon": {
    "ID": 81, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Requisitos": { "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "Bonus Batallas": "15-20", "WinRate": 60, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 80, "DEF": 80, "HP": 1150, "Vel": 50, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["Metal Greymon (Virus)", "Andromon", "Aero V-dramon", "Metal Tyranomon", "Metal Greymon", "Mamemon", "Triceramon", "Megadramon", "Chackmon", "Blizzarmon", "Polarbearmon", "Burpmon"], "Viene": ["Yuki Agumon", "Penmon"] }
  },
  "Numemon": {
    "ID": 11, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10 },
    "Stat Base": { "ATK": 45, "DEF": 40, "HP": 750, "Vel": 40, "Digipuntos": 20 },
    "Evoluciones": { "Evoluciona": ["Monzaemon", "Black King Numemon", "KaratsukiNumemon", "Geremon", "GoldNumemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Ghostmon", "Pillomon", "Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon + Star Sword", "Shoutmon SH", "Shoutmon (Black)", "Mushmon", "Penmon", "Dorumon", "Gekkomon", "Pomumon", "Pteromon", "Tyumon"] }
  },
  "Scumon": {
    "ID": 41, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Comida": "5 Caca" },
    "Stat Base": { "ATK": 79, "DEF": 64, "HP": 665, "Vel": 82, "Digipuntos": 29 },
    "Evoluciones": { "Evoluciona": ["GreatKingScumon", "Etemon", "PlatinumScumon", "ScumonTyumon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Ghostmon", "Pillomon", "Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon + Star Sword", "Shoutmon SH", "Shoutmon (Black)", "Mushmon", "Penmon", "Dorumon", "Gekkomon", "Pomumon", "Pteromon", "Tyumon"] }
  },
  "KaratsukiNumemon": {
    "ID": 40, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Comida": "5 Sardinas" },
    "Stat Base": { "ATK": 50, "DEF": 70, "HP": 800, "Vel": 30, "Digipuntos": 23 },
    "Evoluciones": { "Evoluciona": ["Monzaemon", "Black King Numemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Numemon"] }
  },
  "Geremon": {
    "ID": 20, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Program": "Trash" },
    "Stat Base": { "ATK": 50, "DEF": 40, "HP": 750, "Vel": 45, "Digipuntos": 21 },
    "Evoluciones": { "Evoluciona": ["Monzaemon", "Black King Numemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Numemon"] }
  },
  "GoldNumemon": {
    "ID": 42, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Comida": "Bellota Dorada" },
    "Stat Base": { "ATK": 50, "DEF": 50, "HP": 750, "Vel": 45, "Digipuntos": 22 },
    "Evoluciones": { "Evoluciona": ["Monzaemon", "Black King Numemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Numemon"] }
  },
  "PlatinumScumon": {
    "ID": 43, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Comida": "Chatarra" },
    "Stat Base": { "ATK": 79, "DEF": 64, "HP": 665, "Vel": 82, "Digipuntos": 29 },
    "Evoluciones": { "Evoluciona": ["Etemon", "PlatinumScumonTyumon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Scumon"] }
  },
  "Nanimon": {
    "ID": 110, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "Vinculo al momento de evolucionar": -50 },
    "Stat Base": { "ATK": 50, "DEF": 30, "HP": 650, "Vel": 55, "Digipuntos": 20 },
    "Evoluciones": { "Evoluciona": ["Digitamamon", "BomberNanimon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Ghostmon", "Pillomon", "Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon + Star Sword", "Shoutmon SH", "Shoutmon (Black)", "Mushmon", "Penmon", "Dorumon", "Gekkomon", "Pomumon", "Pteromon", "Tyumon"] }
  },
  "BomberNanimon": {
    "ID": 111, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 15, "Xross": "1 V0019 Driver" },
    "Stat Base": { "ATK": 70, "DEF": 10, "HP": 400, "Vel": 80, "Digipuntos": 20 },
    "Evoluciones": { "Evoluciona": ["Digitamamon", "Sephirothmon", "Mercuremon", "Burpmon"], "Viene": ["Nanimon"] }
  },
  "ScumonTyumon": {
    "ID": 185, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 20,
      "Xross": { "Scumon": "1 M017 Driver", "Tyumon": "1 M005 Driver" }
    },
    "Stat Base": { "ATK": 79, "DEF": 64, "HP": 665, "Vel": 82, "Digipuntos": 29 },
    "Evoluciones": { "Evoluciona": ["Etemon", "Mercuremon", "Sephirothmon", "Burpmon", "PlatinumScumonTyumon"], "Viene": ["Ghostmon", "Pillomon", "Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon + Star Sword", "Shoutmon SH", "Shoutmon (Black)", "Mushmon", "Penmon", "Dorumon", "Gekkomon", "Pomumon", "Pteromon", "Tyumon"] }
  },
  "PlatinumScumonTyumon": {
    "ID": 187, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 20, "Comida": "Chatarra" },
    "Stat Base": { "ATK": 79, "DEF": 64, "HP": 665, "Vel": 82, "Digipuntos": 29 },
    "Evoluciones": { "Evoluciona": ["Etemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["ScumonTyumon"] }
  },
  "ScumonTyumonHigh": {
    "ID": 186, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 20, "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 100, "DEF": 40, "HP": 700, "Vel": 30, "Digipuntos": 24.0 },
    "Evoluciones": { "Evoluciona": ["Etemon", "Burpmon", "PlatinumScumonTyumonHigh", "Mercuremon", "Sephirothmon"], "Viene": ["Tyumon"] }
  },
  "PlatinumScumonTyumonHigh": {
    "ID": 188, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 20, "Comida": "Chatarra" },
    "Stat Base": { "ATK": 75, "DEF": 50, "HP": 850, "Vel": 30, "Digipuntos": 26.0 },
    "Evoluciones": { "Evoluciona": ["Etemon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["ScumonTyumonHigh"] }
  },
  "ShootingStarmon": {
    "ID": 57, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 30, "Error Maximo": 6, "% Entrenamiento": 80, "WinRate": 65, "Combates Minimos": 20, "Xross": "4 VS000 Driver" },
    "Stat Base": { "ATK": 120, "DEF": 40, "HP": 900, "Vel": 75, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["SuperStarmon", "DarkSuperStarmon", "Burpmon"], "Viene": ["Starmons"] }
  },
  "Starmon": {
    "ID": 58, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 15, "Error Maximo": 2, "% Entrenamiento": 70, "WinRate": 50, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 70, "DEF": 50, "HP": 1100, "Vel": 70, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["SuperStarmon", "DarkSuperStarmon", "Mercuremon", "Sephirothmon", "Burpmon"], "Viene": ["Starmons", "Gotsumon"] }
  },
  "King Shoutmon": {
    "ID": 162, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 20, "% Entrenamiento": 80, "Error Maximo": 1, "Combates Minimos": 15, "WinRate": 60, "Program": "Royal", "Bonus Vinculo Alcanzado": 80 },
    "Stat Base": { "ATK": 95, "DEF": 60, "HP": 900, "Vel": 80, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["Omega Shoutmon", "Burpmon"], "Viene": ["Shoutmon", "Shoutmon (Black)", "Shoutmon SH", "Shoutmon + Star Sword"] }
  },
  "Icemon": {
    "ID": 86, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Hielo",
    "Requisitos": {
      "Peso": 25, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 50, "Combates Minimos": 15, "Program": "Frost", "Bonus Comida": ["Verdura Congelada", "Champiñon Congelado"],
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "categorias": { "Quota/Key Points": ["Peso", "Error Maximo", "% Entrenamiento"], "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Program", "Bonus Comida"] },
        "Gotsumon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Program": "Frost" },
        "Yuki Agumon, Penmon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Program": "Ore" }
      }
    },
    "Stat Base": { "ATK": 60, "DEF": 90, "HP": 1000, "Vel": 50, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Insekimon Low Tier", "Insekimon Mid Tier Dark", "Insekimon Mid Tier Super", "Insekimon High Tier", "Chackmon", "Blizzarmon", "SuperStarmon", "DarkSuperStarmon", "Burpmon"], "Viene": ["Yuki Agumon", "Gotsumon", "Penmon"] }
  },
  "Chackmon": {
    "ID": 93, "Tama": "SP", "Nivel": 4, "Atributo": "Free", "Tipo": "Hielo",
    "Requisitos": {
      "Peso": 10, "% Entrenamiento": 80, "Error Maximo": 6, "Combates Minimos": 15, "WinRate": 60, "Xross": "1 SP000 Driver",
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "categorias": { "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"], "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"] },
        "Icemon, Yukidarumon": { "% Entrenamiento": 100, "Error Maximo": 6, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP000 Driver" },
        "Yuki Agumon, Penmon": { "% Entrenamiento": 80, "Error Maximo": 6, "WinRate": 60, "Combates Minimos": 15, "Xross": "1 SP000 Driver" },
        "Penmon": { "modo": "PuntajeIndividual", "Obligatorios": { "WinRate": 60, "Combates Minimos": 15, "Xross": "-" }, "Puntos": { "Peso": 10, "% Entrenamiento": 80, "Error Maximo": 6 } }
      }
    },
    "Stat Base": { "ATK": 80, "DEF": 80, "HP": 950, "Vel": 70, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["Blizzarmon", "Burpmon"], "Viene": ["Yuki Agumon", "Icemon", "Yukidarumon", "Penmon"] }
  },
  "Mercuremon": {
    "ID": 189, "Tama": "SP", "Nivel": 4, "Atributo": "Free", "Tipo": "Mutante",
    "Requisitos": {
      "Peso": 15, "% Entrenamiento": 80, "Error Maximo": 2, "Combates Minimos": 15, "WinRate": 50, "Xross": "1 SP013 Driver",
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "categorias": { "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"], "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"] },
        "Tyumon, Pillomon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Xross": "1 SP013 Driver" },
        "Numemon, Scumon, Nanimon, BomberNanimon, ScumonTyumon, PlatinumScumon, PlatinumScumonTyumon, ScumonTyumonHigh, PlatinumScumonTyumonHigh, KaratsukiNumemon, Geremon, GoldNumemon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Xross": "1 SP013 Driver" },
        "Thunderballmon, Starmon": { "% Entrenamiento": 100, "Error Maximo": 2, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP013 Driver" }
      }
    },
    "Stat Base": { "ATK": 90, "DEF": 30, "HP": 800, "Vel": 100, "Digipuntos": 30.0 },
    "Evoluciones": { "Evoluciona": ["Sephirothmon", "Burpmon"], "Viene": ["Tyumon", "Pillomon", "Numemon", "Scumon", "Nanimon", "BomberNanimon", "ScumonTyumon", "PlatinumScumon", "PlatinumScumonTyumon", "ScumonTyumonHigh", "PlatinumScumonTyumonHigh", "KaratsukiNumemon", "Geremon", "Thunderballmon", "GoldNumemon"] }
  },
  "Galemon": {
    "ID": 50, "Tama": "VL", "Nivel": 4, "Atributo": "Data", "Tipo": "Viento",
    "Requisitos": { "Peso": 15, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 15 },
    "Stat Base": { "ATK": 95, "DEF": 40, "HP": 650, "Vel": 100, "Digipuntos": 30 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "GrandGalemon"], "Viene": ["Pteromon"] }
  },
  "Bakemon LT": {
    "ID": 100, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 10, "Muerte inducida sin Carne X o Program (30% de salir)": "Si", "Comida": "Carne X", "Program": "Death" },
    "Stat Base": { "ATK": 40, "DEF": 40, "HP": 600, "Vel": 60, "Digipuntos": 20 },
    "Evoluciones": { "Evoluciona": ["Soulmon LT", "Fantomon", "Burpmon"], "Viene": ["Ghostmon", "Pillomon", "Agumon", "Agumon Hakase", "Kokuwamon", "Agumon (2006)", "Yuki Agumon", "Agumon (Black)", "Starmons", "Gotsumon", "Shoutmon", "Shoutmon + Star Sword", "Shoutmon SH", "Shoutmon (Black)", "Mushmon", "Penmon", "Dorumon", "Gekkomon", "Pomumon", "Pteromon", "Tyumon"] }
  },
  "Soulmon LT": {
    "ID": 101, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 10, "Comida": "Nuez Magica" },
    "Stat Base": { "ATK": 50, "DEF": 40, "HP": 600, "Vel": 70, "Digipuntos": 22 },
    "Evoluciones": { "Evoluciona": ["Fantomon", "Burpmon"], "Viene": ["Bakemon LT"] }
  },
  "Bakemon MT": {
    "ID": 100, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 10, "% Entrenamiento": 80, "Error Maximo": 1, "Combates Minimos": 15, "WinRate": 50, "Digimon Bonus": "Ghostmon" },
    "Stat Base": { "ATK": 50, "DEF": 50, "HP": 700, "Vel": 70, "Digipuntos": 24 },
    "Evoluciones": { "Evoluciona": ["Soulmon MT", "Fantomon", "Burpmon"], "Viene": ["Ghostmon"] }
  },
  "Soulmon MT": {
    "ID": 101, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 10, "Comida": "Nuez Magica" },
    "Stat Base": { "ATK": 60, "DEF": 50, "HP": 700, "Vel": 80, "Digipuntos": 26 },
    "Evoluciones": { "Evoluciona": ["Fantomon", "Burpmon"], "Viene": ["Bakemon MT"] }
  },
  "Chamblemon": {
    "ID": 107, "Tama": "P", "Nivel": 4, "Atributo": "Virus", "Tipo": "Planta",
    "Requisitos": { "Peso": 16, "% Entrenamiento": 100, "Error Maximo": 1, "Combates Minimos": 15, "WinRate": 50 },
    "Stat Base": { "ATK": 50, "DEF": 50, "HP": 1000, "Vel": 70, "Digipuntos": 27 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "Entmon"], "Viene": ["Mushmon"] }
  },
  "Kiwimon": {
    "ID": 176, "Tama": "P", "Nivel": 4, "Atributo": "Data", "Tipo": "Planta / Viento",
    "Requisitos": { "Peso": "" },
    "Stat Base": { "ATK": 50, "DEF": 40, "HP": 1100, "Vel": 100, "Digipuntos": 30.0 },
    "Evoluciones": { "Evoluciona": ["GrandGalemon", "Burpmon", "Delumon", "Entmon"], "Viene": ["Pomumon", "Pteromon"] }
  },
  "Parasaumon": {
    "ID": 176, "Tama": "P", "Nivel": 4, "Atributo": "Virus", "Tipo": "Planta / Dinosaurio",
    "Requisitos": { "Peso": "" },
    "Stat Base": { "ATK": 65, "DEF": 65, "HP": 1500, "Vel": 45, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["SkullGreymon", "Burpmon"], "Viene": ["Pomumon"] }
  },
  "Dorugamon": {
    "ID": "149", "Tama": "PR", "Nivel": 4, "Atributo": "Data", "Tipo": "Bestia / Dragon",
    "Requisitos": { "Peso": 20, "% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 60, "Combates Minimos": 15, "Digimon Bonus": "Dorumon" },
    "Stat Base": { "ATK": 80, "DEF": 65, "HP": 1250, "Vel": 55, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["DexDorugamon", "DexDoruguremon", "Doruguremon", "Burpmon"], "Viene": ["Dorumon"] }
  },
  "DexDorugamon": {
    "ID": "151", "Tama": "PR", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": {
      "Peso": 25,
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "Dorumon": {
          "Death Evo": true, "puntajeOk": 4, "puntajeNo": -10,
          "% Entrenamiento": 50, "Errores Minimos": 6, "Victorias Minimas": 30, "Vinculo al momento de evolucionar": -50, "Program": "Death"
        },
        "Dorugamon": {
          "modo": "SideEvolution", "puntajeOk": 6, "puntajeNo": -10,
          "Obligatorio": { "Program": "Death" },
          "Incumplir": { "% Entrenamiento": 50, "Errores Minimos": 6, "Combates Minimos": 30, "Vinculo al momento de evolucionar": -50 }
        }
      }
    },
    "Stat Base": { "ATK": 100, "DEF": 50, "HP": 900, "Vel": 60, "Digipuntos": 30.0 },
    "Evoluciones": { "Evoluciona": ["DexDoruguremon", "Burpmon"], "Viene": ["Dorumon", "Dorugamon"] }
  },
  "Raptordramon": {
    "ID": "153", "Tama": "PR", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Requisitos": { "Peso": 25, "% Entrenamiento": 100, "Error Maximo": 0, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100, "Tienes registrado a DexDorugamon y Dorugamon?": "Si", "Digimon Bonus": "Dorumon" },
    "Stat Base": { "ATK": 90, "DEF": 70, "HP": 1300, "Vel": 60, "Digipuntos": 35.0 },
    "Evoluciones": { "Evoluciona": ["Grademon", "Burpmon"], "Viene": ["Dorumon"] }
  },
  "Armalizamon": {
    "ID": 178, "Tama": "BG", "Nivel": 4, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 30, "% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 60, "Combates Minimos": 15, "Digimon Bonus": "Gekkomon" },
    "Stat Base": { "ATK": 70, "DEF": 100, "HP": 850, "Vel": 70, "Digipuntos": 32.5 },
    "Evoluciones": { "Evoluciona": ["SkullGreymon", "Burpmon"], "Viene": ["Gekkomon", "Chiropmon", "Pristimon"] }
  },

  // ===== PERFECT =====
  "Metal Greymon (Virus)": {
    "ID": 12, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 220, "DEF": 110, "HP": 1900, "Vel": 130, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Mugendramon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon"] }
  },
  "Andromon": {
    "ID": 13, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Requisitos": { "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 60, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No" },
    "Stat Base": { "ATK": 100, "DEF": 225, "HP": 2250, "Vel": 50, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Mugendramon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "Mametyramon": {
    "ID": 14, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 10, "Error Maximo": 2, "% Entrenamiento": 60, "Bonus Errores": "1-6", "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 V0003 Driver" },
    "Stat Base": { "ATK": 180, "DEF": 85, "HP": 2200, "Vel": 135, "Digipuntos": 62 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Thunderballmon"] }
  },
  "Aero V-dramon": {
    "ID": 15, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Requisitos": { "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon", "Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 215, "DEF": 110, "HP": 2250, "Vel": 150, "Digipuntos": 70 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Greymon", "Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "GoldGuardromon", "Clockmon"] }
  },
  "Aero V-dramon (Black)": {
    "ID": 36, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dragon",
    "Requisitos": { "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon (Black)", "Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 235, "DEF": 110, "HP": 2050, "Vel": 150, "Digipuntos": 70 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["V-Dramon (Black)", "RedVDramon", "Tuskmon", "Dark Tyranomon"] }
  },
  "Metal Tyranomon": {
    "ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "Peso": 65, "Error Maximo": "3-6", "% Entrenamiento": 60, "Digimon Bonus": "Dark Tyranomon", "WinRate": 60, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 175, "DEF": 125, "HP": 2150, "Vel": 85, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Mugendramon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "MetalMamemon": {
    "ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Maquina",
    "Requisitos": { "% Entrenamiento": 100, "Program": "Mecha" },
    "Stat Base": { "ATK": 190, "DEF": 120, "HP": 2000, "Vel": 140, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Mugendramon", "Burpmon"], "Viene": ["Mamemon"] }
  },
  "Metal Greymon": {
    "ID": 23, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Requisitos": { "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Program": "Vaccine" },
    "Stat Base": { "ATK": 225, "DEF": 120, "HP": 2000, "Vel": 130, "Digipuntos": 67.5 },
    "Evoluciones": { "Evoluciona": ["MetalGreymon Alterous", "Wargreymon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "MetalGreymon Alterous": {
    "ID": 26, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Requisitos": { "% Entrenamiento": 100, "Victorias": 40, "Program": "Mecha" },
    "Stat Base": { "ATK": 235, "DEF": 125, "HP": 2050, "Vel": 135, "Digipuntos": 70 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "Wargreymon"], "Viene": ["Metal Greymon"] }
  },
  "Mamemon": {
    "ID": 24, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 5, "Error Maximo": 2, "% Entrenamiento": 50, "WinRate": 60, "Combates Minimos": 25, "Bonus Errores": "1-6" },
    "Stat Base": { "ATK": 185, "DEF": 75, "HP": 2000, "Vel": 140, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["MetalMamemon", "BigMamemon", "PrinceMamemon", "BanchoMamemon", "Sephirothmon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "Triceramon": {
    "ID": 37, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 50, "Error Maximo": 2, "% Entrenamiento": 50, "Digimon Bonus": "Tyranomon", "WinRate": 60, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 125, "DEF": 190, "HP": 2100, "Vel": 75, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "Megadramon": {
    "ID": 18, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "Peso": 55, "Error Maximo": "1-2", "% Entrenamiento": 75, "Bonus Batallas": 30, "WinRate": 60, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 210, "DEF": 80, "HP": 1750, "Vel": 135, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Gigadramon", "Mugendramon", "Burpmon"], "Viene": ["Greymon", "Tyranomon", "Dark Tyranomon", "V-Dramon", "Deltamon", "Thunderballmon", "Guardromon", "V-Dramon (Black)", "GoldGuardromon", "Clockmon", "Tuskmon", "GeoGreymon", "Yukidarumon"] }
  },
  "Gigadramon": {
    "ID": 25, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "% Entrenamiento": 100, "Program": "Mecha" },
    "Stat Base": { "ATK": 220, "DEF": 110, "HP": 1800, "Vel": 140, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Mugendramon", "Burpmon"], "Viene": ["Megadramon"] }
  },
  "RizeGreymon": {
    "ID": 73, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Requisitos": { "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "GeoGreymon", "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 230, "DEF": 110, "HP": 1950, "Vel": 140, "Digipuntos": 67.5 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["GeoGreymon"] }
  },
  "Polarbearmon": {
    "ID": 82, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Requisitos": { "Peso": 45, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 110, "DEF": 210, "HP": 2300, "Vel": 100, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Blizzarmon", "Daipenmon", "Burpmon"], "Viene": ["Yukidarumon"] }
  },
  "Master Tyranomon": {
    "ID": 83, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Requisitos": { "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80, "Program": "Combat", "WinRate": 70, "Combates Minimos": 25, "Bonus Victorias": 20 },
    "Stat Base": { "ATK": 190, "DEF": 180, "HP": 2100, "Vel": 95, "Digipuntos": 67.5 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Tyranomon"] }
  },
  "BigMamemon": {
    "ID": 38, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Xross": "3 V0019 Driver" },
    "Stat Base": { "ATK": 165, "DEF": 95, "HP": 2800, "Vel": 70, "Digipuntos": 61 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Mamemon"] }
  },
  "Monzaemon": {
    "ID": 19, "Tama": "M", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Marioneta",
    "Requisitos": { "Peso": 40, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Numemon", "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 235, "DEF": 150, "HP": 2300, "Vel": 135, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["WaruMonzaemon", "GigaWaruMonzaemon", "Burpmon"], "Viene": ["Numemon", "KaratsukiNumemon", "GoldNumemon", "Geremon"] }
  },
  "Black King Numemon": {
    "ID": 46, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 25, "Error Maximo": 1, "% Entrenamiento": 100, "Digimon Bonus": "KaratsukiNumemon", "WinRate": 60, "Combates Minimos": 25, "Program": "Royal" },
    "Stat Base": { "ATK": 85, "DEF": 200, "HP": 2400, "Vel": 75, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["PlatinumNumemon", "Sephirothmon", "Burpmon"], "Viene": ["Numemon", "KaratsukiNumemon", "GoldNumemon", "Geremon"] }
  },
  "Etemon": {
    "ID": 44, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Marioneta",
    "Requisitos": { "Peso": 20, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Scumon / ScumonTyumon / ScumonTyumonHigh", "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 240, "DEF": 185, "HP": 2000, "Vel": 125, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["MetalEtemon", "Burpmon"], "Viene": ["Scumon", "PlatinumScumon", "ScumonTyumon", "PlatinumScumonTyumon", "ScumonTyumonHigh", "PlatinumScumonTyumonHigh"] }
  },
  "WaruMonzaemon": {
    "ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Marioneta",
    "Requisitos": { "Peso": 30, "Vinculo Minimo alcanzado": -50 },
    "Stat Base": { "ATK": 245, "DEF": 145, "HP": 2150, "Vel": 145, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["GigaWaruMonzaemon", "Burpmon"], "Viene": ["Monzaemon"] }
  },
  "GigaWaruMonzaemon": {
    "ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 40, "Xross": "3 M002 Driver en WaruMonzaemon o 2 M002 Driver y 1 M003 Driver en Monzaemon" },
    "Stat Base": { "ATK": 255, "DEF": 130, "HP": 2000, "Vel": 165, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["WaruMonzaemon", "Monzaemon"] }
  },
  "GreatKingScumon": {
    "ID": 45, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 45, "Error Maximo": 6, "% Entrenamiento": 100, "Menos de 15 entrenamientos?": "Si" },
    "Stat Base": { "ATK": 172, "DEF": 141, "HP": 1449, "Vel": 182, "Digipuntos": 64 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "Sephirothmon"], "Viene": ["Scumon"] }
  },
  "Digitamamon": {
    "ID": 108, "Tama": "M", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 10, "% Entrenamiento": 100, "Error Maximo": 0, "Combates Minimos": 25, "WinRate": 70, "Digimon Bonus": "Nanimon" },
    "Stat Base": { "ATK": 210, "DEF": 170, "HP": 2700, "Vel": 100, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "Devitamamon", "Sephirothmon"], "Viene": ["Nanimon", "BomberNanimon"] }
  },
  "SuperStarmon": {
    "ID": 59, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No" },
    "Stat Base": { "ATK": 160, "DEF": 90, "HP": 1900, "Vel": 160, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Sephirothmon", "Burpmon"], "Viene": ["Starmon", "ShootingStarmon", "Icemon"] }
  },
  "DarkSuperStarmon": {
    "ID": 60, "Tama": "VS", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "Si", "Bonus Vinculo al momento de evolucionar": "< 0" },
    "Stat Base": { "ATK": 150, "DEF": 160, "HP": 2000, "Vel": 90, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Sephirothmon", "Burpmon"], "Viene": ["Starmon", "ShootingStarmon", "Icemon"] }
  },
  "Insekimon Low Tier": {
    "ID": 87, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Requisitos": { "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Driver Equipado": "1 VS003 Driver o 1 VS002 Driver" },
    "Stat Base": { "ATK": 150, "DEF": 160, "HP": 2000, "Vel": 90, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Icemon"] }
  },
  "Insekimon Mid Tier Dark": {
    "ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Requisitos": { "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS005 Driver" },
    "Stat Base": { "ATK": 150, "DEF": 210, "HP": 2000, "Vel": 90, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Icemon"] }
  },
  "Insekimon Mid Tier Super": {
    "ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Requisitos": { "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS004 Driver" },
    "Stat Base": { "ATK": 160, "DEF": 140, "HP": 1900, "Vel": 160, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Icemon"] }
  },
  "Insekimon High Tier": {
    "ID": 90, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Requisitos": { "Peso": 30, "Error Maximo": 0, "% Entrenamiento": 100, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS004 Driver + 1 VS005 Driver" },
    "Stat Base": { "ATK": 160, "DEF": 200, "HP": 2000, "Vel": 140, "Digipuntos": 70 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Icemon"] }
  },
  "Omega Shoutmon": {
    "ID": 163, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Compuesto",
    "Requisitos": { "Peso": 35, "% Entrenamiento": 100, "Error Maximo": 0, "Combates Minimos": 25, "WinRate": 70, "Vinculo Minimo alcanzado": 100 },
    "Stat Base": { "ATK": 220, "DEF": 140, "HP": 1800, "Vel": 160, "Digipuntos": 70 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["King Shoutmon"] }
  },
  "Blizzarmon": {
    "ID": 94, "Tama": "SP", "Nivel": 5, "Atributo": "Free", "Tipo": "Hielo",
    "Requisitos": {
      "Peso": 30, "% Entrenamiento": 80, "Error Maximo": 2, "Combates Minimos": 25, "WinRate": 70, "Xross": "1 SP001 Driver",
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "categorias": { "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"], "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"] },
        "Polarbearmon": { "% Entrenamiento": 100, "Error Maximo": 2, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP001 Driver" },
        "Icemon, Yukidarumon, Chackmon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 70, "Combates Minimos": 25, "Xross": "1 SP001 Driver" },
        "Chackmon": { "modo": "PuntajeIndividual", "Obligatorios": { "WinRate": 70, "Combates Minimos": 25, "Xross": "-" }, "Puntos": { "Peso": 30, "% Entrenamiento": 80, "Error Maximo": 2 } }
      }
    },
    "Stat Base": { "ATK": 160, "DEF": 160, "HP": 2100, "Vel": 120, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Daipenmon", "Burpmon"], "Viene": ["Icemon", "Yukidarumon", "Polarbearmon", "Chackmon"] }
  },
  "Sephirothmon": {
    "ID": 190, "Tama": "SP", "Nivel": 5, "Atributo": "Free", "Tipo": "Mutante",
    "Requisitos": {
      "Peso": 15, "% Entrenamiento": 80, "Error Maximo": 1, "Combates Minimos": 25, "WinRate": 60, "Xross": "1 SP014 Driver",
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "categorias": { "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"], "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"] },
        "Numemon, Mercuremon, Scumon, Nanimon, BomberNanimon, ScumonTyumon, PlatinumScumon, PlatinumScumonTyumon, ScumonTyumonHigh, PlatinumScumonTyumonHigh, KaratsukiNumemon, Geremon, Thunderballmon, GoldNumemon, GreatKingScumon": { "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 60, "Combates Minimos": 25, "Xross": "1 SP014 Driver" },
        "Mercuremon": { "modo": "PuntajeIndividual", "Obligatorios": { "WinRate": 60, "Combates Minimos": 25, "Xross": "-" }, "Puntos": { "Peso": 15, "% Entrenamiento": 80, "Error Maximo": 2 } },
        "SuperStarmon, DarkSuperStarmon, Mamemon, Digitamamon, BlackKingNumemon": { "% Entrenamiento": 100, "Error Maximo": "-", "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP014 Driver" }
      }
    },
    "Stat Base": { "ATK": 150, "DEF": 150, "HP": 2500, "Vel": 50, "Digipuntos": 60.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Mercuremon", "Numemon", "Scumon", "Nanimon", "BomberNanimon", "ScumonTyumon", "PlatinumScumon", "PlatinumScumonTyumon", "ScumonTyumonHigh", "PlatinumScumonTyumonHigh", "KaratsukiNumemon", "Geremon", "Thunderballmon", "GoldNumemon", "Mamemon", "DarkSuperStarmon", "SuperStarmon", "Digitamamon", "BlackKingNumemon", "GreatKingScumon"] }
  },
  "SkullGreymon": {
    "ID": 104, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": {
      "Peso": 20,
      "% Entrenamiento": 50, "Errores Minimos": 6, "Victorias Minimas": 30, "Vinculo al momento de evolucionar": -50,
      "Program": "Death", "Comida": "Carne X",
      "Death Evo": true
    },
    "Stat Base": { "ATK": 270, "DEF": 100, "HP": 1600, "Vel": 70, "Digipuntos": 60 },
    "Evoluciones": { "Evoluciona": ["Burpmon", "BlackWargreymon"], "Viene": ["Greymon", "GeoGreymon", "Tyranomon", "Dark Tyranomon", "Tuskmon", "Armalizamon", "Parasaumon"] }
  },
  "Fantomon": {
    "ID": 102, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": 15, "Error Maximo": 0, "% Entrenamiento": 100, "WinRate": 70, "Combates Minimos": 25, "Digimon Bonus": "Bakemon" },
    "Stat Base": { "ATK": 250, "DEF": 100, "HP": 2200, "Vel": 180, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["Metal Fantomon", "Burpmon"], "Viene": ["Bakemon LT", "Soulmon LT", "Bakemon MT", "Soulmon MT"] }
  },
  "Metal Fantomon": {
    "ID": 103, "Tama": "D", "Nivel": 5, "Atributo": "Data", "Tipo": "Maquina",
    "Requisitos": { "Peso": 35, "% Entrenamiento": 100, "Program": "Mecha" },
    "Stat Base": { "ATK": 240, "DEF": 140, "HP": 2200, "Vel": 150, "Digipuntos": 75 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Fantomon"] }
  },
  "GrandGalemon": {
    "ID": 51, "Tama": "VL", "Nivel": 5, "Atributo": "Data", "Tipo": "Viento",
    "Requisitos": { "Peso": 25, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 240, "DEF": 110, "HP": 1000, "Vel": 200, "Digipuntos": 65 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Galemon", "Kiwimon"] }
  },
  "Doruguremon": {
    "ID": "150", "Tama": "PR", "Nivel": 5, "Atributo": "Data", "Tipo": "Bestia / Dragon",
    "Requisitos": { "Peso": 36, "% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 70, "Combates Minimos": 25 },
    "Stat Base": { "ATK": 190, "DEF": 135, "HP": 2350, "Vel": 90, "Digipuntos": 65.0 },
    "Evoluciones": { "Evoluciona": ["DexDoruguremon", "Burpmon"], "Viene": ["Dorugamon"] }
  },
  "DexDoruguremon": {
    "ID": "152", "Tama": "PR", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": {
      "Peso": 36,
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "Dorugamon": {
          "Death Evo": true, "puntajeOk": 4, "puntajeNo": -10,
          "% Entrenamiento": 50, "Errores Minimos": 6, "Victorias Minimas": 30, "Vinculo al momento de evolucionar": -50, "Program": "Death"
        },
        "Doruguremon": {
          "modo": "PuntajeDirecto", "puntaje": 5, "puntajeNo": -10,
          "Obligatorio": { "Program": "Death" }
        },
        "DexDorugamon": {
          "modo": "PuntajePorCampo",
          "Combates Minimos": { "op": ">=", "val": 30 },
          "% Entrenamiento": { "op": ">=", "val": 100 },
          "Peso": { "op": ">=", "val": 36 },
          "Error Maximo": { "op": "<=", "val": 6 }
        }
      }
    },
    "Stat Base": { "ATK": 250, "DEF": 100, "HP": 1500, "Vel": 100, "Digipuntos": 60.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Dorugamon", "DexDorugamon", "Doruguremon"] }
  },
  "Grademon": {
    "ID": "154", "Tama": "PR", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Guerrero",
    "Requisitos": { "Peso": 36, "% Entrenamiento": 100, "Error Maximo": 0, "WinRate": 70, "Combates Minimos": 25, "Vinculo Minimo alcanzado": 100 },
    "Stat Base": { "ATK": 210, "DEF": 130, "HP": 2100, "Vel": 150, "Digipuntos": 70.0 },
    "Evoluciones": { "Evoluciona": ["Grademon VICE", "Burpmon"], "Viene": ["Raptordramon"] }
  },
  "Grademon VICE": {
    "ID": "174", "Tama": "PR", "Nivel": 5, "Atributo": "Virus", "Tipo": "Guerrero",
    "Requisitos": { "Peso": 36, "Error Maximo": 6, "Vinculo Minimo alcanzado": -50 },
    "Stat Base": { "ATK": 245, "DEF": 125, "HP": 2000, "Vel": 130, "Digipuntos": 70.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Grademon"] }
  },
  "Delumon": {
    "ID": 176, "Tama": "P", "Nivel": 5, "Atributo": "Data", "Tipo": "Planta / Viento",
    "Requisitos": { "Peso": "" },
    "Stat Base": { "ATK": 80, "DEF": 80, "HP": 2600, "Vel": 180, "Digipuntos": 60.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Kiwimon"] }
  },
  "Entmon": {
    "ID": 176, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto",
    "Requisitos": { "Peso": "" },
    "Stat Base": { "ATK": 230, "DEF": 40, "HP": 2800, "Vel": 50, "Digipuntos": 60.0 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Chamblemon", "Parasaumon", "Kiwimon"] }
  },

  // ===== ULTIMATE =====
  "Wargreymon": {
    "ID": 170, "Tama": "V0", "Nivel": 6, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Requisitos": {
      "Peso": 30, "% Entrenamiento": 100, "Error Maximo": 0, "Vinculo al momento de evolucionar": 100, "Combates Minimos": 300, "Victorias": 175,
      "RequisitosCondicionados": {
        "condicion": "Origen",
        "Metal Greymon": { "Victorias": 140, "Combates Minimos": 250 },
        "MetalGreymon Alterous": { "Victorias": 175, "Combates Minimos": 300 }
      }
    },
    "Stat Base": { "ATK": 150, "DEF": 90, "HP": 1600, "Vel": 100, "Digipuntos": 50 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Metal Greymon", "MetalGreymon Alterous"] }
  },
  "BlackWargreymon": {
    "ID": 171, "Tama": "D", "Nivel": 6, "Atributo": "Virus", "Tipo": "Dragon",
    "Requisitos": { "Peso": 30, "% Entrenamiento": 100, "Error Maximo": 6, "Vinculo al momento de evolucionar": -50, "Combates Minimos": 250, "Victorias": 140 },
    "Stat Base": { "ATK": 175, "DEF": 100, "HP": 1900, "Vel": 85, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["SkullGreymon"] }
  },
  "Mugendramon": {
    "ID": 27, "Tama": "V0", "Nivel": 6, "Atributo": "Virus", "Tipo": "Maquina",
    "Requisitos": { "Peso": 40, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80,
      "Xross": {
        "Megadramon":            "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
        "Gigadramon":            "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
        "Metal Greymon (Virus)": "1 V0015 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
        "Metal Tyranomon":       "1 V0009 Driver + 1 V0015 Driver + 1 V0014 Driver + 1 V0010 Driver",
        "MetalMamemon":          "1 V0009 Driver + 1 V0013 Driver + 1 V0015 Driver + 1 V0010 Driver",
        "Andromon":              "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0015 Driver"
      }
    },
    "Stat Base": { "ATK": 140, "DEF": 170, "HP": 1700, "Vel": 70, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Metal Greymon (Virus)", "MetalMamemon", "Metal Tyranomon", "Megadramon", "Andromon", "Gigadramon"] }
  },
  "PrinceMamemon": {
    "ID": 107, "Tama": "V0", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": {
      "Peso": 60,
      "RequisitosCondicionados": {
        "condicion": "Driver Equipado", "valorCondicion": "1 EX009 Driver",
        "Con WR": { "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Royal" },
        "Con Driver": { "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 200, "Victorias": 100, "Driver Equipado": "1 EX009 Driver" }
      },
    },
    "Stat Base": { "ATK": 150, "DEF": 205, "HP": 750, "Vel": 120, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Mamemon"] }
  },
  "BanchoMamemon": {
    "ID": 182, "Tama": "V0", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 15, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Combat" },
    "Stat Base": { "ATK": 180, "DEF": 90, "HP": 1500, "Vel": 130, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Mamemon"] }
  },
  "MetalEtemon": {
    "ID": 92, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Marioneta",
    "Requisitos": { "Peso": 40, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Mecha" },
    "Stat Base": { "ATK": 180, "DEF": 150, "HP": 1300, "Vel": 90, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Etemon"] }
  },
  "PlatinumNumemon": {
    "ID": 91, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Mutante",
    "Requisitos": { "Peso": 55, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Xross": "5 M007 Driver" },
    "Stat Base": { "ATK": 100, "DEF": 190, "HP": 2000, "Vel": 60, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Black King Numemon"] }
  },
  "Devitamamon": {
    "ID": 109, "Tama": "M", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante",
    "Requisitos": { "Peso": 20, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Vinculo al momento de evolucionar": -50 },
    "Stat Base": { "ATK": 150, "DEF": 120, "HP": 2200, "Vel": 60, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Digitamamon"] }
  },
  "Daipenmon": {
    "ID": 95, "Tama": "SP", "Nivel": 6, "Atributo": "Free", "Tipo": "Hielo",
    "Requisitos": { "Peso": 40, "% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80,
      "Xross": { "Blizzarmon": ["1 SP000 Driver"], "Polarbearmon": ["1 SP001 Driver + 1 SP000 Driver", "1 SP004 Driver"] }
    },
    "Stat Base": { "ATK": 160, "DEF": 160, "HP": 1200, "Vel": 110, "Digipuntos": 55 },
    "Evoluciones": { "Evoluciona": ["Burpmon"], "Viene": ["Polarbearmon", "Blizzarmon"] }
  },

};


// ============================================================
// COMPATIBILIDAD CON EL CÓDIGO EXISTENTE
// Reconstruye digimonReqDict y digimonstattier desde fullDigimonReqDict
// para que script.js, arbolCanvas.html y digidex.html funcionen sin cambios.
// ============================================================

const SCUMON_FAMILY = new Set(["Scumon", "PlatinumScumon", "ScumonTyumon", "PlatinumScumonTyumon", "GreatKingScumon"]);

function _computeTierFromStats(nivel, dp) {
  if (nivel <= 2) return { nombre: "Mid Tier", clase: "tier-mid" };
  if (nivel === 3) {
    if (dp < 14)  return { nombre: "Mutant Tier/Super Low Tier", clase: "tier-mutant" };
    if (dp < 15)  return { nombre: "Low Tier",  clase: "tier-low"  };
    if (dp < 16)  return { nombre: "Mid Tier",  clase: "tier-mid"  };
    return               { nombre: "High Tier", clase: "tier-high" };
  }
  if (nivel === 4) {
    if (dp < 30)  return { nombre: "Mutant Tier/Super Low Tier", clase: "tier-mutant" };
    if (dp < 31)  return { nombre: "Low Tier",  clase: "tier-low"  };
    if (dp < 35)  return { nombre: "Mid Tier",  clase: "tier-mid"  };
    return               { nombre: "High Tier", clase: "tier-high" };
  }
  if (nivel === 5) {
    if (dp < 60)  return { nombre: "Mutant Tier/Super Low Tier", clase: "tier-mutant" };
    if (dp < 61)  return { nombre: "Low Tier",  clase: "tier-low"  };
    if (dp < 70)  return { nombre: "Mid Tier",  clase: "tier-mid"  };
    return               { nombre: "High Tier", clase: "tier-high" };
  }
  if (nivel === 6) return { nombre: "High Tier", clase: "tier-high" };
  return { nombre: "Unknown", clase: "tier-low" };
}

function computeClasificacion(nombre, nivel, statBase) {
  if (SCUMON_FAMILY.has(nombre)) return { nombre: "Mutant Tier/Super Low Tier", clase: "tier-mutant" };
  if (!statBase) return { nombre: "Unknown", clase: "tier-low" };
  const dp = parseFloat((((statBase.HP / 10) + statBase.ATK + statBase.DEF + statBase.Vel) / 10).toFixed(1));
  return _computeTierFromStats(nivel, dp);
}

function getScumonChildOptions() {
  return Object.entries(fullDigimonReqDict)
    .filter(([, data]) => data.Nivel === 3 && data.Evoluciones?.Evoluciona?.includes("Scumon"))
    .map(([name]) => name)
    .sort();
}

// Returns [{babyII, babyI, tama}] — one entry per distinct Baby I/II combo for a Child
function getScumonLineageOptions(childName) {
  const childEntry = fullDigimonReqDict[childName];
  if (!childEntry) return [];
  const options = [];
  const seen    = new Set();
  (childEntry.Evoluciones?.Viene || []).forEach(predName => {
    const pred = fullDigimonReqDict[predName];
    if (!pred) return;
    let babyIIName;
    if (pred.Nivel === 2) {
      babyIIName = predName;
    } else if (pred.Nivel === 3) {
      babyIIName = (pred.Evoluciones?.Viene || []).find(n => fullDigimonReqDict[n]?.Nivel === 2);
    }
    if (!babyIIName) return;
    const babyIIEntry = fullDigimonReqDict[babyIIName];
    (babyIIEntry?.Evoluciones?.Viene || []).forEach(babyIName => {
      const babyI = fullDigimonReqDict[babyIName];
      if (!babyI || babyI.Nivel !== 1) return;
      const key = `${babyIIName}-${babyIName}`;
      if (!seen.has(key)) {
        seen.add(key);
        options.push({ babyII: babyIIName, babyI: babyIName, tama: babyI.Tama || babyIName });
      }
    });
  });
  return options;
}

// babyIIName and babyIName are optional; if omitted, uses the first available lineage
function computeScumonFamilyStats(digimonName, childName, babyIIName, babyIName) {
  const childEntry = fullDigimonReqDict[childName];
  if (!childEntry) return null;
  const cb    = childEntry["Stat Base"];
  const nivel = fullDigimonReqDict[digimonName]?.Nivel;

  // Resolve Baby II and Baby I if not explicitly provided
  if (!babyIIName || !babyIName) {
    const lineages = getScumonLineageOptions(childName);
    const first    = lineages[0];
    babyIIName = babyIIName || first?.babyII;
    babyIName  = babyIName  || first?.babyI;
  }

  const babyIIBase = babyIIName ? fullDigimonReqDict[babyIIName]?.["Stat Base"] : null;
  const babyIBase  = babyIName  ? fullDigimonReqDict[babyIName]?.["Stat Base"]  : null;

  // Scumon BASE = Child base × 1.34
  const scumonBase = {
    ATK: Math.round(cb.ATK * 1.34),
    DEF: Math.round(cb.DEF * 1.34),
    HP:  Math.round(cb.HP  * 1.34),
    Vel: Math.round(cb.Vel * 1.34)
  };

  // Heredados for Scumon: 40% Baby I + 40% Baby II + 40% Child
  const h = (b, key) => b ? Math.round(b[key] * 0.4) : 0;
  const heredadoScumon = {
    ATK: h(babyIBase, "ATK") + h(babyIIBase, "ATK") + h(cb, "ATK"),
    DEF: h(babyIBase, "DEF") + h(babyIIBase, "DEF") + h(cb, "DEF"),
    HP:  h(babyIBase, "HP")  + h(babyIIBase, "HP")  + h(cb, "HP"),
    Vel: h(babyIBase, "Vel") + h(babyIIBase, "Vel") + h(cb, "Vel")
  };

  let stats;
  if (digimonName === "GreatKingScumon") {
    // GKS BASE = scumonBase × 2.25
    const gksBase = {
      ATK: Math.round(scumonBase.ATK * 2.25),
      DEF: Math.round(scumonBase.DEF * 2.25),
      HP:  Math.round(scumonBase.HP  * 2.25),
      Vel: Math.round(scumonBase.Vel * 2.25)
    };
    // GKS heredados: 40% Baby I + 40% Baby II + 40% Child + 40% Scumon base
    const heredadoGKS = {
      ATK: h(babyIBase, "ATK") + h(babyIIBase, "ATK") + h(cb, "ATK") + Math.round(scumonBase.ATK * 0.4),
      DEF: h(babyIBase, "DEF") + h(babyIIBase, "DEF") + h(cb, "DEF") + Math.round(scumonBase.DEF * 0.4),
      HP:  h(babyIBase, "HP")  + h(babyIIBase, "HP")  + h(cb, "HP")  + Math.round(scumonBase.HP  * 0.4),
      Vel: h(babyIBase, "Vel") + h(babyIIBase, "Vel") + h(cb, "Vel") + Math.round(scumonBase.Vel * 0.4)
    };
    stats = {
      ATK: gksBase.ATK + heredadoGKS.ATK,
      DEF: gksBase.DEF + heredadoGKS.DEF,
      HP:  gksBase.HP  + heredadoGKS.HP,
      Vel: gksBase.Vel + heredadoGKS.Vel
    };
  } else {
    // Scumon / PlatinumScumon / ScumonTyumon / PlatinumScumonTyumon
    stats = {
      ATK: scumonBase.ATK + heredadoScumon.ATK,
      DEF: scumonBase.DEF + heredadoScumon.DEF,
      HP:  scumonBase.HP  + heredadoScumon.HP,
      Vel: scumonBase.Vel + heredadoScumon.Vel
    };
  }

  const dp = parseFloat((((stats.HP / 10) + stats.ATK + stats.DEF + stats.Vel) / 10).toFixed(1));
  stats.Digipuntos    = dp;
  stats.Clasificacion = _computeTierFromStats(nivel, dp);
  return stats;
}

// === AUTO-LINK Baby I ↔ Baby II ↔ Child por Tama ===
// Tamas estándar mapean 1:1: Baby I → Baby II → Childs del mismo Tama.
// Childs con Tama no estándar (M, D, P, SP, …) son "universales" y vienen de todos los Baby II.
// Agregar un nuevo Child solo requiere el Tama correcto — no editar Viene/Evoluciona manualmente.
(function _autoLinkBabyChain() {
  const STANDARD_TAMAS = ["V0", "VS", "VL", "BG", "PR"];
  const babyIByTama  = {};
  const babyIIByTama = {};

  Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
    if (data.Nivel === 1 && STANDARD_TAMAS.includes(data.Tama)) babyIByTama[data.Tama]  = name;
    if (data.Nivel === 2 && STANDARD_TAMAS.includes(data.Tama)) babyIIByTama[data.Tama] = name;
  });

  const allBabyIIs = Object.values(babyIIByTama);

  // Baby I: Viene = []; Evoluciona includes Baby II of same Tama
  Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
    if (data.Nivel !== 1) return;
    const evo = data.Evoluciones;
    evo.Viene = [];
    const babyII = babyIIByTama[data.Tama];
    if (babyII && !evo.Evoluciona.includes(babyII)) evo.Evoluciona.unshift(babyII);
  });

  // Baby II: Viene = [Baby I]; Evoluciona = strip Childs (re-added below)
  Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
    if (data.Nivel !== 2 || !STANDARD_TAMAS.includes(data.Tama)) return;
    const evo  = data.Evoluciones;
    const babyI = babyIByTama[data.Tama];
    evo.Viene = babyI ? [babyI] : [];
    evo.Evoluciona = evo.Evoluciona.filter(n => {
      const d = fullDigimonReqDict[n];
      return !d || d.Nivel !== 3;
    });
  });

  // Child: Viene = strip Baby I/II entries (keep only Nivel-3 side-evolutions)
  const babyIISet = new Set(allBabyIIs);
  Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
    if (data.Nivel !== 3) return;
    data.Evoluciones.Viene = (data.Evoluciones.Viene || []).filter(n => {
      const d = fullDigimonReqDict[n];
      return d && d.Nivel === 3;
    });
  });

  // Childs with object Xross (components are other Digimon) can't come from Baby IIs directly
  const isXrossFromDigimon = (data) => {
    const x = data.Requisitos?.Xross;
    return x && !Array.isArray(x) && typeof x === 'object';
  };

  // Populate Baby II Evoluciona and Child Viene by Tama
  Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
    if (data.Nivel !== 3) return;
    if (isXrossFromDigimon(data)) return;
    const evo = data.Evoluciones;
    if (STANDARD_TAMAS.includes(data.Tama)) {
      const babyII = babyIIByTama[data.Tama];
      if (babyII) {
        if (!evo.Viene.includes(babyII)) evo.Viene.push(babyII);
        const b2evo = fullDigimonReqDict[babyII]?.Evoluciones;
        if (b2evo && !b2evo.Evoluciona.includes(name)) b2evo.Evoluciona.push(name);
      }
    } else {
      allBabyIIs.forEach(babyII => {
        if (!evo.Viene.includes(babyII)) evo.Viene.push(babyII);
        const b2evo = fullDigimonReqDict[babyII]?.Evoluciones;
        if (b2evo && !b2evo.Evoluciona.includes(name)) b2evo.Evoluciona.push(name);
      });
    }
  });
})();

const digimonReqDict = {};
const digimonstattier = {};

Object.entries(fullDigimonReqDict).forEach(([name, data]) => {
  const statBase    = data["Stat Base"] || {};
  const evoluciones = data.Evoluciones  || {};

  // Reconstruir formato plano: ID, Tama, Nivel, Atributo, Tipo + Digipuntos + Clasificacion + Requisitos
  digimonReqDict[name] = {
    "ID":            data.ID,
    "Tama":          data.Tama,
    "Nivel":         data.Nivel,
    "Atributo":      data.Atributo,
    "Tipo":          data.Tipo,
    "Digipuntos":    statBase.Digipuntos ?? null,
    "Clasificacion": computeClasificacion(name, data.Nivel, statBase),
    ...(data.Requisitos || {})
  };

  // Reconstruir formato de stats + evoluciones
  digimonstattier[name] = { ...statBase, ...evoluciones };
});

// Burpmon: Viene se calcula dinámicamente igual que antes
digimonstattier["Burpmon"]["Viene"] = Object.keys(digimonstattier).filter(n => n !== "Burpmon");

function getXrossInstallOptions(digimonName) {
  const opts = [];
  Object.entries(digimonReqDict).forEach(([targetName, data]) => {
    const viene = digimonstattier[targetName]?.Viene || [];
    if (!viene.includes(digimonName)) return;
    const xross = data.Xross;
    if (!xross) return;
    const addOpt = v => { if (v && !opts.includes(v)) opts.push(v); };
    if (typeof xross === 'string') {
      addOpt(xross);
    } else if (Array.isArray(xross)) {
      xross.forEach(addOpt);
    } else if (typeof xross === 'object') {
      const val = xross[digimonName];
      if (val) {
        if (Array.isArray(val)) val.forEach(addOpt);
        else addOpt(val);
      }
    }
  });
  return opts;
}

function getDriverEquipadoInstallOptions(digimonName) {
  const opts = [];
  Object.entries(digimonReqDict).forEach(([targetName, data]) => {
    const viene = digimonstattier[targetName]?.Viene || [];
    if (!viene.includes(digimonName)) return;
    const addOpt = v => { if (v && !opts.includes(v)) opts.push(v); };
    if (data["Driver Equipado"]) addOpt(data["Driver Equipado"]);
    const cond = data.RequisitosCondicionados;
    if (cond) {
      ["Con WR", "Con Driver"].forEach(path => {
        addOpt(cond[path]?.["Driver Equipado"]);
      });
    }
  });
  return opts;
}
