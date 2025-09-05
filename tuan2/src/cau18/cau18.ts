// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// object after 1 second).

var fetchUser = (id: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`{userID: ${id}, name: "Tai"}`);
    }, 1000);
  });
};

(async () => {
  console.log(await fetchUser("user01"));
})();
