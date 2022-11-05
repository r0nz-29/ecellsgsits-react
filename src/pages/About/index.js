import {cards, director, faculty, founders} from "./data";
import {useEffect} from "react";
import {Box, Center, Container, Divider, Flex, Heading, Image, Text} from "@chakra-ui/react";
import "@fontsource/noticia-text";

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <br/>
      <br/>
      <br/>
      <Container maxW="container.xl">
        <Center>
          <Heading>
            About Us
          </Heading>
        </Center>
        <Divider my={4} style={{
          border: 0,
          height: "1px",
          backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0) 100%)",
        }}/>
        <DummyText/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Center>
          <Heading>
            Evoke! Enterprise! Expand!
          </Heading>
        </Center>
        <br/>
        <br/>
        <Flex gap={6}>
          {cards.map((card, i) => (
            <AgendaCard card={card} key={i}/>
          ))}
        </Flex>
        <br/>
        <br/>
        <br/>
        <br/>
        <Center>
          <Heading>
            Our Mentors
          </Heading>
        </Center>
        <br/>
        <Center>
          <PersonCard person={director} width="sm"/>
        </Center>
        <br/>
        <br/>
        <Flex gap={4} alignItems="stretch">
          {faculty.map((faculty, i) => (
            <PersonCard person={faculty} key={i}/>
          ))}
        </Flex>
        <br/>
        <br/>
        <br/>
        <br/>
        <Center>
          <Heading>
            Our Founders
          </Heading>
        </Center>
        <br/>
        <br/>
        <Flex gap={4} justify="space-evenly" alignItems="stretch">
          {founders.map((founder, i) => (
            <PersonCard person={founder} key={i} width="xs"/>
          ))}
        </Flex>
        <br/>
        <br/>
      </Container>
    </Box>
  );
}

function AgendaCard({card}) {
  return (
    <Box boxShadow="dark-lg" borderRadius="lg" p={4}>
      <Image
        src={card.img}
        height="150px"
        width="150px"
        marginBottom="1.60em"
        backgroundColor="rgb(13, 116, 116)"
      />
      <Center>
        <Heading size="lg">{card.title}</Heading>
      </Center>
      <Center my={2}>
        <Heading size="sm">{card.h5}</Heading>
      </Center>
      <Center>
        <Text align="center">{card.p}</Text>
      </Center>
    </Box>
  );
}

function PersonCard({person, ...props}) {
  return (
    <Box minHeight="510px" borderRadius="lg" boxShadow="2xl" {...props}>
      <Image borderTopRadius="lg" objectFit="cover" height="340px" src={person.img} alt={person.name}
             title={person.name}/>
      <Box p={4}>
        <Heading size="md" mb={3}>{person.name}</Heading>
        <Text>{person.line}</Text>
      </Box>
    </Box>
  );
}

function DummyText() {
  return (
    <p align="justify">
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
        <strong>VISION</strong> is to bring a new revolution in Social Entrepreneurship by awakening the entrepreneur
        within
        every individual. We provide a platform to the crowd to help them unveil the potential they
        have. to promote start-ups among the students, to build an exhaustive resource pool to aid
        potential student entrepreneur, to motivate the students to come up with feasible and pragmatic
        business plans.
        <br/><br/>
        <strong>MISSION</strong> is to be a major E-Cell in central India, i.e., a leading incubation center in upcoming
        years
        to develop a major center of Social Entrepreneurship.
      </p></p>
  );
}