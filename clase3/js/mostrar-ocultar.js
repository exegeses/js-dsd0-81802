const caja = document.querySelector('#caja')

// Declaramos funciones de control
function ocultar()
{
    //caja.style.backgroundColor = 'hsl(180,80%,8%)'
    // caja.style.display = 'none'
    caja.style.opacity = 0
}
function mostrar()
{
    //caja.style.backgroundColor = 'hsl(0, 0%, 67%)
    // caja.style.display = 'block'
    caja.style.opacity = 1
}