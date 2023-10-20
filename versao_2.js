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
   

   console.log("Iniciando o jogo Blackjack!")

    confirm('Quer iniciar uma nova rodada?')
    
  
   const valores = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'j', 'Q ', 'K'];
   const naipes = ['copas', 'paus', 'ouros', 'espadas'];
   const jogador = ('usuario');
   const computador = ('cpu');
  
   // 1-  Verifica se a carta inicial do usuario e Ases?;
   
    const temParDeA = [];
   // const cartaAleatoriaJogador2 = ('J♣️');
    

   // if (cartaAleatoriaJogador1 === "A" & cartaAleatoriaJogador2 === "A" === 'true') {
       // console.log('As duas cartas iniciais continuam sendo Ases')
      
       if (temParDeA === 11){
        console.log('A primeira mão contem um par de A');
     } else { ('A primeira mão não contem um par de A, pode continuar o jogo!');
       console.log('Insira o numero par!');
     }
       console.log ('As cartas sorteadas do jogador foram:', cartaAleatoriaJogador1, 'e', cartaAleatoriaJogador2); 
    
   // Verifica-se a carta do computador.;

   
   const cartaAleatoriaCpu1 = ('4♣️');
   const cartaAleatoriaCpu2 = ('K')

   if (cartaAleatoriaCpu1 == "k" & cartaAleatoriaCpu2 === "J" === 'true') {
     console.log('Revele a sua primeira carta')
     
    } else {
    console.log ('A primeira carta do cpu revelada é :' , cartaAleatoriaCpu1); 
    console.log('A segunda carta do cpu e oculta')
    }
  
  
   // 2- Comprar mais carta.;

    if (confirm("jogador1 deseja comprar mais uma carta?")){
  
   const jogador1 = 'usuario'
   const carta1 = comprarCarta()

   console.log(jogador1);
   console.log('carta1:', carta1.texto );
    }
   
   //
   
    if (confirm("jogador2 deseja comprar mais uma carta?")){
   const jogador2 = 'computador'
   const carta3 = comprarCarta() 

   console.log(jogador2);
   console.log('carta3:', carta3.texto);
   }

 // 3-  
 
   
   const cartaUsuario = (confirm('Usuario quer comprar uma nova carta?')) 
   const comprarCartaUsuario = ('J♥️ + 2');
   const novaCarta = ('5♣️ + 3');

   if ( comprarCartaUsuario + novaCarta >= 21) {
    alert('Usuario quer comprar mais carta === true')
    
   } else {
    alert ('Qual valor da nova carta do usuario?')
    
   }console.log(' A carta comprada pelo usuario é :', comprarCartaUsuario  + ' A nova carta do usuario é :' , novaCarta );
     

   
  //

    const cpu = (confirm('Cpu quer iniciar uma nova rodada?'));
    const cartaCpu = prompt('Cpu deseja comprar mais uma carta?');

   const cartaCompradaCpu = ('2 + J♥️');
   const cartaRevelada = ('4♣️');

    if (cartaCompradaCpu + cartaRevelada === 21) {
     lert ('Qual o valor da carta?');
    } else {
       alert ('Cpu quer comprar mais carta? true ou false');
      
   }console.log(' Insira a pontuação do cpu:' , cartaCompradaCpu  + ' A pontucao do computador e:' , cartaRevelada )
  
      console.log('Fim de jogoo!!');
      console.log(' A soma da carta do usuario e 10 + 2 + 5 + 3 = 20 ');
      console.log(' A soma da carta do computador e 2 + 10 + 4 = 16 ');
      console.log(' Computador ganhou!!!!');

   // 4-


    const cartaJogador = (confirm('Deseja comprar mais carta?'));
    const pontuacaoDoJogador = ['pontuaçãoCarta, 2♥️, 6♥️, 10♠️,'];
    const pontuacaoDoComputador = ['pontuaçãoCarta, J♦️, 5♣️,8♣️ '];

     if ( pontuacaoDoJogador >= 21) {
      console.log ('Sua carta é:' + pontuacaoDoJogador);
     
     } else { (' pontuaçaoDoJoagador !== 21');
      console.log ('Qual a pontuaçao do jogador?');
     }
    

     if  (pontuacaoDoComputador == 21) {
      console.log ('Sua carta é:' + pontuacaoDoComputador);

      
     } else { ('pontuaçãoDoComputador !== 21');
      console.log ('Qual a pontuaçao do computador?');
    }
    
    console.log ('[A pontuaçao do jogador é 2♥️, + 6♥️, + 10♠️ = 18 ]');
    console.log ('[A pontuaçao do computador é j♦️, + 5♣️, + 8♣️  = 23 ]');

    console.log('O usuario ganhou com a pontuação menor!!');

    // 5-

     if (pontuacaoDoJogador && pontuacaoDoComputador == 21 ) {
       console.log ("Ambos tem a mesta pontuaçao");
      
      } else if ('pontuacaoDoJogador && pontuacaoDoComputador != 21 ou  == 21'){
        console.log ('Ambos tem a pontuacao igual a 21');
      
      } console.log('Empate');
        console.log('FIM D JOGO!!')
    


   
  

   

   
   


 
 
 
 


    
   

   
   

    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   




   
    


   
   
   
   
   







   

      

   
     

   
      
   

   



   
   
   
   
   




   
   
   
   







   
   
    

     

     
     
    
   
   
   



   







  