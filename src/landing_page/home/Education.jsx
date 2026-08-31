import education from "../../assets/images/education.svg";

export default function Education() {

    return(
       <div className="containe">
        <div className="row mt-5">

            <div className="col-6 ms-5">
                <img  src={education} alt="education" />
            </div>
            <div className="col-5">
                <h2 className="mt-5 mb-4">Free and open market education</h2>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a style={{textDecoration:"none"}} href="">Versity <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "rgb(76, 101, 223)" }}
                ></i></a>


                <p className="mt-5">Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                <a style={{textDecoration:"none"}} href="">TradingQ&A <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "rgb(76, 101, 223)" }}
                ></i></a>
            </div>

        </div>
       </div>
    )
};