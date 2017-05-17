var app = function(){
  fetchSearch();
}

var fetchSearch = function(){
  var inputTag = document.getElementById("search-query");

  inputTag.addEventListener('input', function(event) {
    makeRequest(event.target.value);
  });
}

var makeRequest = function(serachedItem) {
  console.log("item", serachedItem);
  //i want to input the searchedItem into the url
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.addEventListener("load", requestComplete);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var albumHash = JSON.parse(jsonString);
  var albums = albumHash.albums.items;
  displayAlbums(albums);
}

var displayAlbums = function(albums) {
  var divTag = document.getElementById('albums');
  document.getElementById('albums').innerHTML = "";
  for (album of albums) {
    var li = document.createElement('li');
    li.innerHTML = album.name;
    divTag.appendChild(li);
  } 

}

window.addEventListener('load', app);