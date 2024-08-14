/*Cookies in JavaScript

To manage cookies in JavaScript, you use the document.cookie property.
1) Get a cookie value

The following example returns a string of all cookies available to the page:
*/
const str = document.cookie;
/*
Code language: JavaScript (javascript)

The document.cookie returns a series of name-value pairs separated by semicolons like this:
*/
name1 = value1;
name2 = value2;

/*
The following example shows the cookies of a webpage:

"_ga=GA1.2.336374160.1600215156; dwf_sg_task_completion=False; _gid=GA1.2.33408724.1600901684"
Code language: JSON / JSON with Comments (json)

Since all the names and values are URL-encoded, you need to use the decodeURIComponent() to decode them.
*/
/*
2) Set a cookie

To set a value for a cookie, you compose the cookie text in the following format:
name=value; expires=expirationTime; path=domainPath; domain=domainName; secure

…and append it to the cookie:
*/

document.cookie = cookieText;
/*
Code language: JavaScript (javascript)

A cookie requires only name and value. For example:
*/
document.cookie = 'username=admin';

/*
This example creates a cookie called username that has a value of admin. The web browser will send this cookie every time it makes a request to the server.

Since the cookie doesn’t specify the expired time, it will be deleted when the web browser is closed.

The cookie text "username=admin" doesn’t have any character that needs to be encoded.

However, it’s a good practice to always use the encodeURIComponent() function when setting a cookie like this:
*/

document.cookie = `${encodeURIComponent('username')}=${encodeURIComponent(
  'admin'
)}`;

/*
3) Remove a cookie

To remove a cookie, you need to set the cookie again with the same name, path, domain, and secure option. And you need to set the expiration date to some time in the past.

JavaScript Cookie class

The following Cookie class sets, gets, and removes a cookie:
*/
class Cookie {
  static get(name) {
    const cookieName = `${encodeURIComponent(name)}=`;
    const cookie = document.cookie;
    let value = null;

    const startIndex = cookie.indexOf(cookieName);
    if (startIndex > -1) {
      const endIndex = cookie.indexOf(';', startIndex);
      if (endIndex == -1) {
        endIndex = cookie.length;
      }
      value = decodeURIComponent(
        cookie.substring(startIndex + name.length, endIndex)
      );
    }
    return value;
  }

  static set(name, value, expires, path, domain, secure) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toGMTString()}`;
    }

    if (path) cookieText += `; path=${path}`;
    if (domain) cookieText += `; domain=${domain}`;
    if (secure) cookieText += `; secure`;

    document.cookie = cookieText;
  }

  static remove(name, path, domain, secure) {
    Cookie.set(name, '', new Date(0), path, domain, secure);
  }
}

/*
1) The get() method

The get() method returns the value of a cookie with a specified name. To do so, it performs the following steps:

    First, find the occurrence of the cookie name by an equal sign in the document.cookie property.
    Second, if the cookie is available, it uses the indexOf() to find the end of the cookie, which is specified by the next semicolon (;) after that location. If the semicolon isn’t available, this means that the cookie is the last one in the string.
    Third, decode the value of the cookie using the decodeURIComponent() function and return the decoded value.

2) The set() method

The set() method sets a cookie on the page. It accepts the arguments required to construct a cookie.

The set() method requires the first two arguments: name and value. The other arguments aren’t mandatory.

The set() method composes a cookie text and sets it to the document.cookie property.
3) The remove() method

To remove a cookie, the remove() method sets the cookie again with the expiration date set to January 1, 1970. Note that the new Date(0) returns a date object whose date is January 1, 1970.

Using the Cookie class

The following shows how to use the Cookie class to set, get, and remove a cookie whose name is username and value is admin:
*/

// set a cookie
Cookie.set('username', 'admin');

// get a cookie
console.log(Cookie.get('username')); // admin

// remove a cookie by a name
Cookie.remove('username');

/*
View cookies with web browsers

To view the cookies on the web browser, you use the devtools.

    First, click the application tab.
    Second, select Cookies node under the Storage.

    Summary

    A cookie is a piece of data that a server sends to a web browser. The web browser then stores it in the user’s computer and sends the cookie back to the same server in the subsequent requests.
    The server uses cookies for identifying if two successive requests came from the same web browser.
    To manage cookies, you use the document.cookie object. To make it more efficient, you can use the Cookie utility class.
    Use the encodeURIComponent() and decodeURIComponent() function to encode and decode the cookie values.
    */
