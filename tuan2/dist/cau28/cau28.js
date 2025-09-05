"use strict";
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
var simulateTask3 = (id, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
};
var batchProcess = async () => {
    let tasks = [
        simulateTask3(1, 1000),
        simulateTask3(2, 2000),
        simulateTask3(3, 1500),
        simulateTask3(4, 1200),
        simulateTask3(5, 1800),
    ];
    let results = await Promise.all(tasks);
    console.log("All tasks completed:");
    console.log(results);
};
batchProcess();
