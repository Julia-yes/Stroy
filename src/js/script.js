import 'bootstrap/js/dist/tab';

document.addEventListener("DOMContentLoaded", function(event) { 
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
  
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle("hamburger_close");
      navigation.classList.toggle("navigation_phone");
    });

});

let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });