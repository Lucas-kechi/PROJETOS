{   // SELECIONANDO ELEMENTOS 

    // aplicando getElementById -> return (element)
    const element = document.getElementById('title');
    console.log(element);

    // aplicando getElementsByClassName  -> return (HTMLCollection)
    const element2 = document.getElementsByClassName('main');
    console.log(element2);

    // aplicando getElementsByTagName -> return (HTMLCollection)
    const element3 = document.getElementsByTagName('meta');
    console.log(element3);

    // aplicando querySelector -> return (element)
    const element4 = document.querySelector("[src]");
    console.log(element4);

    //aplicando querySelectorAll -> return (nodeList)
    const element5 = document.querySelectorAll('.main');
    console.log(element5);
    element5.forEach(el => console.log(el));
}
{   // MANIPULANDO CONTEÚDOS

    // textContent
    const element = document.querySelector('h1');
    element.textContent = 'My Title by textContent'
    // Desta forma alteramos o conteúdo de texto do h1 e podemos também manipular o dado com textContent.

    // innerText
    const content = document.querySelector('p');
    content.innerText = 'content by innerText';

    // innerHTML
    const contentWithHTML = document.querySelector('h2');
    contentWithHTML.innerHTML = 'Subtitle by innerHTML! <small>!!!</small>';

    // value
    const input1 = document.querySelector('input');
    console.log(input1.value);
    input1.value = 'Agora estou no JS';
    console.log(input1.value);

    // Manipulando Atributos
    // Acrecentando atributos
    const header = document.querySelector('header');
    header.setAttribute('id', 'cabecalho');
    const headerId = document.querySelector('#cabecalho');
    console.log(headerId);
    // Pegando atributos
    console.log(headerId.getAttribute('class'));
    // Removendo atributos
    headerId.removeAttribute('id');
}
{   // MANIPULANDO ESTILOS E CLASSES
    // Style
    const body = document.querySelector('body');
    body.style.fontFamily = 'sans-serif'
    // classList
    body.classList.add('active', 'green');
    console.log(body.classList);
    body.classList.remove('green');
    body.classList.toggle('active');
}
{   // NAVEGANDO PELOS ELEMENTOS 
    //parentElement and parentNode
    const body = document.querySelector('body');
    console.log('Elemento pai do body por parentElement');
    console.log(body.parentElement);
    console.log('Elemento pai do body por parentNode');
    console.log(body.parentNode);

    // PEGANDO ELEMENTOS FILHOS
    //childNodes and children
    console.log(body.childNodes);
    console.log(body.children);
    //firstChild and firstElementChild
    console.log(body.firstChild);
    console.log(body.firstElementChild);
    //lastChild and lastElementChild
    console.log(body.lastChild);
    console.log(body.lastElementChild);

    // BUSCANDO IRMÃOS
    const el = document.querySelector('main p')
    //nextSibling and nextElementSibling
    console.log(el.nextSibling);
    console.log(el.nextElementSibling);
    //previousSibling and previousElementSibling
    console.log(el.previousSibling);
    console.log(el.previousElementSibling);
}
{   // CRIANDO E ADICIONANDO ELEMENTOS NA PÁGINA
    //createElement
    const divAppend = document.createElement('div');
    const divPrepend = document.createElement('div');

    divAppend.innerText = "Sou uma div criada com creatElement e inserida no body do HTML com append";
    divPrepend.innerText = "Sou uma div criada com creatElement e inserida no body do HTML com prepend";
    //prepend and append
    const body = document.querySelector('body');
    
    body.prepend(divPrepend);
    body.append(divAppend);

    // insertBefore
    const divBefore = document.createElement('div');
    const main = body.querySelector('main');
    
    divBefore.innerText = "Sou uma div criada com creatElement e inserida no body do HTML com insertBefore";
    body.insertBefore(divBefore, main);
    // simulando um insertAfter
    const header = body.querySelector('header');
    body.insertBefore(divBefore, header.nextElementSibling);
}
{   // EVENTOS
  /*ADICIONANDO EVENTOS VIA HTML
	Eventos são a grande sacada do DOM, eventos são interações do usuário que dispara uma função no meu script. E temos diversos tipos de eventos 
    como click, double click, arrastar, passar o mouse em cima, etc. E adicionamos o evento via HTML em um atributo do elemento, basta usar o prefixo 
    ‘on’ em seguida vem o nome do evento que queremos, e o valor é a função que quero rodar no meu script. Então toda vez que esse evento for cumprido 
    a função roda.
    Exemplo
    ```HTML```
    <h1 ondblclick=”doubleClick()”>My Title</h1>
    ```JavaScript```
    function doubleClick() {
        console.log(‘Um evento foi acionado’);
    };*/
    // EVENTOS DE TECLADO
    const input = document.querySelector('input');

    input.onkeydown = function() {
        console.log('tecla para baixo');
    };
    input.onkeyup = () => {
        console.log('tecla para cima');
    };
    // e temos também onkeypress que é toda vez que a tecla esta sendo pressionada

    // ADICIONANDO EVENTOS VIA JS
    const h1 = document.querySelector('h1');
    h1.addEventListener('dblclick', eventDblClick);

    function eventDblClick() {
        console.log('evento criado no JS');
    };

    // ADICIONANDO EVENTOS VIA JS (OUTRO MÉTODO)
    /*É o método usado no 'EVENTOS DE TECLADO'. A diferença dos métodos é que usando o prefixo ‘on’ e o nome do evento, não podemos usar o mesmo evento no mesmo 
    elemento com outra função, pois o JS irá ler apenas o último ‘on’. Já com a função ‘addEventListener()’ podemos adicionar quantas funções, com o 
    mesmo evento e o mesmo elemento, que quisermos, que será executada todas as funções. */

    //ARGUMENTO event
    input.onkeydown = function(event) {
        console.log(event.currentTarget.value)
    };
}
{   // PRATICANDO
    // DESAFIO MODAL
    
}