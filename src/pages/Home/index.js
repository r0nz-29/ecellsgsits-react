import {INTRO_VIDEO} from "../../Utils/images";
import {ADDRESS, highlights, OverallCoordinators} from "./data";
import {Carousel} from "react-bootstrap";
import "./index.css";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroVideo/>
      <WhoWeAre/>
      <Highlights/>
      <Contact/>
    </>
  );
}

function Contact() {
  return (
    <section style={{padding: "2em"}}>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h3>E-Cell SGSITS</h3>
          <ul>
            <li>
              <i className="fa fa-road"></i> {ADDRESS}
              <wbr/>
              (452003) India
            </li>
            {
              OverallCoordinators.map((oc, i) => (
                <li key={i}>
                  <i className="fa fa-phone fa-rotate-90"></i><strong> {oc.name} </strong>:<a
                  href={`https://wa.me/91${oc.mob}`}>
                  {oc.mob}
                </a>
                </li>
              ))
            }
            <li><a href="mailto:ecellsgsits.in" className="mail-contact"><i
              className="fa fa-envelope"></i> contact@ecellsgsits.com</a></li>
            <br/>
            <li>
              <iframe style={{border: 0, maxWidth: "100%"}}
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ElcyMywgTmVocnUgUGFyayBSZCwgQWdhcndhbCBOYWdhciwgQ2hob3RpIEd3YWx0b2xpLCBJbmRvcmUsIE1hZGh5YSBQcmFkZXNoIDQ1MjAwNywgSW5kaWE"
                      allowFullScreen="" scrolling="yes"></iframe>
            </li>
            <br/>
            <p><strong>Follow Us</strong></p>
            <a href="https://in.linkedin.com/company/e-cellsgsits" target="_blank"
               className="icon-button linkedin"><i
              className="icon-linkedin fab fa-linkedin-in"></i><span></span></a>
            <a href="https://www.facebook.com/ecell.sgsits/" target="_blank" className="icon-button facebook"><i
              className="icon-facebook fab fa-facebook-f"></i><span></span></a>
            <a href="https://www.youtube.com/channel/UC08AoAfZrBaCfRlSrs_K3Yw" target="_blank"
               className="icon-button youtube"><i
              className="icon-youtube fab fa-youtube"></i><span></span></a>
            <a href="https://www.instagram.com/ecell.sgsits/" target="_blank" className="icon-button instagram"><i
              className="icon-instagram fab fa-instagram"></i><span></span></a>
          </ul>
        </div>
        <div className="contact wow fadeInRight" id="contact">
          <h3>Email Us</h3>
          <form method="POST">
            <p>
              <label>Name</label>
              <input required type="text" placeholder="FirstName LastName" name="name"/>
            </p>

            <p>
              <label>Subject</label>
              <input required type="text" placeholder="Subject" name="subject"/>
            </p>

            <p>
              <label>Email Address</label>
              <input required type="email" placeholder="mail@email.com" name="email"/>
            </p>

            <p>
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="999 888 7777" pattern="[0-9]{10}"
                     title="Please enter a valid 10 digit phone number (without country code)"/>
            </p>

            <p className="full">
              <label>Message</label>
              <textarea required name="message" placeholder="Message" rows="5"></textarea>
            </p>

            <p className="full">
              <button type="submit" className="btn btn-dark m-auto d-block" onClick={() => {
              }}>Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
    ;
}

function Highlights() {
  return (
    <>
      <section id="Highlights">
        <div className="box">
        </div>
      </section>
      <section id="owlcarousel">
        <div id="monitor">
        </div>
        <div className="owl-carousel owl-theme" style={{height: "600px"}}>
          <Carousel interval={1000} indicators={false}>
            {highlights.map((highlight, i) => (
              <Carousel.Item key={i}>
                <div className="item">
                  <img src={highlight.img}/>
                  <div className="caption">
                    <h4 className="animated"><span
                      className="name"> {highlight.name} </span><small> {highlight.id} </small></h4>
                    <h5 className="animated pulse"> {highlight.tagline} </h5>
                  </div>
                </div>
              </Carousel.Item>
            ))
            }
          </Carousel>
        </div>
      </section>
      <hr/>
    </>
  );
}

function IntroVideo() {
  return (
    <div>
      <video autoPlay muted loop id="myvideo">
        <source src={INTRO_VIDEO} type="video/mp4"/>
      </video>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section className="container" id="about">
      <div className="box">
        <p>
          <br/>
          <h5 className="subhead text-center font-weight-bold">Who we are?</h5><br/>
          <p className="text-justify px-4">
            <strong>E-Cell SGSITS</strong>, Indore officially began on 17
            March 2015. Our Entrepreneurship Cell is a non-profit organization run by
            students of SGSITS with the aim of manifesting entrepreneurship spirit of young
            students. We at our E-Cell host various exhaustive workshops, exclusive speaker sessions, and innovative
            games. Such competitions for aspiring entrepreneurs support them by providing
            necessary resources such as seed funding, mentoring, consultancy and
            networking.
          </p>
        </p>
        <br/>
      </div>
    </section>
  );
}
