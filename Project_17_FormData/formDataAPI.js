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

const showMessage = (message, type = 'success') => {
  messageEl.innerHTML = `
        <div class="alert alert-${type}">
        ${message}
        </div>
    `;
};
/*
Summary
https://www.javascripttutorial.net/web-apis/javascript-formdata/
    Use the JavaScript FormData API to capture the HTML form values.
    Use the Fetch API to submit the FormData to the server.
    */
