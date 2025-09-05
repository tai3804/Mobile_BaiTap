// 24. Write an async function postData() that sends a POST request to a test API.
// https://jsonplaceholder.typicode.com/todos/tai
// 24. Write an async function postData() that sends a POST request to a test API.
var postData = async (url: string, data: any) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 👈 báo cho server biết mình gửi JSON
    },
    body: JSON.stringify(data), // 👈 convert object -> JSON string
  });

  let result = await res.json(); // nhận response JSON
  return result;
};

var main = async () => {
  let newTodo = {
    userId: 1,
    title: "Learn TypeScript Async",
    completed: false,
  };

  let response = await postData(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo
  );

  console.log("Server response:", response);
};
main();
