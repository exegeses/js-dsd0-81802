# Pasar parámetros a las funciones

> Un parámetro que se le envía a una función es un dato que ayuda a que la función pueda tener comportamientos levemente diferentes

> Por ejemplo esta función siempre saluda a la misma persona
## Ejemplo sin parámetro

    //declaración
    function saludar()  
    {  
        console.log('hola Nick')
    }  

    // invocación 
    saludar()

> Dentro de los paréntesis nosotros podemos enviar un dato
> Éste dato será procesado dentro de la función
> Y este dato puede variar todo el tiempo. Básicamente es una "variable" dentro de una función (sin la palabra **let**)

## Ejemplo con parámetro

    //declaración
    function saludar( nombre )  
    {  
        console.log('hola', nombre)
    }  

    // invocación 
    saludar()
