class user {
    constructor(user, username, bio, age, email){
    this.user = user
    this.username = username,
    this.bio = bio,
    this.age = age,
    this.email = email,
    this.datecreated = new Date()
}
get getGeneralInfo(){
    return `this Faceook account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email}`
 }
get getUserandEmail(){
    return this.username, this.email
}
}
const user1 = new user("Jose Luis", "Jose Luis LM", "Hola a todos", 20, "ejemplo@gmail.com")
console.log("Nombre y años del usuario: " + user1.getUserandEmail)
console.log(user1.getGeneralInfo)
console.log(user1)

class post {
    constructor(user, username, age, likes, comments, message){
        this.user = user
        this.username = username
        this.age = age
        this.datecreated = new Date()
        this.likes = likes
        this.comments = comments
        this.message = message
}
get getlikesandcomments(){
        return this.likes, this.comments
    }
    get getinfo(){
        `this Faceook account belongs to the user: ${this.username}, his age: ${this.age} and his email: ${this.email} and his post has ${this.likes} likes and ${this.comments} comments`
        return 
    }
    set setlikesandcomments(likes){
        return this.likes = likes 
    }
}

const post1 = new post("Jose Luis", "Jose Luis LM", 20,100, 150, ['Hola', 'Como estas', '¿Que haces'])
console.log("Likes and comments: " + post1.getlikesandcomments)
console.log(post1.getinfo)
console.log(post1)
post1.setlikesandcomments=35
console.log(post1.likes)

class biography {
    constructor (user,username,email,age,bio){
        this.user = user
        this.username = username
        this.email = email
        this.age = age
        this.bio = bio
    }
    get getuserandemail(){
        return this.user, this.email
    }
    get getinfot(){
        return `Los datos de la biografia son: 
        usuario: ${this.user}, nombre: ${this.username}, edad: ${this.age}`
    }   
}
const biography1 = new biography("Jose", "Jose Luis LM", "EJEMPLO@GMAIL.COM", 20, "HOLA A TODOS")
console.log('Usuario y nombre: '+ biography1.getuserandemail)
console.log("Información del usuario: "+ biography1.getinfot)
console.log(biography1)