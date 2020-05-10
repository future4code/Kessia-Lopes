/*Exercísios de interpretação de código:
1-R: É uma função para converter os 100 dólares passado por parametro
para a cotação informada pelo usuário. Na cotação atual o console mostraria: "R$ 575"

2-R: É uma função que seleciona os investimentos e retorna o valor passado por parametro multiplicado pelo investimento selecionado.
Para a variavel novoMontante o console mostra o valor de 165. E para a variável segundoMontante, é retornado um alert com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO"

3-R: É um programa que separa o primeiro array em dois, um de numeros pares eoutro de numeros impares.
Oprimeiro console.log imprime 14, que é o tamanho do array original. O segundo console log retorna 6, que é o tamanho do array1 e o terceiroimprime 8, que é o tamanho do array 2.

4-R:

Exercícios Lógica de programação:
1-R:
2-a:false
b:true
c:true
d:false
e:true
3-
const quantidadeDeNumerosPares= 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i=i+1
}
R:Não roda, entra em looping, poruq eo 0*2 continua sendo 0, por isso precisa da adição do 1 pra rodar.

4-
function triagular(a,b,c){
  if(a===b && b===c){
    console.log("Triangulo Equilátero")
  }
    else if((a===b && b!==c)||(a===c && b!==a)||(c===b&&b!==a)){
    console.log("Triangulo Isóceles")
    }
  if (a!==b && b!==c && a!==c){
    console.log("Triangulo Escaleno")
  }
}
triagular(2,7,5)

5-*
 const numero1 = 30
 const numero2 = 15

 if(numero1>numero2){
   console.log(`O maior é ${numero1}`)
 }
 else{
   console.log('Erro')
 }
 if(numero2%numero1===0){
   console.log(`${numero2} é divisivel por ${numero1}`)
 }
 else{
   console.log(`${numero2} não é divisivel por ${numero1}`)
 }
 if(numero1%numero2===0){
   console.log(`${numero1} é divisivel por ${numero2}`)
 }
 else{
   console.log("Erro")
 }
 diferenca=numero1-numero2
 console.log(`A diferença entre eles é ${diferenca}`)

Exercícios de funções

1-

2-*
const alerta = function(){
  alert("Hello Future4")
}
console.log(alerta())

Exercícios de Objetos

1- Arrays são conjuntos de elementos posicionados com indices. Objetos são elementos que armazenam informações relacionadas a eles.
2-*
 function criaRetangulo(lado1, lado2){
   let largura=lado1;
   let altura=lado2;

   const retangulo={
     largura: largura,
     altura: altura,
     perimetro: 2*(largura + altura),
     area: largura*altura
   }
   return retangulo
 }
 console.log(criaRetangulo(2,3))
3-*
const transformers={}
transformers.nome= "Transformers 2: A vingança dos derrotados"
transformers.ano= 2009
transformers.diretor="Michael Bay"
transformers.ator1="Shia LaBeouf"
transformers.atriz2="Megan Fox"
transformers.ator3="John Turturro"

console.log(`Venha assistir ao filme ${transformers.nome}, de ${transformers.ano}, dirigido por ${transformers.diretor} e estrelado por ${transformers.ator1}, ${transformers.atriz2}, ${transformers.ator3}`)
4-*
const user={
  nome: "Angelica",
  idade: 25,
  email:"angel@hotmail.com",
  endereco:"Rua Pedro Peres Garcia, 11"
}
const newUser={
  ...user,
  nome:'ANONIMO'
}
console.log(user)
console.log(newUser)*

Exercicios de funções de array
1A-*

const pessoas=[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 },
]

const pessoasAdultas = pessoas.filter((pessoa,index,array)=>{
   if(pessoa.idade >= 20){
    return true
  }
  else{
    return false
  }

})
console.log(pessoasAdultas)
//B-
const menoresDeIdade = pessoas.filter((pessoa,index,array)=>{
  if(pessoa.idade < 20){
   return true
 }
 else{
   return false
 }

})
console.log(menoresDeIdade)

2A-*
const numeros= [1,2,3,4,5,6]

function dobro(numero){
  console.log(numero*2)
}

numeros.forEach(dobro)

B-*
const numeros= [1,2,3,4,5,6]

function triplo(numero){
  console.log(numero*3)
}

numeros.forEach(triplo)

C-*/
const numeros= [1,2,3,4,5,6]
numeros.forEach((numero,ind,array )=> {
  if(numero%2===0){
  console.log(`${numero} é par`)
}
else{
   console.log(`${numero} é impar`)
   
}

});

