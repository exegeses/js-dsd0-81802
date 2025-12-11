// ubiacr elementos dentro del DOM
const boton = document.querySelector('#navegacion a')
const cajaTexto = document.querySelector('#cajaTexto')

/*
    Al pulsar el botón vamos a generar un número aleatorio. 
    Este número debe ser un número entero entre 1 ~ 10 (incluidos)
    Mostrar este número en el span
*/
function generarNumero()
{
    // Math: Es un objeto con atributos y métodos de funciones aritméticas
        // Math.random()  Return el número semi aleatorio
            // Entre 0 (incluído) y 1 (excluído) [con decimales]
    let random = Math.random()
    console.log('random:', random)

    let numeroX10 = (random * 10) + 1
    console.log('multiplicado y  más 1:', numeroX10)
    // Math.trunc()  ||  Math.floor()
    let numero = Math.floor( numeroX10 ) 
    return numero
}

console.log( generarNumero() )
// evento click
boton.onclick = function()
                {
                    cajaTexto.textContent = generarNumero()
                }