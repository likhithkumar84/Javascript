function table() {
  var b = document.getElementById("table");
  var a = 5;
  for (var i = 1; i <= 10; i++) {
    c = a * i;
    b.innerHTML += a + "*" + i + "=" + c + "<br>";
  }
}