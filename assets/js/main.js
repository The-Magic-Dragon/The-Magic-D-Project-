
// quotes generator - need to update on html to BULMA
$(document).ready(function() {
  // jokes api
  var chuckNorris = "https://api.icndb.com/jokes/random";
  $("button").on("click", function(){
    $("button").html("Get More Chuckles!");
    $.getJSON(chuckNorris, function(json) {
      $("#quote").html("<em>\""+json.value.joke+"\"</em>").addClass("animated bounceIn");
    });
      });
  // for gif generator
  $("#search-button").on("click", function() {
    var searchValue = $("#search-value").val();

    // clear input box
    $("#search-value").val("");

    searchWeather(searchValue);
  });
      
    // queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });




      })