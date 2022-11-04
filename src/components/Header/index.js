import {ECELL_LOGO} from "../../Utils/images";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="container" style={{fontFamily: "'Lato', sans-serif", fontSize: "medium"}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link to="/"><img src={ECELL_LOGO} style={{height: "40px", width: "40px"}}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto main-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/events">EVENTS</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item nav-link" to="/Aarambh">AARAMBH</Link>
                <Link className="dropdown-item nav-link" to="/events">EVENTS ARCHIVES</Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/volunteer">VOLUNTEER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/esummit">E-SUMMIT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sponsors">SPONSORS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">TEAM</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">CONTACT</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Link to="linkedin-connect" target="_blank" className="icon-button linkedin"><i
              className="icon-linkedin fab fa-linkedin-in"></i><span></span></Link>
            <Link to="facebook-connect" target="_blank" className="icon-button facebook"><i
              className="icon-facebook fab fa-facebook-f"></i><span></span></Link>
            <Link to="youtube-connect" target="_blank" className="icon-button youtube"><i
              className="icon-youtube fab fa-youtube"></i><span></span></Link>
            <Link to="instagram-connect" target="_blank" className="icon-button instagram"><i
              className="icon-instagram fab fa-instagram"></i><span></span></Link>
          </ul>
        </div>

      </nav>
    </div>
  );
}