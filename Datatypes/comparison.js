// console.log("2">1);
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
// The reason is that an equality check == and comparisons ,,>,>=>,<= works differently Comparisons converts null to a number,treating it as 0. Thus (3) null>=0 is true and (1) null>0 is false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log(undefined<=0); //false
//Strict Check (===)
console.log("2"==2); //true
console.log("2"===2); //false







