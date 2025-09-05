"use strict";
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
var simulateTask4 = (id, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
};
var queueProcess = async () => {
    let tasks = [
        () => simulateTask4(1, 1000),
        () => simulateTask4(2, 2000),
        () => simulateTask4(3, 1500),
        () => simulateTask4(4, 1200),
        () => simulateTask4(5, 1800),
    ];
    for (let task of tasks) {
        let result = await task(); // chạy tuần tự
        console.log(result);
    }
    console.log("All tasks completed sequentially!");
};
// chạy thử
queueProcess();
