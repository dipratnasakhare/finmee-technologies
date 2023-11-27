import { Box, Image, Center, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../image/logo.png";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const Arr = ["Home", "About Us", "Contact Us", "Privacy Policy", "Sitemap"];
  const text = "9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada";

  return (
    <Box bg="#080C1F" p="50px">
      <Center>
        <Box gap="25px" display={"grid"}>
          <Center>
            <Image w="250px" src={logo} />
          </Center>

          <Box gap={"20px"} display={"flex"} color={"white"}>
            {Arr.map((ele) => {
              return <Text>{ele}</Text>;
            })}
          </Box>

          <Text color={"#6F7F92"}>{text}</Text>

          <Center gap="25px">
            {" "}
            <BiLogoTwitter color="white" />
            <FaLinkedin color="white" />
          </Center>

          <Text color={"#6F7F92"}>© 2022. Ntwist Inc.</Text>
        </Box>
      </Center>
    </Box>
  );
};
