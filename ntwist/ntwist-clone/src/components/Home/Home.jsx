import { Box, Image, Heading, Button, Center } from "@chakra-ui/react";
import React from "react";
export const Home = () => {
  return (
    <>
      <Box className="Background"></Box>
      <Center
        h="100vh"
        m="auto"
        w="85%"
        justifyContent={"space-between"}
        display={"flex"}
      >
        <Box color={"white"}  textAlign={"start"} w="45%">
          <Heading as="h2" size="2xl" noOfLines={1}>
            Data-powered solutions
          </Heading>

          <Heading as="h2" size="2xl" noOfLines={1}>
            for Industrial Excellence{" "}
          </Heading>

          <Button mt="35px" bg="blue.500" borderRadius={"0px"} color={"white"}>
            Read More
          </Button>
        </Box>
        <Box w="50%">
          <Image
            width="100%"
            src={
              "https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            }
            alt=""
          />
        </Box>
      </Center>
    </>
  );
};
