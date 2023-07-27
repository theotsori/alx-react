import $ from 'jquery';

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');

const copyright = document.createElement('p');
copyright.textContent = 'Copyright - Holberton School';

footer.appendChild(copyright);
document.body.appendChild(footer);
