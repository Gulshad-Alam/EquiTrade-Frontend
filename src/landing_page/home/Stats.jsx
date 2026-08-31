import ecosystem from "../../assets/images/ecosystem.png";

export default function Stats() {
  return (
    <div className="container ">
      <div style={{ marginLeft: "5%", marginBottom:"10%" }} className="row mt-5">
        <div className="col-5 p-2 mt-2">
          <h2 className="mb-5">Trust with confidence</h2>

          <h3 style={{ fontSize: "150%" }}>Customer first always</h3>
          <p className="text-muted" style={{ fontSize: "90%" }}>
            Thats why 13+ crore customers trus EquiTrade with {"\u20B9"}3.5+
            lakh crores worth of equity investments.
          </p>

          <h3 style={{ fontSize: "150%" }}>No spam or gimmicks</h3>
          <p className="text-muted" style={{ fontSize: "90%" }}>
            No gimmicks, spam, "gamification", or annoying push notification.
            High quality apps that you use at your place, the way you like.
          </p>

          <h3 style={{ fontSize: "150%" }}>The Zerodha universe</h3>
          <p className="text-muted" style={{ fontSize: "90%" }}>
            Not just an app, but a whole ecosystem. Out investments in 30+
            fintech startups offer you tailored services specific to you needs.
          </p>

          <h3 style={{ fontSize: "150%" }}>Do better with money</h3>
          <p className="text-muted" style={{ fontSize: "90%" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with you
            money
          </p>
        </div>

        <div className="col-6 mt-5 offset-1">
          <img
            style={{ width: "70%", marginLeft: "10%" }}
            src={ecosystem}
            alt="ecosystem"
          />
          <div className="row ">
            <div className="col-5 offset-2">
              <a style={{ textDecoration: "none" }} href="">
                Explore our products &nbsp;
                <i
                  className="fa-solid fa-arrow-right-long"
                  style={{ color: "rgb(76, 101, 223)" }}
                ></i>
              </a>
            </div>
            <div className="col-2">
              <a style={{ textDecoration: "none" }} href="">
                Try Kite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
