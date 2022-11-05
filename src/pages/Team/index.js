import {departments, OC, storeHeads} from "./data";
import React, {useEffect} from "react";
import {Box, Center, Container, Flex, Heading, IconButton, Image, Text} from "@chakra-ui/react";
import {FadingDivider} from "../About";
import {FaLinkedinIn} from "react-icons/fa";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxW="container.xl">
      <br/><br/><br/>
      <Center>
        <Heading>
          Team E-Cell
        </Heading>
      </Center>
      <FadingDivider/>
      {[1, 2].map(i => <br key={i}/>)}
      <OverallCoordinators/>
      <DeptHeads/>
      <StoreHeads/>
    </Container>
  );
}

function StoreHeads() {
  return (
    <>
      <Center>
        <Heading>
          STOR-E HEADS
        </Heading>
      </Center>
      <br/>
      <br/>
      {
        storeHeads.map((cxx, i) => (
          <React.Fragment key={i}>
            <Center>
              <Heading size="lg">
                {cxx.title}
              </Heading>
            </Center>
            <br/>
            <br/>
            <Center>
              <ProfileCard person={cxx} key={i} width="xs" borderRadius="xl"/>
            </Center>
            <br/>
            <br/>
            <br/>
            <br/>
          </React.Fragment>
        ))
      }
    </>
  );
}

function DeptHeads() {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <Center>
        <Heading>
          DEPARTMENT HEADS
        </Heading>
      </Center>
      <br/>
      <br/>
      {departments.map((dept, i) => (
        <React.Fragment key={i}>
          <Center>
            <Heading size="lg">
              {dept.department}
            </Heading>
          </Center>
          <br/>
          <br/>
          <Flex gap={4} justify="space-evenly">
            {dept.heads.map((head, i) => (
              <ProfileCard person={head} key={i} width="xs" borderRadius="xl"/>
            ))
            }
          </Flex>
          <br/>
          <br/>
          <br/>
          <br/>
        </React.Fragment>
      ))
      }
    </>
  );
}

function OverallCoordinators() {
  return (
    <>
      <Center>
        <Heading>
          OVERALL COORDINATORS
        </Heading>
      </Center>
      <br/>
      <br/>
      <Flex gap={4} justify="space-evenly">
        {OC.map((oc, i) => (
          <ProfileCard person={oc} key={i} width="xs" borderRadius="xl"/>
        ))
        }
      </Flex>
    </>
  );
}

function ProfileCard({person, ...props}) {
  return (
    <Box boxShadow="2xl" borderRadius="lg" {...props} position="relative">
      <Image src={person.img} alt={person.name} borderTopRadius="xl"/>
      <Box p={4}>
        <Center>
          <Heading size="md">{person.name}</Heading>
        </Center>
        <Center>
          <Text>{person.post}</Text>
        </Center>
      </Box>
      <div className="social-link">
        <a href={person.linkedin} target="_blank" className="icon-button linkedin"><i
          className="icon-linkedin fab fa-linkedin-in"></i><span></span></a>
      </div>
      <IconButton
        icon={<FaLinkedinIn/>}
        onClick={() => window.location.replace(person.linkedin)}
        aria-label={"linkedin"}
        position="absolute"
        right={0}
        bottom={0}
        bg="white"
        color="#0077b5"
        borderBottomRightRadius="lg"
        borderTopLeftRadius="lg"
        borderTopRightRadius={0}
        borderBottomLeftRadius={0}
      />
    </Box>
  );
}