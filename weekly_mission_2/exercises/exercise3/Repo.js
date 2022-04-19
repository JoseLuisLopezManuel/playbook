class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_close, issues_open) {
        this.name = name
        this.author = author
        this.language= language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    get getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    get getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author} and use ${this.language}`
    }
}
const Repo1 = new Repo("LaunchX", "Jose", "JS", 500, 50, 2, 10, 10)
console.log("Nombre del repo: "+ Repo1.name)
console.log("Issues totales: "+ Repo1.getTotalIssues)
console.log(Repo1.getGeneralInfo)