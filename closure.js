//Closures
//Means a function binds together its lexical environment/scope
//Function along with lexical scope forms a closure
//Here, inside y, it forms a closure with the variable which is a part of lexical scope. i.e it has access to parents lexical scope

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

/*Closure: is the combination of funtion bundled together(enclosed) with
reference to its surrounding StaticRange(lexical environment)
In other words closure gives access to an outer function's scope for an inner function
In Javascript, closures are created everytime a function is created at function creation time*/

/*Uses of Closures:
-Module Design Pattern
-Currying
-Functions like once 
-memoize
-maintaining state in async world 
-setTimeout
-Iterators*/


//Another Example
function x1(){
    var a1=7;
    function y1(){
        console.log(a1); //funtion remembers the reference to the variable 
    }
    a1 = 100;
    return y1;
}

var z1 = x1();
console.log(z1);
z1();

//Example
function outer(){
  let number = 1;

return function inner(){
  console.log(number);
}
}

let fn = outer();
fn();
