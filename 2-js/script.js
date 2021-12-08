'use strict'

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];


const clasificacion = () => {
  const add = puntuaciones.map(points => {
    const sumatorio = points.puntos.reduce((acc, curr) => acc + curr)
    return {
      ...points,
      puntos: sumatorio
    }
  })
  const order = add.sort((a, b) => {
    if (a.puntos > b.puntos) {
      return -1;
    } else if (a.puntos < b.puntos) {
      return 1;
    } else {
      return 0;
    }
  })
  return console.log(`El equipo con mayor puntuación es ${order[0].equipo} con ${order[0].puntos} puntos; y el equipo con menor puntuación es ${order[order.length - 1].equipo} con ${order[order.length - 1].puntos} puntos `)
}

clasificacion(puntuaciones)