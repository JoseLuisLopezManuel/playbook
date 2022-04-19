const profile = {
    user: "Jose Luis",
    username: "Jose Luis LM",
    numberphone: 21231241231,
    email: "ejemplo@gmail.com",
    ubercash: 500,
    getinfo: function(){
        return this.username, this.email, this.numberphone
    },
    getcash: function(){
        return `El dinero guardado en uber es: ${this.ubercash}`
    }
}
console.log("Nombre y numero del usuario: "+ profile.getinfo())
console.log(profile.getcash)
console.log(profile.user)