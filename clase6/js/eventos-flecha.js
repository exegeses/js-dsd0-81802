const boton = document.querySelector('#boton')
const cajaTexto = document.querySelector('#cajaTexto')

boton.onclick = () => {
                        cajaTexto.textContent = 'hiciste click!'
                       }
boton.onmouseover = () => {
                        cajaTexto.textContent = 'mouse sobre'
                           } 
boton.onmouseout = () => {
                        cajaTexto.textContent = 'reposo'
                         }
