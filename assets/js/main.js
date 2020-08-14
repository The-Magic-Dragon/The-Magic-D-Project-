
// quotes generator - need to update on html to BULMA
$(document).ready(function() {
    var chuckNorris = "https://api.icndb.com/jokes/random";
    $("button").on("click", function(){
      $("button").html("Get More Chuckles!");
      $.getJSON(chuckNorris, function(json) {
        $("#quote").html("<em>\""+json.value.joke+"\"</em>").addClass("animated bounceIn");
      });
        });
  
      })