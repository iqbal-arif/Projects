const select = document.querySelector('#list');
for (let i = 0; i < select.options.length; i++) {
  const value = select.options[i].value;
  if (value === 'B' || value === 'C') {
    select.remove(i);
    // index of C will become 1 but the value of i is 2
    // therefore C will be not removed
  }
}

// https://www.javascripttutorial.net/javascript-dom/javascript-remove-items-from-a-select-conditionally/
