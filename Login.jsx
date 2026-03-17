import { useEffect, useState } from "react";
import axios from "axios";

import MusicCard from "../components/MusicCard";
import Player from "../components/Player";

function Home() {

  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:5000/api/tracks")
      .then(res => {
        setTracks(res.data);
      });

  }, []);

  return (

    <div>

      <h1>Music Streaming App</h1>

      {tracks.map(track => (

        <MusicCard
          key={track.id}
          track={track}
          setCurrentTrack={setCurrentTrack}
        />

      ))}

      <Player track={currentTrack} />

    </div>

  );

}

export default Home;