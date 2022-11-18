// Factory vs constructor function

// const circle1 = {
//   radius: 2,
//   area: function () {
//     return 3.14 * this.radius * this.radius;
//   },
// };

// const circle2 = {
//   radius: 3,
//   area: function () {
//     return 3.14 * this.radius * this.radius;
//   },
// };

// factory method  ->  fetches a property and returns an object
// function createCircle(radius) {
//   return {
//     radius: radius,
//     area: function () {
//       return 3.14 * this.radius * this.radius;
//     },
//   };
// }

// function createRectangle(len, width) {
//   return {
//     length: len,
//     width: width,
//     area: function () {
//       return this.length * this.width;
//     },
//     perimeter: function () {
//       return 2 * (this.length + this.width);
//     },
//   };
// }

// let circle1 = createCircle(2);
// let circle2 = createCircle(3);
// let rect1 = createRectangle(5, 10);
// console.log(circle1.radius, circle1.area());
// console.log(rect1.length, rect1.width, rect1.area(), rect1.perimeter());

// constructor method -> uses this keyword, which means adds global object, so new keyword is used to avoid global each time
// function Circle(radius, color) {
//   console.log(this);
//   this.radius = radius;
//   this.area = function () {
//     return 3.14 * this.radius * this.radius;
//   };
//   this.color = color;
// }

// let circle1 = new Circle(10); //new keyword is added to remove global properties
// let circle2 = new Circle(20);
// console.log(circle1.radius, circle1.area());
// console.log(circle2.radius, circle2.area());

// class -> syntactic sugar of function
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  area() {
    return 3.14 * this.radius * this.radius;
  }
}

let circle1 = new Circle(10, "red");      //wenever we create a new object constructor is called and the memory allocation happens in the constructor
let circle2 = new Circle(20, "green");
console.log(circle1.radius, circle1.area());
console.log(circle2.radius, circle2.area());

//Arrow function always refers to the parent object, thats why we use arrow function mostly in react
//Arrow funtion is
// Function declaration -> function name() {..}
//Funtion expression -> let name = function () {..}
