// dashboard js code
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  let count = 0;

  const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };

  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');

  const button = $('<button></button>', {
    text: 'Click here to get started',
  });
  $('body').append(button);

  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const debouncedUpdateCounter = _.debounce(updateCounter, 500);
  button.on('click', debouncedUpdateCounter);
});
