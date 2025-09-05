// 4. Use .then() and .catch() to handle a Promise that returns a random number.
var promise = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  if (num > 2) {
    resolve(num);
  } else {
    reject(`The number is to small! (${num})`);
  }
});

promise.then((num) => console.log(num)).catch((err) => console.log(err));
