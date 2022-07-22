//  CONDICIONAIS E CONTROLE DE FLUXO
{
    /*  CONTROLE DE FLUXO DA APLICAÇÃO
	Nas próximas aulas falaremos sobre o controle do fluxo da nossa aplicação. Temos um padrão de fluxo de leitura da linguagem que é de forma 
    ordenada de cima para baixo. Mas agora aprenderemos a pular blocos de códigos se determinadas condições forem cumpridas. 
    Exemplo:*/
	// Vou tomar café 
	//Se meu copo estiver sujo então
	console.log('Limpar copo');
	// se não
	console.log('Servir café');
    /*
    Vamos praticar e aprender como realizar essas condições para que determinados blocos de códigos sejam executados, assim controlando o fluxo e 
    criando um algoritmo para minha aplicação.
    */
}
{
    /*    IF E ELSE
	É um controle que ajuda nossa aplicação a tomar diferentes caminhos. Então ele muda o fluxo da nossa aplicação. If significa se e else, se não. 
    
    Sintaxe:

	if(‘uma condicional’){
		‘Bloco de código se a condicional for true’
	} else {
		‘Bloco de código se a condicional for false’
	}

    Exemplo: Vamos fazer uma aplicação que vai medir a febre, adicionando mais de um else, onde as condicionais são variáveis. */
	let temperature = 38;
	let regularTemperature = temperature < 37;
	let mediumTemperature = temperature >= 37 && temperature < 37.5;
	if (regularTemperature) {
		console.log('Não tem febre')
	} else if(mediumTemperature) {
		console.log('Febre mediana')
	} else {
		console.log('Febre alta')
	};

    /*    OBS: 1 - O if e else, quando tenho apenas uma de código não preciso por dentro de um bloco, porém isso não é muito recomendado. 
    2 - Transformar as condicionais em variáveis que tenham relevância, assim já saberemos apenas lendo o código o que aquela condicional irá fazer.
    3 - Sempre se atentar aos cuidados de truthy e falsy pois os condicionais precisam sempre de um boolean então cuidado aos valores.
    4 - Tomar cuidado para uma condição não bater com outra, ou seja, ser igual a outra, pois a leitura da aplicação sempre será primeiro o if se true ela não 
    lerá o else.*/
}
{
    /*    SWITCH
    É uma declaração que posso abrir vários caminhos na minha aplicação. Bastante semelhante a if e else. Porém ela tem uma estrutura diferente.
    SINTAXE:
    switch (expressão) {
        case ‘(resultado da expressão x)’:
        (Bloco de código se a expressão for x)
        break (para finalizar um case)
        case ‘(resultado da expressão y)’
        (Bloco de código se a expressão for y)
        break
        default: 
        (Bloco de códigos caso a expressão não tenha nenhum dos resultados acima)
        break
    };
    
    Exemplo de calculadora com switch*/
        function calculate(number1, operator, number2) {
            let result = 0;
            switch (operator) {
                case '+':
                    result = number1 + number2
                    break
                case '-':
                    result = number1 - number2
                    break
                case '*':
                    result = number1 * number2
                    break
                case '/':
                    result = number1 / number2
                    break
                default:
                    console.log('Operador ainda não atualizado')
                    break
            };
            return result;
        };
    console.log(calculate(5, '-', 3))
    console.log(calculate(900, '*', 500))
    console.log(calculate(400, '*', 30))
    console.log(calculate(5, "**", 2))
}