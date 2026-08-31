import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-light border-top">
      <div className="container mb-5 mt-5">
        <div className="row ">
          <div className="col-3">
            <img style={{ width: "150px" }} src={logo} alt="logo" />
            <p>© 2010 - 2026, EquiTrade Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col offset-1">
            <h4 style={{ fontWeight: "400px", fontSize: "15px" }}>Company</h4>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              About
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Products
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Pricing
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Referral Programme
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Careers
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              EquiTrade.tech
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Press & media
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              EquiTrade cares (CSR)
            </a>
          </div>
          <div className="col">
            <h4 style={{ fontWeight: "400px", fontSize: "15px" }}>Support</h4>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Contact
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Support portal
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Z-Connect blog
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              List of charges
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Downloads & resources
            </a>
            <br />
          </div>
          <div className="col">
            <h4 style={{ fontWeight: "400px", fontSize: "15px" }}>Account</h4>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Open an acoount
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              Fund transfer
            </a>
            <br />
            <a style={{ textDecoration: "none", color: "black" }} href="">
              60 day challenge
            </a>
          </div>
        </div>

        <div style={{ fontSize: "0.7rem", color: "gray" }} className="mt-5 ">
          <p>
            EquiTrade Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through EquiTrade Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: EquiTrade Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            <a href=""> complaints@zerodha.com</a>, for DP related to{" "}
            <a href="">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            <a href="">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href=""> NSE broker factsheet</a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please <a href="">create a ticket here</a>
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
