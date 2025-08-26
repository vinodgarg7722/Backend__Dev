// Console Output
console.log("Hello Student");
console.log("All set to start");
console.log(); // Empty console.log() creates a blank line

// Variables -> Containers for data
// var: Older way, can be reassigned, globally or function-scoped
// let: Modern way, can be reassigned, block-scoped
// const: Modern way, cannot be reassigned, block-scoped
// Preferred: Use 'let' for variables that need reassignment, 'const' for constants

// Naming Conventions for Variables
// Start with: a-z, A-Z, _, $
// In between: Letters, numbers (0-9), _, $
// Restrictions: No spaces, no JavaScript keywords (e.g., if, else, function)
// Suggestions:
// - Use camelCase (e.g., vinodGarg)
// - Choose meaningful and descriptive variable names

// Data Types -> Primitive and Non-Primitive
// Primitive: String, Number, BigInt, Boolean, undefined, null, Symbol
// Non-Primitive: Arrays, Objects

// String: Sequence of characters
let name = "vinod";
let name1 = "garg";
console.log(name, name1); // Output: vinod garg

// Number: Integers or floating-point numbers
let age = 73; // Integer
let profit = -200; // Negative number
let marks = 99.7; // Floating-point number
console.log(age); // Output: 73

// BigInt: For large integers beyond Number's limit
let largeNum = 9999999999520215202n;
console.log(largeNum.toString()); // Output: 9999999999520215202

// Boolean: Represents true or false
let amProfessional = true;
let amLate = false;
console.log(amProfessional); // Output: true
console.log(amLate); // Output: false

// undefined: A variable declared but not assigned a value
let school;
console.log(school); // Output: undefined

// null: Represents the intentional absence of a value
let hobby = null;
console.log(hobby); // Output: null

// Difference between null and undefined:
// - undefined: Variable declared but no value assigned (automatic by JavaScript).
// - null: Explicitly set to indicate no value.

// Symbol: Used for unique identifiers
let id = Symbol("id");
let id1 = Symbol("id");
console.log(id === id1); // Output: false (Symbols are unique, even with the same description)

// Non-Primitive Data Types

// Arrays: Ordered collections of data
let colors = ["red", "yellow", "blue"];
let numbers = [4, 5, 3, 6, 15, 2];
console.log(colors); // Output: [ 'red', 'yellow', 'blue' ]
console.log(numbers); // Output: [ 4, 5, 3, 6, 15, 2 ]

// Objects: Key-value pairs for storing complex data
let person = {
  name: "Vinod garg",
  age: 23,
  isEmployed: false
};
console.log(person); // Output: { name: 'Vinod garg', age: 23, isEmployed: false }

// typeof Operator: Returns the data type of a variable
console.log(typeof age); // Output: number
console.log(typeof name); // Output: string
console.log(typeof largeNum); // Output: bigint
console.log(typeof amProfessional); // Output: boolean
console.log(typeof school); // Output: undefined
console.log(typeof hobby); // Output: object (Note: null returns 'object' due to a historical JavaScript quirk)
console.log(typeof id); // Output: symbol
console.log(typeof colors); // Output: object (Arrays are a type of object)
console.log(typeof person); // Output: object

// Mathematical Operators
let x = 5;
let y = 3;
console.log(x + y); // Output: 8 (Addition)
console.log(x * y); // Output: 15 (Multiplication)
console.log(x / y); // Output: 1.6666666666666667 (Division)
console.log(x % y); // Output: 2 (Modulus - remainder of division)
console.log(x ** y); // Output: 125 (Exponentiation - x raised to the power of y)

// Assignment Operators
let a = 10; // Assigns 10 to a
console.log(a); // Output: 10
a = a + 5; // Adds 5 to a
console.log(a); // Output: 15
a += 5; // Shorthand for a = a + 5
console.log(a); // Output: 20

// Comparison Operators
let p = 10;
let q = "10";
console.log(p == q); // Output: true (Equal, compares value only)
console.log(p === q); // Output: false (Strict equal, compares value and type)
console.log(p != q); // Output: false (Not equal, compares value only)
console.log(p !== q); // Output: true (Strict not equal, compares value and type)
console.log(p > q); // Output: false (Greater than)
console.log(p < q); // Output: false (Less than)
console.log(p <= q); // Output: true (Less than or equal to)
console.log(p >= q); // Output: true (Greater than or equal to)

// Logical Operators
let a1 = true;
let b1 = false;
console.log(a1 && b1); // Output: false (Logical AND - true if both operands are true)
console.log(a1 || b1); // Output: true (Logical OR - true if at least one operand is true)
console.log(!a1); // Output: false (Logical NOT - negates the boolean value)
console.log(!b1); // Output: true (Logical NOT - negates the boolean value)

// Ternary Operator
// Syntax: condition ? valueIfTrue : valueIfFalse
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult (age is 73, so condition is true)

// Bitwise Operators
// Operate on binary representations of numbers
let m = 5; // Binary: 0101
let n = 3; // Binary: 0011
console.log(m & n); // Output: 1 (Bitwise AND - 0101 & 0011 = 0001)
console.log(m | n); // Output: 7 (Bitwise OR - 0101 | 0011 = 0111)
console.log(m ^ n); // Output: 6 (Bitwise XOR - 0101 ^ 0011 = 0110)
console.log(~m); // Output: -6 (Bitwise NOT - Inverts bits, result is -(m + 1))
console.log(m << 1); // Output: 10 (Left shift - 0101 << 1 = 1010)
console.log(m >> 1); // Output: 2 (Right shift - 0101 >> 1 = 0010)
console.log(m >>> 1); // Output: 2 (Unsigned right shift - 0101 >>> 1 = 0010)