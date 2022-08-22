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