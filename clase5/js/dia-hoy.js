const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto de fecha
const fecha = new Date()

let diaSemana = fecha.getDay()
console.log(diaSemana)


switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Lunes'
        break
    case 2:
        diaSemana = 'Martes'
        break
    case 3:
        diaSemana = 'Miércoles'
        break
    case 4:
        diaSemana = 'Jueves'
        break
    case 5:
        diaSemana = 'Viernes'
        break
    default:
        diaSemana = 'Sábado'
        break
}

// Mostramos el nombre del día de la semana dentro del span
cajaTexto.textContent = diaSemana