
login = function() {
  body = {
    UserName: username,
    Password: password
  };
  sendData();
};

let url = "https://en21fqh0j63qxi.x.pipedream.net/ ";
sendData = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.onload = function() {
    var resp = JSON.parse(xhr.response);
  };
  xhr.send(JSON.stringify(body));
};


function postFormData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value

  fetch(url, {
     method: "POST",
    body: JSON.stringify({username, password})
  }).then(function(response) {
    console.log(response.status);
  })
}