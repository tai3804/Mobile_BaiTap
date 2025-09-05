"use strict";
// 17. Use for await...of to iterate over an array of Promises.
var promise1 = new Promise((resolve) => {
    resolve("Task 1 complete");
});
var promise2 = new Promise((resolve) => {
    resolve("Task 2 complete");
});
var promise3 = new Promise((resolve) => {
    resolve("Task 3 complete");
});
var promiseList = [promise1, promise2, promise3];
// Dùng for await...of trong async function
(async () => {
    for await (const result of promiseList) {
        console.log(result);
    }
})();
