// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
var promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async")
  }, 2000);
});

var func = async () => {
  promise.then((result) => {
    console.log(result);
  })
}

func()