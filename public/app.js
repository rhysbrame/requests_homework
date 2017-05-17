var app = function(){

  makeRequest();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  


}

var makeRequest = function() {
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.addEventListener("load", requestComplete);
  request.send();
}

window.addEventListener('load', app);