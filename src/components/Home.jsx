import {  Link } from "react-router-dom";

import hebe from "../assets/hebe1.jpeg"
import ploy from "../assets/ploypisut1.jpeg"
import olivia from "../assets/olivia1.jpeg"

function Home () {

    // const handleImage = () => {

    //     // takes you to artist information/page

    // }


    return (


        <div className="home">
           
            <div className="artworkContainer">
                <Link to="/Artist">
                    <img className="artwork" src={hebe} alt='hebe' />
                </Link>
            </div>

            <div className="artworkContainer">
                <Link to="/Artist"> 
                    <img className="artwork" src={olivia} alt='olivia' />
                </Link>
            </div>

            <div className="artworkContainer">
                <Link to="/Artist"> 
                    <img className="artwork" src={ploy} alt='ploypisut' />
                </Link>
            </div>

        </div>

    )
}

export default Home;