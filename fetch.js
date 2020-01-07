function sendRequest(url, method) {
  return fetch(url, {
    method: method
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
    });
}
sendRequest("https://dog.ceo/api/breeds/image/random", "GET")
  .then(function() {
    return sendRequest("http://dnd5eapi.co/api/", "GET");
  })
  .then(function() {
    return sendRequest("https://aws.random.cat/meow", "GET");
  })
  .catch(function(err) {
    console.error(err);
  });
