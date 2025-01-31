// Function definition
// add two numbers, (2,3)
// 2+ 3
// 4,6, 4 + 6

// function name(arg) {
// }

function addNumbers(a, b) {
    if (a > b ) {
        a = b - 1 // New line
    }
    return a + b + 5
}

// function to alert hello
function sayHello() {
    alert("Hello")
}

function getName(yourName) {
    return yourName
} 
// Return values

// Parameters and arguments
// Arrow functions
const callMessage = () => alert("Hello");

const getNewName = (yourName="Sumitha") => {
    return yourName
}

const getNewName2 = (yourName) => yourName

let myName = getNewName()
// console.log(myName)


// code 1
2+ 3 + 5
addNumbers(2, 3)

// code 2
addNumbers(2, 5)

// code 3
addNumbers(2, 7)

// Calling a function
addNumbers(2, 7)



// Callbacks
// A function passed as an argument to another function
function bake(callback, ingredients){
    console.log(`Mix together ${ingredients}...`);
    console.log('Bake in the oven...');
    callback();
    }

const addIcing = () => console.log('Add icing on top...')

bake(addIcing,'flour, water & sugar')

// Choosing the right type of function

// MyHouse
// Kitchen - > cook -> check if there is ingredients 
//                    -> If no ingredients -> order pizza
// LivingRoom - > 
// Washroom ->
// BedRoom -> 


// Problem of the day
// Write a function diagonalSum that takes a square matrix (2D array) 
// and returns the sum of the elements on both the main diagonal 
// and the secondary diagonal.

// Example:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(diagonalSum(matrix)); // Output: 25