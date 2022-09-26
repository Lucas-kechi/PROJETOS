/*	1.10 PROMISES COM FETCH
	Podemos usar o fetch com uma API, para trabalhar com essa API. O fetch é uma promise que recebe uma url. 
Sintaxe: fetch(‘URL’)
	Então podemos usar um encadeamento de ‘then’ para manipular esses dados. E também precisamos mudar esse dado de um JSON. Exemplos:*/
const callFetch = async () =>  {
	await fetch("https://api.github.com/users/maykbrito")
	.then((response) => response.json())
	.then((data) => fetch(data.repos_url))
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((erro) => console.log(erro))
}

callFetch()
/*	1.11 AXIOS
	É uma biblioteca baseada em http client baseada em promessas, e pode ser usada tanto no browser quanto no nodeJs.
No browser já possuímos a ‘fetch API’, por padrão*/

/*1.12 	PROMISES COM AXIOS
	Axios é um objeto, e quando usamos o método get nele, com parâmetro uma URL de um API, nos retorna uma promessa pendente. Antes de iniciar 
	o axios devemos sempre fazer um import. exemplo
import axios from 'axios'

axios
	.get('https://api.github.com/users/lucas-kechi')
	.then(response => console.log(response))
	.catch(error => console.log(error)):*/

/*1.13 EXECUTANDO PROMESSAS EM PARALELO COM PROMISE ALL
All é um método e recebe como argumento um array contendo promessas. E ao usarmos o ‘then’, a nossa callback irá retornar também um array 
de responses, assim podemos acessar cada position desse array que é uma resposta de uma promise. Exemplo: */
Promise.all([
	fetch('https://api.github.com/users/maykbrito'),
	fetch('https://api.github.com/users/lucas-kechi')
])
	.then(response => response.map(el => el.json()))
	.then(res => res.forEach(el => el.then(data => console.log(data.login))))
	.catch(err => console.log(err));

/*1.14 INTRODUÇÃO ASYNC / AWAIT
Vamos aprender a deixar a função assíncrona, a usar os métodos try, catch e finally.*/

/*1.15 ASYNC / AWAIT
É uma maneira de se escrever promessas. Uma syntactic sugar, uma jeito elegante de escrever promessas. Exemplo:*/
const promessa = new Promise((resolve, reject) => {
	return resolve ('ok')
});
/*promessa
	.then(result => console.log(result))
	.catch(err => console.log(err))
	.finally(console.log('Sempre rodar'))
Esse seria o tipo de código padrão, mas podemos usar async await mudando essa parte de código*/
const usingAsyncAwait = async () => {
	try {
		console.log(await promessa) // Assim o código so prossegue depois que finaliza esse await
	} catch( e) {
		console.log(e)
	} finally {
		console.log('sempre rodar')
	}
}

usingAsyncAwait()

/*1.16 ASYNC / AWAIT COM FETCH
	Agora vamos usar o fetch em uma função assíncrona. */
const asyncFuctionWithFetch = async () => {
	const loginName = await fetch('https://api.github.com/users/lucas-kechi').then(response => response.json())
	console.log(`O nome de login é ${loginName.login}`)
}

asyncFuctionWithFetch()
