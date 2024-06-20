// Clear Canvas
function draw() {
  const canvas = document.querySelector('#canvas');

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext('2d');

  // draw two squares
  ctx.fillStyle = '#F9DC5C';
  ctx.fillRect(50, 50, 150, 150);

  ctx.fillStyle = 'rgba(0,0,255,0.5)';
  ctx.fillRect(100, 100, 150, 150);

  // clear the intersection
  ctx.clearRect(100, 100, 100, 100);
}

draw();
