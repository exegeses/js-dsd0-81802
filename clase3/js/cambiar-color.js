// Ubicar elementos dentro del DOM
const caja = document.querySelector('#caja')

/* declaramos funcion/es de control */
function cambiarColor()
{
    caja.style.backgroundColor = 'green'
    caja.style.rotate = '60deg'
    caja.textContent = 'Verde'
}
function cambiarColor2()
{
    caja.style.backgroundColor = 'hsl(220,80%,70%)'
    caja.style.rotate = '-30deg'
    caja.textContent = 'Celeste'
}
function reset()
{
    caja.style.backgroundColor = '#aaa'
    caja.style.rotate = '0deg'
    caja.textContent = ''
}