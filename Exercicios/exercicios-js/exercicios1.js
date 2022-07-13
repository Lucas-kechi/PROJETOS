// EXERCÍCIOS

{
/* # Exercicios Variáveis

- 1 Crie uma constante chamada myName e atribua a ela o seu nome.
- 2 Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
- 3 Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
- 4 Utilize o console.log() para imprimir as constantes e variáveis que você criou.
- 5 Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
- 6 Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔*/

// Resoluções
//1 R:
const myName = 'Lucas';
//2 R:
const birthCity = 'Petrópolis';
//3 R:
let birthyear = 1995;
//4 R:
console.log(myName, birthCity, birthyear);
//5 R:
birthyear = 2030;
console.log(birthyear);
//6 R:
// birthCity = 'Rio de Janeiro';
// console.log(birthCity);  Este erro ocorre pois estamos tentando redefinir uma constante, diferente de uma variável let or var, const não pode ser redefinida
}

{
/* 
    # Exercício Tipos.

    No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail.
*/

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
/*
    - 1 O que aconteceria se tentássemos checar qual o tipo da variável patientAge? Experimente executar o comando console.log(typeof patientAge) e veja o que acontece!
    - 2 Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação.

    Você consegue explicar o porquê do resultado desses 2 últimos exercícios?
*/

// Resoluções
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

//1 R:
console.log(typeof patientAge); // undefined pois patientAge nao foi definido nada nem declarado como uma variável.

//2 R:
patientId = '50';
console.log(typeof patientId); // Agora deixou de ser um number e se tornou uma string
}

{
    // Faça também os exercícios desses links:

// * [JS Variables](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1). 5 exercícios. QUEST COMPLETE
// * [JS Data Types](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_datatypes1). QUEST COMPLETE
// * [JS Objects](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1). 3 exercícios QUEST COMPLETE
// * [JS Strings](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings1). 3 exercícios QUEST COMPLETE
}

{
    /*
        # **Desafio:**

    Operações Aritméticas.
    - 1 Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
    - 2 Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
    - 3 Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

    * [JS Operators](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_operators1). 5 exercícios. QUEST COMPLETE

    Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse [link](https://www.w3schools.com/js/js_operators.asp) se tiver dúvidas.
    */

    //1 R:
    const base = 5;
    let height = 8;
    //2 R:
    const area = base * height
    console.log(area)
    // 3 R:
    const perimeter = 2 * base + 2 * height
    console.log(perimeter)
}

let x = 5
let y = 2
console.log(x)
console.log(x *= y)
console.log(x *= y) // observei que quando uso um assignment operator, mesmo em um console.log, o valor é atribuido a variável.
