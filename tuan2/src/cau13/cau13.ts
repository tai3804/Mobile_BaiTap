// 13. Handle errors using try/catch with async/await.
var promise = new Promise((resolve, reject) => {
  reject("Some thing wrong!...");
});

var func2 = async () => {
  try {
    await promise;
  } catch (err) {
    console.log(err);
  }
};

func2();
