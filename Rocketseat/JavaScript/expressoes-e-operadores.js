// EXPRESSIONS AND OPERATORS
{
    /*EXPRESSÕES E OPERADORES
Expressions → São quaisquer  linhas de códigos que resolvem algo no JS, OBS: É uma boa prática terminar todas as expressions com “;” para não haver erro de interpretação por parte do JS.
Operators →
Binary → É binário pois necessito de 2 valores para haver um operador entre eles, exemplo: */  
	let number = 2; 
	console.log(number + 8); // Assim temos o operador aritmético de soma ‘+’ e 2 valores a sua volta.
//Unary →É unário quando temos somente um valor com operadores, exemplo:
	console.log(++number);
	console.log(++number);
	console.log(typeof number); // 3 exemplos de de operadores unários 
//Ternary →É quando temos 3 valores para que se define algo, exemplo:
	console.log(true ? 'alô' : 'nada'); // Então se verdadeiro ele diz alô se falso diz nada.
}
{
    /*
        New
            Também é denominada como left-hand-side expression, é útil para criar um novo objeto, apenas com uma string ou number, etc.
            Exemplos:
    */
    let name = new String('Lucas');
    console.log(name);
    name.lastname = 'Paiva';
    console.log(name.length);
    let number = new Number(24);
    console.log(typeof name, typeof number);
}
{
   // TYPEOF DELETE

//   Operadores unários
// typeof →É para me informar o tipo de dado em que estamos trabalhando. Exemplo:
	let string = 'palavra';
	console.log(typeof string);
// delete → Usado quando queremos deletar uma propriedade de um objeto. Exemplo:
	const person = {
		name: 'Lucas',
		age: 26,
		weight: 98.8,
};
console.log(person);
delete person.weight;
console.log(person); // Nessa impressão não teremos o weight do objeto
}
{
    /*  OPERADORES ARITMÉTICOS
	São um ou mais caracteres que efetuam algum tipo de cálculo.

Multiplicação → É representado pelo ‘*’ e também pode ser usado em números reais. Exemplo:*/ 	console.log(5.25 * 4);
/*Divisão → É representado pela ‘/’ e também pode ser usado em números reais.
Exemplo:*/ 	console.log(21 / 4);
/*Soma → É representado pelo ‘+’. Exemplo:*/	console.log(5.5 + 5.5);
/*Subtração → É representado pelo ‘-’. Exemplo:*/	console.log(11 - 5.5);

/*Operadores mais diferenciados:
O resto da divisão → É representado pelo ‘%’ E nos mostra o que sobra de uma divisão. Exemplo:*/	console.log(11 % 2); //OBS:remainder = resto em inglês.
/*Incremento → É representado pelo ‘++’. E ele adiciona uma unidade ao valor, Assim se transforma em um novo valor com 1 unidade a mais.
Exemplo:*/	let numero = 6;
		    // posso também usar numero++ apenas isso já fará o increment
		    console.log(++numero); // Assim o novo valor será 7 nessa variável
/*Decremento → É representado pelo ‘--’.É a mesma ideia do incremento só que agora diminuindo uma unidade.
 Exemplo:*/	let number = 7;
		    console.log(--number); 
/*Exponencial → É representado pelo ‘**’. É como elevar um número pelo outro. Exemplo:*/	
            console.log(3 ** 2);
}
{
    /* GROUPING OPERATOR
	Nada mais nada menos que o parênteses ‘()’. Como sabemos na matemática temos ordem de cálculo das expressões. Primeiro raízes e potências, 
    depois multiplicações e divisões, depois somas e subtrações. No entanto, quando temos parênteses temos em mente que devemos resolver aquele 
    bloco de cálculo primeiro. No JS a mesma coisa. 
    Exemplos: 	*/
        let total1 = 7 + 5 * 2; 
		console.log(total1); // Esse resultado será 17
		//Agora com parênteses
		let total2 = (7 + 5) * 2;
		console.log(total2); // Esse resultado será 24

}
{
//     OPERADORES DE COMPARAÇÃO IGUAL A E DIFERENTE DE
// 	No JS o sinal de igual, não é igual a e sim recebe. então quando declaramos uma variável e usamos o sinal de igual estamos dizendo que a variável 
// recebe aquele valor. Dito isto:
// Igual a → É um operador de comparação, representado por 2 sinais de iguais “==”, que nos responde com um boolean. Exemplo:
	let number = 2
	console.log(number == 1); //R: false
	console.log(number == 2); //R: true 
	console.log(number == '2'); // Até mesmo uma string com o mesmo caractere pode ser igual a um number então 2 = ‘2’. R: true
// Diferente de → Seguindo o mesmo conceito de igual a, mas dessa vez é se um valor é diferente de outro, também nos devolve um boolean. 
// Representado por ‘!=’ .Exemplos:
	console.log(number != 1); //R: true
	console.log(number != 2); //R: false
	console.log(number != '2');	//R: false
}
{
    // OPERADORES DE COMPARAÇÃO ESTRITAMENTE IGUAL E ESTRITAMENTE DIFERENTE
	// Esses operadores seguem quase a mesma lógica dos de comparação, porém agora além de comparar os valores irá comparar também o tipo de dado. Exemplos:
    console.log('Agora comparações estritamentes iguais e diferentes')
	let one = 1;
	let two = 2;
    console.log(one === 1); //true, pois os 2 são numbers e os 2 tem os mesmos valores
    console.log(one === '1'); //false, pois um é uma string e outro é um número
    console.log(two !== 2); //false, pois os 2 são um number
	console.log(two !== '2'); //true, pois são diferentes
}
{
	/*
	OPERADORES DE OPERAÇÃO MAIOR E MENOR (IGUAL)
	São operadores de comparação, que nos retornam um boolean.
	Exemplo: */	let one = 1;
				let two = 2;
				console.log('OPERADORES DE OPERAÇÃO MAIOR E MENOR (IGUAL)')
	// Maior que (>) → 
		console.log(`${one > 1}  Maior que`);
		console.log(`${two > 1}  Maior que`);
	// Maior igual a (>=) →	
		console.log(`${one >= 2} Maior ou igual a`);
		console.log(`${two >= 1} Maior ou igual a`);
	// Menor que (<) →
		console.log(`${one < 2} Menor que`);
		console.log (`${two < 1} Menor que`);
	// Menor igual a (<=) → 
		console.log(`${one <= 1} Menos ou igual a`);
		console.log(`${two <= 1} Menos ou igual a`);
}
{
	// OPERADORES DE ATRIBUIÇÃO (Assignment)
	// Já utilizamos operadores de atribuição diversas vezes. Serve para atribuir valores a nossas variáveis. Exemplos:
		let x;
		console.log('OPERADORES DE ATRIBUIÇÃO')
// Assignment single
	x = 2;
	console.log(x);
// Addition assignment
	x += 4;	// mesmo que x = x + 1, assim x será 6
	console.log(x);
// Subtraction assignment
	 x -= 1;  // mesmo que x = x - 1, assim x será 5
	 console.log(x);
// Multiplication assignment 
	x *= 2; 	// mesmo que x = x * 2, assim x será 10
	console.log(x);
// Division assignment
	x /= 2;  // mesmo que x = x / 2, assim x será 5
	console.log(x);
// Remainder assignment
	x %= 3; // mesmo que x = x % 1, assim x será 2
	console.log(x);
// Exponentiation assignment 
	x **= 2; // mesmo que x = x ** 2, assim x será 4
	console.log(x);
}
{
	/* OPERADORES LÓGICOS (logical operators)
	2 valores booleanos quando verificados retornará uma respostas verdadeira ou falsa
	Tipos e exemplos:*/
		console.log('Operadores lógicos')
	 	let pao;
		let queijo;
//and ‘&&’ → Com essa condição os 2 valores deverão ser verdadeiros (true), para que a resposta seja true.
	pao = true;
	queijo = true;
	console.log(pao && queijo); // Assim receberei true, pois os 2 valores eu tenho true
	pao = false;
	console .log(pao && queijo); // False pois não tenho pao
	pao = true;
	queijo = false;
	console .log(pao && queijo); // False pois agora não tenho queijo
// or ‘||’ → Com essa condição apenas um valor deverá ser true para que eu receba true como resposta.
	console.log(pao || queijo) //lembrando que so temos pao, o resultado será true mesmo assim pois só preciso de um valor agora
	pao = false
	console.log(pao || queijo) //False pois não tenho nenhum true
//NOT ‘!’ → Esse operador nega o valor da variável, então se tiver true ela virará false e vice versa.
	console.log(!pao) //Então agora obtenho true no pão, Funciona como um iunterruptor.
}
{
	/*
	OPERADOR CONDICIONAL TERNÁRIO
	Dependendo da condição recebemos valores diferentes (parecido com if else)
	Sintaxe:(condição) então (valor 1) se  não (valor 2)
	 		condition ? value1 : value2 
	Logo então, percebemos que se a condição for true teremos o valor 1, se false teremos o valor 2.
	Exemplo 1: Meu café da manhã somente será top se tiver pão e queijo.	*/
		console.log('OPERADOR CONDICIONAL TERNÁRIO')
		let pao = true;
		let queijo = true;
	console.log(pao && queijo ? 'Café da manhã TOP' : 'Café da manhã RUIM'); // Temos a condição “pão && queijo”, se o resultado da condição for true a
	//  mensagem será ‘Café da manhã TOP’, agora se a mensagem for false então a mensagem será ‘Café da manhã RUIM’
	queijo = false;
	console.log(pao && queijo ? 'Café da manhã TOP' : 'Café da manhã RUIM')
	// Exemplo 2: Expressão se pode ou não dirigir
		let age = 18;
	const canDrive = age >= 18 ? 'Can drive' : "Can't drive";
	console.log(canDrive);
}