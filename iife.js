// Immediate invoke function expression

//function run automatically no need to call the function
// named IIFE
(function run() {
    console.log("IIFE Ran..");
})();

// output:  IIFE Ran..

(()=> {
    console.log("this is arrow function with iife");
})();

// output:  this is arrow function with iife

((name)=> {
    console.log("Welcome " + name);
})("Rafi");


// output:  Welcome Rafi