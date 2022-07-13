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