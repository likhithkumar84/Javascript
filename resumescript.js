function background() {
  var background = (document.body.style.backgroundColor = "burlywood");
}
var head = document.getElementById("heading_resume");
function headingcolor() {
  head.style.color = "blue";
}
function displaydate() {
  var date = window.alert(Date());
}
function resumeheading() {
  head.innerHTML = "Likhith's Resume";
}
function innertext() {
  var textinside = document.getElementById("innertext");
  textinside.innerText =
    "A self-motivated IT professional with huge knowledge and proficiency in JavaScript, HTML , CSS, and mobile " +
    "responsive web development, as well as strong skills and ability in writing clean and efficient code, seeks" +
    " the " +
    "position of Front-End Web Developer with XXX Tech.";
  textinside.style.color = "crimson";
}
