{
    //Aprendendo a usar alguns __proto__ 
    
    /*TYPE CONVERSION COERSION
    Type conversion ou type casting
	É quando convertemos explicitamente um tipo de dado para outro tipo de dado, entretanto, algumas vezes o JavaScript pode fazer isso de 
    forma implícita. Exemplo:*/ 
    console.log(Number('9') + 5) //Nesse exemplo mudamos uma string para um number explicitamente e o resultado será 14.


    /*Type coersion
	É quando o próprio JavaScript muda um dado para outro implicitamente. Exemplo:*/
    console.log('9' + 5) /*Dessa forma teremos uma concatenação e não uma soma pois o sinal “+” é tanto para soma quanto pra concatenação. 
    Nesse caso será uma concatenação, o programa irá transformar esse número 5 em uma string ‘5’ e o resultado será 95.*/
}
{
    /*STRINGS E NÚMEROS
	
    Agora vamos transformar strings em números e números em strings.*/
	let string = '123'
	console.log(Number(string))
    console.log(typeof Number(string))
	let number = 321
	console.log(String(number))//Assim manipulamos os dados e fizemos um casting neles.
    console.log(typeof String(number))
}
{
    /*CONTANDO CARACTERES E DÍGITOS
	
    Temos um protótipo que pode contar quantas letras ou caracteres temos em um número ou palavra, se chama ‘length’. Exemplo:*/
	let word = 'paralelepipedo'
	console.log(word.length) //assim será impresso no console a quantidade de letras nesta palavra. Agora vejamos com números.
	let number = 1995
	console.log(String(number).length) //Com numbers não podemos usar o ‘.length’ pois não é uma string, porém já aprendemos a transformar dados.
}
{
    /*CASAS DECIMAIS
	
    Podemos usar protótipos para determinar quantas casas decimais, após a vírgula de um número, quero mostrar no console. E os float numbers 
    são representados com um ponto e não uma vírgula, mas podemos substituir no console para vírgula porém esse dado se tornará uma string. Exemplos*/
	let float = 3.14159265
	console.log(float.toFixed(2)) //Assim teremos o resultado 3,14
    console.log(typeof Number(float.toFixed(2)))
	console.log(float.toFixed(4).replace(".", ",")) //Assim substituímos o ponto por uma vírgula porém o dado agora é uma string
    console.log(typeof float.toFixed(4).replace(".", ","))
}
{
    /*
        Maiúsculas e minúsculas
    
        Podemos transformas as letras usando toUpperCase() ou toLowerCase(), Exemplos*/
    let phrase = 'Programar é muito bacana!'
    console.log(phrase.toUpperCase())
    let fell = 'FELICIDADE'
    console.log(fell.toLowerCase())
}
{
    /*Encontrando palavras dentro dos meu textos*/
    let phrase = 'Quero viver o amor'
    console.log(phrase.includes('amor')) //Assim retornará um boolean se contém ou não a palavra
}