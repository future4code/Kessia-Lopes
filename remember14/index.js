function quantosPares(numero){
    let array=[]
    for(let i=0; i<numero; i++)
        if(i%2===0){
            array.push(i)
        }
        return console.log(array.length)
    }
 
quantosPares(20)