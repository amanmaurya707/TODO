import $ from 'jquery';
$( document ).on( 'ready', function (e)
 {
  alert("bhai");
  document.addEventListener("DOMContentLoaded", () => {
  
    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');
    
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    });
  })
  
 })