const cajaTexto = document.querySelector('#cajaTexto')
const cajaTexto2 = document.querySelector('#cajaTexto2')

// como atributo de objeto 
    // obj.evento = 

cajaTexto.onmouseover = function()
                        {
                            cajaTexto.textContent = 'mouse sobre'
                        }    
cajaTexto.onmouseout = function()
                        {
                            cajaTexto.textContent = 'reposo'
                        }    

/* ############### */
// como método  
    // obj.addEventListener( 'evento', acción )

cajaTexto2.addEventListener
            (
                'mouseover', 
                function()
                    { 
                        cajaTexto2.textContent = 'mouse sobre' 
                    }
            )
cajaTexto2.addEventListener
            (
                'mouseout',
                function()
                {
                    cajaTexto2.textContent = 'reposo'
                }
            )

/* ############### */
// sobreescritura
cajaTexto2.addEventListener
            (
                'mouseout',
                function()
                {
                    alert('caja de texto dos en reposo')
                }
            )                        
cajaTexto2.addEventListener(
        'mouseout',
        () => {
            alert('prueba ')
        }
)
                


            