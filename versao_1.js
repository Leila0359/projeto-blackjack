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

  const iniciarRodada = confirm('Quer iniciar uma nova rodada?');
  if (iniciarRodada){
   console.log('Começou o jogo!');
  

   const cartasENumeros = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'Q', 'K']
   const naipesBaralho = ['copas', 'paus', 'ouro', 'espadas']
   
   
  const primeiraMao = [];
  const temParDeA = false;
  
  
 if (primeiraMao.length === 0 && primeiraMao[0] === 'A' && primeiraMao[1] === 'A') {
    temParDeA = true;
    console.log('A primeira contém um par de As');
  } else {
    console.log('A primeira mão não contém um par de As, pode continuar o jogo!');
    console.log('Insira o número par!');
  }

  const jogador1 = 'Usuário';
  const carta1 = comprarCarta();
  const carta2 = comprarCarta();

  console.log(`${jogador1}- cartas : ${carta1.texto} ${carta2.texto} pontuação = ${carta1.valor + carta2.valor}`);
  

  const jogador2 = 'Computador';
  const carta3 = comprarCarta();
  const carta4 = comprarCarta();

  console.log(jogador2);
  console.log(`${jogador2}- cartas : ${carta3.texto} ${carta4.texto} pontuação = ${carta3.valor + carta4.valor}`);

  if (carta1.valor + carta2.valor === carta3.valor + carta4.valor) {
    console.log('Houve um empate');

  } else if (carta1.valor + carta2.valor < carta3.valor + carta4.valor) {
    console.log(`${jogador2} venceu essa rodada`);

  } else if (carta1.valor + carta2.valor === 21) {
    console.log(`O ${jogador1} venceu a partida`);
     
  } else if (carta3.valor + carta4.valor === 21)
   console.log(`O ${jogador2} venceu a partida`)

  console.log('Fim de jogo');
}
   
    
  


 





   

   

  
   




  

  
  