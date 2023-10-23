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
  
    console.log("Bem vindo ao jogo Blackjack!");

    // 1-  Verifica se a carta inicial do usuario e computador e 'A';
  
   const valores = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'j', 'Q ', 'K'];
   const naipes = ['copas', 'paus', 'ouros', 'espadas'];
   const usuario = 'usuario';
   const computador = 'cpu';
   
    const cartasUsuario = 'A';
    const cartasComputador = 'J';
    
      
      if ((cartasUsuario === 'A') && (cartasComputador === 'A')){
        console.log('As duas cartas iniciais continuam sendo Ases.');

      } else if (cartasUsuario === 'A' && cartasComputador === 'J')

       console.log('O usuario tem uma carta inicial (Ases) e o computador tem uma carta  valete (J)');
       
   // 2 Verifica-se a carta do computador.

   const cartaAleatoriaCpu1 = '4';
   const cartaAleatoriaCpu2 = 'K';

   if ((cartaAleatoriaCpu1 === '4') && (cartaAleatoriaCpu2 === 'J')) {
      console.log('Revele a sua primeira carta');
     
    } else {
     console.log ('A primeira carta do cpu revelada é :' , cartaAleatoriaCpu1); 
     console.log('A segunda carta do cpu é : oculta');
    }
  
   //  Comprar mais carta.;

    confirm('Deseja comprar mais carta?');
    
    // Usuario comprar carta;
    const jogador1 = 'usuario';
    const carta1 = comprarCarta();
    const carta2 = comprarCarta();

     console.log(`${jogador1} - cartas : ${carta1.texto} ${carta2.texto} pontução = ${carta1.valor + carta2.valor}`);
   
     // Computador comprar carta;
    const jogador2 = 'computador';
    const carta3 = comprarCarta();
    const carta4 = comprarCarta();

    console.log(`${jogador2} - cartas : ${carta3.texto} ${carta4.texto} pontução = ${carta3.valor + carta4.valor}`);
  
  // 3- Verifica pontuação;
   confirm('Quer iniciar uma nova rodada?');
  
   // Pontuação Usuario;

    const cartaCompradaUsuario = 4 + 5;
    const valorNovaCartaUsuario = 3 + 10;

     if (cartaCompradaUsuario + valorNovaCartaUsuario < 21) {
       alert ('O valor da carta comprada e da  nova carta e maior que 21.');
     } else {
       alert (' O usuario quer comprar mais uma nova carta?'); 
       }
        console.log(`A pontuação do usuario e = ${cartaCompradaUsuario + valorNovaCartaUsuario}`);

    // Pontuação Computador;
      const cartaReveladaCpu = 10 + 0;
      const novaCartaCpu = 5 + 5;
    
        if (cartaReveladaCpu + novaCartaCpu === 20) {
         alert ('O valor da carta revelada e da  nova carta e igual a 21.');
        } else {
         alert (' O computador deseja comprar mais uma carta?'); 
           }
         console.log(`A pontuação do computador e = ${cartaReveladaCpu + novaCartaCpu}`);
         console.log('O computador ganhou!!')
    
      // 4- Usuario;

      const cartaReveladaUsuario = 2 + 6 + 10;

      if (cartaReveladaUsuario >= 18) {
      console.log ('A pontuação do usuario é maior ou igual a 18:');
     
      } else {
      console.log ('O usuario2 deseja comprar mais carta?');
     }

      const usuario2 = comprarCarta();
      const cartas1 = comprarCarta();
      const cartas2 = comprarCarta();

   console.log(`usuario cartas: ${cartas1.texto} ${cartas2.texto} pontução = ${cartas1.valor + cartas2.valor}`);
  
   // Computador
    
    const cartaReveladaComputador = 10 + 5 + 8;

    if (cartaReveladaComputador === 23 ) {
    console.log ('A pontuação do computador é  igual a 23');
   
    } else {
    console.log ('O computador2 deseja comprar mais carta?');
   }

   let computador2 = comprarCarta();
   let cartas3 = comprarCarta();
   let cartas4 = comprarCarta();
   console.log(` computador cartas: ${cartas3.texto} ${cartas4.texto} pontução = ${cartas3.valor + cartas4.valor}`);

    // 5- Verifica se a pontuação são iguais a 21;

     let pontuacaoDoJogador = 21;
     let pontuacaoDoComputador = 21;

     if ((pontuacaoDoJogador) && (pontuacaoDoComputador === 21)) {
       console.log ("Ambos tem a mesta pontuaçao");
      
      } else if ('pontuacaoDoJogador <= 21 || pontuacaoDoComputador <=21'){
        console.log('A pontuaçao dos dois jogares e menor ou igual a 21')
      }
        console.log('Empate')
        console.log('FIM D JOGO!!');
    
    

   
  

   

   
   


 
 
 
 


    
   

   
   

    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   




   
    


   
   
   
   
   







   

      

   
     

   
      
   

   



   
   
   
   
   




   
   
   
   







   
   
    

     

     
     
    
   
   
   



   







  