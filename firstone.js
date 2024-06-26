console.log("hello world");

//first arrow function, one argument
let square = x => x * x;
console.log(square(5)); 

//second arrrow function two arguments
let add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//third arrow function no arguments
let greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

//fourth arrow function multiple lines
let sum = (a, b,c) => {
    let result = a + b+c;
    return result;
};
console.log(sum(2,3,5)); 
