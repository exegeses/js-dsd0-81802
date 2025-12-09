// Ubicar elementos dentro del DOM
const tema = document.querySelector('#tema')
const btnSwitcher = document.querySelector('#switcher')

// variable auxiliar
let flag = 'dark'

function cambiarTema()
{
    if( flag == 'dark' ){
        // cambiamos hoja de estilos
        tema.href = 'css/light.css'
        // cambiar flag
        flag = 'light'
    }
    else{
        // cambiamos hoja de estilos 
        tema.href = 'css/dark.css'
        //cambiar flag
        flag = 'dark'
    } 
}

btnSwitcher.onclick =  () => 
            {
                cambiarTema()
            }

