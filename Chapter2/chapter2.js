// let msg = 'Hello!'; 
// onsole.log(msg);

// let user = 'John', age = 25, message = 'Hello';
// console.log(`My name is ${user}, I am ${age} years old. ${message}`);

// let msg = "This";
// // console.log(msg);
// msg = "That"; 
// console.log(msg);

// constant
// const myBirthday = '18.04.1982';
// console.log(myBirthday);
// myBirthday = '01.01.2001';
// console.log(myBirthday);

// variable
// var name = "John";
// var name = "Jane"
// var gender = "M";
// console.log(`${name},${gender}`);

// let grocery = new Array();
// empty array
let grocery = [];

let fruit = ["melon","lemon","melon"];
// console.log(fruit[1])
// console.log(fruit[0])
// console.log(fruit[2])

// fruit[1] = "Peach";
// console.log(fruit)

// for (i=0; i<fruit.length; i++){
//     console.log(fruit[i])
// };

// let arr = new Array(2);
// console.log( arr.length );
// arr = ["Melon","lemon","kiwi"];
// console.log( arr );

// Add Item at the end of array
fruit.push("Pear");
console.log( fruit );

// Add Item at the begin of array
fruit.unshift('Apple');
console.log( fruit );

// delete the last item
console.log(fruit.pop())
console.log( fruit );   

// delete the first item
fruit.shift('Apple');
console.log( fruit );

// first occurance of the name
console.log(fruit.indexOf('melon'));

// last occurance of the name
console.log(fruit.lastIndexOf('melon'));

