/* const rotador = document.querySelector('#rotador')
    const anterior = rotador.children[0]
    const span = rotador.children[1]
    const siguiente = rotador.children[2]
*/
const imagenes = document.querySelectorAll('#rotador img')
    const anterior = imagenes[0]
    const siguiente = imagenes[1]
    const span = document.querySelector('#rotador span')

console.log(imagenes)    
console.log(span)

const marcas = [
    'Hermès','Zara','Boss',
    'Aeropostale','Kingin','Tomy',
    'Gola', 'Abercrombie', 'Topman',
    'H&M', 'Hollister', 'American Eagle',
    'Urban Outfitters', 'Old Navy',
    'Uniqlo'
   ]

/* estado inicial: ver el nombre de la marca en el span  */   
let posicion = 9
span.textContent = marcas[ posicion ]

/* control */
anterior.addEventListener
        (
            'click',
            () => 
                {
                    // posicion = posicion - 1
                    posicion --
                    if( posicion < 0 ){
                        //posicion = 0
                        posicion = marcas.length - 1
                    }
                    span.textContent = marcas[posicion]
                }
        )

siguiente.addEventListener
        (
            'click',
            () =>
                {
                    posicion ++
                    if( posicion > marcas.length - 1 ){
                        posicion = 0
                    }
                    span.textContent = marcas[posicion]
                }
        )