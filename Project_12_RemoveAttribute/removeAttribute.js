/*
Remove an Attribute from an Element

Summary: in this tutorial, you will learn how to remove an attribute from an element using the removeAttribute() method.

To remove an attribute with a specified name from an element, you use the removeAttribute() method:
*/
element.removeAttribute(name);
/*
Code language: JavaScript (javascript)

For example, to remove the alt attribute from an <img> element you use the following code:
*/
const img = document.querySelector('img');
img.removeAttribute('alt');
/*
Code language: JavaScript (javascript)

It’s possible to use the removeAttribute() to handle the data-* attribute. The following example uses the removeAttribute() method to remove the data-method attribute of the anchor element:
*/
const link = document.querySelector('a');
link.removeAttribute('data-method');
