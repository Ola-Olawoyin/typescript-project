"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
let userName;
userName = "Ola";
console.log(userName);
function addTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(addTwoNumbers(4, 5));
let age = 36; //Can assign string or number value
age = "Thirty-six";
//Arrays
let hobbies = ['Sport', 'Cooking'];
let users;
hobbies.push(10);
console.log(hobbies);
//Working with Tuples
let possibleResults; //An array of fixed type and length
possibleResults = [1, 3];
possibleResults.pop();
possibleResults.push(10);
console.log(possibleResults);
//Objects
let user = {
    name: 'Ola',
    age: 38,
    hobbies: ['Reading', 'Dancing'],
    role: {
        description: 'Admin',
        id: 1234
    }
};
console.log(user.role.description);
let val = 'Some Text'; // Not an empty object but means any other value that is not null or undefined
let data;
data = {
    entry1: 'Some string',
    entry2: 1
};
let userRole = 'guest';
userRole = 'admin';
function access(role) {
}
/*
   Function return type
   If a funcion has two parameters with the same type, the return type is inferred to be that type
   If a function does not return anything, the return type is void
   The void return type can be overridden to never, especially when the function is not expected to complete.
*/
//The return type is number
function add(num1, num2) {
    return num1 + num2;
}
//The return type is void
function log(message) {
    console.log(message);
}
//Explicitly setting return type to never to make sure the function can never be used where a value is expected
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(callBack) {
    callBack('Job done!');
}
performJob(log);
let userOne = {
    name: 'Ola',
    age: 44,
    role: userRole,
    greet() {
        console.log('Hello There!');
        return this.role;
    },
};
console.log(userOne.greet());
/*
/Special Types
Using ? operator to check if a union type could potentially cause an error
! can also be used with declaring the element
A better way to handle it is to write an if statement

Typecasting this is converting HTMLElement for example to a more
specific type e.g. HTMLInputElement
*/
const inputEl = document.getElementById('user-name');
//  if(!inputEl){
//      throw new Error('No HTML element found')
//  }
console.log(inputEl?.value);
/*
Unknown Type
When we don't know the potential value of a parameter in function, we can use unknown type.
The unknown type forces us to to add some if statement
*/
function process(val) {
    if (typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function')
        val.log();
}
/**
 * Optional Values & Typescript
 * Include a ? after a parameter to signify that the parameter is optional
 * you can also set up optional properties, like in an object
 */
function generateError(msg) {
    throw new Error(msg);
}
generateError();
/**
 * Nullish Coalescing
 * ?? checks for either null or undefined
 */
let input = '';
const didProvideInput = input ?? false;
//# sourceMappingURL=basics.js.map