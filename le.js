// function welcome() {
//   console.log("Hello World");
// }
// function goodbye() {
//   console.log("See you later");
// }
// function greet(choice) {
//   choice();
// }
// greet(welcome);
// greet(goodbye);

// function greet() {
//   var hello = function welcome() {
//     console.log("Hello World");
//   };
//   return hello;
// }
// var retFunc = greet();
// retFunc();


function greet(choice) {
  choice();
}
greet(function () {
  console.log("Hello World");
});
// Hello World
