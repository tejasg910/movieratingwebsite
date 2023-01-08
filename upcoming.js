const searchParams = new URLSearchParams(location.search);
let searchQuery = searchParams.get("search");
const searchInput = document.getElementById("searchinput");
const searchButton = document.getElementById("searchbtn");
const movie = document.getElementById("moviecontent");
const homeButton = document.getElementById("homebtn");
async function getData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "705cf4553cmsh3c31dd4b87e4b49p1f85abjsn7c99ed9faca4",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const data = await fetch(
    `http://www.omdbapi.com/?apikey=898a4c92&t=${searchQuery}`
  );
  console.log(searchQuery);
  const result = await data.json();

  console.log(result);
  if (result.Response && result.Title != undefined) {
    movie.innerHTML += `<div class="movie">
                    <div class="imagepart">
                        <img src="${result.Poster}" alt="">
                    </div>
                    <div class="contentpart">
                        <a class="year">${result.Year}</a>
                        <h3 class="title">${result.Title}</h3>
                        <p class="release">
                            Relased:
                            <span>${result.Released}</span>
                        </p>
                        <div class="writer">

                            writer <span>${result.Writer}</span>


                        </div>
                        <div class="description">

                            Description: <p>${result.Plot}</p>
                        </div>
                        <div>

                            <p class="country">Country:<span>${result.Country}</span></p>
                            <p class="language">Language: <span>${result.Language}</span></p>
                        </div>
                        <div>
                            <p class="gnre">Genre <span>${result.Genre}</span></p>

                            <p class="actors">Actors: <span>${result.Actors}</span></p>
                          
                        </div>
                        <hr>
                        <div class="flex justify-around">
                            <div class="duration">
                                <i class="fa-regular fa-clock"></i>
                                <span>${result.Runtime}</span>

                            </div>
                            <div class="rating">
                                <i class="fa-solid fa-star"></i>
                                <span>${result.imdbRating}(imdb)</span>
                            </div>

                            
                        </div>


                            <div>
                            <button class="watchnow">Watch Now</button>
                            </div>
                    </div>
                </div>`;
  } else {
    movie.innerHTML =
      "<h3 class='notfound'>Sorry! No movie found with this name</h3>";
  }
}

homeButton.addEventListener("click", () => {
  history.replaceState(null, null, `/index.html`);
  location.reload();
});

searchButton.addEventListener("click", () => {
  history.replaceState(
    null,
    null,
    `/upcoming.html?search=${searchInput.value}`
  );
  location.reload();
  getData();
});

getData();
