import { createRandomMovie } from "../data";

function MoviePlaylist() {
  // To Do:
  // Get list of movies
  const moviePlaylist = [];

  const handleMovieAdd = (movie) => {
    // To Do:
    // Add movie to list of movies
  };
  const handleMovieRemove = (movie) => {
    // To Do:
    // Remove movie from list of movies
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="flex flex-col items-start flex-wrap md:flex-row md:justify-between md:items-center my-5">
        <h3 className="text-2xl">Movie Playlist</h3>
        <button
          onClick={() => handleMovieAdd(createRandomMovie())}
          className="bg-blue-600 text-white rounded-sm py-2 px-5 mt-2 md:mt-0"
        >
          + Add Movie to Playlist
        </button>
      </div>
      <ul>{renderedMovies}</ul>
    </>
  );
}

export default MoviePlaylist;
