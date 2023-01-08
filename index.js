const movieBox = document.getElementById("movie");
const searchBtn = document.getElementById("searchbtn");
const searchInput = document.getElementById("searchinput");
async function getTop10Movies() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "705cf4553cmsh3c31dd4b87e4b49p1f85abjsn7c99ed9faca4",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    options
  );

  const data = await res.json();
  const movies = data.results;

  console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].primaryImage === null) {
      continue;
    }
    movieBox.innerHTML += `<div class="items" data-aos="zoom-in-down">

                    <img src="${movies[i].primaryImage.url}" alt="" >
                    <div class="boxcontent">

                        <h2>${movies[i].titleText.text}</h2>
                        <p>Release date: ${movies[i].releaseDate.day}/${movies[i].releaseDate.month}/${movies[i].releaseDate.year}</p>
                    </div>
                </div>`;
  }

  movies.forEach((value) => {
    console.log(value);
  });
}

getTop10Movies();

searchBtn.addEventListener("click", () => {
  //   location.search = `updafjls/?query=${searchInput.value}`;
  history.replaceState(
    null,
    null,
    `/upcoming.html?search=${searchInput.value}`
  );
  location.reload();
});
