let result = document.querySelector('#result');
document.body.addEventListener('change', function (e) {
  let target = e.target;
  let message;
  switch (target.id) {
    case 'pending':
      message = 'The Pending radio button changed';
      break;
    case 'resolved':
      message = 'The Resolved radio button changed';
      break;
    case 'rejected':
      message = 'The Rejected radio button changed';
      break;
  }
  result.textContent = message;
});

/*
How it works:
https://www.javascripttutorial.net/javascript-dom/javascript-change-event/
First, register an event handler to the change event of the body. When a radio button is clicked, its change event is bubbled to the body. This technique is called event delegation.
Then, show a corresponding message based on which radio button is selected.
*/
