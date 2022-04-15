// Ejemplo 10: Overrinding methods
class Explorer{
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }
    getNameandUsername(){
        return `Explorar ${this.name}, username: ${this.username}`
    }
}
class Viajero extends Explorer{
    constructor(name, username, mission, cycle){
        super(name, username, mission) //SUPER nos ayudará a llamar el constructor padre
        this.cycle= cycle
    }
    getGeneralInfo(){
        let NameandUsername = this.getNameandUsername() // Llamamos el método de la clase padre
        //nameandusername es una variable de esta función, no necesitas usar this para referenciarla
        return `${NameandUsername}, Ciclo ${this.cycle}`
    }
}
const viajero1 = new Viajero("Jose Luis", "LaunchX", "NodeJS", "Abril 2022")
console.log("Ejemplo 10: Overringind methods")
console.log(viajero1)
console.log(viajero1.getNameandUsername())
console.log(viajero1.getGeneralInfo())