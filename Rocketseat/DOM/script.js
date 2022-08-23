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
{   //CRIANDO E ADICIONANDO ELEMENTOS NA PÁGINA
    
}