const movieService = () => {
  const url = "https://api.themoviedb.org/3/";
  const key = "c67d750d553f2a633ba6465ef442abb8";

  const getMovieHero = async () => {
    const response = await fetch(`${url}discover/movie?api_key=${key}`).then(
      (res) => res.json()
    );
    const [movie] = response.results;
    const section = document.querySelector(".section-hero");
    section.innerHTML = `
      <div class="hero-container container">
        <div class="movie-detail">
          <div class="release"><span>Release Date: </span>${movie.release_date}</div>
          <div class="title">${movie.original_title}</div>
        </div>
        <div class="movie-poster">
          <img
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
            alt="poster"
            class="poster"
          />
        </div>
        <div class="movie-desc">
        <h3 class="desc-title">Overview :</h3>
            <div class="desc">
              ${movie.overview}
            </div>
        </div>
      </div>
    `;
  };

  const getPopularMovie = async () => {
    const response = await fetch(`${url}movie/popular?api_key=${key}`).then(
      (res) => res.json()
    );
    const movies = response.results;
    const moviesContainer = document.querySelector(".movies");
    console.log(movies);
    movies.slice(0, 10).forEach((movie) => {
      moviesContainer.innerHTML += `
        <div class="movies-item">
          <div class="movie-card">
            <img
              src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"
              alt="thumb"
              class="movie-thumb"
            />
            <div class="rate"><span>IMDB</span> ${movie.vote_average}</div>
            <div class="movie-card-title">${movie.original_title}</div>
          </div>
        </div>
      `;
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    getMovieHero();
    getPopularMovie();
  });
};

export default movieService;
