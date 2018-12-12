import "../scss/main.scss";

const body = document.querySelector('body');

const el = document.querySelector('div');
el.innerText = "hello friends !";

const heading = document.createElement('h1');
heading.innerText = 'Webpack Boilerplate';

body.prepend(heading);