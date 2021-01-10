var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};
domReady(function () {
  // REST

  const fetchGifs = (searchQuery, limit) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchQuery}&limit=${limit}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let html = "";
        for (let img of result.data) {
          console.log(img.images.original.url);
          let str = `<img src=${img.images.original.url} />`;
          html = html + str;
        }
        // How is this written in vanilla Js?
        $("#result").html(html);
        // document.getElementById("result").html("html");

        document.querySelector("#search-input").value.trim();
      });
  };
  document.querySelector("#search-button").addEventListener("click", () => {
    let searchQuery = document.querySelector("#search-input").value.trim();

    let limit = document.querySelector("#search-quantity").value.trim();

    fetchGifs(searchQuery, limit);
  });
});
