// Ejemplo 3: Instanciar un objeto con atributos
class Studen {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}
// Crear un objeto de la clase Student (esto se le llama instanciación)
const JoseStudent = new Studen("Jose Luis", 20, ["Student", "Java"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(JoseStudent)