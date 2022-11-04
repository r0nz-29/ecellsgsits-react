import {ECELL_LOGO} from "../../Utils/images";

export default function Header() {
  return (
    <div className="container" style={{fontFamily: "'Lato', sans-serif", fontSize: "medium"}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <a href="/"><img src={ECELL_LOGO} style={{height: "40px", width: "40px"}}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto main-list">
            <li className="nav-item">
              <a className="nav-link" href="/">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">ABOUT</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/events">EVENTS</a>
              <div className="dropdown-menu">
                <a className="dropdown-item nav-link" href="/Aarambh">AARAMBH</a>
                <a className="dropdown-item nav-link" href="/events">EVENTS ARCHIVES</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/volunteer">VOLUNTEER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/esummit">E-SUMMIT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sponsors">SPONSORS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">CONTACT</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <a href="linkedin-connect" target="_blank" className="icon-button linkedin"><i
              className="icon-linkedin fab fa-linkedin-in"></i><span></span></a>
            <a href="facebook-connect" target="_blank" className="icon-button facebook"><i
              className="icon-facebook fab fa-facebook-f"></i><span></span></a>
            <a href="youtube-connect" target="_blank" className="icon-button youtube"><i
              className="icon-youtube fab fa-youtube"></i><span></span></a>
            <a href="instagram-connect" target="_blank" className="icon-button instagram"><i
              className="icon-instagram fab fa-instagram"></i><span></span></a>
          </ul>
        </div>

      </nav>
    </div>
  );
}