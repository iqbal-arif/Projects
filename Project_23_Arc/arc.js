const canvas = document.querySelector('#canvas');

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'red';
  ctx.fillStyle = 'rgba(255,0,0,0.1)';
  ctx.lineWidth = 5;

  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);

  ctx.stroke();
  ctx.fill();
}
