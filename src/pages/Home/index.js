import {INTRO_VIDEO} from "../../Utils/images";
import {ADDRESS, highlights, OverallCoordinators} from "./data";
import {useEffect} from "react";
import {
  Box,
  Button,
  Center,
  Container, Flex,
  Heading,
  HStack,
  Input,
  Link, Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {MdLocationCity} from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io";
import {FiMail} from "react-icons/fi";
import {Socials} from "../../components/Header";
import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Home() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IntroVideo/>
      <br/>
      <br/>
      <WhoWeAre/>
      <br/>
      <br/>
      <Highlights/>
      <br/>
      <br/>
      <Contact/>
    </>
  );
}

function Contact() {
  return (
    <Box bg="black" borderRadius="sm" m={8} boxShadow="dark-lg">
      <Stack alignItems="stretch" direction="row">
        <Box color="white" p={8} minW="40vw">
          <Heading>
            E-Cell SGSITS
          </Heading>
          <br/>
          <HStack>
            <MdLocationCity/>
            <Text>
              {ADDRESS}
            </Text>
          </HStack>
          {OverallCoordinators.map((oc, i) => (
            <HStack>
              <IoLogoWhatsapp/>
              <Text>
                {oc.name}:
              </Text>
              <Link href={`https://wa.me/91${oc.mob}`} isExternal color="red.400">{oc.mob}</Link>
            </HStack>
          ))}
          <HStack>
            <FiMail/>
            <Text>
              contact@ecellsgsits.com
            </Text>
          </HStack>
          <br/>
          <Heading size="md" py={2} color="white">Follow us</Heading>
          <Socials spaced/>
        </Box>
        <Box bg="#262626" color="white" width="100%" height="100%" p={8}>
          <Heading>
            Contact Us
          </Heading>
          <br/>
          <Flex gap={4}>
            <ContactInput placeholder="Name"/>
            <ContactInput placeholder="Name"/>
          </Flex>
          <br/>
          <Flex gap={4}>
            <ContactInput placeholder="Name"/>
            <ContactInput placeholder="Name"/>
          </Flex>
          <br/>
          <Textarea borderColor="#555" placeholder="Message" _placeholder={{color: "#888"}} bg="#333"/>
          <br/>
          <br/>
          <Button width="100%" bg="black" _hover={{bg: "black.900"}} variant="solid">
            Submit
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

function ContactInput(props) {
  return (
    <Input
      borderColor="#555"
      bg="#333"
      _placeholder={{color: "#888"}}
      {...props}
    />
  );
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
                    <h4 className="animated"  style={{fontSize: "32px"}} ><span
                      className="name"> {highlight.name} </span><small> {highlight.id} </small></h4>
                    <h5 className="animated pulse" style={{fontSize: "20px"}} > {highlight.tagline} </h5>
                  </div>
                </div>
              </Carousel.Item>
            ))
            }
          </Carousel>
        </div>
      </section>
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
    <Container maxW="container.lg">
      <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
        <Center>
          <Heading size="md">
            Who we are?
          </Heading>
        </Center>
        <br/>
        <Text>
          <strong>E-Cell SGSITS</strong>, Indore officially began on 17
          March 2015. Our Entrepreneurship Cell is a non-profit organization run by
          students of SGSITS with the aim of manifesting entrepreneurship spirit of young
          students. We at our E-Cell host various exhaustive workshops, exclusive speaker sessions, and innovative
          games. Such competitions for aspiring entrepreneurs support them by providing
          necessary resources such as seed funding, mentoring, consultancy and
          networking.
        </Text>
      </Box>
    </Container>
  );
}
