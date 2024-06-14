function drawRectangles() {
  const canvas = document.querySelector('#canvas');

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#F9DC5C';
  ctx.fillRect(100, 100, 150, 100);

  ctx.fillStyle = 'rgba(0,0,255,0.5)';
  ctx.fillRect(200, 150, -150, -100);
}

drawRectangles();

/*
Introduction to the JavaScript fillRect() method
************************************************

The fillRect() is a method of the 2d drawing context object. The fillRect() method allows you to draw a filled rectangle at (x,y) position with a specified with and height on a canvas.

The following shows the syntax of the fillRect() method:

ctx.fillRect(x,y,width,height);
Code language: CSS (css)

In this syntax:

    x is the x-axis coordinate of the starting point of the rectangle.
    y is the y-axis coordinate of the starting point of the rectangle.
    width is the rectangles’ width. It can be positive or negative. The positive values are to the right while the negative values are to the left.
    height is the rectangle’s height. It can be also positive or negative. The positive values are down while the negative values are up.

The fillStyle attribute of the 2d drawing context will determine the fill style of the rectangle
*/
/*
COMMENT THIS WHOLE SECTION. THIS IS JUST AN EXPLANATION
How it works.

First, select the canvas element using the document.querySelector() method:
*/
const canvas = document.querySelector('#canvas');
/*
Code language: JavaScript (javascript)

Second, check if the browser supports the canvas API:
*/
if (!canvas.getContext) {
  return;
}
/*
Code language: JavaScript (javascript)

Third, get the 2d drawing context object:
*/
const ctx = canvas.getContext('2d');
/*
Code language: JavaScript (javascript)

Fourth, set the fill style to the #F9DC5C color and draw the first rectangle using the fillRect() method:
*/
ctx.fillStyle = '#F9DC5C';
ctx.fillRect(100, 100, 150, 100);
/*
Code language: JavaScript (javascript)

The first rectangle starts at (100,100) and has the width of 150 pixels and the height of 100 pixels.

Finally, set the fill style to blue with the alpha 0.5, which creates a transparent effect. And use the fillRect() method to draw the second rectangle:
*/
ctx.fillStyle = 'rgba(0,0,255,0.5)';
ctx.fillRect(200, 150, -150, -100);
/*
Code language: JavaScript (javascript)

The second rectangle starts at (200,150). Since we passed the negative width and height to the fillRect() method, the width is to the left and the height is to up.

*/
