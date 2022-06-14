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
    const sum = function(number1, number2) { //veja que dentro dos parenteses eu determinei os parameters number1 e number2
        console.log(number1 + number2)
    }
    // function evoke
    sum(3, 4)  

    // desta forma como determinei no statement que no console.log o number1 iria somar a number2, 3 mais 4 será 7
    // assim estou utilizando parameters e arguments na minha function
}