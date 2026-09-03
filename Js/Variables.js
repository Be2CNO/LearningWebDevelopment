// Learning Variables in JS -> let ; const ; var 

let name1 = "Wick";  // a variable that can be reassigned.
var name2 = "John";  // Older way to assign variable, Function-scoped.
const name3 = "Babayaga"; // a variable that cannot be reassigned.
 

console.log("name1");
console.log(name2);
console.log(name3);

let nice = true;
console.log(nice);
nice = "Good";
console.log(nice);
nice = 22;
console.log(nice);

name = "Ghost";
name1 = "Ryan";

var myName = "whoami";
let mrRobo = "Eliot";
const mahilaMitr = "Shayla";

console.log(mrRobo);
console.log(myName);
console.log(mahilaMitr);

mrRobo = "david";
myName = "Vera";
console.log(mrRobo);
console.log(myName);

// curly bractets help to redefine in diff blocks

{
    let a = 34;
    // let a = 84; -- error
    console.log(a)
}
{
    let a = 57
    console.log(a)  // no error
}

