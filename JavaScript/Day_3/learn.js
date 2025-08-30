// ===================== JavaScript Functions Notes for Backend (Beginner-Friendly) =====================

// 1. Basic Function
// Definition: A reusable block of code that performs a specific task. It returns `undefined` if no return statement is provided.
function hellostudents() {
    console.log("Hello Vinod Garg");
}
hellostudents(); // Output: Hello Vinod Garg
console.log(hellostudents()); // Output: Hello Vinod Garg, undefined

// Technical Backend Usage: Logging server startup
// Detailed Explanation: In backend development, a server (e.g., for a website or app) logs information to help developers monitor its status. A basic function can log a message when the server starts, confirming it’s ready to handle user requests, such as loading a webpage. This aids in debugging and tracking server uptime.
function logServerStart() {
    console.log("Server started at: " + new Date());
}
logServerStart(); // Output: Server started at: [current date and time]
// Why It’s Useful: This function allows developers to confirm the server is operational, ensuring it can respond to user actions like visiting a website.

// User Perspective: Users experience a seamless website or app because the server is verified to be running, providing a reliable experience.

// -----------------------------------------------------------------------------------------------

// 2. Function with Parameters
// Definition: Parameters are placeholders for values passed when calling the function, enabling it to work with different inputs.
function greet(name) {
    console.log("Hello " + name);
}
greet("Vinod"); // Output: Hello Vinod
greet("Rahul"); // Output: Hello Rahul

// Technical Backend Usage: Generating personalized API responses
// Detailed Explanation: In a backend, an API (a system for apps to communicate with the server) often sends customized messages to users. A function with a parameter like `name` can use a user’s name to create a personalized greeting. For example, when a user logs into a social media app, the backend generates a welcome message using their name.
function sendUserGreeting(userName) {
    return `Welcome to the API, ${userName}!`;
}
console.log(sendUserGreeting("Vinod")); // Output: Welcome to the API, Vinod!
// Why It’s Useful: The `userName` parameter enables the function to create tailored responses for APIs, such as personalized dashboards in applications.

// User Perspective: Users see a friendly, personalized greeting (e.g., “Welcome, Vinod!”) upon logging in, making the app feel customized and welcoming.

// -----------------------------------------------------------------------------------------------

// 3. Multiple Parameters
// Definition: Functions can accept multiple parameters to perform complex tasks, such as calculations involving multiple inputs.
function add(a, b) {
    console.log("Sum:", a + b);
}
add(5, 10); // Output: Sum: 15

// Technical Backend Usage: Calculating order totals for an e-commerce website
// Detailed Explanation: In an e-commerce backend, the server calculates the total cost of a user’s purchase. A function with parameters like `price` and `quantity` multiplies these to compute the total, which is displayed in the user’s shopping cart before checkout.
function calculateOrderTotal(price, quantity) {
    return price * quantity;
}
console.log("Order Total:", calculateOrderTotal(20, 3)); // Output: Order Total: 60
// Why It’s Useful: The function uses `price` and `quantity` to compute accurate totals (e.g., 3 items at $20 = $60), essential for correct payment processing in the backend.

// User Perspective: Users see the accurate total cost in their shopping cart, enabling informed purchasing decisions without confusion.

// -----------------------------------------------------------------------------------------------

// 4. Function with Return Value
// Definition: The `return` statement sends a value back to the caller, allowing it to be used elsewhere in the code.
function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 6);
console.log("Result:", result); // Output: Result: 24

// Technical Backend Usage: Validating user password strength
// Detailed Explanation: In a backend, when a user signs up, the server checks if their password is strong (e.g., at least 8 characters). A function can return `true` (valid) or `false` (invalid) based on the password length, which the backend uses to approve or reject the registration.
function validatePasswordLength(password) {
    return password.length >= 8;
}
console.log("Password Valid:", validatePasswordLength("secure123")); // Output: Password Valid: true
// Why It’s Useful: The function returns a boolean (`true` or `false`) that the backend uses to enforce secure password policies, ensuring only strong passwords are accepted.

// User Perspective: Users are prompted to create strong passwords, enhancing account security and building trust in the application.

// -----------------------------------------------------------------------------------------------

// 5. Default Parameters
// Definition: Default parameters provide a fallback value if no argument is passed when calling the function.
function greetUser(name = "Student") {
    console.log("Welcome " + name);
}
greetUser(); // Output: Welcome Student
greetUser("Vinod"); // Output: Welcome Vinod

// Technical Backend Usage: Providing default API success messages
// Detailed Explanation: In a backend, APIs send responses to users (e.g., “Request successful”) after actions like form submissions. A default parameter ensures a generic message is sent if no specific message is provided, preventing empty or unclear responses.
function sendApiResponse(message = "Request successful") {
    return { status: 200, message };
}
console.log(sendApiResponse()); // Output: { status: 200, message: 'Request successful' }
console.log(sendApiResponse("Data fetched")); // Output: { status: 200, message: 'Data fetched' }
// Why It’s Useful: The default parameter ensures the API consistently delivers meaningful responses, even if a custom message isn’t specified, common in REST APIs.

// User Perspective: Users receive clear feedback (e.g., “Request successful”) after actions like submitting a form, making the app user-friendly and understandable.

// -----------------------------------------------------------------------------------------------

// 6. Function Expression
// Definition: A function stored in a variable, allowing it to be treated as a value (e.g., passed or reused).
const square = function(num) {
    return num * num;
};
console.log("Square:", square(5)); // Output: Square: 25

// Technical Backend Usage: Validating file sizes for uploads
// Detailed Explanation: In a backend, when users upload files (e.g., profile pictures), the server verifies if the file size is acceptable. A function expression can calculate the size in KB and return it for validation, enabling reuse across different backend components.
const calculateFileSize = function(bytes) {
    return bytes / 1024; // Convert to KB
};
console.log("File Size (KB):", calculateFileSize(2048)); // Output: File Size (KB): 2
// Why It’s Useful: Storing the function in a variable makes it reusable for multiple upload endpoints, ensuring file size validation prevents server overload.

// User Perspective: Users can upload files (e.g., photos) without errors, as the app checks file sizes, ensuring a smooth upload experience.

// -----------------------------------------------------------------------------------------------

// 7. Arrow Functions
// Definition: Arrow functions offer a concise syntax for writing functions, with implicit return for one-liners. They lack their own `arguments` object.
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
    let a = length + width;
    return a;
};
console.log("Area:", area(4, 5)); // Output: Area: 9

// Comparison with Conventional Functions:
// - Conventional functions use verbose syntax (e.g., `function name() {}`), while arrow functions are more concise (e.g., `() => {}`).
// - Conventional functions have an `arguments` object; arrow functions do not.
// - Note: The `arguments` object is available in Node.js but may return `undefined` in some browser environments for arrow functions.

// Technical Backend Usage: Formatting user data for API responses
// Detailed Explanation: In a backend, APIs format data before sending it to users (e.g., combining first and last names). Arrow functions’ concise syntax is ideal for simple transformations, enhancing code readability and maintainability.
const formatUserData = user => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`
});
const user = { id: 1, firstName: "Vinod", lastName: "Garg" };
console.log("Formatted User:", formatUserData(user)); // Output: Formatted User: { id: 1, fullName: 'Vinod Garg' }
// Why It’s Useful: Arrow functions streamline data formatting tasks, such as preparing user profiles for API responses, reducing code complexity.

// User Perspective: Users see well-formatted data (e.g., their full name on a profile page), making the app appear professional and polished.

// -----------------------------------------------------------------------------------------------

// 10. Rest Parameters
// Definition: Rest parameters (`...`) collect a variable number of arguments into an array, enabling functions to handle dynamic inputs.
function sumAll(a, ...numbers) {
    console.log(a); // First argument is assigned to `a`
    console.log(numbers); // Remaining arguments as an array
    console.log(...numbers); // Spreads array as individual numbers
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of many numbers:", sumAll(1, 2, 3, 4, 5)); 
// Output: 
// 1
// [ 2, 3, 4, 5 ]
// 2 3 4 5
// Sum of many numbers: 14

// Technical Backend Usage: Summing multiple item prices in a shopping cart
// Detailed Explanation: In an e-commerce backend, users add multiple items to their cart, each with a price. Rest parameters allow a function to accept any number of prices and sum them, accommodating carts with varying item counts.
function calculateCartTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
console.log("Cart Total:", calculateCartTotal(10, 20, 30)); // Output: Cart Total: 60
// Why It’s Useful: Rest parameters make the function flexible, handling any number of items without requiring separate functions for different cart sizes, simplifying backend logic.

// User Perspective: Users can add multiple items to their cart and see an accurate total cost, making shopping convenient and straightforward.

// -----------------------------------------------------------------------------------------------

// 11. Arguments Object
// Definition: The `arguments` object is an array-like object available in non-arrow functions, capturing all arguments passed, even if no parameters are defined.
// Note: The `arguments` object is supported in Node.js but may return `undefined` in some browser environments for arrow functions.
function showArguments() {
    console.log(arguments); // Shows all arguments
    console.log("First arg:", arguments[0]);
}
showArguments("Vinod", 22, true);
// Output: [Arguments] { '0': 'Vinod', '1': 22, '2': true }, First arg: Vinod

// Technical Backend Usage: Logging dynamic API request details
// Detailed Explanation: In a backend, APIs receive varied inputs (e.g., request type, URL, or data). The `arguments` object captures all inputs without requiring predefined parameters, useful for debugging or logging user requests (e.g., data sent during login).
function logRequestParams() {
    console.log("Request Parameters:", arguments);
}
logRequestParams("GET", "/users", { id: 1 });
// Output: Request Parameters: [Arguments] { '0': 'GET', '1': '/users', '2': { id: 1 } }
// Why It’s Useful: The `arguments` object dynamically captures all inputs, aiding developers in debugging API issues or tracking user activity without predicting input types or counts.

// User Perspective: Users’ actions (e.g., clicking a button or submitting a form) are processed correctly, as the server logs and handles requests, preventing errors.

// -----------------------------------------------------------------------------------------------

// 12. Higher-Order Functions
// Definition: A higher-order function (HOF) either takes one or more functions as arguments or returns a function as its result. HOFs leverage JavaScript’s ability to treat functions as values, enabling reusable and modular code for tasks like data processing or async operations.

// 12.1. HOF that Takes a Callback
// Definition: This HOF accepts a function as an argument and executes it, allowing flexible behavior based on the callback.
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
// Explanation: `higherOrder` accepts `sayHello` as the `callback` parameter and executes it with `callback()`, running `sayHello` to log the message.

// Technical Backend Usage: Logging user actions with a custom logger
// Detailed Explanation: In a backend (e.g., a Node.js server), logging user actions like button clicks or form submissions is common. An HOF can take a logging function as a callback to log different types of messages. For example, when a user logs in, the backend logs the action (e.g., “User logged in”) using a custom logger function.
function logUserAction(actionLogger) {
    const action = { userId: 1, action: "login", timestamp: new Date() };
    console.log("Processing action...");
    actionLogger(action); // Call the provided logger function
}

function customLogger(action) {
    console.log(`User ${action.userId} performed ${action.action} at ${action.timestamp}`);
}

logUserAction(customLogger); 
// Output: 
// Processing action...
// User 1 performed login at [current date and time]
// Why It’s Useful: The HOF `logUserAction` is versatile, working with any logger function (e.g., for console, file, or database logging), reducing code duplication in backend logging tasks.

// User Perspective: Users benefit indirectly, as the app tracks their actions (e.g., login attempts), ensuring issues are resolved quickly for a reliable experience.

// -----------------------------------------------------------------------------------------------

// 12.2. HOF that Returns a Function
// Definition: An HOF can return a new function customized based on input parameters, enabling dynamic behavior through closure.
function multiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

const double = multiplier(2); // Returns a function that multiplies by 2
console.log("Double of 5:", double(5)); // Output: Double of 5: 10

const triple = multiplier(3); // Returns a function that multiplies by 3
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

// Technical Backend Usage: Creating discount calculators for an e-commerce API
// Detailed Explanation: In an e-commerce backend, different discount rates (e.g., 10%, 20%) are applied to product prices. An HOF can return a function tailored to a specific discount rate, which calculates discounted prices for any product, leveraging closure to remember the rate.
function createDiscountCalculator(discountRate) {
    return function(price) {
        return price * (1 - discountRate / 100);
    };
}

const tenPercentOff = createDiscountCalculator(10); // Returns a function for 10% discount
console.log("Price after 10% discount:", tenPercentOff(100)); // Output: Price after 10% discount: 90

const twentyPercentOff = createDiscountCalculator(20); // Returns a function for 20% discount
console.log("Price after 20% discount:", twentyPercentOff(100)); // Output: Price after 20% discount: 80
// Why It’s Useful: The HOF creates reusable discount functions for various rates, streamlining price calculations in an e-commerce API and avoiding redundant code.

// User Perspective: Users see accurate discounted prices in their shopping cart (e.g., $90 after a 10% discount), enhancing clarity and trust in shopping.

// -----------------------------------------------------------------------------------------------

// 12.3. Built-in HOF - Array.prototype.map()
// Definition: `map` is a built-in HOF that applies a callback function to each array element, returning a new array with the results.
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared); // Output: Squared numbers: [1, 4, 9]

// Technical Backend Usage: Formatting product names for an API response
// Detailed Explanation: In a backend, product data fetched from a database may need formatting (e.g., capitalizing names) before sending to the frontend. `map` applies a formatting function to each product, creating a new array for the API response.
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
// Why It’s Useful: `map` simplifies data transformation in APIs, ensuring consistent formatting (e.g., capitalizing names) without manual array iteration, saving time and reducing errors.

// User Perspective: Users see neatly formatted product names (e.g., “Laptop” instead of “laptop”) in the app, making it professional and easy to read.

// -----------------------------------------------------------------------------------------------

// 12.4. Built-in HOF - Array.prototype.filter()
// Definition: `filter` is a built-in HOF that applies a callback function to each array element, returning a new array with elements for which the callback returns `true`.
const res1 = numbers.filter(num => num % 2 === 0); // Callback returns true for even numbers
console.log("Even numbers:", res1); // Output: Even numbers: [2]

// Technical Backend Usage: Filtering active users for an API response
// Detailed Explanation: In a backend, you might fetch a list of users from a database and need to filter only active users to display in an admin dashboard. `filter` applies a callback to each user, returning a new array with only those users who meet the criteria (e.g., `active: true`).
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
// Why It’s Useful: `filter` simplifies selecting specific data (e.g., active users) for API responses, avoiding manual loops and ensuring clean, maintainable code.

// User Perspective: Users (e.g., admins) see relevant data, like a list of active users in a dashboard, making the app efficient and focused.

// -----------------------------------------------------------------------------------------------

// 12.5. Built-in HOF - Array.prototype.reduce()
// Definition: `reduce` is a built-in HOF that applies a reducer callback to each array element, accumulating a single result (e.g., sum, product) from the array.
const res2 = numbers.reduce((acc, num) => acc + num, 0); // Accumulates sum, starting at 0
console.log("Sum of numbers:", res2); // Output: Sum of numbers: 6

// Technical Backend Usage: Calculating total revenue from sales data
// Detailed Explanation: In an e-commerce backend, you might need to calculate the total revenue from a list of sales amounts. `reduce` applies a callback to sum all amounts, producing a single value for financial reports or analytics dashboards.
function calculateTotalRevenue(sales) {
    return sales.reduce((total, amount) => total + amount, 0);
}

const sales = [100, 200, 300];
console.log("Total Revenue:", calculateTotalRevenue(sales)); // Output: Total Revenue: 600
// Why It’s Useful: `reduce` simplifies aggregating data (e.g., summing sales) into a single value, making it efficient for backend calculations like financial summaries.

// User Perspective: Users (e.g., store managers) see accurate financial metrics, like total revenue, in dashboards, aiding business decisions.

// -----------------------------------------------------------------------------------------------

// 12.6. HOF that Applies a Function Twice
// Definition: This HOF applies a given function to a value twice, returning the final result.
function applyTwice(value, fn) {
    return fn(fn(value)); // Apply fn twice
}

function addTwo(num) {
    return num + 2;
}

console.log("Apply addTwo twice to 2:", applyTwice(2, addTwo)); // Output: Apply addTwo twice to 2: 6
// Explanation: `applyTwice(2, addTwo)` applies `addTwo` to 2 (gives 4), then applies `addTwo` to 4 (gives 6).

// Technical Backend Usage: Applying multiple transformations to user input
// Detailed Explanation: In a backend, you might need to process user input multiple times, such as sanitizing and then formatting a username. An HOF like `applyTwice` can apply a transformation function (e.g., trimming spaces) twice to ensure consistency, useful in data validation pipelines.
function sanitizeInput(input, transformer) {
    return applyTwice(input, transformer);
}

function trimSpaces(str) {
    return str.trim();
}

console.log("Sanitized Input:", sanitizeInput("  hello  ", trimSpaces)); // Output: Sanitized Input: hello
// Why It’s Useful: `applyTwice` ensures a transformation (e.g., trimming) is applied consistently, useful for cleaning user inputs in forms or APIs.

// User Perspective: Users submit forms with clean data (e.g., no extra spaces), ensuring smooth processing and a professional app experience.

// -----------------------------------------------------------------------------------------------

// 12.7. HOF that Returns a Multiplication Function
// Definition: This HOF returns a function that multiplies a number by a fixed value, using closure to remember the multiplier.
function returnMulFunction(num1) {
    return function mul(num2) {
        return num1 * num2;
    };
}

const multiplication = returnMulFunction(5); // Returns a function that multiplies by 5
console.log("Multiply 5 by 2:", multiplication(2)); // Output: Multiply 5 by 2: 10

// Technical Backend Usage: Generating tax calculators for different rates
// Detailed Explanation: In a backend, you might need to apply different tax rates (e.g., 5%, 10%) to order totals. An HOF can return a function for a specific tax rate, which calculates the tax for any amount, using closure to remember the rate.
function createTaxCalculator(taxRate) {
    return function(amount) {
        return amount * (taxRate / 100);
    };
}

const fivePercentTax = createTaxCalculator(5); // Returns a function for 5% tax
console.log("Tax for $100 at 5%:", fivePercentTax(100)); // Output: Tax for $100 at 5%: 5
// Why It’s Useful: The HOF creates reusable tax functions for different rates, simplifying tax calculations in e-commerce APIs.

// User Perspective: Users see accurate tax amounts in their checkout, ensuring transparency and trust in pricing.

// -----------------------------------------------------------------------------------------------

// 12.8. HOF for Filtering Arrays
// Definition: This HOF filters an array using a provided function, returning a new array with elements where the function returns `true`.
function filterArray(arr, fn) {
    return arr.filter(fn);
}

console.log("Filter even numbers:", filterArray([1, 2, 3, 4, 5, 6, 7, 8], num => num % 2 === 0)); 
// Output: Filter even numbers: [2, 4, 6, 8]

// Technical Backend Usage: Filtering valid orders in an e-commerce API
// Detailed Explanation: In an e-commerce backend, you might need to filter orders based on criteria (e.g., paid orders). An HOF like `filterArray` applies a provided function to select valid orders, returning a new array for API responses or reports.
function filterValidOrders(orders, validator) {
    return filterArray(orders, validator);
}

const orders = [
    { id: 1, status: "paid" },
    { id: 2, status: "pending" },
    { id: 3, status: "paid" }
];
console.log("Paid Orders:", filterValidOrders(orders, order => order.status === "paid")); 
// Output: Paid Orders: [{ id: 1, status: 'paid' }, { id: 3, status: 'paid' }]
// Why It’s Useful: The HOF simplifies filtering data based on dynamic criteria, making it reusable for various backend tasks like order management.

// User Perspective: Users (e.g., admins) see relevant data, like paid orders in a dashboard, making the app efficient and focused.

// -----------------------------------------------------------------------------------------------

// 12.9. HOF for Function Composition
// Definition: This HOF composes two functions, applying them in sequence (first the inner function, then the outer function).
function composeFunc(fn1, fn2) {
    return function(x) {
        return fn1(fn2(x)); // Apply fn2, then fn1
    };
}

const double_ = x => x * 2;
const increment = x => x + 1;

const composeF = composeFunc(increment, double_);
console.log("Compose double then increment for 5:", composeF(5)); // Output: Compose double then increment for 5: 11
// Explanation: `composeF(5)` applies `double(5)` (gives 10), then `increment(10)` (gives 11).

// Technical Backend Usage: Chaining data transformations in an API
// Detailed Explanation: In a backend, you might need to transform data in multiple steps (e.g., sanitize and then format). An HOF like `composeFunc` chains two functions, applying them in sequence to process data for API responses.
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
// Why It’s Useful: Function composition allows modular data processing, making it easy to chain transformations in APIs, improving code clarity.

// User Perspective: Users submit data (e.g., usernames) that appears polished in the app (e.g., capitalized with no spaces), enhancing usability.

// -----------------------------------------------------------------------------------------------

// 12.10. HOF that Ensures a Function is Called Once
// Definition: This HOF ensures a function is executed only once, ignoring subsequent calls, using a flag to track execution.
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
logMessage("Hello world"); // No output

// Technical Backend Usage: Ensuring one-time initialization in a server
// Detailed Explanation: In a backend, some tasks, like initializing a database connection, should happen only once when the server starts. An HOF like `once` ensures a function (e.g., setup code) runs only the first time, preventing duplicate operations.
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
// Why It’s Useful: The HOF prevents redundant operations, ensuring critical tasks like database setup occur only once, improving server reliability.

// User Perspective: Users experience a stable app, as the server initializes correctly without errors from repeated setups.

// -----------------------------------------------------------------------------------------------

// Key Points on Higher-Order Functions:
// - HOFs enhance code reusability by accepting or returning functions, like passing `sayHello` to `higherOrder` or returning a function from `multiplier`.
// - They are common in backends for logging, data processing, or async operations (e.g., database queries).
// - Built-in HOFs like `map`, `filter`, and `reduce` are widely used for array operations.
// - Arrow functions are concise for callbacks but lack the `arguments` object, unlike regular functions.
// - In Node.js, HOFs are used in APIs or middleware; in browsers, they handle events or data rendering.

// -----------------------------------------------------------------------------------------------











// -----------------------------------------------------------------------------------------------

// 8. Anonymous Function
// Definition: Anonymous functions are nameless functions, often used for one-time tasks like timers or event handlers.
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000); // Output after 2s: This runs after 2 seconds

// Technical Backend Usage: Implementing rate-limiting checks
// Detailed Explanation: In a backend, rate-limiting prevents users from sending excessive requests, protecting the server from overload. An anonymous function can be used in a timer to check if a user’s request limit resets after a delay, maintaining server stability.
setTimeout(function() {
    console.log("Rate limit check completed");
}, 2000); // Output after 2s: Rate limit check completed
// Why It’s Useful: Anonymous functions are perfect for one-off tasks like delaying actions without needing to name the function, keeping code concise.

// User Perspective: Users enjoy fast app performance, as the server prevents overload, ensuring smooth interactions like clicking buttons or loading pages.

// -----------------------------------------------------------------------------------------------

// 9. Callback Function
// Definition: A callback function is passed as an argument to another function and executed later within it.
function processUserInput(name, callback) {
    callback("Hello " + name);
}
processUserInput("Vinod", function(message) {
    console.log(message); // Output: Hello Vinod
});

// Technical Backend Usage: Fetching data from a database asynchronously
// Detailed Explanation: In a backend, tasks like retrieving user data from a database take time. A callback function allows the server to wait for the data and then process it (e.g., send it to the user). This is common in Node.js for handling database queries without blocking the server.
function fetchUserData(userId, callback) {
    // Simulate async DB query
    setTimeout(() => {
        callback({ id: userId, name: "Vinod Garg" });
    }, 1000);
}
fetchUserData(1, function(data) {
    console.log("User Data:", data); // Output after 1s: User Data: { id: 1, name: 'Vinod Garg' }
});
// Why It’s Useful: Callbacks manage asynchronous tasks (e.g., database queries) without halting the server, allowing it to serve multiple users efficiently.

// User Perspective: Users access their data (e.g., profile information) quickly, making the app responsive and efficient.



// ===================== End of Notes =====================            this code contain some declaration issues , maintain the code an correct it