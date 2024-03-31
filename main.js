/** @format */

document.getElementById("page1").addEventListener("click", next);
function next() {
  let displayNone = document.getElementById("visability");
  displayNone.style.display = "none";
  let displayBlock = document.getElementById("nextt");
  displayBlock.style.display = "block";
  let circleActive = document.getElementById("circle2");
  circleActive.style.backgroundColor = "rgb(216, 118, 135, 0.5)";
  let anthorCircle = document.getElementById("circle1");
  anthorCircle.style.backgroundColor = " rgba(219, 216, 217, 0.5)";
}
document.getElementById("page2").addEventListener("click", back);
function back() {
  displayBlockk = document.getElementById("nextt");
  displayBlockk.style.display = "none";
  displayNonee = document.getElementById("visability");
  displayNonee.style.display = "block";
  let circleActive = document.getElementById("circle1");
  circleActive.style.backgroundColor = "rgb(216, 118, 135, 0.5)";
  let anthorCircle = document.getElementById("circle2");
  anthorCircle.style.backgroundColor = " rgba(219, 216, 217, 0.5)";
}
