trending = [
  "Chris Hemsworth",
  "Dogs",
  "Dwayne Johnson",
  "Ariana Grande",
  "NFL",
  "Cats",
  "Formula 1",
  "Kangaroos",
  "Filthy Frank",
  "Pokemon"
];

function randomIntFromInterval(min, max) {
  result = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(result);
  return result;
}

for (var i = 0; i < trending.length; i++) {
  btn = $("<button>");
  btn.attr("class", "btn");
  btn.text(trending[i]);
  btn.val(trending[i]);
  $("#trending-sub").append(btn);
}

// $("#searchBtn").on("click", function() {
//   btn = $("<button>");
//   btn.attr("class", "btn");
//   btn.text($("#gifSearch").val());
//   btn.val($("#gifSearch").val());
//   $(".searched").append(btn);
// });

$(".btn").on("click", function() {
  topic = $(this).val();
  console.log("hi");

  search = $("#gifSearch").val();

  console.log(topic);

  apikey = "hsAf7qo79nuISthhd3XCPdqLoPdl5dfb";
  if ($(".b").on("click") === true) {
    queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      topic +
      "&api_key=" +
      apikey +
      "&limit=10";
    console.log("a");
  } else {
    queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      search +
      "&api_key=" +
      apikey +
      "&limit=10";
    console.log("b");
  }
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
