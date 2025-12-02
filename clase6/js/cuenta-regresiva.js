//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function control()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2025, 11, 25 );

    //diferencia entre momentos de fecha
    let diferencia = final - ahora;
    console.log('dif:',diferencia);
    /* el resultado de la diferencia es un número 
       expresado en UNIX TIMESTAMP
       - el tiempo expresado en milisegundos 
       - desde el 01/01/1970
    */

     //obtenemos el tiempo expresado en segundos
        //y quitamos decimales
    let segundos = Math.trunc( diferencia/1000 );
    console.log(segundos);


    //obtenemos el tiempo en minutos
    let minutos = Math.trunc( segundos/60 );
    console.log( minutos );

    //obtenemos el tiempo en horas
    let horas = Math.trunc( minutos/60 );
    console.log( horas );

    //obtenemos el tiempo en días
    let dias = Math.trunc( horas/24 );
    console.log( dias );

    /* calculamos el resto de horas, minutos, segundos */
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;


    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }

    //imprimimos en los span
    txtDias.textContent = dias;
    txtHoras.textContent = horas;
    txtMinutos.textContent = minutos;
    txtSegundos.textContent = segundos;

}

//invocamos la funciópn de control
control();
setInterval( control, 1000 );