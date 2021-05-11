const content = document.getElementById('content');
content.innerHTML = '';

const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Adivinhe a cor!';
content.appendChild(title);

const textColor = document.createElement('p');
textColor.id = 'rgb-color';
content.appendChild(textColor);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRGB() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `(${red}, ${green}, ${blue})`;
}

const colorContainer = document.createElement('div');
colorContainer.className = 'color-container';

const resultContainer = document.createElement('div');
resultContainer.id = 'answer';
resultContainer.innerHTML = 'Escolha uma cor';

content.appendChild(resultContainer);
content.appendChild(colorContainer);

const scoreContainer = document.createElement('div');
scoreContainer.className = 'score-container';
textColor.insertAdjacentElement('beforebegin', scoreContainer);

const scoreText = document.createElement('p');
scoreText.innerHTML = 'SCORE:';
scoreContainer.appendChild(scoreText);

const scoreContent = document.createElement('p');
scoreContent.id = 'score';
scoreContent.innerHTML = 0;
scoreContainer.appendChild(scoreContent);

const recordContainer = document.createElement('div');
scoreContainer.appendChild(recordContainer);

let record = 0;
let difficulty = 6;
let checkGame = 1;

function renderRecord() {
  recordContainer.innerHTML = `RECORD: ${record}`;
}

function saveRecord() {
  const recordRegister = record;
  localStorage.setItem('color-guess', recordRegister);
}

function upDateRecord() {
  const recordRegister = localStorage.getItem('color-guess');
  if (!recordRegister) return renderRecord();
  record = recordRegister;
  renderRecord();
}

function checkRecord() {
  const score = parseInt(scoreContent.innerHTML, 10);
  if (score > record) {
    record = score;
    saveRecord();
    renderRecord();
  }
}

function renderScore(result) {
  const score = parseInt(scoreContent.innerHTML, 10);
  if (!checkGame) return alert('resete a cores para continuar');
  if (result === 'Acertou!') {
    scoreContent.innerHTML = score + parseInt(difficulty / 2, 10);
    checkRecord();
  }
}

function checkColor(event) {
  const attempt = event.target.style.backgroundColor;
  const response = `rgb${textColor.innerHTML}`;
  const result = response === attempt ? 'Acertou!' : 'Errou! Tente novamente!';
  resultContainer.innerHTML = result;
  renderScore(result);
  checkGame = 0;
}

function generateBallColor() {
  const ballColor = document.createElement('div');
  ballColor.className = 'ball';
  ballColor.style.backgroundColor = `rgb${generateRGB()}`;
  ballColor.addEventListener('click', checkColor);

  return ballColor;
}

function renderBallColors(qtd) {
  const arrayRGB = [];
  const colorIndex = randomNumber(0, qtd);

  for (let index = 0; index < qtd; index += 1) {
    const ballColor = generateBallColor();
    const color = ballColor.style.backgroundColor.replace(/rgb/g, '');
    arrayRGB.push(color);
    colorContainer.appendChild(ballColor);
  }

  textColor.innerHTML = arrayRGB[colorIndex];
}

function createBtn(text, id) {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.id = id;
  btn.innerHTML = text;
  return btn;
}

const btnContainer = document.createElement('div');
btnContainer.className = 'btn-container';
content.appendChild(btnContainer);

const btnReset = createBtn('Resetar Cores', 'reset-game');

function resetGame() {
  colorContainer.innerHTML = '';
  resultContainer.innerHTML = 'Escolha uma cor';
  renderBallColors(difficulty);
  checkGame = 1;
}

btnReset.addEventListener('click', resetGame);
btnContainer.appendChild(btnReset);

const btnDifficulty = createBtn('Aumentar Dificuldade', 'btn-difficulty');

function increaseDifficulty() {
  if (difficulty === 10) {
    return alert('duficuladade máxima atingida');
  }
  difficulty += 1;
  resetGame();
}

btnDifficulty.addEventListener('click', increaseDifficulty);
btnContainer.appendChild(btnDifficulty);

const btnEasy = createBtn('Diminuir Dificuldade', 'btn-easy');

function decreaseDifficulty() {
  if (difficulty === 3) {
    return alert('duficuladade mínima atingida');
  }
  difficulty -= 1;
  resetGame();
}

btnEasy.addEventListener('click', decreaseDifficulty);
btnContainer.appendChild(btnEasy);

upDateRecord();
renderBallColors(difficulty);
