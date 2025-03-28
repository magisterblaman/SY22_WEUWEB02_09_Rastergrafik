/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'red';
ctx.fillRect(40, 80, 30, 130);

ctx.font = '50px Comic Sans MS';
ctx.fillText('hejhejhej', 100, 300);

// ctx.ellipse(90, 350, 30, 30);

ctx.beginPath();

ctx.moveTo(200, 200);
ctx.lineTo(300, 200);
ctx.lineTo(300, 300);
ctx.lineTo(200, 200);

ctx.closePath();
ctx.fillStyle = '#3c13bb';
ctx.fill();
ctx.strokeStyle = 'cyan';
ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.stroke();

ctx.beginPath();

ctx.arc(100, 50, 40, 0, Math.PI);

ctx.closePath();
ctx.stroke();