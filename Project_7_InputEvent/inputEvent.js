const message = document.querySelector('#message');
const result = document.querySelector('#result');
message.addEventListener('input', function () {
  result.textContent = this.value;
});

/*
How it works:

First, select the <input> element with the id message and the <p> element with the id result.
Then, attach an event handler to the input event of the <input> element. Inside the input event handler, update the textContent property of the <p> element.
*/
