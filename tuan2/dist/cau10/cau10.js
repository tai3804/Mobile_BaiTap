"use strict";
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
var pro = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if (success) {
            resolve("OK");
        }
        else {
            reject("Something went wrong");
        }
    }, 1000);
});
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
