import $ from 'jquery';
import debounce from 'lodash/debounce';

function updateCounter() {
  const countElement = $('#count');
  let count = parseInt(countElement.text()) || 0;
  count++;
  countElement.text(`${count} clicks on the button`);
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');

  const button = $('<button></button>', {
    text: 'Click here to get started',
  });
  $('body').append(button);

  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>')
  button.on('click', debounce(updateCounter, 500));
});
