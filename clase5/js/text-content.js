const cajaTexto = document.querySelector('#cajaTexto')
const cajaTexto2 = document.querySelector('#cajaTexto2')

const nombre = 'marcos'
const apellido = 'pinardi'

/* Mostrar en el primer span el nombre completo concatenando */

cajaTexto.textContent = nombre +' '+ apellido

/* Mostrar en el segunda span el nombre completo interpalando 
    todo el código debe ir entre backticks    `    `  
    y luego 
    las variables dentro de esta combinación   ${}
    la variable x   sería   ${x}
*/

cajaTexto2.textContent = `${nombre} ${apellido}`

