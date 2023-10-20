const SearchButon = document.getElementById('research');
const Overlay = document.getElementById('modal_overlay');

function searchclickmaneger() {
  Overlay.classList.add('open_overlay');
  
}

SearchButon.addEventListener('click', searchclickmaneger);




