import {cards, director, faculty, founders} from "./data";
import "./index.css";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect} from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Container>
        <div>
          <h2 className="text-center pt-3">
            <strong>About Us</strong>
          </h2>
          <hr/>
          <Text/>
        </div>
      </Container>
      <br/>
      <section id="team">
        <div className="my-3 py-5 text-center">
          <div className="row mb-5">
            <div className="col">
              <h3 className="head text-center font-weight-bold">
                Evoke! Enterprise! Expand!
              </h3>
              <br/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {cards.map((card, i) => <AgendaCard card={card} key={i}/>)}
            </div>
          </div>
        </div>
      </section>
      <br/>
      <section>
        <br/><br/>
        <h3 className="head text-center">
          <strong>Our Mentors</strong>
        </h3>
        <br/>
        <Row className="justify-content-center">
          <Col xs={2}>
            <PersonCard person={director}/>
          </Col>
        </Row>
        <br/>
        <br/>
        <Container>
          <Row className="justify-content-center align-items-stretch">
            {faculty.map((faculty, i) => (
              <Col key={i} xs={3}>
                <PersonCard person={faculty}/>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <br/>
        <br/>
        <h3 className="head text-center">
          <strong>Our Founders</strong>
        </h3>
        <br/>
        <Container>
          <Row className="justify-content-center">
            {founders.map((founder, i) => (
              <Col key={i} xs={4}>
                <PersonCard person={founder} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <br/>
      <br/>
    </>
  );
}

function AgendaCard({card}) {
  return (
    <div className="col-lg-4 col-md-6" style={{padding: "1em"}}>
      <div className="card" id="e2">
        <div className="card-body">
          <img src={card.img} alt="bar graphs on a palm"
               className="img-thumbnail rounded-circle"
               style={{
                 height: "150px",
                 width: "150px",
                 marginBottom: "1.60em",
                 backgroundColor: "rgb(13, 116, 116)",
               }}/>
          <h2>{card.title}</h2>
          <h5 id="text-card">{card.h5}</h5>
          <p id="text-card">{card.p}</p>
        </div>
      </div>
    </div>
  );
}

function PersonCard({person}) {
  return (
    <div className="card" style={{height: '100%'}}>
      <img className="card-img-top" src={person.img} alt={person.name} title={person.name}/>
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">{person.line}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <>
      <strong>E-Cell SGSITS</strong>, Indore officially began on 17 March 2015. Our Entrepreneurship Cell is a
      non-profit organization run by
      students of SGSITS with the aim of manifesting entrepreneurship spirit of youth.
      We at our E-Cell host various exhaustive workshops,exclusive speaker sessions,and innovative
      games. These competitions for aspiring entrepreneurs support them by providing
      necessary resources such as seed funding, mentoring, consultancy and
      networking. So that the youth has the tenacity and audacity to persevere and to be unstoppable.
      <br/>
      <p>It believes in building a meaningful entrepreneurial community, which can only thrive when the entire
        scope of the academic enterprise is located in close proximity, in order to foster the formal
        and informal inter communications that lead to productive collaboration.We believe that
        entrepreneurship is the key that can unlock India's latent inventive potential and bring out some
        healthy competitions which will be lucrative for all of us. It will not only
        push India to the forefront of the world but also help raise the quality of life in the country.
        <br/>
        With this belief The Entrepreneurship Cell, SGSITS targets to help in the development of India's
        entrepreneurial ecosystem by enabling easy and efficient interaction between it's major
        components spanning students, working professionals, aspiring and existing entrepreneurs,
        mentors, investors, venture capital firms and corporate through initiatives like interactive
        sessions, competitions, conferences etc. with E-Cell, through its activities and competitions, has
        served as the guiding torch to many individuals to start their own ventures.
        <br/><br/>
        <strong>VISION</strong>
        is to bring a new revolution in Social Entrepreneurship by awakening the entrepreneur within
        every individual. We provide a platform to the crowd to help them unveil the potential they
        have. to promote start-ups among the students, to build an exhaustive resource pool to aid
        potential student entrepreneur, to motivate the students to come up with feasible and pragmatic
        business plans.
        <br/><br/>
        <strong>MISSION</strong>
        is to be a major E-Cell in central India, i.e., a leading incubation center in upcoming years
        to develop a major center of Social Entrepreneurship.
      </p></>
  );
}