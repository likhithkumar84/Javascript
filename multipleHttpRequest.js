function sendData(method, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
      if(xhr.status === 404) {
          callback(xhr.response, null)
      }
      else{
          callback(null, xhr.response)
      }
  };
}
function multipleRequest() {
  sendData("GET", "https://dog.ceo/api/breeds/image/random/", function(err,data) {
      if(err){
          console.error("request is fail", err);}
      else {
          console.log(data)
      }
    sendData("GET", "https://www.reddit.com/r/popular.json", function(err1, data1) {
      console.log("response2 is success");
      sendData("GET", "http://dnd5eapi.co/api/", function(err2, data2) {
        console.log("response3 is success");
        sendData("GET", "https://api.abalin.net/today", function(err3, data3) {
          console.log("response4 is success");
        });
      });
    });
  });
}
