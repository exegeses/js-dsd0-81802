const cajaTexto = document.querySelector('#cajaTexto')
/*
    Mostrar un reloj digital formato:   hh:mm:ss
*/


// declaramos funciones de control
function relojDigital()
{
    // creamos objeto de fecha
    const fecha = new Date()

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours()
    if( horas < 10 ){
        horas = '0'+ horas
    }
    console.log('horas:',horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if( minutos < 10 ){
        minutos = '0'+ minutos
    }
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if( segundos < 10 ){
        segundos = '0'+ segundos
    }
    console.log('segundos:',segundos)

    // mostramos el reloj en el span
    cajaTexto.textContent = horas +':'+ minutos +':'+ segundos
}

// invocamos la función
relojDigital()

// actualizamos el llamado a relojDigital
setInterval( relojDigital, 1000 )