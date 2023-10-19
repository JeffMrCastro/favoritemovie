const OverlayRemove = document.getElementById('modal_overlay')
const background = document.getElementById('modal_background');

function backgroundclickmaneger() {
    OverlayRemove.classList.remove('open_overlay');
}
background.addEventListener('click', backgroundclickmaneger);
