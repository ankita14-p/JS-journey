const name="Ankita";
const repocount=8;
console.log(`Hello I am ${name} and my repocount is ${repocount}`);  //String Interpolation: Allocating placeholders to strings
// Another method to declare a string
const gamename=new String('Ankeeta'); //object with key value pairs
console.log(typeof gamename);  //object
console.log(typeof name);     //string
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

console.log(`The index of string a at 5 is ${b.at(4)}`);
console.log(`The index of string a at 8 is ${a.charAt(8)}`);
console.log(`The index of string a at 8 is ${a.charCodeAt(8)}`);
console.log(gamename.concat(" "+"N"));




