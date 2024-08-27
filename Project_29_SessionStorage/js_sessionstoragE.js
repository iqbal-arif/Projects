/*
JavaScript sessionStorage

Summary: in this tutorial, you’ll learn how to use the JavaScript sessionStorage to store data only for a session.
Introduction to JavaScript sessionStorage

The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.

A page session lasts as long as the web browser is open and survives over the page refresh.

When you open a page in a new tab or window, the web browser creates a new session.

If you open multiple tabs or windows with the same URL, the web browser creates a separate sessionStorage for each tab or window. So data stored in one web browser tab cannot be accessible in another tab.

When you close a tab or window, the web browser ends the session and clears data in the sessionStorage.

Data stored in the sessionStorage is specific to the protocol of the page. For example, the same site javascripttutorial.net has different sessionStorage when accessing with the http and https.

Since the sessionStorage data is tied to a server session, it’s only available when a page is requested from a server. The sessionStorage isn’t available when the page runs locally without a server.

Because the sessionStorage is an instance of the Storage type, you can manage data using the Storage’s methods:
*/
setItem(name, value); // – set the value for a name
removeItem(name); // –// remove the name-value pair identified by name.
getItem(name); // – get the value for a given name.
key(index); // – get the name of the value in the given numeric position.
clear(); // – remove all values in the sessionStorage .
/*
Managing data in the JavaScript sessionStorage
1) Accessing the sessionStorage

To access the sessionStorage, you use the sessionStorage property of the window object:
*/
window.sessionStorage;
/*
Code language: JavaScript (javascript)

Since the window is the global object, you can simply access the sessionStorage like this:
*/
sessionStorage;
/*
2) Storing data in the sessionStorage

The following stores a name-value pair in the sessionStorage:
*/
sessionStorage.setItem('mode', 'dark');
/*
Code language: JavaScript (javascript)

If the sessionStorage has an item with the name of mode, the setItem() method will update the value for the existing item to dark. Otherwise, it’ll insert a new item.
*/
/*
3) Getting data from the sessionStorage

To get the value of an item by name, you use the getItem() method. The following example gets the value of the item ‘mode‘:
*/
const mode = sessionStorage.getItem('mode');
console.log(mode); // 'dark'
/*
Code language: JavaScript (javascript)

If there is no item with the name mode, the getItem() method will return null.
*/
/*
4) Removing an item by a name

To remove an item by the name, you use the removeItem() method. The following removes the item with the name of 'mode':
*/
sessionStorage.removeItem('mode');

/*
5) Iterating over all items

To iterate over all items stored in the sessionStorage, you follow these steps:

    Use Object.keys() to get all keys of the sessionStorage object.
    Use for...of to iterate over the keys and get the items by keys.

The following code illustrates the steps:
*/
let keys = Object.keys(sessionStorage);
for (let key of keys) {
  console.log(`${key}: ${sessionStorage.getItem(key)}`);
}
/*
6) Deleting all items in the sessionStorage

The data stored in the sessionStorage are automatically deleted when the web browser tab/window is closed.

In addition, you can use the clear() method to programmatically delete all data stored in the sessionStorage.
*/
sessionStorage.clear();
/*
Why JavaScript sessionStorage

The sessionStorage has many practical applications. And the following are the notable ones:j

    The sessionStorage can be used to store the state of the user interface of the web application. Later, when the user comes back to the page, you can restore the user interface stored in the sessionStorage.
    The sessionStorage can also be used to pass data between pages instead of using the hidden input fields or URL parameters.
    */
/*
JavaScript sessionStorage application

You’ll build a simple web application that allows users to select the mode, either dark or light mode. By default, it has a light mode. And you’ll use the sessionStorage to remember the mode when the page refreshes.

If you refresh the page, the mode that you selected will restore since it’s stored in the sessionStorage.

However, if you close the tab or window, the page will reset to the dark mode, which is the default mode.

1) Creating the project folder structure

First, create a new folder called session-storage. In the session-storage folder, create two subfolders: js and css that will store the JavaScript and CSS files.

Second, create a new index.html in the sessionStorage folder, the app.js file in the js folder, and style.css file in the css folder.
*/
