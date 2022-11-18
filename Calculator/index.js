let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btns");
buttons = Array.from(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (event) => {
    let key = event.target.innerText;

    if (
      (key === "/" || key === "%" || key === "*") &&
      display.innerText === "0"
    )
      return;

    if (key === "A/c") {
      display.innerText = "0";
    } else if (key == "Del") {
      display.innerText = display.innerText.slice(0, -1);
      if (display.innerText == "") {
        display.innerText = "0";
      }
    } else if (key === "=") {
      if (display.innerText === "1+") {
        display.innerText = "Vasanth calculator";
        return;
      }
      display.innerText = eval(display.innerText);
    } else {
      if (display.innerText == 0) {
        display.innerText = key;
      } else {
        display.innerText += key;
      }
    }
  });
}