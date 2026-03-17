function MusicCard({ track, setCurrentTrack }) {

  return (

    <div style={{
      border: "1px solid gray",
      margin: "10px",
      padding: "10px"
    }}>

      <h3>{track.title}</h3>
      <p>{track.artist}</p>

      <button onClick={() => setCurrentTrack(track)}>
        Play
      </button>

    </div>

  );

}

export default MusicCard;