import React, { useState } from 'react';
import {
  Form,
  CardTitle,
  Card,
  CardText,
  Button
} from 'reactstrap';
import getLyrics from '../../helpers/data/lyricData';

const Lyrics = () => {
  const [lyric, setLyric] = useState({
    artist: '',
    song: ''
  });
  const [data, setData] = useState(null);

  async function songRequest() {
    await getLyrics(lyric.artist, lyric.song)
      .then((response) => setData(response));
  }

  const handleInputChange = (e) => {
    setLyric((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Form id="enterLyrics"
        onSubmit={(e) => {
          e.preventDefault();
          songRequest();
        }}>
        <h3>{'Search for Song Lyrics'}</h3>
        <div>
          <div>
            <label>Artist: </label>
          </div>
          <input
            name="artist"
            type="text"
            placeholder="Enter Artist"
            required
            value={lyric.artist}
            onChange={handleInputChange}>
          </input>
        </div>
        <div>
          <div>
            <label>Song Title: </label>
          </div>
          <input
            name="song"
            type="text"
            placeholder="Enter Song Title"
            required
            value={lyric.song}
            onChange={handleInputChange}>
          </input>
        </div>
        <Button color="success" type="submit">Search</Button>
      </Form>
      <Card id="songLyricCard">
        {data ? <div>
        <CardTitle tag="h3">{lyric.song}</CardTitle>
        <CardTitle tag="h3"> by: {lyric.artist}</CardTitle>
        <CardText>{data.lyrics}</CardText>
        </div> : null }
      </Card>
    </>
  );
};

export default Lyrics;
