var pushdata = [];
var inputlist = document.getElementById("list");
var list = document.getElementById("innerlist");

function insertdata() {
    var inputlist = document.getElementById("list");
  var todo = inputlist.value;
  pushdata.push(todo);
  list.innerHTML = "";
  for (var i = 0; i < pushdata.length; i++) {
    list.innerHTML += pushdata[i] + "<button data-index = '"+ i +"' onclick='remove(event)' >✖</button>" + "<br>";
  }
}

function remove(event) {
  pushdata.splice(event.target.dataset.index, 1);;
    list.innerHTML = "";
    for (var i = 0; i < pushdata.length; i++) {
        list.innerHTML += pushdata[i] + "<button data-index = '"+ i +"' onclick='remove(event)' >✖</button>" + "<br>";
    }
}
