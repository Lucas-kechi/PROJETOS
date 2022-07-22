// ESTRUTURAS DE REPETIÇÃO
{
    /*FOR
	For que do inglês significa ‘para’. É uma estrutura onde posso repetir os valores modificando até que me retorne o valor desejado. Exemplo:
    */
    for(let i = 1; i <= 10; ++i) {
        console.log(i)
    };
    // break --> Com o break podemos parar a repetição, até atingir o parametro do if
    console.log('For com break')
    for(let x = 10; x >= 0; --x) {
        if(x == 5) {
            break;
        };
        console.log(x)
    };
    // continue --> Dessa forma retira-se a condição do if e continua as repetições
    console.log('For com Continue')
    for(let y = 10; y < 20; ++y) {
        if(y == 13) {
            continue;
        };
        console.log(y)
    };
}