/*1. Leia o código abaixo. Indique todas as mensagens impressas no console.*/

    
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2 && bool3
    console.log("a. ", resultado)
    //false

    resultado = (bool2 || bool1) && !bool3
    console.log("b. ", resultado)
    //true

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)
    //false

    resultado = (resultado && (!bool1 || bool2)) && !bool3
    console.log("d. ", resultado)
    //false

    console.log("e. ", typeof resultado)
    //boolean
    

/*2. Leia o código abaixo. 

    ```jsx*/
    let array
    console.log('I. ', array)
    //I.undefined

    array = null
    console.log('II. ', array)
    //II.null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    //II.11

    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    //IV.3 e 4

    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    //V.19 e 9

    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    //VI.3

    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)
    //VII.1
    

    /*a. O que é `array` e como se declara em `JS`?
    R;É um vetor, um conjunto. E se declara com []

    b. Qual o index inicial de um `array`?
    R: 0

    c. Como se determinar o tamanho do `array`?
    R: array.length


    d. Indique todas as mensagens impressas no console.
    R: undefined,null,11,3,4,19,9,3,1*/