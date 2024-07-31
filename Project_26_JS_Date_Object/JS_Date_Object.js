/*Date*/
const timeNow = new Date();
console.log(timeNow); // shows current date and time

/*new Date(milliseconds)*/

const time1 = new Date(0);

// epoch time
console.log(time1); // Thu Jan 01 1970 05:30:00

// 100000000000 milliseconds after the epoch time
const time2 = new Date(100000000000);
console.log(time2); // Sat Mar 03 1973 15:16:40
