let result = document.querySelector('#result');

document.body.addEventListener('change', function (e) {
  let target = e.target;
  let message;

  switch (target.id) {
    case 'html':
      message = 'The HTML checkbox changed';
      break;
    case 'css':
      message = 'The CSS checkbox changed';
      break;
    case 'js':
      message = 'The JavaScript checkbox changed';
      break;
  }
  result.textContent = message;
});
