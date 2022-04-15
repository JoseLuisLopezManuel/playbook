// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Mexico','United States', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => country.includes('land'))
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('s'))
console.log("Ejemplo 7: Paises que terminan en s")
console.log(countriesEndsByia)