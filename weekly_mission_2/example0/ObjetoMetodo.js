//Ejemplo 4: Objeto con métodos
const pet = {
    name: "Tulio",
    //Esta funcion se guada como propiedad del objeto
    sayHello: function(){
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español`)
    }
}
console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()