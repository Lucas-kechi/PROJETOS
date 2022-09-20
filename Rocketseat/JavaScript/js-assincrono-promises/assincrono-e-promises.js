/* 1.1 INTRODUÇÃO
	Veremos agora assuntos interessantes para o funcionamento do JavaScript:
O que é síncrono vs assíncrono no JavaScript?
Qual é o fluxo natural de execução do JavaScript?
O que é um callback function?
A função setTimeout( ) */

/* 1.2 SÍNCRONO VS ASSÍNCRONO
Síncrono → Em um sistema síncrono (synchronous), uma tarefa é concluída após a outra. Por exemplo, tenho 3 imagens a serem carregadas, em um sistema 
síncrono uma imagem carregará de cada vez.	
A tarefa anterior precisa ser concluída,  para então iniciar a próxima
Por padrão, o JavaScript é um sistema síncrono

Assíncrono → Em um sistema assíncrono (asynchronous), as tarefas são executadas de maneira independente uma da outra. Aproveitando o exemplo anterior, 
nesse tipo de sistema as 3 imagens carregarão de uma só vez, ao mesmo tempo
O JavaScript poderá usar o assincronismo a seu favor.*/

/* 1.3 CALLBACK CONCEITO
	Callback é simplesmente uma função que é inserida como argumento de outra função, e dentro desta função ela é chamada, isso é uma callback (chamar de volta). 
    Exemplo: */
	function conceito(dado) {
		console.log(dado( ));
	};
	conceito(( ) => 'está é uma callback' )

/* 1.4 setTimeout
	É um método que permite executar uma função depois de um tempo, recebe 2 argumentos, o primeiro argumento é a função a ser executada e o segundo é 
    o tempo até ela ser executada em milisegundos. Exemplo: */
	setTimeout(() => {
		console.log('Essa função está em um método setTimeout, com intervalo de 1s');
    }, 1000);

const { profileEnd } = require('console');
const https = require('https'); //Este é o protocolo https
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'; // Está é a API

https.get(API, res => {
    console.log(res.statusCode); // Está é a callback
});

console.log('Conectando API'); // Este console.log irá imprimir antes do console.log da callback, pois ele ainda está em processo de requerimento

document.querySelectorAll()
/* No CSS BEM podemos atribuir mais classes sendo o primeiro nome da classe sempre o bloco referido e, quando houver, o segundo nome será o filho do bloco referido, o elemento, 
com o prefixo de 2 underlines '__", Exemplo: class='header__h1. E quando houver algum atributo que necessite de uma mudança CSS, será o modificador, como disabled temos o prefixo de 
2 ifens '--' exemplo: class='main__btn--disabled'*/