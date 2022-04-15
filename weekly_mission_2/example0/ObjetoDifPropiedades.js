//Ejeplo 3: Objeto con diferentes Propiedades
const myObjetc3 = {
    name : "Tulio",
    age: 2,
    nicknames: [
        "Tulipan",
        "Tulancingo",
        "Tulish"
    ],
    address: {
        zip_code:"10000",
        street: "Dr. Vertiz 11 Benito Juares",
        city: "CDMX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObjetc3)
console.log(myObjetc3.name)
console.log(myObjetc3.age)
console.log(myObjetc3["address"])
console.log(myObjetc3.address.street)
console.log(myObjetc3.nicknames[0])