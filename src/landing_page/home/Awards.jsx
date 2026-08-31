import largestBroker from "../../assets/images/largestBroker.svg";
import pressLogos from "../../assets/images/pressLogos.png";

export default  function Awards() {
    return ( 

        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">

                    <img style={{height:"90%"}} src={largestBroker} alt="awards" />

                </div>
                <div className="col-6 mt-5">

                    <h2 style={{marginTop:"30px"}}>Largest stock broker in India</h2>
                    <p style={{fontSize:"95%"}}>2+ million EquiTrade clients contribute to voer 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">futures and Options</li>
                                <li className="mb-2">Commodity derivatives</li>
                                <li className="mb-2">Currency dericatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className="mb-2">Stocks & IPOs</li>
                                <li className="mb-2">Direct mutual funds</li>
                                <li className="mb-2">Bonds and Go</li>
                            </ul>
                        </div>
                    </div>
                    <img style={{width:"90%", marginTop:"10px"}} src={pressLogos} alt="press logos" />
                </div>
            </div>
            
        </div>
     );
}

