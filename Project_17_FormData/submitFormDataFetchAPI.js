/*
Submit the FormData using fetch API

We’ll build a simple subscription form that uses the FetchAPI to post a FormData object to the server.

The following illustrates how to submit FormData using the fetch API:
*/
const btn = document.querySelector('#submit');
const form = document.querySelector('#subscription');
const messageEl = document.querySelector('#message');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  subscribe();
});

const subscribe = async () => {
  try {
    let response = await fetch('subscribe.php', {
      method: 'POST',
      body: new FormData(form),
    });
    const result = await response.json();

    showMessage(result.message, response.status == 200 ? 'success' : 'error');
  } catch (error) {
    showMessage(error.message, 'error');
  }
};

const showMessage2 = (message, type = 'success') => {
  messageEl.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `;
};
/*
Code language: JavaScript (javascript)

In this example, we define a function named subscribe() and call it in the submit button’s click event listener. The subscribe() function is an async function because it uses the await keyword.

Inside the subscribe() function:

First, post the form data to the subscribe.php script using the fetch() method:
*/
let response = await fetch('subscribe.php', {
  method: 'POST',
  body: new FormData(form),
});
/*
Code language: JavaScript (javascript)

Second, get the JSON response by calling the json() method of the response object:
*/
const result = await response.json();
/*
Code language: JavaScript (javascript)

Third, show a success message if the HTTP status code is 200. Otherwise, display an error message. The message property of the result stores the success or error message.
*/
showMessage(result.message, response.status == 200 ? 'success' : 'error');
/*
Code language: JavaScript (javascript)

Finally, define the showMessage() function that displays a success or error message:
*/
const showMessage = (message, type = 'success') => {
  messageEl.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `;
};
