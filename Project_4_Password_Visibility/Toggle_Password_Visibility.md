**How to Toggle Password Visibility**
***https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/***

---

Summary: in this tutorial, you will learn how to toggle the visibility of a password input by using plain JavaScript.

A password field provides a way for users to securely input a password by showing the \* character instead of the actual characters.

However, it is likely that some users will type the wrong password. To help them see the password that they’re currently entering, you can add a button that allows them to toggle the password visibility.

To make the password visible, you follow these steps:

1. First, create an <input> element with the type of password and an icon that allows users to click it to toggle the visibility of the password.
2. Second, bind an event handler to the click event of the icon. If the icon is clicked, toggle the type attribute of the password field between text and password. The input with the type text will show the actual password.
3. Third, change the icon to make it more user-friendly. This step is optional.

To make it easy, we’ll use two icons from the Bootstrap icon for toggling the visibility of the password.
