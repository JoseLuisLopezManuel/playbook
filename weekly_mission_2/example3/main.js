import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/
const viajero1 = new Viajero("Jose Luis", "LaunchX", "Node Js", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameandUsername())
console.log(viajero1.getGeneralInfor())