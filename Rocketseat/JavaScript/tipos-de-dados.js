/*Dados de string
Jeitos corretos de escrita*/
console.log("Lucas")
console.log("Luca's")
console.log('Lucas')
console.log('Luca"s')
console.log(`Lu"ca's`)
console.log(`Lucas ${1+9+9+5+0+7+2+4}`)

/*Number 
aqui veremos exemplos de number*/
//Inteiro
console.log(25)
//Real
console.log(12.5)
//Expressão soma(+) subtração(-) Divisão(/) Multiplicação(*)
console.log(25/12.5)
//NaN, Podemos obter esse number quando fizermos por exemplo um expressão com uma string
console.log(2*"lucas")
//Infinity, tem que ser escrito com a letra "i" em maiusculo "I", sem isso dará erro
console.log(Infinity+2)

//Boolean
console.log(true)
console.log(false)

//Agora veremos as estruturas de um object. com propriedade e funcionalidades. Sempre dentro de chaves '{}'
console.log({
    name: "Lucas",
    idade: 26,/*Nessas duas linhas temos a propriedade, ou atributos, do meu objeto com seu valores*/
    andar: function() { /*Mais a frente veremos como funciona o "function". mas o mais interssante aqui é saber que essa é a funcionalidade do meu objeto, ou o método*/
        console.log('andar')
    }
})

//Veremos a sintaxe de array. Sempre dentro de colchetes '[ ]'
console.log([
    "ovos",
    12,
    "Leite",
    6,
    "Carne",
    1
])