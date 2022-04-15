// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander{
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
    get getStudents(){
        return this.students
    }
    get getLives(){
        return this.lives
    }
    set setStudents(students){
        this.students = students
    }
    set setLives(lives){
        this.lives  = lives
    }
}
console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionExplorerNode= new MissionCommander("Jose Luis","NodeJs")

console.log(missionExplorerNode.getStudents) //0 por default
console.log(missionExplorerNode.getLives)//0 por default

missionExplorerNode.setStudents=100
missionExplorerNode.setLives=5

console.log(missionExplorerNode.getStudents)
console.log(missionExplorerNode.getLives)