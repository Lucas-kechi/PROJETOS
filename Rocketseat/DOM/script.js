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