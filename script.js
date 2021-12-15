const elementInput = document.getElementById('text-input');
const elementeParagraph = document.getElementById('meme-text');

elementInput.addEventListener('input', () => {
  elementeParagraph.innerText = elementInput.value;
});
