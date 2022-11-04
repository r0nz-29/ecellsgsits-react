
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="jumbotron">
        <div className="container">
          <div className="col">
            <h3><b>Entrepreneurship Cell, SGSITS</b></h3></div>
        </div>
        <div className="row">
          <div className="col col-6 col-md-3">
            <h4><b>LINKS</b></h4>
            <p className="subheads">
              <a href="/esummit">E-Summit</a><br/>
              <a href="/events">Events</a><br/>
              <a href="/#initiatives">Initiatives</a>
            </p>
          </div>
          <div className="col col-6 col-md-3">
            <h4><b>ABOUT US</b></h4>
            <p className="subheads">
              <a href="/about">Vision</a><br/>
              <a href="/team">Our Team</a>
            </p>
          </div>
          <div className="col col-6 col-md-3">
            <h4><b>GET INVOLVED</b></h4>
            <p className="subheads">
              <a href="/#contact">As SGSITS Student</a><br/>
              <a href="/#contact">As Non-SGSITS Student</a><br/>
              <a href="/#contact">As Alumni</a><br/>
              <a href="/#contact">As Startup</a>
            </p>
          </div>
          <div className="col col-6 col-md-3">
            <h4><b>ADDRESS</b></h4>
            <p className="subheads">23, Nehru Park Road, Vallabh Nagar, Indore, Madhya Pradesh, India - (452003)</p>
          </div>
        </div>
      </div>
      <p className="copyright-text"> Copyright &copy; <a href="">E-Cell SGSITS</a>. </p>
    </footer>
  );
}