const PullRequest = {
    title: "Mi Blog Personal",
    autor: "Jose",
    branchName: "Jose Luis",
    dateCreated: new Date(),
    repositoryNameAssociated:"LaunchX",
    status: "Open",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return this.autor, this.title
    }
}
console.log("El estatus del Pull Request es :"+ PullRequest.getStatus())
console.log("El Titulo es: " + PullRequest.title + " y autor"+ PullRequest.autor)
console.log(PullRequest.getTitleAndAuthor())