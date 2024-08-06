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
