const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  let checkboxes = document.querySelectorAll('input[name="color"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  alert(values);
});

/*
How it works.

In the HTML, we create three checkbox elements with the same name (color) but distinct values:

<label for="c1"><input type="checkbox" name="color" value="red" id="c1">Red</label>
<label for="c2"><input type="checkbox" name="color" value="green" id="c2">Green</label>
<label for="c3"><input type="checkbox" name="color" value="blue" id="c3">Blue</label>
Code language: HTML, XML (xml)

In the JavaScript:

First, add the click event handler to the button:

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
   // ...            
});    
Code language: JavaScript (javascript)

Second, select the selected checkboxes using the document.querySelectorAll() method inside the click event handler:

let checkboxes = document.querySelectorAll('input[name="color"]:checked');
Code language: JavaScript (javascript)

Third, push the values of the selected checkboxes to an array:

let values = [];
checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
});

alert(values);


*/
