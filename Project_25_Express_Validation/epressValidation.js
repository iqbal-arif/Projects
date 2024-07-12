3/*
Express Validation

Summary: in this tutorial, you will learn how to use the express-validator library to validate and sanitize input data.

When your Express app receives data from external sources such as user inputs, it is crucial to validate and sanitize the input data.
/*
    Data validation ensures that the input data meets certain criteria such as type, range, and format. It verifies that the input data is valid. For example, you can check if an email address has a valid format.

    Data sanitization cleans up the input data by removing or escaping harmful characters. It helps prevent malicious input such as code injection. For example, you can remove HTML or script tags from input data before rendering it on a webpage.

In Express apps, you can manually validate and sanitize input data, but this process is time-consuming and requires more effort.

To make it more efficient, you can utilize third-party validation libraries. In this tutorial, you will learn how to use the express-validator library to validate and sanitize the input data.
Validating query strings

First, create a simple Express app:
*/
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/hi', (req, res) => res.send(`Hi, ${req.params.name}!`));

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));
/*
Code language: JavaScript (javascript)

The app includes a route /hi that accepts a query string name. It’ll show a greeting message on the web browser.

Second, install the express-validator library in the project by running the following npm command in your terminal:
*/
npm install express-validator
/*
Code language: JavaScript (javascript)

Third, create a request to the following endpoint:
*/
http://localhost:3000/hi?name=John
/*
Code language: JavaScript (javascript)

It’ll show the following message on the web browser

Hi, John!
Code language: JavaScript (javascript)

However, if you request the following endpoint without passing the name query string:
*/
http://localhost:3000/hi
/*
Code language: JavaScript (javascript)

you’ll see the following message on the screen:

Hi, undefined
Code language: JavaScript (javascript)

The reason is that the req.query.name is undefined in this example.

In the worst case, if the query string contains JavaScript code, you might be redirected to a malicious page. For example:
*/
http://localhost:3000/hi?name=<script>window.location ='https://www.google.com';</script>
/*
Code language: JavaScript (javascript)

In this example, we inject the code that redirects to google.com. In the real scenario, you might be redirected to a malicious page. This is called cross-site scripting (XSS).

Cross-site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted website.

To validate and sanitize the value of the name query string, you can use the express-validator library.

Technically, the express-validator library is a set of middleware functions that validate and sanitize the input data.

Fourth, validate the name query string using functions in the express-validator library:
*/
import express from 'express';
import { query, validationResult, matchedData } from 'express-validator';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/hi', query('name').notEmpty().escape(), (req, res) => {
  // validate data
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.status(400).send({ errors: result.array() });
  }

  // sanitize data
  const cleanedData = matchedData(req);
  res.send(`Hi, ${cleanedData.name}!`);
});

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));
/*
Code language: JavaScript (javascript)

How it works.

Step 1. Import functions from the express-validator library to handle validation
*/
import { query, validationResult, matchedData } from 'express-validator';
Code language: JavaScript (javascript)

Here is the summary of the imported functions:

    query() function is a middleware that validates query parameters.
    validationResult() function gathers the results of the validation and sanitization of the incoming request.
    matchedData() function extracts the validated and sanitized data.

Step 2. Validate the name query string:

query('name').notEmpty().escape()
Code language: JavaScript (javascript)

In this syntax:

    notEmpty() function ensures the value of the name query string is not empty.
    escape() function escapes the field value to prevent XSS attacks.

The query(), notEmpty(), and escape() functions form a validation chain. Since they return a middleware function, we can use it in the app.get() method.

Step 3. Get the validation result using the validationResult() function:

const result = validationResult(req);
if (!result.isEmpty()) {
   res.status(400).send({ errors: result.array() });
}
Code language: JavaScript (javascript)

The query() function does not automatically report validation errors. Instead, it collects the validation errors, which are then verified using the validationResult() function. The validationResult() function returns a ValidationError object.

The isEmpty() method of the ValidationError object returns true if no validation error occurred, and false otherwise. In the code, we return a JSON response containing validation errors with the HTTP status code 400.

Step 4. Get sanitized data

To get the sanitized data, you use the matchedData() function:

const cleanedData = matchedData(req);
Code language: JavaScript (javascript)

Step 5. Render the sanitized data

res.send(`Hi, ${cleanedData.name}!`);
Code language: JavaScript (javascript)

Validating route parameters

To validate route parameters, you can use the param() function from the express-validator library.

The param() function allows you to specify validation rules for router parameters.

The following example shows how to use the param() function to validate the id route parameter:
/*
app.get(
  '/api/todos/:id',
  param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = req.params.id;
    res.send(`Fetching record with ID: ${id}`);
  }
);
*/
Code language: JavaScript (javascript)

How it works.

The param('id') specifies the id route parameter for validation:

    isInt({ min: 1 }) ensures that the id parameter is an integer and at least 1.
    withMessage('ID must be a positive integer') specifies a custom error message if the validation fails.

The rest of the code works in the same way as validating query strings.
Validating request body

Step 1. To process a request as a JSON object, you register the built-in middleware called express.json():

app.use(express.json());
/*
Code language: JavaScript (javascript)

This instructs the Express app to parse the body as a JSON object, allowing you to access it via the req.body property.

To access the fields of the JSON object, you can use the body() function from the express-validator library.

Step 2. Import the body function from the express-validator library :

import {body, validationResult, matchedData} from 'express-validator';
Code language: JavaScript (javascript)

Step 3. Validate the title and completed fields in the body of the request:
*/
app.post('/api/todos',
  [body('title').notEmpty().isString(), body('completed').isBoolean()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const record = matchedData(req);
    res.send(record);
  }
);
/*
Code language: JavaScript (javascript)

In this example, we pass an array of middleware to the app.post() function. The first middleware validates the title field, and the second one validates the completed field in the request body.

For example, if you make a POST request to the /api/todos endpoint without specifying the title and completed field in the request body, you’ll get the following error:
*/
{
  "errors": [
    {
      "type": "field",
      "msg": "Invalid value",
      "path": "title",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "Invalid value",
      "path": "title",
      "location": "body"
    },
    {
      "type": "field",
      "msg": "Invalid value",
      "path": "completed",
      "location": "body"
    }
  ]
}
/*
Code language: JavaScript (javascript)

Summary

    Use the query() function to validate query strings.
    Use the param() function to validate route parameters.
    Use the body() function to validate the request body.
*/