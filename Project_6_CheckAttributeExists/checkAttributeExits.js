// https://www.javascripttutorial.net/dom/attributes/check-if-an-attribute-exists/
// in this tutorial, you’ll learn how to check if an attribute with a specified name exists.

// To check if an attribute with a specified name exists, you use the hasAttribute() method:
```
const result = element.hasAttribute(name);
```;
// It returns true if the attribute with the specified name exists; otherwise false.

// The following example checks if the title attribute of the anchor element exists:

const link = document.querySelector('a');
const result = link.hasAttribute('title');

// You can also use the hasAttribute() method to check if a data-* attribute of an element exists.

// The following example uses the hasAttribute() method to check if the data-method attribute exists on the anchor element:

const link2 = document.querySelector('a');
const result2 = link.hasAttribute('data-method');
