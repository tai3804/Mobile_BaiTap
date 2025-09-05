"use strict";
// 26. Use async/await with setTimeout to simulate a 5-second wait.
// 26. Use async/await with setTimeout to simulate a 5-second wait.
var wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
var main = async () => {
    console.log("Start waiting...");
    await wait(5000); // 👈 chờ 5 giây
    console.log("5 seconds passed!");
};
main();
