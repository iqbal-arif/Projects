/*
How to Add Styles to an Element

Summary: in this tutorial, you’ll learn how to add styles to an element using JavaScript DOM methods.

Suppose that you have a <div> element as follows:
*/
<div class="note">JavaScript CSS</div>;
/*
Code language: HTML, XML (xml)

And you want to add styles to this element. By using the JavaScript DOM methods, you can add the inline styles or global styles to the element.
Inline styles

To add inline styles to an element, you follow these steps:

    First, select the element by using DOM methods such as document.querySelector(). The selected element has the style property that allows you to set the various styles to the element.
    Then, set the values of the properties of the style object.

The following code changes the background color and color of the <div> element above:
*/
const note = document.querySelector('.note');
note.style.backgroundColor = 'yellow';
note.style.color = 'red';
/*
Code language: JavaScript (javascript)

1) Using cssText property

Adding individual style is quite verbose. Fortunately, you can add set multiple styles at once by using the cssText property:
*/
note.style.cssText += 'color:red;background-color:yellow';
/*
Code language: JavaScript (javascript)

In this example, we used the += operator to append new styles to the existing ones. If you use the = operator, the existing style will be removed, like this:
*/
note.style.cssText = 'color:red;background-color:yellow';
/*
Code language: JavaScript (javascript)

2) Using a helper function

The following helper function accepts an element and a style object. It add all styles from the style object to the style property of the element:
*/
function css(element, style) {
  for (const property in style) element.style[property] = style[property];
}
/*
Code language: JavaScript (javascript)

And you can use this css() helper function to set the styles for the <div> element as follows:
*/
const note = document.querySelector('.note');
css(note, {
  'background-color': 'yellow',
  color: 'red',
});
/*
Code language: JavaScript (javascript)

Global Styles

To add the global styles to an element, you create the style element, fill it with the CSS rules, and append the style element to the DOM tree, like this:
*/
const style = document.createElement('style');
style.innerHTML = `
      .note {
        background-color: yellow;
        color:red;
      }
    `;
document.head.appendChild(style);
