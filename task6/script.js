// Task 6 - Login Validation
let username = prompt("Enter your username:");

if (username === null || username.trim() === "") {
    console.warn("Warning: Username is empty.");
} else {
    console.log("Login Successful: " + username);
}