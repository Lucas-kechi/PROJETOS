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