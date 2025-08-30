// ===================== JavaScript Functions Notes for Backend (Beginner-Friendly) =====================

// 1. Basic Function
// Definition: A reusable block of code that performs a specific task. It returns `undefined` if no return statement is provided.
function hellostudents() {
    console.log("Hello Vinod Garg");
}
hellostudents(); // Output: Hello Vinod Garg
console.log(hellostudents()); // Output: Hello Vinod Garg, undefined

// Technical Backend Usage: Logging server startup
// Detailed Explanation: In backend development, a server logs messages to monitor its status. This function logs a message when the server starts, confirming it’s ready to handle user requests (e.g., loading a webpage). This aids in debugging and tracking server uptime.
function logServerStart() {
    console.log(`Server started at: ${new Date()}`);
}
logServerStart(); // Output: Server started at: [current date and time]
// Why It’s Useful: Confirms the server is operational, ensuring it can respond to user actions like visiting a website.
// User Perspective: Users experience a seamless website or app because the server is verified to be running.

// -----------------------------------------------------------------------------------------------

// 2. Function with Parameters
// Definition: Parameters are placeholders for values passed when calling the function, enabling it to work with different inputs.
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Vinod"); // Output: Hello Vinod
greet("Rahul"); // Output: Hello Rahul

// Technical Backend Usage: Generating personalized API responses
// Detailed Explanation: APIs send customized messages to users. This function uses a `name` parameter to create a personalized greeting, like a welcome message when a user logs into an app.
function sendUserGreeting(userName) {
    return `Welcome to the API, ${userName}!`;
}
console.log(sendUserGreeting("Vinod")); // Output: Welcome to the API, Vinod!
// Why It’s Useful: Enables tailored API responses, such as personalized dashboards.
// User Perspective: Users see a friendly greeting (e.g., “Welcome, Vinod!”), making the app feel customized.

// -----------------------------------------------------------------------------------------------

// 3. Multiple Parameters
// Definition: Functions can accept multiple parameters to perform complex tasks, like calculations.
function add(a, b) {
    console.log("Sum:", a + b);
}
add(5, 10); // Output: Sum: 15

// Technical Backend Usage: Calculating order totals for an e-commerce website
// Detailed Explanation: In an e-commerce backend, this function calculates the total cost by multiplying `price` and `quantity`, displayed in the user’s shopping cart.
function calculateOrderTotal(price, quantity) {
    return price * quantity;
}
console.log("Order Total:", calculateOrderTotal(20, 3)); // Output: Order Total: 60
// Why It’s Useful: Computes accurate totals for payment processing.
// User Perspective: Users see the correct total cost, enabling informed purchases.

// -----------------------------------------------------------------------------------------------

// 4. Function with Return Value
// Definition: The `return` statement sends a value back to the caller for use elsewhere in the code.
function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 6);
console.log("Result:", result); // Output: Result: 24

// Technical Backend Usage: Validating user password strength
// Detailed Explanation: During user signup, the backend checks if a password is strong (e.g., ≥8 characters). This function returns `true` or `false` to approve or reject registration.
function validatePasswordLength(password) {
    return password.length >= 8;
}
console.log("Password Valid:", validatePasswordLength("secure123")); // Output: Password Valid: true
// Why It’s Useful: Enforces secure password policies in the backend.
// User Perspective: Users are prompted for strong passwords, enhancing account security.

// -----------------------------------------------------------------------------------------------

// 5. Default Parameters
// Definition: Default parameters provide a fallback value if no argument is passed.
function greetUser(name = "Student") {
    console.log(`Welcome ${name}`);
}
greetUser(); // Output: Welcome Student
greetUser("Vinod"); // Output: Welcome Vinod

// Technical Backend Usage: Providing default API success messages
// Detailed Explanation: APIs send responses like “Request successful” after actions. A default parameter ensures a generic message if none is provided.
function sendApiResponse(message = "Request successful") {
    return { status: 200, message };
}
console.log(sendApiResponse()); // Output: { status: 200, message: 'Request successful' }
console.log(sendApiResponse("Data fetched")); // Output: { status: 200, message: 'Data fetched' }
// Why It’s Useful: Ensures consistent API responses, common in REST APIs.
// User Perspective: Users receive clear feedback after actions, improving usability.

// -----------------------------------------------------------------------------------------------

// 6. Function Expression
// Definition: A function stored in a variable, treated as a value (e.g., passed or reused).
const square = function(num) {
    return num * num;
};
console.log("Square:", square(5)); // Output: Square: 25

// Technical Backend Usage: Validating file sizes for uploads
// Detailed Explanation: For file uploads (e.g., profile pictures), the backend checks file size. This function converts bytes to KB for validation, reusable across endpoints.
const calculateFileSize = function(bytes) {
    return bytes / 1024; // Convert to KB
};
console.log("File Size (KB):", calculateFileSize(2048)); // Output: File Size (KB): 2
// Why It’s Useful: Reusable for file size validation, preventing server overload.
// User Perspective: Users upload files smoothly, as sizes are checked.

// -----------------------------------------------------------------------------------------------

// 7. Arrow Functions
// Definition: Arrow functions provide concise syntax and implicit return for one-liners. They lack their own `arguments` object.
const squareArrow = (num) => {
    return num * num;
};
console.log("Square using arrow:", squareArrow(6)); // Output: Square using arrow: 36

const cube = num => num * num * num;
console.log("Cube:", cube(3)); // Output: Cube: 27

// Additional Examples
const greet1 = () => console.log("Hello Students");
greet1(); // Output: Hello Students

const add = (num1, num2) => num1 + num2;
console.log(add(5, 6)); // Output: 11

const area = (length, width) => {
    let a = length * width; // Corrected: Multiply for area, not add
    return a;
};
console.log("Area:", area(4, 5)); // Output: Area: 20

// Comparison with Conventional Functions:
// - Conventional functions use verbose syntax (e.g., `function name() {}`); arrow functions are concise (e.g., `() => {}`).
// - Arrow functions do not have an `arguments` object in any environment (Node.js or browsers), unlike regular functions.

// Technical Backend Usage: Formatting user data for API responses
// Detailed Explanation: APIs format data (e.g., combining names) before sending to users. Arrow functions simplify transformations, improving readability.
const formatUserData = user => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`
});
const user = { id: 1, firstName: "Vinod", lastName: "Garg" };
console.log("Formatted User:", formatUserData(user)); // Output: Formatted User: { id: 1, fullName: 'Vinod Garg' }
// Why It’s Useful: Streamlines data formatting for API responses.
// User Perspective: Users see polished data (e.g., full names), enhancing app professionalism.

// -----------------------------------------------------------------------------------------------

// 8. Anonymous Function
// Definition: Nameless functions used for one-time tasks, like timers or event handlers.
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000); // Output after 2s: This runs after 2 seconds

// Technical Backend Usage: Implementing rate-limiting checks
// Detailed Explanation: Rate-limiting prevents excessive user requests. An anonymous function in a timer checks if a limit resets, maintaining server stability.
setTimeout(function() {
    console.log("Rate limit check completed");
}, 2000); // Output after 2s: Rate limit check completed
// Why It’s Useful: Ideal for one-off tasks, keeping code concise.
// User Perspective: Fast app performance due to server overload prevention.

// -----------------------------------------------------------------------------------------------

// 9. Callback Function
// Definition: A function passed as an argument to another function and executed later.
function processUserInput(name, callback) {
    callback(`Hello ${name}`);
}
processUserInput("Vinod", function(message) {
    console.log(message); // Output: Hello Vinod
});

// Technical Backend Usage: Fetching data from a database asynchronously
// Detailed Explanation: Database queries take time. A callback processes data after retrieval, keeping the server responsive (e.g., Node.js).
function fetchUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "Vinod Garg" });
    }, 1000);
}
fetchUserData(1, function(data) {
    console.log("User Data:", data); // Output after 1s: User Data: { id: 1, name: 'Vinod Garg' }
});
// Why It’s Useful: Manages async tasks without blocking the server.
// User Perspective: Users access data quickly, making the app responsive.

// -----------------------------------------------------------------------------------------------

// 10. Rest Parameters
// Definition: Rest parameters (`...`) collect variable arguments into an array for dynamic inputs.
function sumAll(a, ...numbers) {
    console.log(a); // First argument
    console.log(numbers); // Remaining arguments as array
    console.log(...numbers); // Spreads array
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of many numbers:", sumAll(1, 2, 3, 4, 5)); 
// Output:
// 1
// [2, 3, 4, 5]
// 2 3 4 5
// Sum of many numbers: 14

// Technical Backend Usage: Summing multiple item prices in a shopping cart
// Detailed Explanation: In e-commerce, rest parameters sum prices of varying items in a cart, accommodating dynamic cart sizes.
function calculateCartTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log("Cart Total:", calculateCartTotal(10, 20, 30)); // Output: Cart Total: 60
// Why It’s Useful: Flexible for any number of items, simplifying backend logic.
// User Perspective: Accurate cart totals make shopping straightforward.

// -----------------------------------------------------------------------------------------------

// 11. Arguments Object
// Definition: Available in non-arrow functions, an array-like object capturing all arguments passed.
// Note: Not available in arrow functions in any environment (Node.js or browsers).
function showArguments() {
    console.log(arguments); // All arguments
    console.log("First arg:", arguments[0]);
}
showArguments("Vinod", 22, true);
// Output: 
// [Arguments] { '0': 'Vinod', '1': 22, '2': true }
// First arg: Vinod

// Technical Backend Usage: Logging dynamic API request details
// Detailed Explanation: APIs receive varied inputs. The `arguments` object captures them for debugging or logging (e.g., login requests).
function logRequestParams() {
    console.log("Request Parameters:", arguments);
}
logRequestParams("GET", "/users", { id: 1 });
// Output: Request Parameters: [Arguments] { '0': 'GET', '1': '/users', '2': { id: 1 } }
// Why It’s Useful: Dynamically captures inputs for debugging API issues.
// User Perspective: Actions like form submissions are processed correctly.

// -----------------------------------------------------------------------------------------------

// 12. Higher-Order Functions
// Definition: Functions that take functions as arguments or return functions, enabling reusable, modular code.

// 12.1. HOF that Takes a Callback
function higherOrder(callback) {
    console.log("Executing the callback...");
    callback();
}
function sayHello() {
    console.log("Hello from the callback!");
}
higherOrder(sayHello); 
// Output:
// Executing the callback...
// Hello from the callback!

// Technical Backend Usage: Logging user actions
// Detailed Explanation: Logs actions like login. The HOF uses a callback for flexible logging.
function logUserAction(actionLogger) {
    const action = { userId: 1, action: "login", timestamp: new Date() };
    console.log("Processing action...");
    actionLogger(action);
}
function customLogger(action) {
    console.log(`User ${action.userId} performed ${action.action} at ${action.timestamp}`);
}
logUserAction(customLogger); 
// Output:
// Processing action...
// User 1 performed login at [current date and time]
// Why It’s Useful: Versatile for various logging needs, reducing code duplication.
// User Perspective: Reliable app experience due to tracked actions.

// 12.2. HOF that Returns a Function
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log("Double of 5:", double(5)); // Output: Double of 5: 10
const triple = multiplier(3);
console.log("Triple of 4:", triple(4)); // Output: Triple of 4: 12

// Additional Example
function greet(name) {
    return function(message) {
        console.log(`${message}, ${name}`);
    };
}
let greetfn = greet("Vinod");
greetfn("Hello"); // Output: Hello, Vinod
let greetfn2 = greet("Vineet");
greetfn2("hiii!!"); // Output: hiii!!, Vineet

// Technical Backend Usage: Creating discount calculators
// Detailed Explanation: Returns functions for specific discount rates to calculate discounted prices.
function createDiscountCalculator(discountRate) {
    return function(price) {
        return price * (1 - discountRate / 100);
    };
}
const tenPercentOff = createDiscountCalculator(10);
console.log("Price after 10% discount:", tenPercentOff(100)); // Output: Price after 10% discount: 90
const twentyPercentOff = createDiscountCalculator(20);
console.log("Price after 20% discount:", twentyPercentOff(100)); // Output: Price after 20% discount: 80
// Why It’s Useful: Reusable discount functions for e-commerce APIs.
// User Perspective: Accurate discounted prices enhance trust.

// 12.3. Built-in HOF - Array.prototype.map()
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared); // Output: Squared numbers: [1, 4, 9]

// Technical Backend Usage: Formatting product names
// Detailed Explanation: Formats product data (e.g., capitalizing names) for API responses.
function formatProductNames(products) {
    return products.map(product => ({
        ...product,
        name: product.name.charAt(0).toUpperCase() + product.name.slice(1)
    }));
}
const products = [
    { id: 1, name: "laptop" },
    { id: 2, name: "phone" }
];
console.log("Formatted Products:", formatProductNames(products)); 
// Output: Formatted Products: [
//   { id: 1, name: 'Laptop' },
//   { id: 2, name: 'Phone' }
// ]
// Why It’s Useful: Simplifies data transformation for APIs.
// User Perspective: Polished product names enhance app professionalism.

// 12.4. Built-in HOF - Array.prototype.filter()
const res1 = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", res1); // Output: Even numbers: [2]

// Technical Backend Usage: Filtering active users
// Detailed Explanation: Filters active users for admin dashboards.
function filterActiveUsers(users) {
    return users.filter(user => user.active);
}
const users = [
    { id: 1, name: "Vinod", active: true },
    { id: 2, name: "Rahul", active: false },
    { id: 3, name: "Alice", active: true }
];
console.log("Active Users:", filterActiveUsers(users)); 
// Output: Active Users: [
//   { id: 1, name: 'Vinod', active: true },
//   { id: 3, name: 'Alice', active: true }
// ]
// Why It’s Useful: Simplifies selecting relevant data for APIs.
// User Perspective: Admins see focused data, like active users.

// 12.5. Built-in HOF - Array.prototype.reduce()
const res2 = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", res2); // Output: Sum of numbers: 6

// Technical Backend Usage: Calculating total revenue
// Detailed Explanation: Sums sales amounts for financial reports.
function calculateTotalRevenue(sales) {
    return sales.reduce((total, amount) => total + amount, 0);
}
const sales = [100, 200, 300];
console.log("Total Revenue:", calculateTotalRevenue(sales)); // Output: Total Revenue: 600
// Why It’s Useful: Efficient for aggregating data in backends.
// User Perspective: Managers see accurate financial metrics.

// 12.6. HOF that Applies a Function Twice
function applyTwice(value, fn) {
    return fn(fn(value));
}
function addTwo(num) {
    return num + 2;
}
console.log("Apply addTwo twice to 2:", applyTwice(2, addTwo)); // Output: Apply addTwo twice to 2: 6

// Technical Backend Usage: Applying multiple transformations
// Detailed Explanation: Processes user input (e.g., trimming spaces) multiple times for consistency.
function sanitizeInput(input, transformer) {
    return applyTwice(input, transformer);
}
function trimSpaces(str) {
    return str.trim();
}
console.log("Sanitized Input:", sanitizeInput("  hello  ", trimSpaces)); // Output: Sanitized Input: hello
// Why It’s Useful: Ensures consistent data cleaning in APIs.
// User Perspective: Clean data submission enhances usability.

// 12.7. HOF that Returns a Multiplication Function
function returnMulFunction(num1) {
    return function mul(num2) {
        return num1 * num2;
    };
}
const multiplication = returnMulFunction(5);
console.log("Multiply 5 by 2:", multiplication(2)); // Output: Multiply 5 by 2: 10

// Technical Backend Usage: Generating tax calculators
// Detailed Explanation: Creates functions for specific tax rates.
function createTaxCalculator(taxRate) {
    return function(amount) {
        return amount * (taxRate / 100);
    };
}
const fivePercentTax = createTaxCalculator(5);
console.log("Tax for $100 at 5%:", fivePercentTax(100)); // Output: Tax for $100 at 5%: 5
// Why It’s Useful: Reusable tax calculations for e-commerce.
// User Perspective: Accurate tax amounts ensure pricing transparency.

// 12.8. HOF for Filtering Arrays
function filterArray(arr, fn) {
    return arr.filter(fn);
}
console.log("Filter even numbers:", filterArray([1, 2, 3, 4, 5, 6, 7, 8], num => num % 2 === 0)); 
// Output: Filter even numbers: [2, 4, 6, 8]

// Technical Backend Usage: Filtering valid orders
// Detailed Explanation: Filters orders (e.g., paid) for API responses.
function filterValidOrders(orders, validator) {
    return filterArray(orders, validator);
}
const orders = [
    { id: 1, status: "paid" },
    { id: 2, status: "pending" },
    { id: 3, status: "paid" }
];
console.log("Paid Orders:", filterValidOrders(orders, order => order.status === "paid")); 
// Output: Paid Orders: [
//   { id: 1, status: 'paid' },
//   { id: 3, status: 'paid' }
// ]
// Why It’s Useful: Reusable for filtering data in backends.
// User Perspective: Admins see relevant data, like paid orders.

// 12.9. HOF for Function Composition
function composeFunc(fn1, fn2) {
    return function(x) {
        return fn1(fn2(x)); // fn2 first, then fn1
    };
}
const double_ = x => x * 2;
const increment = x => x + 1;
const composeF = composeFunc(increment, double_);
console.log("Compose double then increment for 5:", composeF(5)); // Output: Compose double then increment for 5: 11

// Technical Backend Usage: Chaining data transformations
// Detailed Explanation: Chains transformations (e.g., sanitize, then format) for API data.
function processUserInput(input, sanitizer, formatter) {
    const composed = composeFunc(formatter, sanitizer);
    return composed(input);
}
function sanitizeInput(str) {
    return str.trim();
}
function capitalizeInput(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Processed Input:", processUserInput("  hello  ", sanitizeInput, capitalizeInput)); 
// Output: Processed Input: Hello
// Why It’s Useful: Modular data processing for APIs.
// User Perspective: Polished data display enhances usability.

// 12.10. HOF that Ensures a Function is Called Once
function once(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
}
const logMessage = once(msg => console.log(msg));
logMessage("Hello world"); // Output: Hello world
logMessage("Hello world"); // No output

// Technical Backend Usage: Ensuring one-time initialization
// Detailed Explanation: Ensures tasks like database setup run once on server start.
function initializeServer(setupFn) {
    const runOnce = once(setupFn);
    return runOnce;
}
function setupDatabase() {
    console.log("Database initialized");
}
const initOnce = initializeServer(setupDatabase);
initOnce(); // Output: Database initialized
initOnce(); // No output
// Why It’s Useful: Prevents redundant operations, improving server reliability.
// User Perspective: Stable app due to correct initialization.

// -----------------------------------------------------------------------------------------------

// Key Points on Higher-Order Functions:
// - HOFs enhance reusability by accepting or returning functions.
// - Common in backends for logging, data processing, or async tasks.
// - Built-in HOFs like `map`, `filter`, and `reduce` simplify array operations.
// - Arrow functions lack `arguments` object; regular functions have it.
// - Used in Node.js for APIs/middleware; in browsers for events/data rendering.

// ===================== End of Notes =====================