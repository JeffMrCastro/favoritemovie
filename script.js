const SearchButon = document.getElementById('research');
const Overlay = document.getElementById('modal_overlay');
const movieName = document.getElementById('name_input')
const movieYear = document.getElementById('date_input')

async function searchclickmaneger() {
  try{
    let url = `http://www.omdbapi.com/?apikey=${key_api}&t=${movieNameParameter()}&y=${movieYearsParameter()}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data: ', data);
    Overlay.classList.add('open_overlay');
    if (data.Error) {
      throw new Error('Filme não encontrado');
    }
  } catch (error) {
    notie.alert({ type: 'error', text: error.message});
  }
}

function movieNameParameter() {
  if (movieName.value === '') {
    throw new Error('O nome do filme deve ser informado');
  }
  return movieName.value.split(' ').join('+');
}

function movieYearsParameter() {
  if (movieYear.value === '') {
    return '';
  }
  if (movieYear.value.length !== 4 || Number.isNaN(Number(movieYear.value))) {
    throw new Error('Ano do filme invalido.');  
  }
  return `&y=${movieYear.value}`;
}

SearchButon.addEventListener('click', searchclickmaneger);

/*-------------------------------------------------------------------*/

const OverlayRemove = document.getElementById('modal_overlay')
const background = document.getElementById('modal_background');

function backgroundclickmaneger() {
    OverlayRemove.classList.remove('open_overlay');
}
background.addEventListener('click', backgroundclickmaneger);




