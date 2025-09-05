// 15. Call multiple async functions sequentially using await.
var async1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 1000);
  });
};

var async2 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 complete");
    }, 1000);
  });
};

var async3 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 complete");
    }, 1000);
  });
};

(async () => {
  console.log(await async1());
  console.log(await async2());
  console.log(await async3());
})();
