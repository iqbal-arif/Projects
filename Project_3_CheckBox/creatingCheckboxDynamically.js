const colors = ['Red', 'Green', 'Blue'];
colors.forEach((color) => {
  //  generate id
  const id = `color-${color}`;

  // create a label
  const label = document.createElement('label');
  label.setAttribute('for', id);

  // create a checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'color';
  checkbox.value = color;
  checkbox.id = id;

  // place the checkbox inside a label
  label.appendChild(checkbox);
  // create text node
  label.appendChild(document.createTextNode(color));
  // add the label to the root
  document.querySelector('#root').appendChild(label);
});

/*
How it works.

First, define an array that consists of three strings. In practice, you may have the array that comes from the result of an API call:

const colors = ["Red","Green","Blue"];
Code language: JavaScript (javascript)

Second, iterate over the array elements and:

1) Generate a unique id for each checkbox:

const id = `color-${color}`;
Code language: JavaScript (javascript)

2) Create a label and assign the id to the for attribute:

const label = document.createElement('label');
label.setAttribute("for", id);
Code language: JavaScript (javascript)

3) Create a checkbox:

const checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "color";
checkbox.value = color;
checkbox.id = id;
Code language: JavaScript (javascript)

4) Place the checkbox inside the label:

label.appendChild(checkbox);
Code language: CSS (css)

5) Create a text node and append it to the label:

label.appendChild(document.createTextNode(color));
Code language: CSS (css)

6) Add the label to the root element:

 document.querySelector("#root").appendChild(label);

*/
