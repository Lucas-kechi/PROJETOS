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
}