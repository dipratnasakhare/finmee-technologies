import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";

export const TextHome = () => {
  const textArr = [
    {
      heading: "Mine-To-Mill-To-Mine Optimization",
      text: "NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
      image:
        "https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-scaled.jpg",
    },
    {
      heading: "Sustainability",
      text: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
      image:
        "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
    },
    {
      heading: "Mineral Processing",
      text: "NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
      image:
        "https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
    },
    {
      heading: "Oil & Gas",
      text: "Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
      image:
        "https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
    },
  ];

  return (
    <Box >
      {textArr &&
        textArr.map((ele) => {
          return (
            <Box gap="25px" display={"flex"} p="55px">
              <Box display={"grid"} alignContent={"center"} pt="25px" textAlign={"start"} w="50%" >
                <Heading
                  mb="25px"
                  color="#FF3A2D"
                  as="h2"
                  size="xl"
                  noOfLines={1}
                >
                  {ele.heading}
                </Heading>
                <Text textAlign={"justify"} fontSize={"large"} mb="25px">
                  {ele.text}
                </Text>
                <Box>
                  <Button color={"white"} bg={"#FF3A2D"} borderRadius={"0px"}>
                    Read More
                  </Button>
                </Box>
              </Box>

              <Box w="50%">
                <Image w="90%" src={ele.image} alt="mining" />
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};
