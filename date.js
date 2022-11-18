// =>The Date Object in JavaScript
//  -The Date object is a built-in datatype, used to work with dates and times.
//   The Date object is created by using the new keyword,
//   i.e. new Date() and provides a number of built-in methods for formatting and managing that data

let now = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  day: "numeric",
});
console.log(now);

// -------------------------------------
// Get current day
let day1 = new Date().getDay();
console.log(day1); //6

// Get day in the week of a certain date
let day2 = new Date("October 14, 2020 09:38:00").getDay();
console.log(day2); //3

// ----------------------------------
let daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = new Date().getDay();
let dayName1 = daysArray[day];
console.log(dayName1); // "Saturday"
// ------------------------------

// You can also wrap this functionality up in a callable function if you're using the logic on multiple ocassions:
const getDayName = (dayIndex) => {
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysArray[dayIndex];
};

const dayName2 = getDayName(new Date().getDay());
console.log(dayName2); // "Saturday"

// --------------------------------------------

// Using the toLocaleDateString() Method
// -A much more straightforward method, that does the indexing logic for you is toLocaleDateString()! Additionally, it provides formatting options for the locale you've defined, so you can dynamically adapt the format to the user's location.

// This method takes in four basic options - weekday, year, month and day, and allows us to set the day's name to be longer or shorter:

let dayName = new Date().toLocaleDateString("en-us", { weekday: "long" });
console.log(dayName); // "Saturday"

let dayNameSt = new Date().toLocaleDateString("en-us", { weekday: "short" });
console.log(dayNameSt); // "Sat"

// ----------------------

// Get Month from JavaScript's Date Object
// The getMonth() method is another Date method, that much in the way getDay() returns an integer - returns the index of the month, denoted by the Date instance.

let month3 = new Date().getMonth();
console.log(month3); // 2

let month4 = new Date("October 14, 2020 09:38:00").getMonth();
console.log(month4); // 9
// ------------------------------

let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = new Date().getMonth();
let monthName1 = monthsArray[month];
console.log(monthName1); // "March"

// --------------------------------
const getMonthName = (monthIndex) => {
  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthsArray[monthIndex];
};

const monthName5 = getMonthName(new Date().getMonth());
console.log(monthName5); // "March"

// ----------------------
let monthName = new Date().toLocaleDateString("en-us", { month: "long" });
console.log(monthName); // "March"

let monthNameSt = new Date().toLocaleDateString("en-us", { month: "short" });
console.log(monthNameSt); // "Mar"
