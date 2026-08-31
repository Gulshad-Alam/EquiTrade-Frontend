export default function Pricing(){

    return (

        <div className="container mt-5  " style={{marginBottom:"10%"}}>
            <div className="row ms-5">
                <div className="col-4">
                    <h2>Unbeatable Pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a style={{textDecoration:"none"}} href="">See pricing <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "rgb(76, 101, 223)" }}
                ></i></a>
                </div>

                <div className="col-6 offset-2">

                    <div className="row">
                        <div className="col-6 border text-center p-3">
                            <p style={{fontSize:"2rem", fontWeight:"600"}}>{"\u20B9"}0</p>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-6 border text-center p-3">
                            <p style={{fontSize:"2rem", fontWeight:"600"}}>{"\u20B9"}20</p>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}