/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo Black Jack!")
let carta1user=comprarCarta();
let carta2user=comprarCarta();
let carta3Computer=comprarCarta();
let carta4Computer=comprarCarta();


if(confirm("Quer iniciar uma nova rodada?")){

   console.log("Usuário - cartas ",carta1user.texto,carta2user.texto, " -pontuação: ",carta1user.valor + carta2user.valor)
   console.log("Computador - cartas ",carta3Computer.texto,carta4Computer.texto,  " -pontuação: ",carta3Computer.valor+carta4Computer.valor)

   pontosUser=carta1user.valor+carta2user.valor
   pontosComputer=carta3Computer.valor+carta4Computer.valor
}else{
   console.log("Acabou o jogo!")
}   

if(pontosUser>pontosComputer){
      console.log("Usuário vencedor")

   }else if(pontosUser<pontosComputer){
      console.log("Computador vencedor")

    }  else if(pontosUser===pontosComputer){

      console.log("Empate")
   }
   
