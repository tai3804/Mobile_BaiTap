"use strict";
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
// Một Promise đơn giản
var pro = new Promise((resolve, reject) => {
    const success = true; // thử đổi thành false để test
    setTimeout(() => {
        if (success) {
            resolve("OK");
        }
        else {
            reject("Something went wrong");
        }
    }, 1000);
});
// Sử dụng then / catch / finally
pro
    .then((value) => {
    console.log("complete:", value);
})
    .catch((err) => {
    console.log("errr:", err);
})
    .finally(() => {
    console.log("Done");
});
