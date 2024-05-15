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
