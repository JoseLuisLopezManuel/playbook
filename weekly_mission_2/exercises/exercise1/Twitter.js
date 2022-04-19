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

const trending_topic = {
    user: "Jose Luis",
    username: "Jose_Luis",
    Hastag: "#Jose",
    email: "ejemplo@gmail.es",
    friends:['@Lupita','@Carlos', '@Carla'],
    getHastag: function(){
        return this.Hastag
    },
    getGeneralInfo: function(){
        return `this twitter account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email} and his Hastag is: ${this.Hastag}`
    }
}
console.log("Su hastag es: " + trending_topic.getHastag())
console.log(trending_topic.getGeneralInfo())
console.log(trending_topic)