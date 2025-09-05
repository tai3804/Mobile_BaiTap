// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.

var simulateTask = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task done after ${time}ms`);
    }, time);
  });
};

simulateTask(3000).then((text) => console.log(text));
