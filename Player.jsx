import { useEffect, useState } from "react";
import axios from "axios";

function Playlist() {

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/playlists/user/1")
      .then(res => {
        setPlaylists(res.data);
      });

  }, []);

  return (

    <div>

      <h2>Your Playlists</h2>

      {playlists.map(p => (

        <div key={p.id}>
          {p.name}
        </div>

      ))}

    </div>

  );

}

export default Playlist;