/* 1.6 PROMISE INTRO
 	A promessa de que algo irá acontecer no futuro. Uma promessa poderá ser:
Pending →Estado inicial, assim que o objeto da promessa é iniciado.
Fulfilled → A promessa foi concluída com sucesso
Rejected → A promessa foi rejeitada, houve um erro
Settled → Seja com sucesso ou com erro, ela foi finalmente concluída

	Veremos os métodos ‘then’, ‘catch’ e ‘finally’. O que é a ‘fetch API’ do navegador. Como utilizar a biblioteca ‘axios’. 
	Vamos aprender a utilizar mais de uma promisse ao mesmo tempo, com o método ‘.all’ da promessa.*/

/* 1.7 O QUE É UMA PROMISSE
	Promise, vem do inglês e significa promessa. Podemos explicar o que é uma promise, usando o exemplo do app uber. Quando pedimos uma corrida 
	e estamos aguardando ela ser aceita, iniciamos uma promise e ela está no estado pending. Quando o motorista aceita esta promise, ela vai para o estado fulfilled. Ou o motorista rejeita, então ela vai para o estado rejected. O pedido do Uber foi finalizado, seja por ter finalizado a corrida ou por ter sido rejeitado, então agora o estado da promise é settled. Então:
Promise é um objeto JavaScript com a promessa de que algo será realizado
É usado para operações assíncronas 
Carregar um arquivo
Leitura de dados de uma API */

/*1.8 PROMISES NO CÓDIGO
sintax: new promise('callback function');
podemos adicionar a callback function 2 paramentros resolve, reject. Poderia ser outro nome do parametro porem assim é mais discritivo.
Resolve entao é o fluxo normal da função, quando tudo ocorre bem.
Sendo assim, reject quando tenho algum erro na minha função */
let pedido = true;
console.log('Pedindo Uber!');

const promessa = new Promise((resolve, reject) => {
	if(pedido) {
		return resolve('carro chegou!');
	}

	return reject('Pedido negado!')
});

console.log('Aguardando...')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('Pedido finalizado!'));