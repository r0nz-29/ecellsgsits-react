import {BACKGROUND_2021, BACKGROUND_2021_MOBILE, ECELL_LOGO} from "../../../../Utils/images";
import {useEffect} from "react";

export default function Header() {
  return (
    <>
      <section id="header-waves">
        <img src={BACKGROUND_2021} className="d-none d-md-block w-100 h-auto user-select-none"
             alt=""/>
        <img src={BACKGROUND_2021_MOBILE}
             className="d-block d-md-none w-100 h-auto user-select-none"
             alt=""/>
      </section>
      <section id="navbar">
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top nav-clipped py-0" id="mynav" data-spy="affix">
          <a style={{
            background: "linear-gradient(180deg, rgba(62, 205, 250, 1), rgba(41, 170, 227, 0.3))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            WebkitTextFillColor: "transparent", paddingTop: "15px",
          }} className="navbar-brand ml-4" href="/">
            <img src={ECELL_LOGO} width="40px"/><span className="h5"> E - Cell
							SGSITS</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                  aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mt-2 mt-lg-0 mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link pb-0 mb-0 bg-transparent" href="#about">
                  <span className="link">ABOUT</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="link">EVENTS</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/esummit/get-funded"><span className="link text-capitalize">Get
											Funded</span></a>
                  <a className="dropdown-item" href="/esummit/ideascape"><span
                    className="link text-capitalize">Ideascape</span></a>
                  <a className="dropdown-item" href="/esummit/speakersverse"><span
                    className="link text-capitalize">speakersverse</span></a>
                  <a className="dropdown-item" href="/esummit/speakerology"><span
                    className="link text-capitalize">speakerology</span></a>
                  <a className="dropdown-item" href="/esummit/ipl"><span
                    className="link text-capitalize">IPL Auction</span></a>
                  <a className="dropdown-item" href="/esummit/cxo"><span
                    className="link text-capitalize">Be a CXO</span></a>
                  <a className="dropdown-item" href="/esummit/workshops"><span
                    className="link text-capitalize">workshops</span></a>
                  <a className="dropdown-item" href="/esummit/content-conclave"><span className="link text-capitalize">Content
											Conclave</span></a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link pb-0 mb-0 bg-transparent" href="/esummit/workshops">
                  <span className="link">WORKSHOP</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pb-0 mb-0 bg-transparent" href="#FAQ">
                  <span className="link">FAQs</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pb-0 mb-0 bg-transparent" href="/esummit/contact">
                  <span className="link">CONTACT US</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link pb-0 mb-0 bg-transparent" href="/esummit/partners">

                  <span className="link">PARTNERS</span>
                </a>
              </li>

            </ul>
            <div className="nav-link px-md-0 pl-md-3 d-flex justify-content-center mr-md-5" href="">
              <a role="button" className="btn btn-light register-btn d-flex justify-content-center align-items-center"
                 style={{minHeight: "38px", width: "auto", height: "auto"}}>
                <span className="register-now">Event Ended</span>
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}