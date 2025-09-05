"use strict";
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
Promise.resolve(2) // bắt đầu với số 2
    .then((num) => num * num) // bình phương: 2 * 2 = 4
    .then((num) => num * 2) // nhân đôi: 4 * 2 = 8
    .then((num) => num + 5) // cộng 5: 8 + 5 = 13
    .then((result) => {
    console.log("Kết quả:", result); // in ra 13
})
    .catch((error) => {
    console.error("Có lỗi:", error);
});
