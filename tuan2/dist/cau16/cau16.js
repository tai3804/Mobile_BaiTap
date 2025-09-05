"use strict";
// 16. Call multiple async functions in parallel using Promise.all().
var async1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 complete");
        }, 1000);
    });
};
var async2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 complete");
        }, 1000);
    });
};
var async3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 complete");
        }, 1000);
    });
};
Promise.all([async1(), async2(), async3()]).then((result) => {
    console.log(result);
});
