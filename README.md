# Qual é a cor ?  :paintbrush: 

## Projeto de avaliação feito durante o curso da Trybe, buscando colocar em prática o aprendizado de criação de elementos HTML pelo JavaScript , onde também enxerguei a oportunidade de colocar alguns conhecimentos em prática e tornar o jogo mais interessante Sendo assim, o recorde fica salvo no localStorage, sem mais que uma tentativa na mesma sequência de cor e pode diminuir e aumentar a dificuldade com a quantidade de cor e com isso influenciar na pontuação.



<img src="./images/imagem-projeto.png" >



## Esse projeto foi submetido a testes de 7 requisitos, atingindo 100% dos que foi proposto:



\### 1 - Adicione no seu site um título com o nome do seu jogo



**O que será verificado:**



\- Será verificado se o **id** do título é `title`.



\### 2 - Adicione um texto com o código RGB a ser adivinhado



**O que será verificado:**



\- Será verificado se o seu id deve ser rgb-color;



\- Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`.



\### 3 - Adicione a página opções de cores para serem adivinhadas



**O que será verificado:**



\- Será verificado que deve conter 6 circulos como opção de cor de adivinhação;



\- Será verificado que a class de todos os circulos deve ser ball.



\### 4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente



**O que será verificado:**



\- Será verificado que ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript.



\### 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto



**O que será verificado:**



\- Será verificado que o seu **id** do elemento deve ser `answer`;



\- Será verificado que quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`;



\- Será verificado se o circulo colorido for o **correto**, deve ser exibido o texto "Acertou!";



\- Será verificado se o circulo colorido for o **incorreta**, deve ser exibido o texto "Errou! Tente novamente!".



\### 6 - Crie um botão para iniciar/reiniciar o jogo



**O que será verificado:**



\- Será verificado que o botão deve ter o id reset-game;



\- Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado;



\- Será verificado que ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".



\## BÔNUS



\### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo



**O que será verificado:**



\- Será verificado que o elemento deve ter o **id** `score`;



\- Será verificado que o valor inicial dele deve ser 0;



\- Será verificado que a cada acerto, é incrementado 3 pontos ao placar;



\- Será verificado que ao clicar no botão reiniciar, o placar NÃO deve ser resetado.