let jumbotron = document.getElementsByClassName("jumbotron");
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");
let donateBikeBtn = document.getElementsByClassName("btn btn-primary btn-lrg");
let volunteerBtn = document.getElementsByClassName("btn btn-secondary btn-lrg");

//event listener for blue button

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
