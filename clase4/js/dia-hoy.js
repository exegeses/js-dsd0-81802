const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto de fecha
const fecha = new Date()
console.log(fecha)

// Número de día de la semana
let diaSemana = fecha.getDay()
console.log(diaSemana)
if( diaSemana == 0 ){
    diaSemana = 'Domingo'
}
else if( diaSemana == 1 ){
    diaSemana = 'Lunes'
}
else if( diaSemana == 2 ){
    diaSemana = 'Martes'
}
else if( diaSemana == 3 ){
    diaSemana = 'Miércoles'
}
else if( diaSemana == 4 ){
    diaSemana = 'Jueves'
}
else if( diaSemana == 5 ){
    diaSemana = 'Viernes'
}
else{
    diaSemana = 'Sábado'
}

// Mostramos el nombre del día de la semana dentro del span
cajaTexto.textContent = diaSemana