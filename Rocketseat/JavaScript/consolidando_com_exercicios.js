//  EXERCÍCIOS
{
    /*  SISTEMA DE NOTAS ESCOLARES exercício 1
	Crie um algoritmo que transforma as notas do sistema numérico para sistema de notas em caracteres como A, B e C
    De 90 para cima – A
    Entre 80 e 89 – B
    Entre 70 e 79 – C
    Entre 60 e 69 – D
    Menor que 60 – F
    */
    function getGrade(grades){
        let gradeA = grades >= 90 && grades <= 100;
        let gradeB = grades >= 80 && grades <= 89;
        let gradeC = grades >= 70 && grades <= 79;
        let gradeD = grades >= 60 && grades <= 69;
        let gradeF = grades >= 0 && grades <= 59;
        let gradefinal;
        if(gradeA) {
            gradefinal = 'A';
        } else if(gradeB) {
            gradefinal = 'B';
        } else if(gradeC) {
            gradefinal = 'C';
        } else if(gradeD) {
            gradefinal = 'D';
        } else if(gradeF){
            gradefinal = 'F'
        } else{
            gradefinal = 'Nota Inválida';
        }
        return gradefinal
    };
    console.log(getGrade(105));
    console.log(getGrade(96));
    console.log(getGrade(84));
    console.log(getGrade(78));
    console.log(getGrade(64));
    console.log(getGrade(47));
    console.log(getGrade(-10));
    console.log(getGrade(100));
    console.log(getGrade(60));
    console.log(`Adriana tirou ${getGrade(85)} na sua nota média`)
}

{
    /*
    SISTEMA DE GASTOS FAMILIARES
    Crie um objeto que irá criar 2 propriedades ambas do tipo array:
    receitas [ ]
    despesas [ ]
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a 
    família está com saldo negativo ou positivo, seguido do valor do saldo.
    */
    // Forma que eu fiz:
    function familyExpense(income, expense) {
        const total = {
            income: income,
            expense: expense
        };
        let incomeTotal = 0;
        let expenseTotal = 0;

        for(let index = 0; index <= income.length -1; index++) {
            incomeTotal += income[index];
        };
        for(let index = 0; index <= expense.length -1; index++) {
            expenseTotal += expense[index];
        }

        if(incomeTotal > expenseTotal) {
            console.log(`Seu saldo é positivo ${incomeTotal - expenseTotal}.`);
        } else if(incomeTotal < expenseTotal) {
            console.log(`Seu saldo é negativo ${incomeTotal - expenseTotal}.`);
        } else {
            console.log(`Seu saldo esta zerado.`);
        }
    }
    familyExpense([1600, 100, 2687], [690, 97, 500, 2600, 500])
    familyExpense([1600, 100], [690, 97, 500, 2600, 500])
    familyExpense([1600, 100, 3250], [690, 97, 500, 2600, 500])

}

{
    /*
        CELSIUS TO FAHRENHEIT
        Crie uma função que receba um string em celsius ou fahrenheit e faça uma transformação de uma unidade para outra
    C = (F - 32) * 5/9.
    F = C * 9/5 + 32.
    */
    // Maneira que eu fiz:
    function celsiusToFahrenheit(string) {
        let fahrenheit;
        let celsius;
        let stringToArray = string.split(' ');
        
       
        console.log(celsius)
        for(let char of stringToArray) {
            if(char == 'ºC' || char == 'celsius') {
                celsius = stringToArray[0];
                const fahrenheitConvertion = celsius * 9 / 5 + 32;

                console.log(`${string} é ${fahrenheitConvertion.toFixed(2)} fahrenheit.`);
            } else if (char == 'ºF' || char == 'fahrenheit') {
                fahrenheit = stringToArray[0];
                const celsiusConvertion = (fahrenheit - 32) * 5/9;

                console.log(`${string} é ${celsiusConvertion.toFixed(2)} celsius.`);
            }
        }

    }
    celsiusToFahrenheit('52 ºF')
}

{
    /* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
    */

    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
        },
        {
            category: "Inteligência Emocional",
            books: [
                {
                    title: "Você é Insubstituível",
                    author: "Augusto Cury",
                },
                {
                    title: "Ansiedade – Como enfrentar o mal do século",
                    author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey",
                },
            ],
        },
    ];
    
    // Primeiro quesito • Contar o número de categorias e o número de livros em cada categoria
    {
        let categoryCount = 0
        categoryCount += booksByCategory.length;
        console.log(`O número de categorias é ${categoryCount}.`);
        
        let booksCountFirstCategory = 0
        booksCountFirstCategory += booksByCategory[0].books.length;
        console.log(`Tem ${booksCountFirstCategory} livros na primeira categória.`);

        let booksCountSecondCategory = 0;
        booksCountSecondCategory += booksByCategory[1].books.length;
        console.log(`Tem ${booksCountSecondCategory} livros na segunda categória.`);

        console.log(`Total de livros é ${booksCountFirstCategory + booksCountSecondCategory}`);

        let booksTotal = 0;
        for(let index = 0; index <= booksByCategory.length -1; index++) {
            booksTotal += booksByCategory[index].books.length;
        }
        console.log(`Podemos também utilizar um for criando uma repetição então sempre teremos o total de livro que agora é ${booksTotal}.`)
    }
    // Segundo quesito  • Contar o número de autores
    {
        let authorNumbers = 0;
        let authorRepeat = 0;
        let authorArrays = [];
        
        for(let index = 0; index <= booksByCategory.length - 1; index++) {
            authorNumbers += booksByCategory[index].books.length;
    
            for(let books of booksByCategory[index].books) {
                authorArrays.push(books.author)
            }
        }

        for(let index = 0; index <= authorArrays.length - 1; index++) {
            let repeat = 0;

            for(let author of authorArrays) {
                if(author == authorArrays[index]) {
                    repeat++;
                }
            }

            if(repeat === 2){
                authorRepeat++;
            }

            authorArrays[index] = 'ok';
        }
        
        console.log(`Neste array tem ${authorNumbers - authorRepeat} autores.`)
    }
    // Terceiro e quarto quesito • Mostrar livros do autor Augusto Cury • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
    {
        function booksWriteFor(author){
            let booksArray = [];
            
            for(let index = 0; index <= booksByCategory.length - 1; index++) {
                
                for(let books of booksByCategory[index].books) {
                    if(books.author == author) {
                        booksArray.push(books.title);
                    }
                }

            }

            if(booksArray.length === 1){
                console.log(`Nesta biblioteca temos apenas o livro "${booksArray[0]}" escrito por (${author}).`);
            } else if(booksArray.length > 1) {
                console.log(`Nesta biblioteca temos os livros "${booksArray.join('" e "')}" escritos por (${author}).`);
            } else {
                console.log(`Nao temos nenhum livro nesta biblioteca escrito por ${author}.`);
            }
        }

        booksWriteFor("Augusto Cury");
        booksWriteFor("Stephen R. Covey");
        booksWriteFor("João das Neves");
    }
}