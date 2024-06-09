**JavaScript Geolocation**

Summary: in this tutorial, you’ll learn how to use the Geolocation API to allow web applications to access your location once you agree to share.

1. What is Geolocation API

---

The Geolocation API allows the web application to access your location if you agree to share it.

2. Why Geolocation API

---

The Geolocation API is useful for web applications that need to work based on the user’s locations such as Search Engines, eCommerce websites, maps, and weather apps.

For example, an eCommerce website can request you to share your location. Once having the information, it can show you the product availability as well as prices and discounts based on your location.

Similarly, the search engine like Google.com can return local search results based on your search term and location.

For example, if you’re in San Fransisco and search for Pizza, Google will show you a list of Pizza restaurants that are near to your current location.

3. The geolocation object

---

The Geolocation API is available through the navigator.geolocation object.

4. Check if the Geolocation API is supported

---

To check if a browser supports it, you can test if the geolocation property exists on the navigator object like this:

```
if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
}
```

Code language: JavaScript (javascript)

**_Get the current position_**

To get the user’s current location, you call the **getCurrentPosition()** method of the **navigator.geolocation** object.

The **getCurrentPosition()** method sends an asynchronous request to detect the user’s location and queries the positioning hardware (like GPS) to get the up-to-date data.

The **getCurrentPosition()** can succeed or fail. It accepts two optional callbacks that will execute in each case respectively.

If the **getCurrentPosition()** succeeds, you’ll get the user’s position as an **GeolocationCoordinates** object.

The **GeolocationCoordinates** object has the **latitude** and **longitude** properties that represent a location.
