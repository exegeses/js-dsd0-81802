/*
    un Array es un tipo de dato
*/
let n = 10
let d = 10.55
console.log( typeof(n) )
console.log( typeof(d) )

let fruta = 'manzana'
console.log( typeof(fruta) )

let fecha = new Date()
console.log( typeof(fecha) )

let fn = function foo(){}
console.log( typeof(fn) )

let nulo = null
console.log( typeof(nulo) )

/*
    tipos de datos
        number
        string
        object
        function
        undefined
        null
*/
let miArray = []
console.log( 'tipo: ', typeof(miArray) )
console.log( miArray )
miArray = [ 'One Piece', 'Bleach', 'Berserk', 'Kimetsu no Yaiba' ]
console.log( miArray )
miArray.push('Jojo\'s bizarre adventures')
console.log( miArray )

// ubicamos el span
const cajaTexto = document.querySelector('#cajaTexto')
cajaTexto.textContent = miArray[0]

