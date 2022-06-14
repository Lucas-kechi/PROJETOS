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
}