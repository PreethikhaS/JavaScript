// objects
// let phoneName = "Iphone pro";
// let phonePrice = 90000;
// let phoneColor = "Product red";
// let phoneRam = "6gb ram";
// let phoneRom = "512gb rom";

// let phoneName1 = "Pixel 6a";
// let phonePrice1 = 40000;
// let phoneColor1 = "white and black";
// let phoneRam1 = "6gb ram";
// let phoneRom1 = "512gb rom";

// let iphonePro = {
//   name: "Iphone Pro",
//   price: 90000,
//   color: "Product red",
//   ram: "6gb",
//   rom: "512gb",
//   isChargerPresent: false,
//   getDiscountedPrice: function () {
//     let discountedPrice = this.price - this.price * 0.2;
//     return discountedPrice;
//   },
// };

// let pixel6a = {
//   name: "pixel 6a",
//   price: 40000,
//   color: "black and white",
//   ram: "8gb",
//   rom: "256gb",
//   getDiscountedPrice: function () {
//     let discountedPrice = this.price - this.price * 0.2;
//     return discountedPrice;
//   },
// };

// console.log(
//   iphonePro.name,
//   iphonePro.price,
//   pixel6a.price,
//   iphonePro.getDiscountedPrice(),
//   pixel6a.getDiscountedPrice()
// );

// nested objects
// let Rajni = {
//   name: "Sivaji",
//   age: 75,
//   daughter: {
//     name: "Aishwarya",
//     "husband Name": "Dhanush",
//     getDaughter: function () {
//       console.log(this);
//     },
//   },
//   getRajni: function () {
//     console.log(this);
//   },
// };

// console.log(
//   Rajni.name,
//   Rajni.daughter,
//   Rajni.daughter.name,
//   Rajni.daughter.husbandName
// );

// console.log(Rajni.getRajni(), Rajni.daughter.getDaughter());
// let property = "name";
// let husband = "husband Name";
// console.log(
//   Rajni["name"],
//   Rajni[property],
//   Rajni["age"],
//   Rajni.daughter[husband]
// );

// factory method

function phoneCreator(
  phoneName,
  price,
  color,
  ram,
  rom,
  isChargerPresent,
  discount
) {
  return {
    name: phoneName,
    price: price,
    color: color,
    ram: ram,
    rom: rom,
    isChargerPresent: isChargerPresent,
    getDiscountedPrice: function () {
      console.log(this);
      let discountedPrice = this.price - this.price * discount;
      return discountedPrice;
    },
  };
}

let iphonePro = phoneCreator(
  "Iphone Pro",
  90000,
  "red",
  "6gb",
  "512gb",
  false,
  0.3
);
let pixel6a = phoneCreator(
  "pixel 6a",
  40000,
  "black",
  "8gb",
  "256gb",
  true,
  0.2
);

// console.log(iphonePro.getDiscountedPrice(), pixel6a.getDiscountedPrice());
console.log(iphonePro.name, pixel6a.name);

// function getPerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let vasanth = getPerson("vasanth", 25);
// let sriram = getPerson("sriram", 22);
// console.log(vasanth, sriram);
