{
/*
    Para criar uma function é bem simples
    
    function createPhrases() {
        Aqui entra os códigos da função que serão guardados 
        e depois utilzados quando ela for executada
    }
    desta forma aprendemos a declarar uma função ou do inglês function statement
*/
function createPhrases() {
    console.log('Gosto de tomar café todas as manhas')
    console.log('Foco e esforço no objetivo me levará onde quero')
    console.log('A vida é um eterno aprendizado')
}

// Entao criamos nossa function fizemos um function statement
// Agora vamos executar ela ou do inglês: run, execute, call, envoke

createPhrases() // Simples assim, agora toda vez que executada ira rodar o código que foi inserido nela
}
{
    /*
        Podemos também por uma function dentro de uma variável
        const sum = function() {

        } 
        Dessa forma ao usarmos a palavra sum() sempre irá executar a function que está nela
        Chamamos functions desse tipo de anonymous function or function expression
        
        Sabendo disso vamos ver agora argumentos e parâmetros 
        * Parâmetros(parameters) - Parametros são usados em uma function para receber argumentos e ficam entre
        os parenteses ao fazer a function statement.

        * Argumentos(arguments)- Argumentos são definidos quando voce fizer uma call da function e entre
        os parenteses você determina os argumentos.
        Exemplo:
    */ 
    // function statement
    const soma = function(number1, number2) { //veja que dentro dos parenteses eu determinei os parameters number1 e number2
        console.log(number1 + number2)
    }
    // function evoke
    soma(3, 4)  

    // desta forma como determinei no statement que no console.log o number1 iria somar a number2, 3 mais 4 será 7
    // assim estou utilizando parameters e arguments na minha function

    //Agora vamos mostrar como pegar valores dentro de uma function
    const sum = function(number1, number2){
        let total = number1 + number2
        return total //Com esse return mais o valor que quero consigo retornar ele quando solicitado
    }
    let number1 = 24
    let number2 = 26
    console.log(`O primeiro número é ${number1}`)
    console.log(`O segundo número é ${number2}`)
    console.log(`A soma entre eles é ${sum(number1, number2)}`) // aqui estamos solicitando o valor na function

    /*OUTRA MANEIRA DE ENTENDER FUNÇÕES
    Explicando funções de uma maneira mais lúdica.
    
    Imagine que as funções são como liquidificadores : 
    function liquidificador()
    
    E quero fazer uma vitamina de 2 frutas nesse liquidificador , então preciso determinar 2 frutas aos parâmetros desse liquidificador, então agora nosso código ficará assim:
    function liquidificador(fruta1, fruta2)
    
    E dentro do liquidificador preciso determinar o que ele vai fazer com as frutas:*/
    function liquidificador(fruta1, fruta2){
        return fruta1 + fruta2
    }
    
    //Agora precisamos escolher quais frutas irão para nosso liquidificado e um copo para despejar o conteúdo:
    const copo = liquidificador('banana', 'morango')
    
    //Agora precisaremos ver o resultado desse processo:
    console.log(copo)
    
    //OBS: Concluímos que, com as functions podemos inserir coisas e obter resultados, através de processamentos, por parameters e arguments.

}
{
    // Agora mostraremos o hoisting das functions
    sayMyName()  //function executada.
		function sayMyName() {
			console.log('Lucas')
    } //Assim ela primeiro foi executada e depois declarada, mas sofrerá hoisting e não haverá erro.

    /*OBS: Lembrando que somente function do tipo statement ou declaration sofre hoisting.
    Expressões de function não sofrem hoisting, Exemplo:*/
    /*        sayMyLastName()
            var sayMyLastName = function() {
                console.log('Paiva')
                    
    } Isso é um erro, pois o var sofre hoisting pois é undefined como foi mostrado antes, assim não sofre hoisting 
    de uma function logo na execução da function teremos um erro*/
}
{
    /*Agora veremos arrow function */
    const sayYourName = () => { //nota-se que retiramos a palavra 'function' após o igual, e adicionamos uma seta '=>' entre o parentese e a chave.
        console.log('Levi')
    } /* Geralmente arrow function é sempre atribuída a uma constante, é basicamente a maneira mais rápida de se escrever um expression function. 
    Lembrando que expression function não sofre hoisting*/
    sayYourName()
}
{
    // Agora veremos como produzir uma callback
    /*
        É uma function dentro de uma function, faremos uma function com um parameter e ao fazer a call dessa function determinamos 
        um outra function em seus arguments, assim, toda vez que usarmos esse parameter dentro da primeira function teremos a segunda 
        function, isso se chama callback. Exemplo:
    */
    function makingCallback(callback) {
        callback()
    }

    makingCallback(
        () => {
            console.log('Isso é uma callback')
        }
    )
}
{
    // function constructor (funções construtoras)
    /*
        São funções que servem como "objeto molde". Temos 3 importantes coisas:
        - A expressão 'new' antes de executar a function constructor
        - Cada vez que criarmos uma variável e igualarmos a function constructor iremos criar um novo object, que o 'molde' é a function
        - Password 'this', dentro da function toda vez que quisermos adicionar uma propriedade devemos adicionar a palavra chave 'this'
        Exemplo: this.name = (o parameter referente ao nome), this.age = (parameter referente a idade), etc.

        Sabendo disso vamos criar uma function constructor
    */
    function Person(name, age, weight) {    //OBS: De preferência a primeira letra do nome da function constructor deve ser maiúscula.
        this.name = name                    // Aqui adicionamos a palavre chave 'this' para criar uma propriedade
        this.age = age
        this.weight = weight + "kg"
        this.walk = () => {                 //Aqui determinamos uma function para a funcionalidade desse objeto
            return this.name + " está andando"
        }
    }
    const lucas = new Person("Lucas", 26, 98.8) // Aqui criamos um variável 'const' e quando igualarmos ela devemos acrescentar a expressão new antes da function
    const leo = new Person("Leo", 11, 52.5)     // podemos observar também os arguments de em concordância com os parameters da linha 13
    const luciano = new Person('Luciano', )
    console.log(lucas)
    console.log(leo)
    console.log(lucas.walk())                   // e Aqui mostraremos no console a funcionalidade do object
    console.log(leo.walk())

    /*
        Concluimos que uma function constructor é como uma forma para objects, assim teremos sempre um padrão para objects do mesmo tipo
        podendo apenas criando uma variavel e adicionando a function, com os arguments sendo as propriedades do seu object.
    */
}