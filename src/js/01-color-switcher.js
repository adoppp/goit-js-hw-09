const startBtn = document.querySelector('[data-start]');
console.log(startBtn);
const endBtn = document.querySelector('[data-stop]');
console.log(endBtn);
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let interval = null;

function bodyColor() { 
    body.style.backgroundColor = `${getRandomHexColor()}`;
};

startBtn.addEventListener('click', () => { 
    interval = setInterval(bodyColor, 1000)
    startBtn.setAttribute('disabled', 'true');
    endBtn.removeAttribute('disabled');
});


endBtn.addEventListener('click', () => {
    clearInterval(interval);
    endBtn.setAttribute('disabled', 'true');
    startBtn.removeAttribute('disabled');
});