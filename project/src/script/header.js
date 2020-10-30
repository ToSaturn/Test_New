let menuHeader = document.querySelector('.hide');
let menuNav = document.querySelector('.hide_menu');

menuHeader.onclick = function() {
  menuNav.style.display = (menuNav.style.display == 'none') ? '' : 'none';
}
