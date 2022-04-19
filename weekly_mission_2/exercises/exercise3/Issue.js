class Issue{
    constructor (title, repositoryNameAssociated, status, numbersOfComments, labels, author){
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status= status
    this.numbersOfComments = numbersOfComments
    this.labels = labels
    this.author = author
    this.dateCreated = new Date()
    this.lastUpdate= new Date()
    }
    get getTitleAndAuthor(){
        return this.title, this.author
    } 
    get getGeneralInfo(){
        return `El repositoro ${this.repositoryNameAssociated} status: ${this.status}, fue creado: ${this.dateCreated} y guardado ${this.lastUpdate}`
    }
}
const Issue1 = new Issue("Hola", "LaunchX", "OPEN", 500, 100, "Jose Luis")
console.log("Titulo del issue: " + Issue1.title)
console.log("Fecha creada: "+ Issue1.lastUpdate)
console.log(Issue1.getGeneralInfo)