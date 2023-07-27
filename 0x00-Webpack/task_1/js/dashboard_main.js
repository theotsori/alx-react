import $ from 'jquery';
import _ from 'lodash';

function updateCounter() {
  let count = 0;
  const countElement = $('#count');

  $('#clickButton').on('click', _.debounce(function () {
    count++;
    countElement.text(`${count} clicks on the button`);
  }, 300));
}

$(document).ready(function () {
  const body = $('body');

  body.append('<p>Holberton Dashboard</p>');
  body.append('<p>Dashboard data for the students</p>');
  body.append('<button id="clickButton">Click here to get started</button>');
  body.append('<p id="count"></p>');
  body.append('<p>Copyright - Holberton School</p>');

  updateCounter();
});
