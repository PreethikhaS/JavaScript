/*Spread Operator / Rest Operaator*/

//add elements of existing array into a new array
var alp = ['a','b','c'];
var phy = ['x','y','z', ...alp];
console.log(phy);
//pass elements of an array as arguments to a functin
function addThreeNumbers(x1,y1,z1){
    console.log(x1+y1+z1);
}
var args = [0,1,2]
addThreeNumbers(...args);
//copy array
var arr = [1,2,3];
var arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2);
//concatenate arrays
var ar1 = [0,1,2];
var ar2 = [3,4,4];
ar1.concat(ar2);
ar1 = [...ar1, ...ar2];
//REST: Condense multiple elements into an array

