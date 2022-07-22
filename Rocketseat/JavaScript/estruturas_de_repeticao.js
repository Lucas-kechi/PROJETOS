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
{
    /*  WHILE
 	Significa enquanto, é também uma estrutura de repetição, porém devemos tomar cuidado para não entrar em loop infinito. Enquanto o parâmetro de while for true 
    ele repetirá o bloco de código, então para parar as repetições uma hora o parâmetro deve ser false.
Exemplo:     */
    let x = 100
    while(x > 1){
        x /= 2
        console.log(x)
    }
    // É uma estrutura bem semelhante ao for, então como saberemos qual utilizar? 
    // Sempre que não sabermos em qual resultado queremos parar vamos utilizar o while, ou seja,a não sei qual resultado eu quero mas sei que tem que
    // ser menor que algo então usaremos while.
}
{
    /*    FOR OF
        É uma declaração que irá criar um loop através de alguma variável que já tenhamos.
    Por exemplo strings e arrays: */
        //strings
        let name = 'Lucas';
        for (let char of name) {
            console.log(char);
    };
    //Arrays
    let names = ['Felipe', 'Filipe', 'Luciano', 'Leo', 'Iago'];
    for (let name of names){
        console.log(name)
    };
    // Assim criamos repetições da string e do array, com seu conteúdo.
}