/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById('interactive-canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let lastMouseX = 0;
let lastMouseY = 0;

canvas.addEventListener('mousemove', mouseMoveEvent);

canvas.addEventListener('mousedown', resetLastMousePos);

function resetLastMousePos(event) {
	lastMouseX = event.offsetX;
	lastMouseY = event.offsetY;
}

function mouseMoveEvent(event) {
	if (event.buttons === 1) {
		ctx.beginPath();

		// ctx.ellipse(event.offsetX, event.offsetY, 5, 5, 0, 0, 2 * Math.PI);
		ctx.moveTo(lastMouseX, lastMouseY);
		ctx.lineTo(event.offsetX, event.offsetY);

		ctx.closePath();
		// ctx.fillStyle = 'white';
		ctx.stroke();

		lastMouseX = event.offsetX;
		lastMouseY = event.offsetY;
	}
} 

let colorChangeButtons = document.getElementsByClassName('color-select');

for (let i = 0; i < colorChangeButtons.length; i++) {
	colorChangeButtons[i].addEventListener('click', changeColor);
}

function changeColor(event) {
	ctx.fillStyle = event.target.dataset.color;
	ctx.strokeStyle = event.target.dataset.color;
}

let fillCanvasButton = document.querySelector('#fill-canvas');

fillCanvasButton.addEventListener('click', fillCanvas);

function fillCanvas(event) {
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}