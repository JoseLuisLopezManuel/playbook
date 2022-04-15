const Repo = {
    name: "LaunchX",
    author: "Jose Luis",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 50,
    forks: 2,
    issues_open: 10,
    issues_close:10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author} and use ${this.language}`
    }
}
console.log("Nombre del repo: "+ Repo.name)
console.log("Issues totales: "+ Repo.getTotalIssues())
console.log(Repo.getGeneralInfo())