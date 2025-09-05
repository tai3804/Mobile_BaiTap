// 7. Use Promise.race() to return whichever Promise resolves first.
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 1 resolve"), 3000);
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 2 resolve first"), 1000);
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 3 resolve"), 3000);
});

Promise.race([p1, p2, p3])
  .then((text) => console.log(text))
  .catch((err) => console.log(err));
