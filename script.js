
let display = document.getElementById("calculator_display");

let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "AC") {
      display.value = "";
    }
   
    else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    }
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
    else {
      display.value += value;
    }
  });
});
