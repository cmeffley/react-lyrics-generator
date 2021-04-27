import React, { useState } from 'react';

const Lyrics = () => {
  const [lyric, setLyric] = useState({
    artist: '',
    song: ''
  });

  const handleInputChange = (e) => {
    setLyric((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <form>
        <h3>{'Search for Song Lyrics'}</h3>
        <div>
          <input
            name="artist"
            type="text"
            placeholder="Enter Artist"
            value={lyric.artist}
            onChange={handleInputChange}>
          </input>
        </div>
        <div>
          <input
            name="song"
            type="text"
            placeholder="Enter Song Title"
            value={lyric.song}
            onChange={handleInputChange}>
          </input>
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Lyrics;
