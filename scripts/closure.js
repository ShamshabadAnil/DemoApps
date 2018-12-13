var example=(function(){
    console.log("Inside IIFE");
    //free Variable
    var counter=0;
    //closure function 
    return function(){
        return counter++;
    }
})();

var counterRef=example;
console.log(counterRef())
console.log(counterRef())
console.log(counterRef())