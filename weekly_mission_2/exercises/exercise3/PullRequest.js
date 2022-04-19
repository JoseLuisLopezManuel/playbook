class PullRequest {
    constructor (title, autor, branchName,repositoryNameAssociated, status){
    this.title = title
    this.autor = autor
    this.branchName = branchName
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status= status
}
    get getStatus(){
        return this.status
    }
    get getTitleAndAuthor(){
        return this.autor, this.title
    }
}
const pq = new PullRequest("Comentarios", "Jose" , "JoseLuisLopez", "LaunchX", "OPEN")
console.log("El estatus del Pull Request es :"+ pq.getStatus)
console.log("El Titulo es: " + pq.title + " y autor"+ pq.autor)
console.log(pq.getTitleAndAuthor)