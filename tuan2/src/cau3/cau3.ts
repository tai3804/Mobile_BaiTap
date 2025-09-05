// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// second.

var promise = new Promise((reject) => {
    reject("Something went wrong");
});

var func3 = async () => {
    try {
        await promise.catch((error) => {
            setTimeout(() => {
                console.log(error); // In lỗi sau 1 giây
            }, 1000);
        });
    } catch (error) {
        console.log("Caught an error: ", error);
    }
};

console.log("hi"); // Sẽ được in ra trước vì không phải là bất đồng bộ

func3();

// 4. Use .then() and .catch() to handle a Promise that returns a random number.
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// 7. Use Promise.race() to return whichever Promise resolves first.
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).