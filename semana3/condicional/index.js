/*EXERCÍCIO 1

Leia o código abaixo:

```jsx*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/*
Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"? 

Resposta: Ele pega o numero do usuario, tranforma de string para number e testa se o resto da divisão do numero por dois é igual a 0.
Ele imprime os numeros pares como "Passou no teste" e os ímpares como "Não passou no teste"

EXERCÍCIO 2

O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:

```jsx*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
a. Para que serve o código acima?
R: Comparar as palavras(strings) e retornar o preço

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
R:"O preço da fruta Maçã é R$2.25"

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
R:24.55
d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
R:"O preço da fruta Pêra é R$ 10.5"

EXERCÍCIO 3

Leia o código abaixo:

```jsx

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)
/*

Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
R: Não vai imprimir por serem strings e não numbers
Ele não entra na condição do if e cai diretamente na condição else

Exercícios de escrita de código

EXERCÍCIO 4*

let numero1= prompt("Insira o primeiro número")
let numero2= prompt("Insira o segundo número")
let numero3= prompt("Insira o terceiro número")

numero1= Number(numero1)
numero2= Number(numero2)
numero3= Number(numero3)

if(numero1>numero2 && numero2>numero3){
    console.log(numero1,numero2,numero3)
}
else if (numero1<numero2&& numero2<numero3){
    console.log(numero3,numero2,numero1)

}else if (numero2>numero1&& numero1>numero3){
    console.log(numero2,numero1,numero3)

}else if(numero3>numero1&& numero1>numero2){
    console.log(numero3,numero1,numero2)

}else if(numero1===numero2&&numero2===numero3){
    console.log("Insira pelo menos um número diferente")

}
    
/*Com 2 numeros iguais: Apareceu a mensagem "Slow network is detected quando coloquei dois números iguais"
Com 3 numeros iguais não apareceu nada

Exercício 5
a- https://drive.google.com/file/d/1hblzruJDuVDcFtttTvLNuPuxp3LGADhd/view?usp=sharing */

console.log("Pense em um animal e responda com sim ou não")
const vertebrado="sim"
const pelos="sim"
const humano="sim"
const penas="sim"
const terrestre="sim"
const anfibio="sim"
let resposta1= prompt("Tem ossos?")
    if(resposta1!==vertebrado){
        console.log("Invertebrado")
    }
        else {
        let resposta2= prompt("Tem pelos?")
            if(resposta2===pelos){
                let resposta3= prompt("É racional?")
                if(resposta3===humano){
                    console.log("Humano")
                }
                else{
                console.log("Mamifero não humano")
                }
            }
            else{
                let resposta4= prompt("Tem pena?")
                 if (resposta4===penas){
                     console.log("Ave")
                 }
                 else{
                     let resposta5= prompt("É terrestre?")
                     if(resposta5===terrestre){
                         let resposta6= prompt("Viveu metade da vida na água?")
                         if (resposta6===anfibio){
                             console.log("Anfibio")
                         }
                         else{
                             console.log("Réptil")
                         }
                     }
                     else{
                         console.log("Peixe")
                     }
                 }
                }

            }            
     