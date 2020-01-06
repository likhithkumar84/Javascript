function sendData(method, url, body) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.send(body);
  xhr.onload = function() {
    var resp = JSON.parse(xhr.response);
    console.log(resp);
  };
}
function startPosting() {
  sendData("GET", "https://dog.ceo/api/breeds/image/random/");
  sendData(
    "POST",
    "https://enxyd2ygridpr.x.pipedream.net/",
    JSON.stringify([1, 2, 3])
  );
  sendData("GET", "https://www.reddit.com/r/popular.json");
  sendData("GET", "https://www.amiiboapi.com/api/amiibo/?name=mario");
  sendData("GET","https://api.abalin.net/today ")
}
