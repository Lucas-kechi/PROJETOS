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
{
    /* Manipulando arrays

    Separe um texto que contém espaços, em um novo array onde cada palavra é
     uma posição do array. Depois disso, transforme o array em texto (string) e onde havia espaços coloque _ (underscore). */
    
     let text = 'Estou amando aprender programação!'
     let myArray = text.split(' ')
     console.log(myArray)
     let arrayIsNowString = myArray.join('_')
     console.log(arrayIsNowString.toLowerCase())
}
{
    // Criando arrays com o construtor
    // Já conhecemos o jeito simples de contruir um array
    let myArray = [1, 2, 3,4]
    console.log(myArray)
    // Agora um array com construtor ele contém no argumento os objetos desse array
    let newArray = new Array('leite', 'ovo', 'farinha', 'fermento')
    console.log(newArray)
}
{
    // Contando elementos dentro de um array
    console.log([
        "Viva",
        24,
        () => {return "Ola"},
    ].length) // Assim teremos o retorno de quantos elementos tenho dentro do meu array
}
{
    /*  STRINGS PARA ARRAYS
	Agora iremos aprender a transformar uma cadeia de caracteres, ou seja, uma string, onde cada caractere será um elemento do array.
    */
    let word = 'manipulação'
    console.log(Array.from(word)) // Desta forma, a string será dividida em caracteres onde cada um será um elemento do array.
}
{
    //MANIPULANDO ARRAYS
    let ingredientsCake = ['ovo', 'leite', 'farinha']
    console.log(ingredientsCake)

    //Adicionar um item no fim, usamos o .push()
    ingredientsCake.push('chantily')
    console.log(ingredientsCake)
    //Adicionar um item no começo, usamos o .unshift()

    ingredientsCake.unshift('fermento')
    console.log(ingredientsCake)

    //Remover item do fim, usamos o .pop()
    ingredientsCake.pop()
    console.log(ingredientsCake)

    //Remover item do começo, usamos o .shift()
    ingredientsCake.shift()
    console.log(ingredientsCake)

    //Pegar somente alguns elementos do array. Usamos o .slice() para cortar os elementos que quero pegar
    ingredientsCake.push('Chantily')
    ingredientsCake.unshift('Fermento')
    console.log(ingredientsCake.slice(3,5)) /*No argument do slice primeiro usamso o número de index do primeiro
     elemento que queremos depois o valor de até qual eleemntos queremos pegar*/

    //Remover 1 ou mais elementos de qualquer posição do array. Usamos o .splice()
    ingredientsCake.splice(3,5)
    console.log(ingredientsCake) //Assim retiramos do nosso array os dois últimos elementos

    //Encontrar a posição de um elemento no array
    ingredientsCake.push('Farinha', 'Chantily')
    let index = ingredientsCake.indexOf('leite')
    ingredientsCake.splice(index, 1)
    console.log(ingredientsCake) /* Podemos retirar elementos dessa forma quando temos muitos elementos dentro do meu array
    e não sei em qual index ele se encontra, então criei uma varável com .indexof(nome do eleemnto) para achar esse elemento
    depois usei um .splice() com a variável index dentro do primeiro argumento e o segundo argumento colocamos 1 que so queremos
    retirar um argumento*/
}