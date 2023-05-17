import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container mx-auto px-4">
      <button
        onClick={() => handleResetClick()}
        className="bg-red-600 text-white py-2 px-4 rounded-sm my-3"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;
