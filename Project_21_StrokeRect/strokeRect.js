function drawOutlinedRects() {
  const canvas = document.querySelector('#canvas');
  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'red';
  ctx.strokeRect(100, 100, 150, 100);

  ctx.strokeStyle = 'green';
  ctx.strokeRect(200, 150, -150, -100);
}

drawOutlinedRects();
