// // =========================
// // CONDITIONAL STATEMENTS
// // =========================

// // Inside if() → values operate as true or false

// let age = 18;
// if (age >= 18) {
//     console.log("I am an adult");
// } else {
//     console.log("I am a kid");
// }


// // =========================
// // MULTIPLE CONDITIONS
// // =========================

// let age_1 = 20;
// if (age_1 >= 50) {
//     console.log("I am an Old person");
// } else if (age_1 >= 20 && age_1 < 50) {
//     console.log("I am a middle-aged person");
// } else if (age_1 >= 13 && age_1 < 20) {
//     console.log("I am a teen");
// } else {
//     console.log("I am a kid");
// }


// // =========================
// // NESTED CONDITIONS
// // =========================

// let age_3 = 11;
// let hasTicket = true;

// if (age_3 >= 18) {
//     if (hasTicket) {
//         console.log("Please enter the party hall");
//     } else {
//         console.log("Please purchase the ticket");
//     }
// } else {
//     console.log("You are under age");
// }


// // =========================
// // SWITCH STATEMENT
// // =========================
// // Used when we have fixed number of options

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// // ⚠️ If 'break' is not used → all cases after matching case will be executed


// // =========================
// // LOOPS
// // =========================

// // 1. For loop
// for (let i = 0; i <= 3; i++) {
//     console.log(i);   // 0,1,2,3
// }

// for (let i = 5; i > 0; i--) {
//     console.log(i);   // 5,4,3,2,1
// }

// // ⚠️ If condition is missing or wrong → leads to infinite loop
// // Example: for ( ; ; ) { console.log("Infinite loop!"); }


// // 2. While loop → when we don't know how many times loop will run
// let num = 5;
// while (num > 0) {
//     console.log("Hello from Vinod");
//     num--;
// }


// // 3. Do-While loop → runs at least once even if condition is false
// let count = 0;
// do {
//     console.log("Runs at least once");
//     count++;
// } while (count < 1);


// // =========================
// // NESTED LOOPS
// // =========================

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         for (let k = 0; k < 3; k++) {
//             console.log(i, j, k);
//         }
//     }
// }

// // Nested while loop → Example
// let i = 0;
// while (i < 2) {
//     let j = 0;
//     while (j < 2) {
//         console.log("i:", i, "j:", j);
//         j++;
//     }
//     i++;
// }


// // =========================
// // BREAK & CONTINUE
// // =========================

// // break → exit loop immediately
// for (let x = 1; x <= 5; x++) {
//     if (x === 3) break; // exits when x=3
//     console.log("Break example:", x);
// }

// continue → skip current iteration
for (let y = 1; y <= 5; y++) {
    if (y === 3) continue; // skips when y=3
    console.log("Continue example:", y);
}



// 3. Do-While loop → runs at least once even if condition is false
let count = 0;
do {
    console.log("Do-While Example: Runs at least once");
    count++;
} while (count < 3);
