// // 1. Basic Callback Function
// function greet(name, callback) {
//     console.log(`Hello ${name}!`);
//     callback();
// }

// function afterGreeting() {
//     console.log("Nice to meet you!");
// }

// greet("John", afterGreeting);

// // 2. Anonymous Callback
// greet("Sarah", function() {
//     console.log("How are you doing?");
// });

// // 3. Arrow Function Callback
// greet("Mike", () => {
//     console.log("Have a great day!");
// });


// 4. Array Methods with Callbacks
const numbers = [1, 2, 3, 4, 5];

// forEach callback
numbers.forEach(function(num, index) {
    console.log(`Index ${index}: ${num}`);
});

// map callback
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter callback
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]