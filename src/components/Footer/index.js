import {Box, Center, Container, Flex, Heading, Link, Text, VStack} from "@chakra-ui/react";
import {footer} from "./data";

export default function Footer() {
  return (
    <Box bg="black" p={4}>
      <Box bg="#e9ecef" my={8} p={8} color="#737373" borderRadius="md">
        <Center>
          <Heading>
            Entrepreneurship Cell, SGSITS
          </Heading>
        </Center>
        <br/>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between">
            {
              footer.map((col, i) => (
                <VStack key={i}>
                  <Heading size="md">
                    {col.title}
                  </Heading>
                  {col.links.map((link, i) => (
                    <Link href={col.link} key={i}>
                      {link.label}
                    </Link>
                  ))}
                </VStack>
              ))
            }
          </Flex>
        </Container>
      </Box>
      <Center>
        <Text color="#777">
          Copyright © E-Cell SGSITS
        </Text>
      </Center>
    </Box>
  );
}