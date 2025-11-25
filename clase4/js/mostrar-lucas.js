const caja = document.querySelector('#caja')
const boton = document.querySelector('#navegacion a')
/*
    establacemos valores iniciales
*/
boton.textContent = 'ocultar  caja'
caja.style.opacity = 1

function ocultar()
{
    //caja.style.backgroundColor = hsl(180,80%,8%)
    //caja.style.display = 'none'
    caja.style.opacity = 0
    boton.textContent = 'mostrar caja'
}
function mostrar()
{
    //caja.style.backgroundColor = hsl(0,0,67%)
    //caja.style.display = 'block'
    caja.style.opacity = 1
    boton.textContent = 'ocultar  caja'
}

function mostrarOcultar()
{
    if( caja.style.opacity == 1 ){
        ocultar()
    }
    else{
        mostrar()
    }
}