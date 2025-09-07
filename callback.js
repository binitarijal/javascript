// 1. Basic Callback Function
function greet(name, callback) {
    console.log(`Hello ${name}!`);
    callback();
}

function afterGreeting() {
    console.log("Nice to meet you!");
}

greet("John", afterGreeting);