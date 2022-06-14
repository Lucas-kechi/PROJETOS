//agrupamento de declarações
{
    let name, age, isHuman
    name = 'Lucas'
    age = 26
    isHuman = true
    
    // concatenando os valores
    console.log('O ' + name + ' tem ' + age + ' anos.') //Dessa forma iremos escrever a frase “O Lucas tem 26 anos”, sendo o nome e a idade 2 variáveis.
    
    // interpolando os valores com template literals or template string
    name = 'Leo'
    age = 11
    console.log(`O ${name} tem ${age} anos.`)

}
{
    /*Agora vamos recapitular como criar um objeto e aprender novas coisas */
    const person = {
        name: 'Lucas',
        age: 26,
        weight: 98.9,
        isAdmin: true
    }
    // Criamos o objeto, agora como fazer para imprimir no console somente o name desse objeto por exemplo?
    console.log(person.name) 
    console.log(person.weight) 
    // Dessas formas podemos imprimir somente um atributo desse objeto 
    //interpolando
    console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight}kg`)
}
{
    //Agora vamos relembrar arrays e aprender coisas novas sobre eles
    const animals = [
        'dog',
        'frog',
        'cat'
        //podemos adicionar vários tipos de dados aqui, numbers, objects, etc.
    ]
    /* Como acessar valores dentro de um array?
    Arrays tem seus valores e esses valores tem posições, começando de 0 indo até quantos valores inserirmos, sendo assim:*/
    //se quero apenas o frog, neste caso:
    console.log(animals[1])

    // Também podemos ver o tamanho de um array acrescentando .length depois do nome do array. Exemplo:
    console.log(animals.length)
    // Também podemos inserir objetos em meu array
    const people = [
        'Lucas',
        'Larissa',
        {
            name: 'Daniele',
            age: 11,
            weight: 52
        }
    ]
    // dessa forma criamos um array com strings e objeto
    console.log(people[2].name) //Assim consigo acessar um atributo de um objeto dentro de um array
    console.log(`Eu sou ${people[2].name} e tenho ${people[2].weight}kg`)
}
{
    //Exercícios 
    {
        // 1) declare uma variável weight
        // R:
        let weight
        // 2) Que tipo de dado é a variável acima?
        //R: Undefined
        console.log(typeof weight)
    }
    {
        /* 
            3) Declare uma variável e atribua valores a cada um dos dados:
            - name: string
            - age: number (integer)
            - starts: number (float)
            - isSubscribed: boolean 
        */ //R:
            let name = 'Chief'
            let age = 32
            let stars = 4.9
            let isSubscribed = false
    }
    {
        /*
            4) A variável student abaixo é de que tipo de dados?
            let student = {}
            4.1) Atribua a ela as mesmas propriedades e valores do exercício 3 e 1
            4.2) Mostre no console a seguinte mensagem:
            <name> de idade <age> pesa <weight> kg.
            ATENÇÃO, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto  
        */ 
        // R4: A variável é do tipo de dado object
        
        // R4.1:
        let student = {
            name: 'Valber',
            age: 32,
            stars: 4.4,
            weight: 78.7,
            isSubscribed: true
        }
        //R4.2:
        console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)
        /*
            5) Declare uma variável do tipo Array, de nome students e 
            atribua a ela nenhum valor, ou seja, somente o array vazio
        */
        //R:
         let students = []
        console.log(typeof students)

         /*
            6) Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
            (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
         */
        // R:
        students = [
            student
        ]

        /*
            7) Coloque no console o valor da posição 0 do Array acima
        */
        // R:
        console.log(students[0])

        /*
            8) Crie um novo student e coloque na posição 1 do Array students
        */
        // R:
        const dri = {
            name: 'Adriana',
            age: 36,
            weight: 88.5,
            isSubscribed: false,
        }
        students[1] = dri //forma de adicionar uma posição a um Array
    }
    {
        /*
            9) Sem rodar o código, responda qual é a resposta do código abaixo e
            por que? Após sua resposta, rode o código e veja se você acertou

            console.log(a)
            var a = 1

            R: O console.log está sendo usado antes da declaração da variável logo não existiria uma declaração. 
            Porém quando tratamos da palavra reservada var, temos o que chamamos de hoisting(elevação). Então a declaração 
            da variável irá subir acima do console.log porém sem seu valor. Logo a resposta no console será UNDEFINED.
        */
            console.log(a)
            var a = 1
    }
}