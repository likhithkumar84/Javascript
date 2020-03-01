function loops() {
  var factorial = 1;
  var num = prompt("Factorial of");
  for (var i = num; i > 0; i--) {
    factorial = factorial * i;
  }
  document.getElementById("fact").innerHTML =
    "Factorial of " + num + "=" + factorial;
}
