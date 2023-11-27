import React from "react";
import logo from "../../image/logo.png";
import {
  Box,
  Image,
  Spacer,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const Navbar = () => {
  const navbar = [
    { text: "Home" },
    {
      text: "Industries",
      lo: [
        "Sustainability",
        "Mineral Processing",
        "Mine-ToMill-TO-Mine Optimization",
        "Oil & Gas",
      ],
    },
    { text: "Ai Software" },
    { text: "Blog" },
    { text: "Contact Us" },
  ];
  return (
    <Box pl="25px" pos={"fixed"} display={"flex"}>
      <Box display={"grid"} justifyContent={"center"} alignContent={"center"}>
        <Image color={"white"} width="200px" src={logo} alt="logo" />
      </Box>

      <Spacer />

      <Box
        p="25px"
        pr="50"
        justifyContent={"center"}
        alignContent={"center"}
        gap="50px"
        color="white"
        display={"flex"}
      >
        {navbar.map((ele) => {
          return (
            <Text className="accordion" fontFamily={"sans-serif"}>
              {ele.text}
            </Text>
          );
        })}
      
      </Box>
    </Box>
  );
};
