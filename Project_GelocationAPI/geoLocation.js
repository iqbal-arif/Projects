(() => {
  const message = document.querySelector('#message');

  // check if the Geolocation API is supported
  if (!navigator.geolocation) {
    message.textContent = `Your browser doesn't support Geolocation`;
    message.classList.add('error');
    return;
  }

  // handle click event
  const btn = document.querySelector('#show');
  btn.addEventListener('click', function () {
    // get the current position
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });

  // handle success case
  function onSuccess(position) {
    const { latitude, longitude } = position.coords;

    message.classList.add('success');
    message.textContent = `Your location: (${latitude},${longitude})`;
  }

  // handle error case
  function onError() {
    message.classList.add('error');
    message.textContent = `Failed to get your location!`;
  }
})();

/*
How it works.

1. First, select the #message element by using the querySelector() method.

2. Next, show an error message if the browser doesn’t support the Geolocation API.

3. Then, select the button and attach a click event handler. The click event handler calls the getCurrentPosition() method of the navigator.geolocation object to get the current position of the user.

The onSuccess and onError callback functions are for handling the success and error cases.

4. After that, define the onSuccess() function that gets the latitude and longitude from the position.coords and shows them on the <div> element with id message.

5. Finally, define the onError() function that shows an error message in case the getCurrentPosition() method fails.

Note that all the code in the app.js are wrapped in an IIFE.

Test the app
************

The following illustrates how to run the web application using Google Chrome. If you’re using a different browser like Firefox, Edge, or Safari, you should be able to follow the steps.

When you click the Show my location button, the browser will request you to share your location like this:

**********www.javascripttutorial.net wants to pop-up: Allow ****************

If you click the Allow button, you’ll see your location as shown in the following picture:

********* Show my location :  Your Location(some coordinate)***************

Notice that your location may be different.

To change the browser setting, you click the location icon and the Manage button:

********click on settings in pop-up and Click Manage*********************

It’ll show a screen like this:

If you click the Trash icon, the allowed site will be removed.

And if you refresh the app and click the Show my location button, it’ll request you to share your location again.

This time if you click the Block button:

…the app will show an error message:
***********Failed to get your location!*************

Summary

   1. The Geolocation API allows web applications to access the user’s current position.
   2. Use the navigator.geolocation.getCurrentPosition() method to get the current user’s location.
*/
