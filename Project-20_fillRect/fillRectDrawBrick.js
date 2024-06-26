function drawWall(ctx, canvasWidth, canvasHeight) {
  // define brick height and width, and spaces between them
  const bh = 20,
    bw = 50,
    space = 5;

  // calculate the rows and columns of the wall
  const rows = Math.ceil(canvasHeight / (bh + space));
  const columns = Math.ceil(canvasWidth / (bw + space));

  // draw columns
  for (let r = 0; r < rows; r++) {
    // draw rows
    for (let c = 0; c < columns; c++) {
      if (r % 2) {
        c == 0
          ? ctx.fillRect(c * (bw + space), r * (bh + space), bw / 2, bh)
          : ctx.fillRect(c * (bw + space) - bw / 2, r * (bh + space), bw, bh);
      } else {
        ctx.fillRect(c * (bw + space), r * (bh + space), bw, bh);
      }
    }
  }
}

/*
The drawWall() function accepts a 2d drawing context and the height and width of the wall.

First, define the height (bh) and width (bw) of each brick and the space between two bricks:
*/
const bh = 20,
      bw = 50,
      space = 5;
/*
Code language: JavaScript (javascript)

Second, calculate the number of rows and columns of bricks based on the dimension of the brick and the wall’s width and height:

// calculate the rows and columns of the wall
*/
const rows = Math.ceil(height / (bh + space));
const columns = Math.ceil(width / (bw + space));
Code language: JavaScript (javascript)
/*
Third, draw bricks by using the fillRect() method. Use two for loops to draw bricks row by row.

// draw rows
for (let r = 0; r < rows; r++) {
    // draw columns
    for (let c = 0; c < columns; c++) {
        if (r % 2) {
            c == 0 ? ctx.fillRect(c * (bw + space), r * (bh + space), bw / 2, bh) :
                ctx.fillRect(c * (bw + space) - bw / 2, r * (bh + space), bw, bh);
        } else {
            ctx.fillRect(c * (bw + space), r * (bh + space), bw, bh);
        }
    }
}

Code language: JavaScript (javascript)

Note that the first brick of the even row will have a width that equals to a half of the normal brick’s width.
*/
