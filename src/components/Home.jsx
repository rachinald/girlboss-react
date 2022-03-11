import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";


// import hebe from "../assets/hebe1.jpeg"
// import ploy from "../assets/ploypisut1.jpeg"
// import olivia from "../assets/olivia1.jpeg"

function Home () {

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
      console.log("!!!", artist)
  
    };
  
    useEffect(() => {
  
      handleFetch()
  
    },[]);



    return (


        <div className="home">
            
            <div className="artworkContainer">
                <Link to='/artist'>
                    <img className="artwork" src={artist.allArtists[0].pic} alt='0' />
                </Link>
            </div>

            <div className="artworkContainer">
                <Link to="/artist"> 
                    <img className="artwork" src={artist.allArtists[1].pic} alt='1' />
                </Link>
            </div>

            <div className="artworkContainer">
                <Link to="/artist"> 
                    <img className="artwork" src={artist.allArtists[2].pic} alt='2' />
                </Link>
            </div> 

        </div>

    )
}

export default Home;