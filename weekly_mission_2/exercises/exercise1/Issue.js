const Issue = {
    title: "Comentarios",
    repositoryNameAssociated: "LaunchX",
    status: "Open",
    numbersOfComments: 250,
    labels: ['Semana 1','Semana 2', 'Semana 3'],
    author: "Jose Luis",
    dateCreated: new Date(),
    lastUpdate: new Date(),
    getTitleAndAuthor: function(){
        return this.title, this.author
    },
    getGeneralInfo: function(){
        return `El repositoro ${this.repositoryNameAssociated} status: ${this.status}, fue creado: ${this.dateCreated} y guardado ${this.lastUpdate}`
    }
}
console.log("Titulo del issue: " + Issue.title)
console.log("Fecha creada: "+ Issue.lastUpdate)
console.log(Issue.getGeneralInfo())