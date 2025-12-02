// Ubicamos elementos dentro del DOM
const navegacion = document.querySelector('#navegacion')
console.log(navegacion)

    const btn1 = navegacion.children[0]
    const btn2 = navegacion.children[1]
    const btn3 = navegacion.children[2]

const cajaTexto = document.querySelector('#cajaTexto')

// control de elementos
btn1.onclick = function()
                {
                    cajaTexto.textContent = 'botón primero pulsado'
                }
btn2.onclick = function()
                {
                    cajaTexto.textContent = 'botón segundo pulsado'
                }
btn3.onclick = function()
                {
                    cajaTexto.textContent = 'botón tercero pulsado'
                }
