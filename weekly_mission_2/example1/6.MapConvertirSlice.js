// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Mexico','United States', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) => country.toUpperCase().slice(0,4))
// el método slice obtiene solo la longitud marcada del string
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)