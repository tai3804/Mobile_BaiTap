// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.
var pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});

pro.catch((error) => {
  console.log("Lỗi:", error);
});
