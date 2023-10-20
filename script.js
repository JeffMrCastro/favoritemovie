const SearchButon = document.getElementById('research');
const Overlay = document.getElementById('modal_overlay');

function searchclickmaneger(){
  Overlay.classList.add('open_overlay');
  
}

SearchButon.addEventListener('click', searchclickmaneger);

/*-------------------------------------------------------------------*/

const OverlayRemove = document.getElementById('modal_overlay')
const background = document.getElementById('modal_background');

function backgroundclickmaneger() {
    OverlayRemove.classList.remove('open_overlay');
}
background.addEventListener('click', backgroundclickmaneger);


