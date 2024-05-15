function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="color"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}

function checkAll() {
  select();
  this.onclick = uncheckAll;
}

function uncheckAll() {
  select(false);
  this.onclick = checkAll;
}

const btn = document.querySelector('#btn');
btn.onclick = checkAll;

/*
How it works:

First, define the check() function that checks or unchecks all checkboxes with the name "color":

function check(checked = true) {
  const checkboxes = document.querySelectorAll('input[name="color"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
}
Code language: JavaScript (javascript)

When you click the button, it checked all the checkboxes. And. If you click the button again, it should uncheck all the checkboxes. To do this switch, you need to reassign the click event handler whenever the click event fires.

Second, select the #btn button and assign the checkAll() function to the onclick property of the button:

const btn = document.querySelector('#btn');
btn.onclick = checkAll;
Code language: JavaScript (javascript)

Third, define the checkAll() function that checks all the checkboxes:

function checkAll() {
  check();
  this.onclick = uncheckAll;
}
Code language: JavaScript (javascript)

Finally, define the uncheckAll() function that unchecks all the checkboxes:

function uncheckAll() {
  check(false);
  this.onclick = checkAll;
}



*/
