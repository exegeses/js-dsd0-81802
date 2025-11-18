/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        cuando le dé al botón "Aceptar"
        almacenamos ese dato en memoria
    -  Escribimos el nombre en el <span>
*/
// prompt()  Sirve para que un usuario pueda ingresar un dato
let nombre = prompt('ingrese su nombre')
const cajaTexto = document.querySelector('#cajaTexto')
cajaTexto.textContent = nombre