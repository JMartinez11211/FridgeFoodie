//https://rapidapi.com/apidojo/api/tasty api im gonna use to find recipes

const recipeCards = document.getElementById("container");
let searchButton = document.querySelector("#search");
const recipeInput = document.querySelector("input");

searchButton.addEventListener("click", () => {
  let recipe = recipeInput.value;

  console.log("button pressed");

  fetch(
    `https://tasty.p.rapidapi.com/recipes/list?from=0&size=200&q=${recipe}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "461becf5abmsh9bd7a51ebbcd070p1a1e09jsncbae4b32a725",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let recipeThumbnail = data.results.thumbnail_url;
      let recipeTitle = data.results.name;
      let recipeSummery = data.results.description;
      let recipeVideo = data.results.original_video_url;
      recipeCards.innerHTML = "";
      for (let i = 0; i < data.results.length; i++) {
        recipeThumbnail = data.results[i].thumbnail_url;
        recipeTitle = data.results[i].name;
        recipeSummery = data.results[i].description;
        recipeVideo = data.results[i].original_video_url;
        recipeCards.innerHTML += Cards(
          recipeThumbnail,
          recipeTitle,
          recipeSummery,
          recipeVideo
        );
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
//show us the recipe cards
function Cards(a, b, c, d) {
  return `<div class="card" >
  
  <img src="${a}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${b}</h5>
    <p class="card-text">${c}</p>
    <a href="${d}" class="btn btn-primary">Recipe Video</a>
  </div>
  
</div>`;
}
