let select = document.querySelector('#lang');
let result = document.querySelector('#result');
select.addEventListener('change', function () {
  result.textContent = this.value;
});

/*
How it works:

First, select the <select> element by its id (lang);
Then, show the selected value in the <p> element.

Summary
The <input> element fires the change event once it loses focus.
The radio button, checkbox, and select elements fire the change event after they have been selected.
*/
