/*
JavaScript FormData

Summary: in this tutorial, you’ll learn about the JavaScript FormData API and how to post the FormData using fetch API.

Introduction to the JavaScript FormData API

Suppose you have a subscription form with two fields name and email.

<form id="subscription">
    <h1>Subscribe</h1>
    <div id="message"></div>
    <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your fullname" required />
        <small></small>
    </div>
    <div class="field">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email address" required />
        <small></small>
    </div>
    <div class="field">
        <button type="submit" class="full" id="submit">Subscribe</button>
    </div>
</form>
Code language: HTML, XML (xml)

When you click the submit button, the web browser submits the values of the name and email fields in the form to the server.

Similarly, the FormData interface allows you to construct a set of key/value pairs representing form fields and their values in JavaScript.

Once having a FormData object, you can post it to the server using the fetch API. If you want to submit the form as if it were like the GET request, you can pass the FormData object to the URLSearchParams constructor.
Create a FormData object

The following creates a new FormData object from an HTML form element:
*/
const formData = new FormData(form);
/*
Code language: JavaScript (javascript)

The following script shows the values of a FormData object:
*/
const btn = document.querySelector('#submit');
const form = document.querySelector('#subscription');

btn.addEventListener('click', (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // show the form values
  const formData = new FormData(form);
  const values = [...formData.entries()];
  console.log(values);
});
/*
Code language: JavaScript (javascript)

How it works.

    1. First, select the submit button using the querySelector() method of the document object.
    2. Next, add an event handler to handle the click event of the submit button.
    3. Then, call the preventDefault() method of the event object to avoid form submission.
    4. After that, create a new FormData object from the form element.
    5. Finally, call the entries() method of the FormData object. Since the entries() method returns an iterator, you must use the spread operator (...).
    */
