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

for (var i = 0; i < animals.length; i++) {
  btn = $("<button>");
  btn.attr("class", "btn");
  btn.text(animals[i]);
  btn.val(animals[i]);
  console.log(btn);
  $("#animals").append(btn);
}

for (var i = 0; i < celebrities.length; i++) {
  btn = $("<button>");
  btn.attr("class", "btn");
  btn.val(celebrities[i]);
  btn.text(celebrities[i]);
  console.log(btn.val());
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
    original = response.data[0].images.original.url;

    let g = $("<img>");
    g.attr("src", original);

    $("#gifs").append(g);
  });
});
