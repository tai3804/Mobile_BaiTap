// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
var fetchUser = (id: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`{userID: ${id}, name: "Tai"}`);
    }, 3000);
  });
};

var timeOut = new Promise((resolve, reject) => {
  setTimeout(() => reject("Time out!..."), 2000);
});

Promise.race([fetchUser("01"), timeOut])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
