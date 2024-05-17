const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  // toggle the type attribute
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // toggle the icon
  this.classList.toggle('bi-eye');
});

// prevent form submit
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

/*
The HTML page has an input element with the type password and an <i> element with the CSS classes provided by Bootstrap CSS.

The Bootstrap CSS allows you to use the class bi-eye of the <i> element to show the eye icon. To change the icon from eye to eye slash, you just need to change the class of the <i> element to bi-eye-slash

To place the icon inside the password input, you can use the negative margin for the <i> element as follows:

form i {
    margin-left: -30px;
    cursor: pointer;
}
Code language: CSS (css)
The rest of the CSS is straightforward.

In the JavaScript:

First, select the toggle password icon and the password input field using the querySelector() method:

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
Code language: JavaScript (javascript)
Then, attach an event listener to the togglePassword icon and toggle the type attribute of the password field as well as the class of the icon:

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
*/
