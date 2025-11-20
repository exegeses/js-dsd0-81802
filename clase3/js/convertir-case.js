// ubicar elementos dentro del DOM
const mini = document.querySelector('#mini')
const mayu = document.querySelector('#mayu')
const cadena = 'aSdFg'

mini.textContent = cadena.toLowerCase()
mayu.textContent = cadena.toUpperCase()

if( cadena.toLowerCase() == 'asdfg' ){
    alert('son iguales')
}
else{
    alert('no son iguales')
}

