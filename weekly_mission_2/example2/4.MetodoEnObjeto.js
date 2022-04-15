// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor (name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }
    getInfo(){ //Es una funcion que ejecutará cualquier objeto instancia de esta clase
        return `Repository ${this.name}, author: ${this.author} has ${this.stars}`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "Jose Luis", "js", 50)
console.log(myRepo.getInfo())