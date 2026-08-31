import homeHero from "../../assets/images/homeHero.png";
import { Link } from "react-router-dom";

function Hero() {
    return ( 

        <div className="container ">
            <div className="row text-center justify-content-center">
                <img src={homeHero} alt="home hero" className="mb-5" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>online platform to invest in stocks, derivatives, mutual funds and more</p>

                <Link to= "/signup">
                    <button style={{width:"15%"}} className="btn btn-primary">Signup now</button>
                </Link>
                
            </div>
            
        </div>
     );
}

export default Hero;