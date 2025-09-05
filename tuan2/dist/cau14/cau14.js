"use strict";
// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
var tripleNum = async (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
};
(async () => {
    console.log(await tripleNum(1));
})();
