const boton = document.querySelector('#boton')
const cajaTexto = document.querySelector('#cajaTexto')

// asignar acciones a los eventos
    // con una función anónima
boton.onclick = function()
                {
                    cajaTexto.textContent = 'hiciste click!'
                }
boton.onmouseover = function()
                {
                    cajaTexto.textContent = 'mouse sobre'
                }
boton.onmouseout = function()
                {
                    cajaTexto.textContent = 'reposo'
                }