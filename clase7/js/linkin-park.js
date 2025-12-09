// Ubicamos elementos dentro del DOM
    // ampliada
    const imggrande = document.querySelector('#hero img')
    // miniaturas
/*    const miniaturas = document.querySelector('#minis')
        const mini1 = miniaturas.children[0]
        const mini2 = miniaturas.children[1]
        const mini3 = miniaturas.children[2]
        const mini4 = miniaturas.children[3]
        const mini5 = miniaturas.children[4]
        const mini6 = miniaturas.children[5]
*/

    const miniaturas = document.querySelectorAll('#minis img')
        const mini1 = miniaturas[0]
        const mini2 = miniaturas[1]
        const mini3 = miniaturas[2]
        const mini4 = miniaturas[3]
        const mini5 = miniaturas[4]
        const mini6 = miniaturas[5]    

// intercambio de la imagen en el contenedor #ampliada        
mini1.onclick = () =>
                {
                    imggrande.src = 'imgs/mike-shinoda.jpg'
                }
mini2.onclick = () =>
                {
                    imggrande.src = 'imgs/joe-han.jpg'
                }
mini3.onclick = () =>
                {
                    imggrande.src = 'imgs/chester-benington.jpg'
                }
mini4.onclick = () =>
                {
                    imggrande.src = 'imgs/brad-delson.jpg'
                }
mini5.onclick = () =>
                {
                    imggrande.src = 'imgs/rob-bourdon.jpg'
                }
mini6.onclick = () =>
                {
                    imggrande.src = 'imgs/dave-phoenix-farrell.jpg'
                }
