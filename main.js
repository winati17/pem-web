import $ from 'jquery';
import './style.css'; 

$(document).ready(function () {
  $('#app').html(`
    <div class="container">
        <h1 id="heading">Halo, Saya Wina ^^</h1>
        <button id="button">Klik disini</button>
    </div>
  `);

  const originalText = $('#heading').text();
  const newText = 'Wah, tulisannya berubah!';

  $('#button').click(function () {
    if ($('#heading').text() === originalText) {
      $('#heading').text(newText);
    } else {
      $('#heading').text(originalText);
    }
  });
});
