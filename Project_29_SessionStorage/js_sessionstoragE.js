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
