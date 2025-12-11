const dadoImagen = document.querySelector('#caja img')
const boton = document.querySelector('#boton')

function generarNumero()
{
    let random = Math.random()
    let numeroX6 = (random * 6) + 1
    let numero = Math.floor( numeroX6 ) 
    return numero
}
function cambiarImagen( numeroImagen )
{
    // dadoImagen.src = 'red/dice-'+ numeroImagen +'.png'
    dadoImagen.src = `red/dice-${numeroImagen}.png`
}
function playAudio()
{
    let sonidoDado = new Audio('audio/dice.mp3')
    sonidoDado.play()
}

boton.onclick = () => 
                {
                    let numero = generarNumero()
                    cambiarImagen( numero )
                    playAudio()
                }


/*
function swapImage()
{
    let numero = generarNumero()
    dadoImagen.src = `red/dice-${numero}.png`
} 
*/