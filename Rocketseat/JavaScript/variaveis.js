/*Agora veremos as variáveis.
Começando com a palavra reservada 'var'*/
var clima = "Quente"

console.log(clima)

clima = "Frio" //Dessa forma podemos mudar as variáveis

console.log(clima)

//agora utilizando a palavra reservada 'let'

let temperatura = 28

console.log(temperatura)

temperatura = 25

console.log(temperatura) //Funciona bem semelhante a palavra reservada 'var'

//Agora ultilizando a palavra reservada 'const'

const peso = 30

console.log(peso)

/* peso = 28

console.log(peso) //Aqui veremos um erro pois a palavra reservada 'const' é sobre uma constante e uma contantes não varia, ela sempre será o mesmo valor*/

/*Agora veremos como é a dinâmica do JS em relação ao tipo de dado em uma variável
Declarando uma variável*/
//let age               Mesmo sem um valor essa variável esta declarada, então o js ja reconhece 'age' como uma variável
//let age:number        Esse é um caso de linguagens que precisam declarar o tipo da variável. Não é o caso do js que é bem dinâmico
let age = 26 // Declaramos então uma variável do tipo number 
age = false // Agora mudamos a mesma variável para tipo boolean, essa é a dinhâmica do js
//Para podermos saber qual o tipo das variáveis basta adicionar 'typeof' antes da variável, veja a seguir:
console.log(typeof age) //assim, consultando no devtools veremos o tipo da variável

/*Veremos agora scope e var
O var pode ser usado em global scope e também em block-scoped*/

console.log('> Existe x antes do bloco?', x) //aqui imprimimos no console um string e uma variável
{
    var x = 2 //Dentro desse bloco declaramos a variável x após a impressão dela no console
}

/* Logo, nesse exemplo o x estará undefined e não um erro, pois o código do JS é lido de maneira vertical de cima para baixo. Contudo,
o JS tem um comportamento especial para 'var' por debaixo dos panos, exemplo:*/

var y //É aqui onde entra a declaração da variável quando usamos o var. porém sem valor por isso recebemos undefined.

console.log('> Existe y antes do bloco?', y) 
{
    y = 2 
}
/*Isso é o que acontece debaixo dos panos, durante a leitura do código. E o resultado dos 2 exemplos acima serão os mesmo
Esse conceito se chama HOISTING (elevação)
Agora se usarmos o console log após o bloco teremos o valor da variável*/

console.log('> Existe x depois do bloco?', x)
console.log('> Existe y depois do bloco?', y)