"use strict";
// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if
// the API call fails.
var fetchWithRetry = async (url, retries = 3) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            let data = await res.json();
            console.log(`Success on attempt ${attempt}`);
            return data;
        }
        catch (err) {
            console.log(`Attempt ${attempt} failed:`, err);
            if (attempt === retries) {
                throw new Error("All retries failed");
            }
            // chờ 1s trước khi retry lần tiếp theo
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
};
// Test
(async () => {
    try {
        let data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Final result:", data);
    }
    catch (err) {
        console.error("Error after retries:", err);
    }
})();
