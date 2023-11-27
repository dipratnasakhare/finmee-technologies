import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Image,
  InputRightAddon,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Productivity } from "./component/Productivity";

export const Home = () => {
  const textArr = [
    "https://github.githubassets.com/assets/3m-0151c2fda0ce.svg",
    "https://github.githubassets.com/assets/kpmg-c249f20c5173.svg",
    "https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg",
    "https://github.githubassets.com/assets/sap-96248a56d312.svg",
    "https://github.githubassets.com/assets/pg-f1f19955c4e4.svg",
    "https://github.githubassets.com/assets/telus-df0c2109df99.svg",
  ];

  return (
    <div>
        <Image src="https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg" alt="blue" />
      <Heading as="h1" size="4xl" noOfLines={1}>
        Let’s build from here
      </Heading>
      <Heading as="h5" size="md">
        The world’s leading AI-powered developer platform.
      </Heading>

      <Box>
        <InputGroup size="sm">
          <Input placeholder="mysite" />
          <InputRightAddon
            bg="#6e40c9"
            color="white"
            children="Sign up for GitHub"
          />
        </InputGroup>

        <Button colorScheme="purple" variant="outline">
          <Text color={"black"}>Start a free enterprise trial</Text>
        </Button>

        <Box>
          <Text>Trusted by the world’s leading organizations ↘︎</Text>
        </Box>
      </Box>

      <Flex>
        {textArr.map((ele) => {
          return <Image src={ele} alt="logo" />;
        })}
      </Flex>





     {/* Productivity */}

     <Productivity/>



    </div>
  );
};
