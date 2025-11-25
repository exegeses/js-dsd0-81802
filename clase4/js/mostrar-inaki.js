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
// Versión sencilla para principiantes:
// El enlace dentro de #navegacion mostrará u ocultará el elemento #caja.
function mostrarOcultar(){
    if ( caja.style.display == 'none' ) {
        // si está oculta, la mostramos
    caja.style.display = 'block'
    } else {
            // si está visible, la ocultamos
        caja.style.display = 'none'
    }
}
// Nota: este código usa display = 'none' / 'block' porque es fácil de entender.
// Si prefieres una animación suave (fade), puedo mostrarte la versión con CSS y clases.