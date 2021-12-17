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

// Imagens pré-definidas
const defaultMemeImages = document.getElementsByClassName('img');

/* Função: setDefaultMemeImage
-- Define uma das imagens pré-definidas para se tornar um meme */
function setDefaultMemeImage(event) {
  const images = event.target;
  elementeMemeImage.src = images.src;
}

/* Função: insertMemeText
-- Insete texto ao meme */
function insertMemeText() {
  const text = elementInputText.value;
  elementeMemeText.innerText = text;
}

/* Função: insertMemeImage
-- Insere imagem ao meme */
function insertMemeImage(event) {
  elementeMemeImage.src = URL.createObjectURL(event.target.files[0]);
}

/* Funções: setBorder
-- Definem como será a borda do meme */
function setBorderFire() {
  elementContainer.style.border = '3px dashed red';
}

function setBorderWater() {
  elementContainer.style.border = '5px double blue';
}

function setBorderEarth() {
  elementContainer.style.border = '6px groove green';
}

/* Execução dos eventos realizados por meio da interação da pessoa usuária */
elementInputFile.addEventListener('change', insertMemeImage);
elementInputText.addEventListener('input', insertMemeText);
buttonFire.addEventListener('click', setBorderFire);
buttonWater.addEventListener('click', setBorderWater);
buttonEarth.addEventListener('click', setBorderEarth);
defaultMemeImages[0].addEventListener('click', setDefaultMemeImage);
defaultMemeImages[1].addEventListener('click', setDefaultMemeImage);
defaultMemeImages[2].addEventListener('click', setDefaultMemeImage);
defaultMemeImages[3].addEventListener('click', setDefaultMemeImage);
