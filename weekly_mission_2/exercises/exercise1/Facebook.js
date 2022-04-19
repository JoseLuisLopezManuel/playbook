const user = {
    user: "Jose Luis",
    username: "Jose_Luis",
    bio: "Datos",
    age: 20,
    email: "ejemplo@gmail.es",
    datecreated: new Date(),
    getuserandage: function(){
        return this.user, this.age
    },
    getGeneralInfo: function(){
        return `this Faceook account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email}`
    }
}
console.log("Nombre y años del usuario: " + user.getuserandage())
console.log(user.getGeneralInfo())
console.log(user)
const post = {
    user: "Jose Luis",
    username: "Jose Luis LM",
    age: 20,
    datecreated: new Date(),
    likes: 100,
    comments: 50,
    message: ["Hola como has estado?", "¿Que haces?"],
    getlikesandcomments: function(){
        return this.likes, this.comments
    },
    getinfo: function(){
        `this Faceook account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email} and his post has ${this.likes} likes and ${this.comments} comments`
        return 
    }
}

console.log("Likes and comments: " + post.getlikesandcomments())
console.log(post.getinfo())
console.log(post)

const biography = {
    user: "Jose Luis",
    username: "Jose Luis LM",
    email: "Ejemplo@gmail.es",
    age: 20,
    bio: "La vida es un riesgo",
    getuserandemail: function(){
        return this.user, this.email
    },
    getinfot: function(){
        return `Los datos de la biografia son: 
        usuario: ${this.user}, nombre: ${this.username}, edad: ${this.age}`
    }   
}
console.log('Usuario y nombre: '+ biography.getuserandemail())
console.log("Información del usuario: "+ biography.getinfot())
console.log(biography)