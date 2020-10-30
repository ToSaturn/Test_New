let menuFlag = document.querySelector('.hide_lang');
let menuLangs = document.querySelectorAll('.vector');

for (let menuLang of menuLangs) {
  menuLang.onclick = function() {
    menuFlag.style.display = (menuFlag.style.display == 'none') ? '' : 'none';
  }
}
