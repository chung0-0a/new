const generateButton = document.getElementById('generateButton');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', generateNumbers);

function generateNumbers() {
  resultDiv.innerHTML = '';
  const numbers = [];

  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  numbers.sort((a, b) => a - b);
  resultDiv.innerText = numbers.join(' ');
}