const user = {
    user: "Jose Luis",
    username: "Jose_Luis",
    bio: "Datos",
    Hastag: "#Jose",
    age: "20",
    email: "ejemplo@gmail.es",
    getuserandage: function(){
        return this.user, this.age
    },
    getGeneralInfo: function(){
        return `this twitter account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email}`
    }
}
console.log("Nombre y años del usuario: " + user.getuserandage())
console.log(user.getGeneralInfo())
console.log(user)