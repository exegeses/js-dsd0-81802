//botón
const btn = document.querySelector('#navegacion a')
console.log(btn)
//article con id= 'caja'
const caja = document.querySelector("#caja");
/*
    establecemos valores iniciales
    texto del botón
    visibilidad de la caja
*/
btn.textContent = 'ocultar caja'
caja.style.display = 'block'


function mostrar_ocultar(){
    if (caja.style.display == 'none'){
        caja.style.display = 'block';
        btn.textContent = 'ocultar caja'
    }
    else{
        caja.style.display = 'none';
        btn.textContent = 'mostrar caja'
    }
}