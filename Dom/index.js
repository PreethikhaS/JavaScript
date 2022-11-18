// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.getElementsByName();
// document.querySelector()
// document.querySelectorAll()

function onButtonClick() {
  let para = document.getElementById("dom");
  if (para.innerText === "vasanth") para.innerText = "default";
  else para.innerText = "vasanth";
}

// function onSelect() {
//   let heading = document.querySelector("h1");
//   //   heading.style.fontSize = "40px";
//   heading.style.color = "red";
//   heading.style.fontFamily = "helvetica";
// }

// function mouseLeave() {
//   let heading = document.querySelector("h1");
//   //   heading.style.fontSize = "40px";
//   heading.style.color = "black";
//   heading.style.fontFamily = "ubuntu";
// }

// let paraElement = document.createElement("p");
// paraElement.innerText = "This is created by javascript";
// let divElement = document.querySelector("div");
// divElement.appendChild(paraElement);

// paraElement.addEventListener("mouseover", () => {
//   console.log("clicking");
// });

for (let i = 0; i < 4; i++) {
  let divElement = document.createElement("div");
  let h1Element = document.createElement("h1");
  h1Element.id = "header";
  h1Element.innerText = "Hello World";
  let paraElement = document.createElement("p");
  let anchorTag = document.createElement("a");
  anchorTag.innerText = "Google";
  anchorTag.href = "https://www.google.com";
  paraElement.innerText = "This is a DOM class";
  if (i % 2 === 0) {
    h1Element.classList.add("header");
    paraElement.style.color = "blue";
  }
  divElement.appendChild(h1Element);
  divElement.appendChild(paraElement);
  divElement.appendChild(anchorTag);

  let inputElement = document.createElement("input");
  inputElement.setAttribute("name", "email");
  inputElement.setAttribute("placeholder", "example@gmail.com");
  inputElement.removeAttribute("placeholder");
  inputElement.classList.add("email");
  divElement.appendChild(inputElement);

  let formElement = document.getElementById("form");
  formElement.appendChild(divElement);
}

function removeForm() {
  let divElement = document.getElementById("form");
  // divElement.classList.remove("formclass");
  divElement.classList.toggle("formclass");
}
