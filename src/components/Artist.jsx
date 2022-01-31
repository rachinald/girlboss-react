import { useEffect, useState } from "react";

function Artist () {

  const [artist, setArtist] = useState([]);

  const handleFetch = async () => {

    const res = await fetch(
      "http://localhost/artist/getallartists",

      {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await res.json();

    setArtist(data);

    console.log("line 32", artist);
  };

  useEffect(() => {

    handleFetch()

  },[]);


  console.log("!!!", artist)


    return (

    <div className="artist">

<div className="artistInfo">
      <h1> {artist.name}</h1>
      <br></br>
      <h1 ><a target="_blank" href={artist.website} className="middle" rel="noreferrer">Website</a></h1>
      <br></br>
      <h1 ><a target="_blank" href={artist.instagram} className="middle" rel="noreferrer">Instagram</a></h1>
      <br></br>
      <h2>Category: {artist.category}</h2>
</div>
    </div>
    )
}

export default Artist;