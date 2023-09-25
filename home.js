const homeElement = document.getElementById("home");
const programElement = document.getElementById("program");
const vehicleElement = document.getElementById("vehicle");
const launchElement = document.getElementById("launch");

homeElement.addEventListener("mouseenter", function() {
  this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
//   this.style.color = "#add8e6"
});

homeElement.addEventListener("mouseleave", function() {
  this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
//   this.style.color = "aliceblue"
});

programElement.addEventListener("mouseenter", function() {
  this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
//   this.style.color = "#add8e6"
});

programElement.addEventListener("mouseleave", function() {
  this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
//   this.style.color = "aliceblue"
});

vehicleElement.addEventListener("mouseenter", function() {
  this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
});

vehicleElement.addEventListener("mouseleave", function() {
  this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
});

launchElement.addEventListener("mouseenter", function() {
  this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
});

launchElement.addEventListener("mouseleave", function() {
  this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
});

const registerButton = document.querySelector('.register-button');

registerButton.addEventListener('mouseenter', function() {
  this.style.textDecoration = "underline";
  this.style.fontWeight = "bold";
});

registerButton.addEventListener('mouseleave', function() {
  this.style.textDecoration = "none";
  this.style.fontWeight = "normal";
});
