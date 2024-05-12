// Checking if a checkbox is checked

// A checkbox has two states: checked and unchecked.

// To get the state of a checkbox, you follow these steps:

//     First, select the checkbox using a DOM method such as getElementById() or querySelector().
//     Then, access the checked property of the checkbox element. If its checked property is true, then the checkbox is checked; otherwise, it is not.

// See the following example:
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkbox</title>
</head>
<body>
    <label for="accept">
        <input type="checkbox" id="accept" name="accept" value="yes"> Accept
    </label>

    <script>
        const cb = document.querySelector('#accept');
        console.log(cb.checked); // false
    </script>

</body>

</html>
Code language: HTML, XML (xml)

In this example:

First, create the HTML checkbox element:

<label for="accept">
   <input type="checkbox" id="accept" name="accept" value="yes"> Accept 
</label>
Code language: HTML, XML (xml)

Second, select the checkbox with id #accept and examine the checked property:
</head>
*/
const cb = document.querySelector('#accept');
console.log(cb.checked);
/*
Code language: JavaScript (javascript)

Because the checkbox is unchecked, you’ll see false in the console:

false
Code language: JavaScript (javascript)

Consider another example:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Checkbox</title>
</head>

<body>
    <label for="accept">
        <input type="checkbox" id="accept" name="accept" value="yes"> Accept
    </label>

    <script>
        const checked = document.querySelector('#accept:checked') !== null;
        console.log(checked); // false
    </script>

</body>
</html>
Code language: HTML, XML (xml)

In this example, the selector #accept:checked selects the element with the id #accept and has the attribute checked. For example, it matches the following element:

<input type="checkbox" id="accept" checked> Accept
Code language: HTML, XML (xml)

But not this one:

<input type="checkbox" id="accept"> Accept
Code language: HTML, XML (xml)

Therefore, if the checkbox element with the id #accept is checked, the document.querySelector() will return it. On the console window, you’ll see the value false because the checkbox is unchecked:

false
*/
