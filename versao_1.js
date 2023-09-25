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
  console.log('Boas vindas ao jogo de BlackJack!')

 const iniciarRodada = prompt ('Quer iniciar uma nova rodada?')
  if (confirm (iniciarRodada === 'false')) {
   console.log("terminou o jogo");
   
  } else if(confirm (iniciarRodada === 'true')){
   console.log("comecou novo jogo");

   
   const cartasENumeros = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'Q', 'K']
   const naipesBaralho = ['copas', 'paus', 'ouro', 'espadas']
   
   
   const primeiraMao = []
   const temParDeA = []

   if (temParDeA === 11) {
    console.log('A primmeira mao contem um par de A');
    
   } else {
    console.log('A primeira mao não contem par de A, pode continuar o jogo!');
    console.log('Insira o numero par!');
    
   }

  
  const jogador1 = 'usuario'
  const carta1 = comprarCarta()
  const carta2 = comprarCarta()

  console.log(jogador1);
  console.log('carta1:', carta1.texto + 'carta2:', carta2.texto);


  const jogador2 = 'computador'
  const carta3 = comprarCarta()
  const carta4 = comprarCarta()

console.log(jogador2);
console.log('carta3:', carta3.texto + 'carta4:', carta4.texto);


if (carta1.texto + carta2.texto === 21) {
  console.log('${usuario}, venceu!');
  
} else if (carta3.texto + carta4.texto === 21){
 console.log('${computador} venceu'); 
  
 } else if (carta1.texto + carta2.texto < carta3.texto + carta4.texto){
  console.log(" Computador, ganhouuu")
  console.log('Fim de jogo')
 }

}


 





   

   

  
   




  

  
  