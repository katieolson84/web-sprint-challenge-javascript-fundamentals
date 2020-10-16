// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Functions keep data within the fucntion 'box'. It protects the data from outside attacks or calls. If data is within the fuction and uses const and let is can only be accessed by calling within the function. When you put variables outside of the function. You are not putting them in the global or external space and they can be accessed when called outside the fucntion. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let summation = 0;
  for (let i = 1; i <= num; i++) {
    summation += i;
  }
  return summation;
}
console.log( summation(4));