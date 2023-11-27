import { Box, Button, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";


export const Navbar = () => {
  const arr = ["Product", "Solution", "Open Source", "Pricing"];
  return (
    <Flex p="20px" gap="20px">
      <Box>
        <FaGithub size={"25"} />
      </Box>

      <Box display={"flex"} gap="15px">
        {arr.map((ele) => {
          return <Flex><Text>{ele} </Text> <LiaGreaterThanSolid /> </Flex>;
        })}
      </Box>

      <Spacer />

      <Box>
        <InputGroup size="sm">
          <InputLeftAddon children={<CiSearch />} />
          <Input placeholder="Search or jump to..." />
          <InputRightAddon children="/" />
        </InputGroup>
      </Box>

      <Box>
      <Button colorScheme='white' color="black" >
    Sign up
  </Button>
      </Box>
      <Box>
      <Button colorScheme='white' variant='outline'>
    Sign up
  </Button>
      </Box>
    </Flex>
  );
};
