const digimonReqDict = { 
  "Botamon": { "ID": 0, "Tama": "V0", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 4 },
  "Chibickmon": { "ID": 55, "Tama": "VS", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 5 },
  "Koromon": { "ID": 1, "Tama": "V0", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 6 },
  "Pickmon": { "ID": 56, "Tama": "VS", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 10 },
  "Yolkmon": { "ID": 47, "Tama": "VL", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 1 },
  "Fluffymon": { "ID": 48, "Tama": "VL", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 4 },
  "Agumon": {
    "ID": 2, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK"
  },
  "Agumon Hakase": {
    "ID": 97, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 25, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK","Nickname": "HK2006"
  },
  "Pillomon": {
    "ID": 75, "Tama": "M", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Mutante",
    "Peso": 5, "EntrenamientoHecho": "No",
    "% Entrenamiento": 0
  },
  "Kokuwamon": {
    "ID": 3, "Tama": "V0", "Nivel": 3, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 20, "Error Maximo": 6, "EntrenamientoHecho": "No",
    "Stat Superior": "HP"
  },
  "Agumon (Black)": {
	"ID": 21, "Tama": "V0", "Nivel": 3, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Virus"
  },
  "Yuki Agumon": {
	"ID": 22, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Frost"
  },
  "Agumon (2006)": {
	"ID": 71, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK", "Program": "Combat", "2Ciclos": "Si"
  },
  "Starmons": {
	"ID": 84, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto",
    "Peso": 15, "Error Maximo": 6, "% Entrenamiento": "0-79",
    "Stat Superior": "HP", "Stat Superior 2": "Vel"
  },
  "Gotsumon": {
	"ID": 85, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 15, "Error Maximo": 6, "Program": "Ore"
  },
    "Pteromon": {
	"ID": 49, "Tama": "VL", "Nivel": 3, "Atributo": "Data", "Tipo": "Viento",
    "Peso": 10, "Error Maximo": 6
  },
  "Numemon": {
    "ID": 11, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 10
  },
  "Galemon": {
    "ID": 50, "Tama": "VL", "Nivel": 4, "Atributo": "Data", "Tipo": "Viento",
    "Peso": 15, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 15
  },
    "Greymon": {
	"ID": 4, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon", "Vinculo Minimo alcanzado": 70, "WinRate": 60, "Combates Minimos": 15
  },
    "Tyranomon": {
	"ID": 5, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 40,"Bonus Stat Superior": "Balanceado", "WinRate": 50, "Combates Minimos": 15
  },
    "Dark Tyranomon": {
	"ID": 6, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
	"Program": "Virus"
  },
    "V-Dramon": {
	"ID": 7, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus WinRate": 70, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100
  }, 
    "Deltamon": {
	"ID": 8, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Compuesto",
    "Peso": 30, "Error Maximo": "3-6", "% Entrenamiento": 60, "Bonus Errores": 5, "WinRate": 50, "Combates Minimos": 15, "Stat Superior": "ATK"
  },
    "Thunderballmon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 5, "Error Maximo": 2, "% Entrenamiento": 60, "Digimon Bonus": "Kokuwamon", "WinRate": 50, "Combates Minimos": 15, "Stat Superior": "Vel"
  },
    "Guardromon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 35, "Error Maximo": 2, "% Entrenamiento": 50, "Bonus Batallas": "15-20", "WinRate": 50, "Combates Minimos": 15
  },
    "V-Dramon (Black)": {
	"ID": 34, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dragon",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus Batallas": 25, "WinRate": 60, "Combates Minimos": 15, 
	"Vinculo Minimo alcanzado": 100, "Program" : "Virus"
  },
    "RedVDramon": {
	"ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dragon",
	"Vinculo Minimo alcanzado": -50
	},
    "GoldGuardromon": {
	"ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Free", "Tipo": "Maquina",
	"Comida": "Bellota Dorada"
	},	
    "GeoGreymon": {
	"ID": 72, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 20, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (2006)", "WinRate": 60, "Combates Minimos": 15
  },
    "Clockmon": {
	"ID": 79, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 18, "Error Maximo": "1-6", "% Entrenamiento": 50, "WinRate": 50, "Combates Minimos": 15, "Bonus Batallas": 0
  },
    "Tuskmon": {
	"ID": 80, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (Black)", "WinRate": 60, "Combates Minimos": 15
  },
    "Yukidarumon": {
	"ID": 81, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "Bonus Batallas": "15-20", "WinRate": 60, "Combates Minimos": 15
  },
    "KaratsukiNumemon": {
	"ID": 40, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Peso": 10, "Comida": "5 Sardinas"
	},	
    "Geremon": {
	"ID": 20, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Peso": 10, "Program": "Trash"
	},
    "GoldNumemon": {
	"ID": 42, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Peso": 10, "Comida": "Bellota Dorada"
	},
    "Scumon": {
	"ID": 41, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Peso": 10, "Comida": "5 Caca"
	},
    "PlatinumScumon": {
	"ID": 43, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 10, "Comida": "Chatarra"
	},	
    "ShootingStarmon": {
	"ID": 57, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Compuesto",
    "Peso": 30, "Error Maximo": 6, "% Entrenamiento": 80, "WinRate": 65, "Combates Minimos": 20, "Xross": "4 VS000 Driver"
	},
    "Icemon": {
	"ID": 86, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Hielo",
    "Peso": 25, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 50, "Combates Minimos": 15, "Program": "Frost", "Bonus Comida": "Verdura Congelada"
	},
    "Starmon": {
	"ID": 58, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 15, "Error Maximo": 2, "% Entrenamiento": 70, "WinRate": 50, "Combates Minimos": 15
	},
    "Metal Greymon (Virus)": {
	"ID": 12, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },
    "Andromon": {
	"ID": 13, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 60, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No"
  },
    "Mametyramon": {
	"ID": 14, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 10, "Error Maximo": 2, "% Entrenamiento": 60, "Bonus Errores": "1+",
	"WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 V0003 Driver"
  },
    "Aero V-dramon": {
	"ID": 15, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
      "GrandGalemon": {
	"ID": 51, "Tama": "VL", "Nivel": 5, "Atributo": "Data", "Tipo": "Viento",
    "Peso": 25, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },
    "Monzaemon": {
	"ID": 19, "Tama": "M", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Marioneta",
    "Peso": 40, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Numemon", "WinRate": 70, "Combates Minimos": 25
  },
    "Black King Numemon": {
	"ID": 46, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 25, "Error Maximo": 1, "% Entrenamiento": 100, "Digimon Bonus": "KaratsukiNumemon",
	"WinRate": 60, "Combates Minimos": 25, "Program" : "Royal"
  },
    "Etemon": {
	"ID": 44, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Marioneta",
    "Peso": 20, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Scumon / ScumonTyumon / ScumonTyumonHigh", "WinRate": 70, "Combates Minimos": 25
  },
    "WaruMonzaemon": {
	"ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Marioneta", "Peso": 30,
	"Vinculo Minimo alcanzado": -50
  },
    "GigaWaruMonzaemon": {
	"ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Compuesto", "Peso": 40,
	"Xross":"3 M002 Driver en WaruMonzaemon o 2 M002 Driver y 1 M003 Driver en Monzaemon"
  }, 
    "Metal Tyranomon": {
	"ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 65, "Error Maximo": "3-6", "% Entrenamiento": 60, "Digimon Bonus": "Dark Tyranomon", "WinRate": 60, "Combates Minimos": 25
  },
    "MetalMamemon": {
	"ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Maquina",
	"% Entrenamiento": 100, "Program": "Mecha"
  },
    "Metal Greymon": {
	"ID": 23, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Program":"Vaccine"
  },  
	"Mamemon": {
	"ID": 24, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"Peso": 5, "Error Maximo": 2, "% Entrenamiento": 50, "WinRate": 60, "Combates Minimos": 25, "Bonus Errores": "1+"
  },
    "MetalGreymon Alterous": {
	"ID": 26, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
	"% Entrenamiento": 100, "Victorias":40, "Program":"Mecha"
  },
    "Aero V-dramon (Black)": {
	"ID": 36, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dragon",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon (Black)",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "Triceramon": {
	"ID": 37, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 50, "Error Maximo": 2, "% Entrenamiento": 50, "Digimon Bonus": "Tyranomon", "WinRate": 60, "Combates Minimos": 25
  },
    "BigMamemon": {
	"ID": 38, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Compuesto",
	"Xross":"3 V0019 Driver"
  },
    "RizeGreymon": {
	"ID": 73, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "GeoGreymon", "WinRate": 70, "Combates Minimos": 25
  },
    "Polarbearmon": {
	"ID": 82, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Peso": 45, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },
    "Master Tyranomon": {
	"ID": 83, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80,
	"Program":"Combat", "WinRate": 70, "Combates Minimos": 25, "Bonus Victorias": 20
  },
    "Megadramon": {
	"ID": 18, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 55, "Error Maximo": "1-2", "% Entrenamiento": 75, "Bonus Batallas": 30, "WinRate": 60, "Combates Minimos": 25
	},
    "Gigadramon": {
	"ID": 25, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
	"% Entrenamiento": 100, "Program": "Mecha"
  },
    "SuperStarmon": {
	"ID": 59, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No"
  },  
    "DarkSuperStarmon": {
	"ID": 60, "Tama": "VS", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "Si", "Bonus Vinculo al momento de evolucionar": "< 0" 
	},  
    "GreatKingScumon": {
	"ID": 45, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 45, "Error Maximo": 6, "% Entrenamiento": 100, "Menos de 15 entrenamientos?": "Si"
  },   
    "Insekimon Low Tier": {
	"ID": 87, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 25, "Driver Equipado": "1 VS003 Driver o 1 VS002 Driver"
  }, 
    "Insekimon Mid Tier Dark": {
	"ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS005 Driver"
  }, 
    "Insekimon Mid Tier Super": {
	"ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS004 Driver"
  }, 
    "Insekimon High Tier": {
	"ID": 90, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 0, "% Entrenamiento": 100, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "1 VS004 Driver + 1 VS005 Driver"
  },
    "MetalEtemon": {
	"ID": 92, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Marioneta","Peso": 40,
	"% Entrenamiento": 100,"Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Mecha"
  },
    "PlatinumNumemon": {
	"ID": 91, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 55,
	"% Entrenamiento": 100,"Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Xross": "5 M007 Driver"
  },
    "Mugendramon": {
	"ID": 27, "Tama": "V0", "Nivel": 6, "Atributo": "Virus", "Tipo": "Maquina", "Peso": 40,
	"% Entrenamiento": 100,"Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Xross": "DriverInstall"
  },
     "Chackmon": {
	"ID": 93, "Tama": "SP", "Nivel": 4, "Atributo": "Free", "Tipo": "Hielo","Peso":10,
	"% Entrenamiento": 80,"Error Maximo": 6, "Combates Minimos": 15, "WinRate": 60, "Xross": "1 SP000 Driver",
    "RequisitosCondicionados": {
      "condicion": "Origen",
      "categorias": {
        "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"],
        "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"]
      },
      "Icemon, Yukidarumon": {
        "% Entrenamiento": 100, "Error Maximo": 6, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP000 Driver"
      },
      "Yuki Agumon, Penmon": {
        "% Entrenamiento": 80, "Error Maximo": 6, "WinRate": 60, "Combates Minimos": 15, "Xross": "1 SP000 Driver"
      }
    }
  },
    "Blizzarmon": {
	"ID": 94, "Tama": "SP", "Nivel": 5, "Atributo": "Free", "Tipo": "Hielo","Peso":30,
	"% Entrenamiento": 80,"Error Maximo": 2, "Combates Minimos": 25, "WinRate": 70, "Xross": "1 SP001 Driver",
    "RequisitosCondicionados": {
      "condicion": "Origen",
      "categorias": {
        "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"],
        "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"]
      },
      "Polarbearmon": {
        "% Entrenamiento": 100, "Error Maximo": 2, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP001 Driver"
      },
      "Icemon, Yukidarumon, Chackmon": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 70, "Combates Minimos": 25, "Xross": "1 SP001 Driver"
      },
      "Chackmon (Sin Install)": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 70, "Combates Minimos": 25, "Xross": "-"
      }
    }
  },
    "Daipenmon": {
	"ID": 95, "Tama": "SP", "Nivel": 6, "Atributo": "Free", "Tipo": "Hielo","Peso":40,
	"% Entrenamiento": 100,"Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Xross": "DriverInstall"
  },  
    "Burpmon": {
	"ID": 33, "Tama": "M", "Nivel": 3, "Atributo": "Free", "Tipo": "Mutante", "Peso": 99
  }, 
      "Bakemon LT": {
	"ID": 100, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 10, "Muerte inducida sin Carne X o Program (30% de salir)": "Si", "Comida": "Carne X", "Program":"Death"
  }, 
  
      "Soulmon LT": {
	"ID": 101, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 10, "Comida": "Nuez Magica"
  }, 
  
      "Bakemon MT": {
	"ID": 100, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 10, 
	"% Entrenamiento": 80,"Error Maximo": 1, "Combates Minimos": 15, "WinRate": 50, "Digimon Bonus": "Ghostmon",
  },
  
      "Soulmon MT": {
	"ID": 101, "Tama": "D", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 10, "Comida": "Nuez Magica"
  }, 
  
      "Ghostmon": {
	"ID": 99, "Tama": "D", "Nivel": 3, "Atributo": "Data", "Tipo": "No Muerto", "Peso": 10, "Program": "Death"
  }, 
  
      "SkullGreymon": {
	"ID": 104, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 20,
	"% Entrenamiento": 50, "Errores Minimos": 6, "Victorias Minimas": 30, "Vinculo al momento de evolucionar": -50, "Program":"Death", "Comida": "Carne X"
  }, 
      "Fantomon": {
	"ID": 102, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto",
    "Peso": 15, "Error Maximo": 0, "% Entrenamiento": 100, "WinRate": 70, "Combates Minimos": 25, "Digimon Bonus": "Bakemon",
  },
      "Metal Fantomon": {
	"ID": 103, "Tama": "D", "Nivel": 5, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 35, "% Entrenamiento": 100, "Program":"Mecha"
  },
       "Mushmon": {
	"ID": 112 , "Tama": "P", "Nivel": 3, "Atributo": "Virus", "Tipo": "Planta",
    "Peso": 12, "Program":"Mushroom"
  }, 
       "Nanimon": {
	"ID": 110 , "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 10, "Vinculo al momento de evolucionar": -50
  },   
       "BomberNanimon": {
	"ID": 111 , "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 15, "Xross": "1 V0019 Driver"
  },   
     "PrinceMamemon": {
	"ID": 107, "Tama": "V0", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante", "Peso": 60,
	"RequisitosCondicionados": {
		"condicion": "Driver Equipado",
		"valorCondicion": "1 EX009 Driver",
		"Con WR": {
			"% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Royal"
		},
		"Con Driver": {
			"% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 250, "Victorias": 130, "Driver Equipado": "1 EX009 Driver"
		}
	}
  },
      "Chamblemon": {
	"ID": 107, "Tama": "P", "Nivel": 4, "Atributo": "Virus", "Tipo": "Planta", "Peso": 16,
	"% Entrenamiento": 100,"Error Maximo": 1, "Combates Minimos": 15, "WinRate": 50
  },  
      "Digitamamon": {
	"ID": 108, "Tama": "M", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante", "Peso": 10,
	"% Entrenamiento": 100, "Error Maximo": 0, "Combates Minimos": 25, "WinRate": 70, "Digimon Bonus": "Nanimon"
  },  	
      "Devitamamon": {
	"ID": 109, "Tama": "M", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante", "Peso": 20,
	"% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Vinculo al momento de evolucionar": -50
  },
  "Shoutmon": {
	"ID": 158, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 15,
	"Hora": "Día (12:00-23:59 UTC-3)", "% Entrenamiento": "80-100",
	"Stat Superior": "ATK"
  },
  "Shoutmon (Black)": {
	"ID": 159, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 15,
	"Hora": "Noche (0:00-11:59 UTC-3)", "% Entrenamiento": "80-100",
	"Stat Superior": "ATK"
  },
  "Shoutmon SH": {
	"ID": 160, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 13,
	"Xross": "DriverInstall"
  },
  "Shoutmon + Star Sword": {
	"ID": 161, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 17,
	"Xross": "DriverInstall"
  },
  "King Shoutmon": {
	"ID": 162, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 20,
	"% Entrenamiento": 80, "Error Maximo": 1, "Combates Minimos": 15, "WinRate": 60, "Program": "Royal", "Bonus Vinculo Alcanzado": 80
  },
    "Omega Shoutmon": {
	"ID": 163, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Compuesto", "Peso": 35,
	"% Entrenamiento": 100, "Error Maximo": 0, "Combates Minimos": 25, "WinRate": 70, "Vinculo Minimo alcanzado": 100,
  },
     "Wargreymon": {
	"ID": 170, "Tama": "V0", "Nivel": 6, "Atributo": "Vacuna", "Tipo": "Dragon","Peso": 30,
	"% Entrenamiento": 100,"Error Maximo": 0, "Vinculo al momento de evolucionar": 100, "Combates Minimos": 300, "Victorias": 175
  }, 
     "BlackWargreymon": {
	"ID": 171, "Tama": "D", "Nivel": 6, "Atributo": "Virus", "Tipo": "Dragon","Peso": 30,
	"% Entrenamiento": 100,"Error Maximo": 6, "Vinculo al momento de evolucionar": -50, "Combates Minimos": 250, "Victorias": 140
  },
     "Dodomon": {
	"ID": "146", "Tama": "PR", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 5
  },
     "Dorimon": {
	"ID": "147", "Tama": "PR", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 10
  },
     "Dorumon": {
	"ID": "148", "Tama": "PR", "Nivel": 3, "Atributo": "Data", "Tipo": "Bestia", "Peso": 18
  },
     "Dorugamon": {
	"ID": "149", "Tama": "PR", "Nivel": 4, "Atributo": "Data", "Tipo": "Bestia / Dragon", "Peso": 20,
	"% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 60, "Combates Minimos": 15, "Digimon Bonus": "Dorumon"
  },
     "DexDorugamon": {
	"ID": "151", "Tama": "PR", "Nivel": 4, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 25,
	// ⚠️ REQUISITOS DESCONOCIDOS: Los requisitos han cambiado y actualmente no se conocen
	//"% Entrenamiento": 50, "Vinculo al momento de evolucionar": -50, "Program": "Death"
  },
     "Raptordramon": {
	"ID": "153", "Tama": "PR", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Maquina", "Peso": 25,
	"% Entrenamiento": 100, "Error Maximo": 0, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100,
	"Tienes registrado a DexDorugamon y Dorugamon?": "Si", "Digimon Bonus":"Dorumon"
  },
     "Doruguremon": {
	"ID": "150", "Tama": "PR", "Nivel": 5, "Atributo": "Data", "Tipo": "Bestia / Dragon", "Peso": 36,
	"% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 70, "Combates Minimos": 25
  },
     "DexDoruguremon": {
	"ID": "152", "Tama": "PR", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": 36,
	// ⚠️ REQUISITOS DESCONOCIDOS: Los requisitos han cambiado y actualmente no se conocen
	//"% Entrenamiento": 50, "Errores Minimos": 6, "Victorias Minimas": 30, "Vinculo al momento de evolucionar": -50, "Program": "Death", "Error Maximo": 6
  },
     "Grademon": {
	"ID": "154", "Tama": "PR", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Guerrero", "Peso": 36,
	"% Entrenamiento": 100, "Error Maximo": 0, "WinRate": 70, "Combates Minimos": 25, "Vinculo Minimo alcanzado": 100
  },
     "Grademon VICE": {
	"ID": "174", "Tama": "PR", "Nivel": 5, "Atributo": "Virus", "Tipo": "Guerrero", "Peso": 36,
  "Error Maximo": 6, "Vinculo Minimo alcanzado": -50
  },
  "Penmon": {
	"ID": 179, "Tama": "SP", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Hielo", "Peso": 15,
    "Xross":"1 SP004 Driver"
  },
  "Kekomon": {
	"ID": 175, "Tama": "BG", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 5
  },
  "Kekkomon": {
	"ID": 176, "Tama": "BG", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 10
  },
    "Gekkomon": {
	"ID": 177, "Tama": "BG", "Nivel": 3, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 18, "Error Maximo": 6, "Stat Superior": "ATK"
  },
      "BanchoMamemon": {
	"ID": 182, "Tama": "V0", "Nivel": 6, "Atributo": "Data", "Tipo": "Mutante", "Peso": 15,
	"% Entrenamiento": 100, "Error Maximo": 6, "Combates Minimos": 50, "WinRate": 80, "Program": "Combat"
  },
    "Armalizamon": {
	"ID": 178, "Tama": "BG", "Nivel": 4, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 30, "% Entrenamiento": 80, "Error Maximo": 1, "WinRate": 60, "Combates Minimos": 15, "Digimon Bonus": "Gekkomon"
  },
  "Pomumon": {
	"ID": 176, "Tama": "P", "Nivel": 3, "Atributo": "Data", "Tipo": "Planta", "Peso": ""
  },
  "Kiwimon": {
	"ID": 176, "Tama": "P", "Nivel": 4, "Atributo": "Data", "Tipo": "Planta / Viento", "Peso": ""
  },
  "Parasaumon": {
	"ID": 176, "Tama": "P", "Nivel": 4, "Atributo": "Virus", "Tipo": "Planta / Dinosaurio", "Peso": ""
  },
  "Delumon": {
	"ID": 176, "Tama": "P", "Nivel": 5, "Atributo": "Data", "Tipo": "Planta / Viento", "Peso": ""
  },
  "Entmon": {
	"ID": 176, "Tama": "D", "Nivel": 5, "Atributo": "Virus", "Tipo": "No Muerto", "Peso": ""
  },
    "Tyumon": {
	"ID": 184, "Tama": "M", "Nivel": 3, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 10, "Program":"Trash"
  },
    "Mercuremon": {
	"ID": 189, "Tama": "SP", "Nivel": 4, "Atributo": "Free", "Tipo": "Mutante", "Peso": 15,
  "% Entrenamiento": 80,"Error Maximo": 2, "Combates Minimos": 15, "WinRate": 50, "Xross": "1 SP013 Driver",
    "RequisitosCondicionados": {
      "condicion": "Origen",
      "categorias": {
        "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"],
        "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"]
      },
      "Tyumon, Pillomon": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Xross": "1 SP013 Driver"
      },
      "Numemon, Scumon, Nanimon, BomberNanimon, ScumonTyumon, PlatinumScumon, PlatinumScumonTyumon, ScumonTyumonHigh, PlatinumScumonTyumonHigh, KaratsukiNumemon, Geremon, GoldNumemon": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15, "Xross": "1 SP013 Driver"
      },
      "Thunderballmon, Starmon": {
        "% Entrenamiento": 100, "Error Maximo": 2, "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP013 Driver"
      }
    }
  },
    "ScumonTyumon": {
	"ID": 185, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 20, "Xross": "DriverInstall"
  },
    "PlatinumScumonTyumon": {
	"ID": 187, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 20, "Comida": "Chatarra"
  },
    "ScumonTyumonHigh": {
	"ID": 186, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 20,
  "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 50, "Combates Minimos": 15
  },
    "PlatinumScumonTyumonHigh": {
	"ID": 188, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante", "Peso": 20, "Comida": "Chatarra"
  },
    "Sephirothmon": {
	"ID": 190, "Tama": "SP", "Nivel": 5, "Atributo": "Free", "Tipo": "Mutante", "Peso": 15,
  "% Entrenamiento": 80, "Error Maximo": 1, "Combates Minimos": 25, "WinRate": 60, "Xross": "1 SP014 Driver",
    "RequisitosCondicionados": {
      "condicion": "Origen",
      "categorias": {
        "Quota/Key Points": ["Peso", "% Entrenamiento", "Error Maximo"],
        "Requisitos Obligatorios": ["WinRate", "Combates Minimos", "Xross"]
      },
      "Numemon, Mercuremon, Scumon, Nanimon, BomberNanimon, ScumonTyumon, PlatinumScumon, PlatinumScumonTyumon, ScumonTyumonHigh, PlatinumScumonTyumonHigh, KaratsukiNumemon, Geremon, Thunderballmon, GoldNumemon, GreatKingScumon": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 60, "Combates Minimos": 25, "Xross": "1 SP014 Driver"
      },
      "Mercuremon": {
        "% Entrenamiento": 80, "Error Maximo": 2, "WinRate": 60, "Combates Minimos": 25, "Xross": "-"
      },
      "SuperStarmon, DarkSuperStarmon, Mamemon, Digitamamon, BlackKingNumemon": {
        "% Entrenamiento": 100, "Error Maximo": "-", "WinRate": "-", "Combates Minimos": "-", "Xross": "1 SP014 Driver"
      }
    }
  },
    "Chiropmon": {
	"ID": 156, "Tama": "BG", "Nivel": 3, "Atributo": "Virus", "Tipo": "Bestia",
    "Peso": 15, "Error Maximo": 6, "Stat Superior": "Vel"
  },
    "Pristimon": {
	"ID": 999, "Tama": "BG", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Marioneta",
    "Peso": "", "Error Maximo": 6, "Stat Superior": "ATK"
  },
};

const specialxrossCases = {
  "Mugendramon": {
    "Megadramon":            "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
    "Gigadramon":            "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
    "Metal Greymon (Virus)": "1 V0015 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0010 Driver",
    "Metal Tyranomon":       "1 V0009 Driver + 1 V0015 Driver + 1 V0014 Driver + 1 V0010 Driver",
    "MetalMamemon":          "1 V0009 Driver + 1 V0013 Driver + 1 V0015 Driver + 1 V0010 Driver",
    "Andromon":              "1 V0009 Driver + 1 V0013 Driver + 1 V0014 Driver + 1 V0015 Driver"
  },
  "Daipenmon": {
    "Blizzarmon":   ["1 SP000 Driver"],
    "Polarbearmon": ["1 SP001 Driver + 1 SP000 Driver", "1 SP004 Driver"]
  },
  "Chackmon": {
    "Icemon":      "1 SP000 Driver",
    "Yukidarumon": "1 SP000 Driver",
    "Yuki Agumon": "1 SP000 Driver",
    "Penmon":      "1 SP000 Driver"
  },
  "Shoutmon SH": {
    "Shoutmon":         "1 VS001 Driver",
    "Shoutmon (Black)": "1 VS001 Driver",
    "Starmons":         ["1 VS009 Driver", "1 VS010 Driver"]
  },
  "Shoutmon + Star Sword": {
    "Shoutmon":         "1 VS001 Driver",
    "Shoutmon (Black)": "1 VS001 Driver",
    "Starmons":         ["1 VS009 Driver", "1 VS010 Driver"]
  },
  "ScumonTyumon": {
    "Scumon": "1 M017 Driver",
    "Tyumon": "1 M005 Driver"
    },
};

// Human-readable version of specialxrossCases — values match xrossinstallop dropdown strings for scoring
const specialxrossScoring = {
  "Mugendramon": {
    "Megadramon":            ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
    "Gigadramon":            ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
    "Metal Greymon (Virus)": ["Megadramon Driver + Metal Tyranomon Driver + MetalMamemon Driver + Andromon Driver"],
    "Metal Tyranomon":       ["Metal Greymon (Virus) Driver + Megadramon Driver + MetalMamemon Driver + Andromon Driver"],
    "MetalMamemon":          ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + Megadramon Driver + Andromon Driver"],
    "Andromon":              ["Metal Greymon (Virus) Driver + Metal Tyranomon Driver + MetalMamemon Driver + Megadramon Driver"]
  },
  "Daipenmon": {
    "Blizzarmon":   ["Ice Spirit H"],
    "Polarbearmon": ["Ice Spirit B + Ice Spirit H", "Ice Spirit A"]
  },
  "Chackmon": {
    "Icemon":      ["Ice Spirit H"],
    "Yukidarumon": ["Ice Spirit H"],
    "Yuki Agumon": ["Ice Spirit H"],
    "Penmon":      ["Ice Spirit H"]
  },
  "Shoutmon SH": {
    "Shoutmon":         ["Starmons Driver"],
    "Shoutmon (Black)": ["Starmons Driver"],
    "Starmons":         ["Shoutmon Driver", "Shoutmon (Black) Driver"]
  },
  "Shoutmon + Star Sword": {
    "Shoutmon":         ["Starmons Driver"],
    "Shoutmon (Black)": ["Starmons Driver"],
    "Starmons":         ["Shoutmon Driver", "Shoutmon (Black) Driver"]
  },
  "ScumonTyumon": {
    "Scumon": ["Scumon Driver"],
    "Tyumon": ["Tyumon Driver"]
    },
  "Mercuremon": {
    "Tyumon":                    ["Steel Spirit H"],
    "Pillomon":                  ["Steel Spirit H"],
    "Numemon":                   ["Steel Spirit H"],
    "Scumon":                    ["Steel Spirit H"],
    "Nanimon":                   ["Steel Spirit H"],
    "BomberNanimon":             ["Steel Spirit H"],
    "ScumonTyumon":              ["Steel Spirit H"],
    "PlatinumScumon":            ["Steel Spirit H"],
    "PlatinumScumonTyumon":      ["Steel Spirit H"],
    "ScumonTyumonHigh":          ["Steel Spirit H"],
    "PlatinumScumonTyumonHigh":  ["Steel Spirit H"],
    "KaratsukiNumemon":          ["Steel Spirit H"],
    "Geremon":                   ["Steel Spirit H"],
    "GoldNumemon":               ["Steel Spirit H"],
    "Thunderballmon":            ["Steel Spirit H"],
    "Starmon":                   ["Steel Spirit H"],
  },
};
