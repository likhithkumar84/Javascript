var getData = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.reddit.com/r/funny.json");

  xhr.onload = function() {
    var resp = JSON.parse(xhr.response);
    var x = document.getElementById("inside");
    for (var i = 1; i < resp.data.children.length; i++) {
      y = resp.data.children[i].data;
      var text = document.createElement("div");
      text.textContent = y.title;
      text.style.border = "1px solid black";
      var img = document.createElement("img");
      img.src = y.url;
      img.style.maxWidth = "100%";
      var brk = document.createElement("br");
      var comments = document.createElement("i");
      comments.setAttribute("class", "fas fa-envelope");
      var num = document.createElement("span");
      num.textContent = y.num_comments;
      x.appendChild(text);
      text.appendChild(brk);
      text.appendChild(img);
      text.appendChild(brk);
      text.appendChild(comments);
      text.appendChild(num);
      x.appendChild(brk)
    }
    console.log(x.innerHTML);
  };

  xhr.send();
};
