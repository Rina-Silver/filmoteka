document.addEventListener("DOMContentLoaded", function () {
    let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
    
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';

    });
    document.querySelector('[href="#close-down"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';

    });
  });