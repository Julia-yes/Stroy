import 'bootstrap/js/dist/tab';

document.addEventListener("DOMContentLoaded", function(event) { 
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle("hamburger_close");
      navigation.classList.toggle("navigation_phone");
    });

});