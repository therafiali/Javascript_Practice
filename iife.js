// Immediate invoke function expression

//function run automatically no need to call the function
(function() {
    console.log("IIFE Ran..");
})();

(()=> {
    console.log("this is arrow function with iife");
})();