// Entrada de Texto
const elementInputText = document.getElementById('text-input');
const elementeMemeText = document.getElementById('meme-text');

// Imagem do Meme
const elementInputFile = document.getElementById('meme-insert');
const elementeMemeImage = document.getElementById('meme-image');

// Container
const elementContainer = document.getElementById('meme-image-container');

// Botões
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

function insertMemeText() {
  const text = elementInputText.value;
  elementeMemeText.innerText = text;
}

function insertMemeImage(event) {
  elementeMemeImage.src = URL.createObjectURL(event.target.files[0]);
}

function setBorderFire() {
  elementContainer.style.border = '3px dashed red';
}

function setBorderWater() {
  elementContainer.style.border = '5px double blue';
}

function setBorderEarth() {
  elementContainer.style.border = '6px groove green';
}

elementInputFile.addEventListener('change', insertMemeImage);
elementInputText.addEventListener('input', insertMemeText);
buttonFire.addEventListener('click', setBorderFire);
buttonWater.addEventListener('click', setBorderWater);
buttonEarth.addEventListener('click', setBorderEarth);
