/*
FormData methods

The FormData object has the following methods:
*/
append() method
/*
The append() method has two forms:
*/
FormData.append(name, value)
FormData.append(name, value, file)
/*
Code language: JavaScript (javascript)

The append() method appends a new value onto an existing key inside a FormData object or adds the key if it does not exist.
*/
delete() method

FormData.delete(name);
/*
Code language: JavaScript (javascript)

The delete() method deletes a key/value pair by the name of the key from the FormData object.
*/
entries() method

FormData.entries()
/*
Code language: JavaScript (javascript)

The entries() method returns an iterator of all key/value pairs in the FormData object.
*/
get() method

FormData.get(name)
/*
Code language: JavaScript (javascript)

The get() method returns the first value by a key name.
*/
getAll() method

FormData.getAll(name)
/*
Code language: JavaScript (javascript)

The getAll() method returns an array of all the values by a key name.
*/
has() method

FormData.has(name);
/*
Code language: JavaScript (javascript)

The has() method returns true if the FormData object contains a key name.
*/
keys() method

FormData.keys()
/*
Code language: JavaScript (javascript)

The keys() method returns an iterator of all the keys.
*/
set() method
/*
The set() method has two forms:
*/
FormData.set(name, value);
FormData.set(name, value, filename);
/*
Code language: JavaScript (javascript)

The set() method sets a new value for an existing key name or adds the key/value if it does not already exist.
*/
values() method

FormData.values()
/*
Code language: JavaScript (javascript)

The values() method returns an iterator of all the values in the FormData object.
*/