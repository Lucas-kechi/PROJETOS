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