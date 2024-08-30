/*
JavaScript IndexedDB

Summary: in this tutorial, you’ll learn about the IndexedDB and how to use it to persistently store data inside the browser.
What is indexedDB

IndexedDB is a large-scale object store built into the browser.

The IndexedDB allows you to persistently store the data using key-value pairs.

The values can be any JavaScript type including boolean, number, string, undefined, null, date, object, array, regex, blob, and files.
Why indexedDB

IndexedDB allows you to create web applications that can work both online and offline.

It’s useful for applications that store a large amount of data and don’t need a persistent internet connection.

For example, Google Docs uses the IndexedDB to store the cached documents in the browser and synchronizes with the server once in a while. This allows Google Docs to increase performance while enhancing user experiences.

And you’ll find other types of applications that heavily use IndexedDB like online notepads, quizzes, todo lists, code sandboxes, and CMS.
IndexedDB structure

The following picture illustrates the structure of the IndexedDB:

Databases

A database is the highest level of IndexedDB. A database contains one or more object stores.

The IndexedDB can have one or more databases. Generally, you’ll create one database per web application.
Object stores

An object store is a bucket that you can use to store the data and associated indexes. It’s conceptually equivalent to the tables in SQL databases.

An object store contains the records stored as key-value pairs.
Indexes

Indexes allow you to query data by the properties of the objects.

Technically, you create indexes on object stores, which are called parent object stores.

For example, if you store the contact information, you may want to create indexes on email, first name, and last name so that you can query the contacts by these properties.
Basic IndexedDB concepts

The following briefly introduces the basic concepts in the IndexedDB:
1) IndexedDB databases store key-value pairs

Unlike localStorage and sessionStorage, the values stored in the IndexedDB can be complex structures like objects and blob.

Also, keys can be the properties of these objects or can be binary objects.

For quick searching and sorting, you can create indexes that use any property of the objects.
2) IndexedDB is transactional

Every read from and write to the IndexedDB databases always happens in a transaction.

The transactional model ensures the data integrity in case users open the web application in two tabs/windows at the same time and perform the read from and write to the same database.
3) IndexedDB API is mostly asynchronous

IndexedDB operations are asynchronous. It uses DOM events to notify you when an operation completes and the result is available.
4) IndexedDB is a NoSQL system

The IndexedDB is a NoSQL system. In other words, it doesn’t use SQL to query data. Instead, it uses the query that returns a cursor. Then, you can use the cursor to iterate the result set.
5) IndexedDB follows the same-origin policy

An origin is a domain, protocol, and port of a URL of the document where the code executes. For example https://www.javascripttutorial.net:

    domain: javascripttutorial.net
    protocol: https
    port: 443

The https://www.javascripttutorial.net/dom/ and https://www.javascripttutorial.net/ are the same origin because they have the same domain, protocol, and port.

However, the http://www.javascripttutorial.net/ and https://www.javascripttutorial.net/ aren’t the same origin since they have different protocols and ports:
*/
