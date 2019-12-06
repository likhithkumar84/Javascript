function table() {
  for (var i = 1; i <= 10; i++) {
    var a = 5;
    var b = document.getElementById("table");
    c = a * i;
    b.innerHTML += a + "*" + i + "=" + c + "<br>";
  }
}
