

import hebe from "../assets/hebe1.jpeg"
import ploy from "../assets/ploypisut1.jpeg"
import olivia from "../assets/olivia1.jpeg"

function Home () {

    // const handleImage = () => {

    //     // takes you to artist information/page

    // }


    return (


        <div className="home">
           
<div className="artworkContainer"><img className="artwork" src={hebe} alt='hebe' /></div>
<div className="artworkContainer"><img className="artwork" src={olivia} alt='olivia' /></div>
<div className="artworkContainer"><img className="artwork" src={ploy} alt='ploypisut' /></div>

        </div>

    )
}

export default Home;