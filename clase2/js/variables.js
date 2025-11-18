// declaración -> Hacer que exista una variable
let puntaje = 600 
let precio = 70.55
let direccion = "Lavalle 648, piso 8"
const PI = 3.141592
const nacimiento = '18/11/2025'


// document.write(puntaje)   <- no recomendado
// console.log()  sirve para mostrar en la Consola de JavaScript algún dato
console.log('puntaje:', puntaje)
// typeof()  Sirve para saber el tipo de dato
console.log( typeof(puntaje) )
console.log('direccion:', direccion)
console.log( typeof(direccion) )

/* Sobre escribimos el valor de una variable */
precio = 65
console.log('precio:', precio)

// No se puede sobre escribir una constante
PI = 8