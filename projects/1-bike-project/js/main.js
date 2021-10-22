let jumbotron = document.querySelector(".jumbotron");
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let donateBikeBtn = document.querySelector(".buttons > .btn-primary");
let volunteerBtn = document.querySelector(".buttons > .btn-secondary");

//Part 1
//event listeners for colour buttons

blueBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#588fbd`;
  donateBikeBtn.style.backgroundColor = `#ffa500`;
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
});

orangeBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#f0ad4e`;
  donateBikeBtn.style.backgroundColor = `#5751fd`;
  volunteerBtn.style.backgroundColor = `#31b0d5`;
  volunteerBtn.style.color = "white";
});

greenBtn.addEventListener("click", () => {
  jumbotron.style.backgroundColor = `#87ca8a`;
  donateBikeBtn.style.backgroundColor = `black`;
  volunteerBtn.style.backgroundColor = "#8c9c08";
});

//Part 2

let submitBtn = document.querySelector("form button");
let emailInput = document.querySelector("#exampleInputEmail");
let yourNameInput = document.querySelector("#example-text-input");
let descriptionInput = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", submitButton);

//function for actions when clicking submit button
function submitButton(event) {
  event.preventDefault();
  if (emailInput.value.length === 0 || !emailInput.value.includes("@")) {
    emailInput.style.backgroundColor = "red";
  }
  if (yourNameInput.value.length === 0) {
    yourNameInput.style.backgroundColor = "red";
  }
  if (descriptionInput.value.length === 0) {
    descriptionInput.style.backgroundColor = "red";
  } else {
    alert("Thankyou very kindly for filling out this form");
    yourNameInput.value = "";
    emailInput.value = "";
    descriptionInput.value = "";
  }
}
