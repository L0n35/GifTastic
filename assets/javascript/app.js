animals = [
  "Dog",
  "Cat",
  "Elephant",
  "Tiger",
  "Horse",
  "Eagle",
  "Falcon",
  "Kangaroo"
];

celebrities = [
  "Dwayne Johnson",
  "Kevin Hart",
  "Chris Hemsworth",
  "Ariana Grande",
  "Jennifer Anniston",
  "Beyonce"
];

function randomIntFromInterval(min, max) {
  result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(result);
  return result;
}

for (var i = 0; i < animals.length; i++) {
  btn = $("<button>");
  btn.attr("class", "btn");
  btn.text(animals[i]);
  btn.val(animals[i]);
  $("#animals").append(btn);
}

for (var i = 0; i < celebrities.length; i++) {
  btn = $("<button>");
  btn.attr("class", "btn");
  btn.val(celebrities[i]);
  btn.text(celebrities[i]);
  $("#celebrities").append(btn);
}

$(".btn").on("click", function() {
  topic = $(this).val();

  apikey = "hsAf7qo79nuISthhd3XCPdqLoPdl5dfb";
  queryURL =
    "http://api.giphy.com/v1/gifs/search?q=" +
    topic +
    "&api_key=" +
    apikey +
    "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    int = randomIntFromInterval(0, 9);

    animated = response.data[int].images.fixed_height.url;
    still = response.data[int].images.fixed_height_still.url;
    rating = response.data[int].rating;

    console.log(response);

    let gifDiv = $("<div>");
    gifDiv.attr("class", "i");

    let gif = $("<img>");
    gif.attr("src", still);
    gif.attr("class", "gif");
    gifDiv.append(gif);

    let r = $("<p>");
    r.html("Rating: " + rating.toUpperCase());
    gifDiv.append(r);

    $("#gifs").append(gifDiv);

    $(".gif").on("click", function() {
      if (gif.attr("src") === still) {
        console.log("hi");
        gif.attr("src", animated);
      } else {
        gif.attr("src", still);
      }
    });
  });
});
