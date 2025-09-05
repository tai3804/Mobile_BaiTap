// 21. Use fetch to get data from a public API (e.g.,
// https://jsonplaceholder.typicode.com/todos/1).

(async () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => data.json())
    .then((data) => console.log(data));
})();
