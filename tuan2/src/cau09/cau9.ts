// 9. Write a Promise that reads an array after 1 second and filters even numbers.

var getEvenNumbers = (nums: number[]) => {
  return new Promise((resolve, reject) => {
    let evens = nums.filter((num) => {
      return num % 2 == 0;
    });

    if (evens.length > 0) resolve(evens);
    else reject("dont have any even number in array!");
  });
};

getEvenNumbers([1, 2, 3, 4, 5, 6]).then((evens) => console.log(evens));
