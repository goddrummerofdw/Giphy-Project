$(document).ready(() => {
  console.log("ready!");

  // REST

  const fetchGifs = (searchQuery, limit) => {
    console.log("i was in the fetchGifs function");

    let url = `https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchQuery}&limit=${limit}`;
    console.log(url);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);

        let html = "";
        for (let img of result.data) {
          console.log(img.images.original.url);
          let str = `<img src=${img.images.original.url} />`;
          html = html + str;
        }

        console.log(html);
        $("#result").html(html);
        $("#search-input").val("");
      });
  };

  $("#search-button").on("click", () => {
    console.log("yay");
    let searchQuery = $("#search-input").val();
    let limit = $("#search-quantity").val();

    console.log(searchQuery);
    console.log(limit);
    fetchGifs(searchQuery, limit);
  });

  $("#fetch-corona-gifs").on("click", () => {
    console.log("yay");

    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=corona&limit=20"
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("result is:", result);
        console.log("data array is:", result.data);
        console.log("first result in the result array is:", result.data[0]);
        console.log(
          "images in the first result in the result array are:",
          result.data[0].images
        );
        console.log(
          "the original image of the images in the first result in the result array is:",
          result.data[0].images.original
        );
        console.log(
          "url of the original image of the images in the first result in the result array is:",
          result.data[0].images.original.url
        );

        let html = "";
        for (let img of result.data) {
          console.log(img.images.original.url);
          let str = `<img src=${img.images.original.url} />`;
          html = html + str;
        }

        console.log(html);
        $("#result").html(html);
      });
  });

  $("#fetch-a-dog").on("click", (event) => {
    console.log("button was clicked!");

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.message);
        let imgUrl = data.message;
        let img = `<img src=${imgUrl} />`;
        console.log(img);
        $("#result").html(img);
      });
  });
});
