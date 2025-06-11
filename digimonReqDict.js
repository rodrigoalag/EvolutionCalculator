const digimonReqDict = { 
  "Botamon": { "ID": 0, "Tama": "V0", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 4 },
  "Chibickmon": { "ID": 55, "Tama": "VS", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 5 },
  "Koromon": { "ID": 1, "Tama": "V0", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 6 },
  "Pickmon": { "ID": 56, "Tama": "VS", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 10 },
  "Agumon": {
    "ID": 2, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK"
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
	"ID": 84, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 15, "Error Maximo": 6
  },
  "Gotsumon": {
	"ID": 85, "Tama": "VS", "Nivel": 3, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 15, "Error Maximo": 6, "Program": "Ore"
  },
  "Numemon": {
    "ID": 11, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 10
  },
    "Greymon": {
	"ID": 4, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon", "Vinculo Minimo alcanzado": 70, "WinRate": 60, "Combates Minimos": 15
  },
    "Tyranomon": {
	"ID": 5, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 40,"Stat Superior": "Balanceado", "WinRate": 60, "Combates Minimos": 15
  },
    "Dark Tyranomon": {
	"ID": 6, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
	"Program": "Virus"
  },
    "V-Dramon": {
	"ID": 7, "Tama": "V0", "Nivel": 4, "Atributo": "Vaccine", "Tipo": "Dragon",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus WinRate": 70, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100
  }, 
    "Deltamon": {
	"ID": 8, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Compuesto",
    "Peso": 30, "Error Maximo": "3-6", "% Entrenamiento": 60, "Bonus Errores": 5, "WinRate": 60, "Combates Minimos": 15, "Stat Superior": "ATK"
  },
    "Thunderballmon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 5, "Error Maximo": 2, "% Entrenamiento": 60, "Digimon Bonus": "Kokuwamon", "WinRate": 60, "Combates Minimos": 15, "Stat Superior": "Vel"
  },
    "Guardromon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 35, "Error Maximo": 2, "% Entrenamiento": 50, "Bonus Batallas": "15-20", "WinRate": 60, "Combates Minimos": 15
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
    "Peso": 20, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (2006)", "Vinculo Minimo alcanzado": 70, "WinRate": 60, "Combates Minimos": 15
  },
    "Clockmon": {
	"ID": 79, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 18, "Error Maximo": "1-3", "% Entrenamiento": 50, "WinRate": 60, "Combates Minimos": 15, "Bonus Batallas": 0
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
	"Comida": "5 Sardinas"
	},	
    "Geremon": {
	"ID": 20, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Program": "Trash"
	},
    "GoldNumemon": {
	"ID": 42, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Comida": "Bellota Dorada"
	},
    "Scumon": {
	"ID": 41, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Comida": "5 caca"
	},
    "PlatinumScumon": {
	"ID": 43, "Tama": "M", "Nivel": 4, "Atributo": "Virus", "Tipo": "Mutante",
	"Comida": "Chatarra"
	},	
    "ShootingStarmon": {
	"ID": 57, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 30, "Error Maximo": 6, "% Entrenamiento": 80, "WinRate": 65, "Combates Minimos": 20, "Xross": "4 Pickmon Driver"
	},
    "Icemon": {
	"ID": 86, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Hielo",
    "Peso": 25, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 60, "Combates Minimos": 15, "Program": "Frost"
	},
    "Starmon": {
	"ID": 58, "Tama": "VS", "Nivel": 4, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 15, "Error Maximo": 2, "% Entrenamiento": 70, "WinRate": 60, "Combates Minimos": 15
	},
    "Metal Greymon (Virus)": {
	"ID": 12, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },
    "Andromon": {
	"ID": 13, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 70, "WinRate": 70, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No"
  },
    "Mametyramon": {
	"ID": 14, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 10, "Error Maximo": 2, "% Entrenamiento": 60, "Bonus Errores": "1+",
	"WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "Tyranomon Driver"
  },
    "Aero V-dramon": {
	"ID": 15, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dragon",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "Monzaemon": {
	"ID": 19, "Tama": "M", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Mutante",
    "Peso": 40, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Numemon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "Black King Numemon": {
	"ID": 46, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "KaratsukiNumemon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25, "Program" : "Royal"
  },
    "Etemon": {
	"ID": 44, "Tama": "M", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 20, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "Scumon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "WaruMonzaemon": {
	"ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"Vinculo Minimo alcanzado": -50
  },
    "GigaWaruMonzaemon": {
	"ID": 17, "Tama": "M", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"Xross":"3 Monzaemon Driver en WaruMonzaemon o 3 WaruMonzaemon Driver en Monzaemon"
  }, 
    "Metal Tyranomon": {
	"ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 65, "Error Maximo": "3-6", "% Entrenamiento": 60, "Digimon Bonus": "Dark Tyranomon", "WinRate": 70, "Combates Minimos": 25
  },
    "MetalMamemon": {
	"ID": 17, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"% Entrenamiento": 100, "Program": "Mecha"
  },
    "Metal Greymon": {
	"ID": 23, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Program":"Vaccine"
  },  
	"Mamemon": {
	"ID": 24, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"Peso": 5, "Error Maximo": 2, "% Entrenamiento": 50, "WinRate": 70, "Combates Minimos": 25, "Bonus Errores": "1+"
  },
    "MetalGreymon Alterous": {
	"ID": 26, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
	"% Entrenamiento": 100, "Victorias":50
  },
    "Aero V-dramon (Black)": {
	"ID": 36, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dragon",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon (Black)",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "Triceramon": {
	"ID": 37, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 50, "Error Maximo": 2, "% Entrenamiento": 50, "Digimon Bonus": "Tyranomon", "WinRate": 70, "Combates Minimos": 25
  },
    "BigMamemon": {
	"ID": 38, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
	"Xross":"3 Mamemon Driver"
  },
    "RizeGreymon": {
	"ID": 73, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "GeoGreymon", "WinRate": 70, "Combates Minimos": 25
  },
    "Polarbearmon": {
	"ID": 82, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Peso": 45, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Yukidarumon", "WinRate": 70, "Combates Minimos": 25
  },
    "Master Tyranomon": {
	"ID": 83, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 55, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Tyranomon",
	"Program":"Combat", "WinRate": 70, "Combates Minimos": 25
  },
    "Megadramon": {
	"ID": 18, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
    "Peso": 55, "Error Maximo": "1-2", "% Entrenamiento": 75, "Bonus Batallas": 30, "WinRate": 70, "Combates Minimos": 25
	},
    "Gigadramon": {
	"ID": 25, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Maquina",
	"% Entrenamiento": 100
  },
    "SuperStarmon": {
	"ID": 59, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Alcanzo vinculo negativo?": "No"
  },  
    "DarkSuperStarmon": {
	"ID": 60, "Tama": "VS", "Nivel": 5, "Atributo": "Virus", "Tipo": "Mutante",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },  
    "Insekimon Low Tier": {
	"ID": 87, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "Starmon o ShootingStarmon Driver"
  }, 
    "Insekimon Mid Tier Dark": {
	"ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "DarkSuperStarmon Driver"
  }, 
    "Insekimon Mid Tier Super": {
	"ID": 88, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "SuperStarmon Driver"
  }, 
    "Insekimon High Tier": {
	"ID": 90, "Tama": "VS", "Nivel": 5, "Atributo": "Data", "Tipo": "Tierra",
    "Peso": 30, "Error Maximo": 0, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "SuperStarmon y DarkSuperStarmon Driver"
  },
    "MetalEtemon": {
	"ID": 92, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Mutante","Peso":40,
	"% Entrenamiento": 100,"Error Maximo": 1, "Combates Minimos": 50, "WinRate": 80, "Program": "Mecha"
  },
    "PlatinumNumemon": {
	"ID": 91, "Tama": "M", "Nivel": 6, "Atributo": "Virus", "Tipo": "Mutante","Peso":55,
	"% Entrenamiento": 100,"Error Maximo": 1, "Combates Minimos": 50, "WinRate": 80, "Xross": "5 PlatinumNumemon Driver"
  },
    "Mugendramon": {
	"ID": 27, "Tama": "V0", "Nivel": 6, "Atributo": "Virus", "Tipo": "Maquina","Peso":55,
	"% Entrenamiento": 100,"Error Maximo": 1, "Combates Minimos": 50, "WinRate": 80, "Xross": "DriverInstall"
  },
     "Chackmon": {
	"ID": 93, "Tama": "SP", "Nivel": 4, "Atributo": "Free", "Tipo": "Hielo","Peso":10,
	"% Entrenamiento": 80,"Error Maximo": 6, "Combates Minimos": 15, "WinRate": 60, "Xross": "Ice Spirit H"
  },
    "Blizzarmon": {
	"ID": 94, "Tama": "SP", "Nivel": 5, "Atributo": "Free", "Tipo": "Hielo","Peso":30,
	"% Entrenamiento": 80,"Error Maximo": 2, "Combates Minimos": 25, "WinRate": 70, "Xross": "Ice Spirit B"
  },
    "Daipenmon": {
	"ID": 95, "Tama": "SP", "Nivel": 6, "Atributo": "Free", "Tipo": "Hielo","Peso":40,
	"% Entrenamiento": 100,"Error Maximo": 1, "Combates Minimos": 50, "WinRate": 80, "Xross": "DriverInstall"
  },  
  
};
