/*
Set the Value of an Attribute
https://www.javascripttutorial.net/dom/attributes/set-the-value-of-an-attribute/

Summary: in this tutorial, you will learn how to set the value of an attribute on a DOM element using the setAttribute() method.

To set a value of an attribute on an element, you use the setAttribute() method:
*/
element.setAttribute(name, value);
/*
Code language: CSS (css)

For example, to set the title attribute of the anchor element, you use the following code:
*/
let link = document.querySelector('a');
link.setAttribute('title', 'JavaScript DOM setAttribute');
/*
Code language: JavaScript (javascript)

You can also use the setAttribute()method to set the value for a data-* attribute. For example:
*/
let btn = document.querySelector('a');
btn.setAttribute('data-method', 'post');
