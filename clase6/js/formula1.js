// Ubicamos elementos dentro del DOM
// navbar
const equipos = document.querySelector('#equipos')
    //pestañas
    const btnMclaren = equipos.children[0]
    const btnRedbull = equipos.children[1]
    const btnFerrari = equipos.children[2]
    const btnMercedes = equipos.children[3]
    const btnAmartin = equipos.children[4]

// contenedores de escuderías
const mclaren = document.querySelector('#mclaren')
const redbull = document.querySelector('#redbull')
const ferrari = document.querySelector('#ferrari')
const mercedes = document.querySelector('#mercedes')
const amartin = document.querySelector('#amartin')

/*
    estado inicial
    Tenemos que hacer que sólo se vea el contenedor de una escudería
    - Vamos a ocultar todas las demás
*/
redbull.style.display = 'none'
ferrari.style.display = 'none'
mercedes.style.display = 'none'
amartin.style.display = 'none'

btnMclaren.onclick = function()
                    {

                        mclaren.style.display = 'flex'
                        redbull.style.display = 'none'
                        ferrari.style.display = 'none'
                        mercedes.style.display = 'none'
                        amartin.style.display = 'none'
                    }

btnRedbull.onclick = function()
                    {

                        mclaren.style.display = 'none'
                        redbull.style.display = 'flex'
                        ferrari.style.display = 'none'
                        mercedes.style.display = 'none'
                        amartin.style.display = 'none'
                    }

btnFerrari.onclick = function()
                    {
                        mclaren.style.display = 'none'
                        redbull.style.display = 'none'
                        ferrari.style.display = 'flex'
                        mercedes.style.display = 'none'
                        amartin.style.display = 'none'
                    }                    

btnMercedes.onclick = function()
                    {
                        mclaren.style.display = 'none'
                        redbull.style.display = 'none'
                        ferrari.style.display = 'none'
                        mercedes.style.display = 'flex'
                        amartin.style.display = 'none'
                    }
btnAmartin.onclick = function()
                    {
                        mclaren.style.display = 'none'
                        redbull.style.display = 'none'
                        ferrari.style.display = 'none'
                        mercedes.style.display = 'none'
                        amartin.style.display = 'flex'
                    }