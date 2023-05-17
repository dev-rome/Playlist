import { useDispatch } from "react-redux";
import { createRandomSong } from "../data";
import { addSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li className="p-1" key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="text-2xl">Song Playlist</h3>
        <button
          onClick={() => handleSongAdd(createRandomSong())}
          className="bg-blue-600 text-white rounded-sm py-2 px-5 mt-2 md:mt-0"
        >
          + Add Song to Playlist
        </button>
      </div>
      <ul>{renderedSongs}</ul>
    </>
  );
}

export default SongPlaylist;
