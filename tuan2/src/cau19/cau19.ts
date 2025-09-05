// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each
// ID.
var fetchUser = (id: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`{userID: ${id}, name: "Tai"}`);
    }, 1000);
  });
};

var fetchUsers = async (ids: string[]) => {
  let users: string[] = [];
  for (let id of ids) {
    let user = await fetchUser(id); // đợi từng fetchUser xong
    users.push(user);
  }
  return users;
};

// Test
fetchUsers(["1", "2", "3"]).then(console.log);
