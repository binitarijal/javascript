// // 1. Basic Callback Function
// function greet(name, callback) {
//     console.log(`Hello ${name}!`);
//     callback();
// }

// function afterGreeting() {
//     console.log("Nice to meet you!");
// }

// greet("John", afterGreeting);

// 2. Anonymous Callback
greet("Sarah", function() {
    console.log("How are you doing?");
});

// 3. Arrow Function Callback
greet("Mike", () => {
    console.log("Have a great day!");
});