// 12. Write an async function that calls simulateTask(2000) and logs the result.
var simulateTask2 = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, time);
  });
};

var func = async () => {
  let temp = await simulateTask2(2000);
  console.log(temp);
};

func();
