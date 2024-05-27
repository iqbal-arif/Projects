const select = document.querySelector('#framework');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  for (let i = 0; i < select.options.length; i++) {
    const text = select.options[i].text;
    if (text.endsWith('js')) {
      select.remove(i);
      i--;
    }
  }
});
