// Ubicar elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

let numero = 0

function incrementar()
{
    // numero = numero + 1 
    numero ++
    cajaTexto.textContent = numero
}

incrementar()
// setInterval( función, demora )
setInterval( incrementar, 1000 )