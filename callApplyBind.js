//CALL,APPLY & BIND

let name = {
  firstName: "Preethikha",
  lastName: "S",
};
let printName = function (homeTown, state ) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown + " " + state);
};

printName.call(name, "Madurai", "TN");

//Call Method
//This method is known as function borrowing
// takes an arguement for reference

let name2 = {
  firstName: "leena",
  lastName: "S",
};
//function borrowing
printName.call(name2, "perambalur", "TN");


//Apply Method => we put in array
//Only diff between call and apply method is the way we pass arguements
//we pass as a second arguements in a array list instead of passing individually 
printName.apply(name2, ["perambalur", "TN"]);


//Bind Method
//Similar to call
//It will create a copy of printName and it will bind that to name2 object and will return a function
//this funtion retuned can be invoked later

let PrintMyName = printName.bind(name2, "chennai", "TN");
PrintMyName(); //function invocation