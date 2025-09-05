"use strict";
// 22. Call the API multiple times and log the results.
var callAPI = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    return data;
};
var main = async () => {
    let urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3",
    ];
    for (let url of urls) {
        let result = await callAPI(url);
        console.log(result);
    }
};
main();
