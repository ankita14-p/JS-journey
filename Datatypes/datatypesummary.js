//Based on how data is stored in memory and accesed the datatypes in javascript are categorised as:
//1.Primitive 2.Non-Primitive
//PRIMITIVE (7 types) (call by value changes are made in copy not on original memory block) (Stored in Stack)
//String,Number,Boolean,null,undefined,Symbol,BigInt

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(anotherId === id); //false as Symbols makes a variable UNIQUE



//NON-PRIMITIVE (call by reference main value gets changed) (Stored in Heap)
//Array,objects,Functions
const names= ["Anki","Gunj","Barn"]; //Array
let myObj={
    name:"ankeeta",
    age:20,
}
const myFunction=function(){  //treating function as a variable
    console.log("Hello World");
    
}
console.log(names); //whole array gets printed

console.log(names[0]); //particular index
console.log(myObj); //whole object gets printed

console.log(myObj.name); //only a particular attribute
myFunction(); //calling the function
//all non primitive datatypes typeof gives object although typeof of function gives function but we call it as objectfunction

