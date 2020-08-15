
// quotes generator - need to update on html to BULMA
$(document).ready(function () {

  // quotes/jokes api
  var chuckNorris = "https://api.icndb.com/jokes/random";
  $("button").on("click", function () {
    $("button").html("Get More Chuckles!");
    $.getJSON(chuckNorris, function (json) {
      $("#quote").html("<em>\"" + json.value.joke + "\"</em>").addClass("animated bounceIn");
    });
  });

  // queryURL for Giphy API
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key=dc6zaTOxFJmzC&limit=5";


  // for gif generator
  $("#gif-search").on("click", function () {
    $.ajax({
      url: queryURL,
      method: "GET",
      responseType: 'application/json',
    }).then(function (response) {
      console.log(response);

      $(`#gif-images`).append(`<iframe src="${response.data[Math.floor(Math.random() * 4) + 1].embed_url}" alt="Chuck Norris animated gif will return"></iframe>`)

    });

  });

  // movies api 
  $("#movie-search").on("click", function (event) {
    event.preventDefault();
    // key apikey=k_bU3y02ls
    $.ajax({
      url: "https://www.omdbapi.com/?t=" + "chuck norris" + "&apikey=k_bU3y02ls",
      method: "GET",

    }).then(function (response) {
      $("#movie-view").text(JSON.stringify(response));
      console.log(response);

    });

         // // Here we construct our URL
        // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
      });

  });
