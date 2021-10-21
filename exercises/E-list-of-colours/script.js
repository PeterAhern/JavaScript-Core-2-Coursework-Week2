let content = document.getElementById("content");
function listOfColours(colours) {
  // Write your code here...
  let dropdown = document.createElement("select");
  let message = document.createElement("p");
  colours.forEach((color) => {
    let colorOption = document.createElement("option");
    colorOption.textContent = color;
    colorOption.value = color;
    dropdown.appendChild(colorOption);
  });

  dropdown.addEventListener("change", function (e) {
    let val = e.target.value;
    message.textContent = `You have selected: ${val}`;
    message.style.color = val;
  });

  content.appendChild(dropdown);
  content.appendChild(message);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
