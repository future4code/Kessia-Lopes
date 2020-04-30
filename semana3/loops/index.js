/*Exercício 1

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
R: O código está adicionando numeros a soma atraves do i enquanto eles forem menores do que 15. O resultado impresso é 14.

Exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

a. O que o comando .push faz?
R: adiciona um elemento do array "Lista" que sea duvisivel por 5 no array "novaLista"
b. Qual o valor impresso no console?
R: 10,15,25,30
c. Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?
R: Por 3 - 12,15,18,21,27,30. Por 4 - 12.

Exercício 3*/

let original=[15,34,12,45,7,43,90,2,33,56]
let maiorNumero=original[0]
let menorNumero=original[0]

for(let i =0; i< original.length; i++){
    if(original[i]>maiorNumero){

        maiorNumero=original[i]
    }
}
for(let i =0; i< original.length; i++){
    if(original[i]<menorNumero){

        menorNumero=original[i]
    }
}
console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)
/* Resposta item a.
"O maior número é 90 e o menor é 2" */

let original=[15,34,12,45,7,43,90,2,33,56]
let novoArray=[]

for(let i=0; i<original.length; i++){
    novoArray.push(original[i]/10)
    

}
console.log(novoArray)
/*Resposta item b.
[1.5, 3.4, 1.2, 4.5, 0.7, 4.3, 9, 0.2, 3.3, 5.6]*/

let original=[15,34,12,45,7,43,90,2,33,56]
let novoArray=[]


for(let numero of original){
    if(numero%2 === 0)
    novoArray.push(numero)
    

}
console.log(novoArray)   
/*Resposta item c.
[34, 12, 90, 2, 56]*/

let original=[15,34,12,45,7,43,90,2,33,56]
let novoArray=[]
i=0
let elemento=novoArray[0]

for(let numeros of original){
    novoArray.push(numeros) 
      let posicao=[i]
      elemento=novoArray[i]
    console.log("O elemento do index",posicao," é o", elemento)
    i++
    

}
/*Resposta item d.
 O elemento do index [0]  é o 15
 O elemento do index [1]  é o 34
 O elemento do index [2]  é o 12
 O elemento do index [3]  é o 45
 O elemento do index [4]  é o 7
 O elemento do index [5]  é o 43
 O elemento do index [6]  é o 90
 O elemento do index [7]  é o 2
 O elemento do index [8]  é o 33
 O elemento do index [9]  é o 56*/

