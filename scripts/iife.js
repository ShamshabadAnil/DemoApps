var test=(function(name){

    function show(){
        return "Show function";
    }
   function display(){
        return "Display function: "+name;
    }

    return{
        sh:show,
        dis:display
    }

})('Anil');
// revealing module pattern
var t=test;
console.log(t.sh());
console.log(t.dis());