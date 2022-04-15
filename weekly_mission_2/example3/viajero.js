import Explorer from "./explorer.js"
export default class Viajero extends Explorer{
    constructor(name, username, mission, cycle){
        super(name, username, mission)
        this.cycle = cycle
    }
    getGeneralInfor(){
        let nameAndUsername = this.getNameandUsername()
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}