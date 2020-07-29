function equacao(){
    const count: string = process.argv[2]
    const num1: number = Number(process.argv[3])
    const num2: number = Number(process.argv[4])
    
    switch (count){
        case 'add' :
            return  num1 + num2
        case 'sub':
            return  num1 - num2 
        case 'div':
            return  num1 / num2
        case 'mult':
            return  num1 * num2     
    }
    
}
console.log(equacao())
 