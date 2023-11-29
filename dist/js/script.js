// navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
if (window.pageYOffset >fixedNav) {
    header.classList.add('navbar-fixed');
} else {
    header.classList.remove('navbar-fixed');
}
}


// nav-menu // hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
hamburger.classList.toggle('hamburger-active');
navMenu.classList.toggle('hidden')
});    

// {
    /* <script>
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    //   </script> */
// }