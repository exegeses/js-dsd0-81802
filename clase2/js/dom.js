/*
    Ubicra elementos dentro del DOM
*/
//document.getElementById('caja')

const caja =  document.querySelector('#caja')
console.log( caja )

caja.textContent = 'hola Mundo'
caja.style.backgroundColor = 'hsl(0, 70%, 50%)'
caja.style.rotate = '45deg'