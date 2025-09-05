// 23. Write an async function that fetches a list of todos and filters out those that are not
// completed.
var callAPI = async (url: string) => {
  let res = await fetch(url);
  let data = await res.json();
  return data;
};
var users: any[] = [];

var main = async () => {
  for (let i = 1; i <= 10; i++) {
    let result = await callAPI(
      `https://jsonplaceholder.typicode.com/todos/${i}`
    );
    console.log(result);
    if (result.completed == true) {
      users.push(result);
    }
  }
};

(async () => {
  await main();
  console.log("List user have completed: ");
  users.forEach((u) => console.log(u));
})();
