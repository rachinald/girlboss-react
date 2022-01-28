import { useState, useEffect } from "react";


function Artist () {

    const [artist, setArtist] = useState()

    useEffect(()=> {
  
        const fetchData = async () => {
            
            console.log("hello")
            try {
              const res = await fetch(
          
                  `http://localhost/artist/${artist.id}`,
          
                {
                  mode: "cors",
                  cache: "no-cache",
                  method: "GET",
                  headers: { "Content-Type": "application/json" },
                }
              );
            //     console.log("fetch done")
            //   const data = await res.json();
              
            //   setArtist(data);
            //   console.log(artist)

      
            } catch (error) {
              console.error(error);
            }
          };
          fetchData()


    },[])

    return (

    <div className="artist">

        {/* <h1>Name: {artist.artistName}</h1>
        <h1>Website: {artist.website}</h1>
        <h1>Instagram: {artist.instagram}</h1>
        <h1>Category: {artist.category}</h1> */}

    </div>
    )
}

export default Artist;