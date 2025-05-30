const digimonReqDict = { 
  "Botamon": { "ID": 0, "Tama": "V0", "Nivel": 1, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 4 },
  "Koromon": { "ID": 1, "Tama": "V0", "Nivel": 2, "Atributo": "Free", "Tipo": "Ninguno", "Peso": 6 },
  "Agumon": {
    "ID": 2, "Tama": "V0", "Nivel": 3, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 15, "Error Maximo": 6, "EntrenamientoHecho": "Si",
    "Stat Superior": "Vel", "Stat Superior 2": "ATK"
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
	"ID": 7, "Tama": "V0", "Nivel": 4, "Atributo": "Vaccine", "Tipo": "Dinosaurio",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus Batallas": 25, "WinRate": 60, "Combates Minimos": 15, "Vinculo Minimo alcanzado": 100
  }, 
    "Deltamon": {
	"ID": 8, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Compuesto",
    "Peso": 30, "Error Maximo": "3-6", "% Entrenamiento": 60, "Bonus Errores": 5, "WinRate": 60, "Combates Minimos": 15, "Stat Superior": "ATK"
  },
    "Thunderballmon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 30, "Error Maximo": 6, "% Entrenamiento": 60, "Digimon Bonus": "Kokuwamon", "WinRate": 60, "Combates Minimos": 15, "Stat Superior": "Vel"
  },
    "Guardromon": {
	"ID": 9, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 30, "Error Maximo": 2, "% Entrenamiento": 60, "Bonus Batallas": "15-20", "WinRate": 60, "Combates Minimos": 15
  },
    "V-Dramon (Black)": {
	"ID": 34, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus Batallas": 25, "WinRate": 60, "Combates Minimos": 15, 
	"Vinculo Minimo alcanzado": 100, "Program" : "Virus"
  },
    "RedVDramon": {
	"ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Vaccine", "Tipo": "Dinosaurio",
	"Vinculo Minimo alcanzado": -50
	},
    "GoldGuardromon": {
	"ID": 35, "Tama": "V0", "Nivel": 4, "Atributo": "Vaccine", "Tipo": "Dinosaurio",
	"Comida": "Bellota dorada"
	},	
    "V-Dramon (Black)": {
	"ID": 34, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 25, "Error Maximo": 0, "% Entrenamiento": 100, "Bonus Batallas": 25, "WinRate": 60, "Combates Minimos": 15, 
	"Vinculo Minimo alcanzado": 100, "Program" : "Virus"
  },
    "GeoGreymon": {
	"ID": 72, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 20, "Error Maximo": 1, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (2006)", "Vinculo Minimo alcanzado": 70, "WinRate": 60, "Combates Minimos": 15
  },
    "Clockmon": {
	"ID": 79, "Tama": "V0", "Nivel": 4, "Atributo": "Data", "Tipo": "Maquina",
    "Peso": 20, "Error Maximo": "1-3", "% Entrenamiento": 50, "WinRate": 60, "Combates Minimos": 15, "Bonus Batallas": 0
  },
    "Tuskmon": {
	"ID": 80, "Tama": "V0", "Nivel": 4, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 80, "Digimon Bonus": "Agumon (Black)", "WinRate": 60, "Combates Minimos": 15
  },
    "Yukidarumon": {
	"ID": 81, "Tama": "V0", "Nivel": 4, "Atributo": "Vacuna", "Tipo": "Hielo",
    "Peso": 30, "Error Maximo": 6, "% Entrenamiento": 80, "Digimon Bonus": "Yuki Agumon", "WinRate": 60, "Combates Minimos": 15
  },
    "Metal Greymon (Virus)": {
	"ID": 12, "Tama": "V0", "Nivel": 5, "Atributo": "Virus", "Tipo": "Dinosaurio",
    "Peso": 65, "Error Maximo": 1, "% Entrenamiento": 80, "WinRate": 70, "Combates Minimos": 25
  },
    "Andromon": {
	"ID": 13, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Maquina",
    "Peso": 40, "Error Maximo": 2, "% Entrenamiento": 70, "WinRate": 70, "Combates Minimos": 25
  },
    "Mametyramon": {
	"ID": 14, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Mutante",
    "Peso": 10, "Error Maximo": 6, "% Entrenamiento": 60, "Digimon Bonus": "Thunderballmon",
	"WinRate": 70, "Combates Minimos": 25, "Driver Equipado": "Tyranomon Driver"
  },
    "Aero V-dramon": {
	"ID": 15, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
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
	"Peso": 5, "Error Maximo": 6, "% Entrenamiento": 50, "WinRate": 70, "Combates Minimos": 25
  },
    "MetalGreymon Alterous": {
	"ID": 26, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
	"% Entrenamiento": 100, "Victorias":50
  },
    "Aero V-dramon (Black)": {
	"ID": 36, "Tama": "V0", "Nivel": 5, "Atributo": "Vacuna", "Tipo": "Dinosaurio",
    "Peso": 50, "Error Maximo": 0, "% Entrenamiento": 100, "Digimon Bonus": "V-Dramon (Black)",
	"Vinculo Minimo alcanzado": 100, "WinRate": 70, "Combates Minimos": 25
  },
    "Triceramon": {
	"ID": 37, "Tama": "V0", "Nivel": 5, "Atributo": "Data", "Tipo": "Dinosaurio",
    "Peso": 50, "Error Maximo": 3, "% Entrenamiento": 50, "Digimon Bonus": "Tyranomon", "WinRate": 70, "Combates Minimos": 25
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
  }
};