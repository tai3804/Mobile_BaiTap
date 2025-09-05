"use strict";
// 11. Convert Exercise 1 into async/await.
const getMessage = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
};
// Hàm async gọi và await kết quả
let func1 = async () => {
    const result = await getMessage();
    console.log(result);
};
func1();
