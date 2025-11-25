const caja = document.querySelector('#caja')

function cambiarCaja( texto, codigoColor, grado )
{
    caja.textContent = texto
    caja.style.backgroundColor = codigoColor
    caja.style.rotate = grado
}