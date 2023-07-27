import $ from 'jquery';

const header = document.createElement('header');
header.setAttribute('id', 'header');

const logo = document.createElement('div');
logo.setAttribute('id', 'logo');

const title = document.createElement('h1');
title.textContent = 'Holberton Dashboard';

header.appendChild(logo);
header.appendChild(title);
document.body.prepend(header);

console.log('Init header');
