function drawRectangles() {
  const canvas = document.querySelector('#canvas');

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#F9DC5C';
  ctx.fillRect(100, 100, 150, 100);

  ctx.fillStyle = 'rgba(0,0,255,0.5)';
  ctx.fillRect(200, 150, -150, -100);
}

drawRectangles();
