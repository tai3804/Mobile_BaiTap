"use strict";
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
var p1 = new Promise((resolve, reject) => {
    resolve("promise 1 resolve");
});
var p2 = new Promise((resolve, reject) => {
    resolve("promise 2 resolve");
});
var p3 = new Promise((resolve, reject) => {
    resolve("promise 3 resolve");
});
Promise.all([p1, p2, p3])
    .then((text) => console.log(text))
    .catch((err) => console.log(err));
