const button = document.querySelector('#set-color');
const brush = document.querySelector('.brush');

button.addEventListener('click', changeColor);
button.addEventListener('keydown', changeColorKeydown);

function changeColor(e) {
    e.preventDefault();
    const color = document.querySelector('#color-field').value;
    console.log(color);
    console.log(brush);
    brush.style.background = color;
}

function changeColorKeydown(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        const color = document.querySelector('#color-field').value;
        brush.style.background = color;
    }
}

for (let i = 0; i < 8000; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
    square.addEventListener('mouseover', colorChange);
}

function colorChange() {
    const color = document.querySelector('#color-field').value;
    this.style.background = color;
}
