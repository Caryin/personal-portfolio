import React from "react";

//Carousell
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//Image
import portfolioDark from "../assets/portfolioDark.png";
import portfolioLight from "../assets/portfolioLight.png";
import myMomentum from "../assets/myMomentum.png";
import pokemonDashboard from "../assets/pokemonDashboard.png";
import todoApp from "../assets/todoApp.png";

//ChakraUI
import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

//icon
import { ExternalLinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";

const Project = () => {
  const fontColor = useColorModeValue("gray.700", "rgb(221, 217, 216)");
  const portfolio = useColorModeValue(portfolioDark, portfolioLight);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container maxW="container.lg" p={[2, 10]} id="projects" my={6}>
      <VStack>
        <Heading size="md" color="pink.500">
          PROJECTS
        </Heading>
        <Text color="gray.600" as="i" pt={3} pb={5} fontSize="15px">
          Feel free to checkout the deployed projects by just clicking on the
          screenshots!
        </Text>
      </VStack>

      <Carousel responsive={responsive} swipeable={true} infinite={true}>
        <Box textAlign="center">
          <Image src={portfolio} />
          <Text fontSize="15px" m={1} color={fontColor}>
            This Portfolio
          </Text>
        </Box>

        <Box textAlign="center">
          <Image src={todoApp} />
          <Link
            fontSize="15px"
            color={fontColor}
            href="https://my-todo-app-ts.vercel.app/"
            isExternal
          >
            To-do App
            <ExternalLinkIcon color={fontColor} m={2} />
          </Link>
        </Box>

        <Box textAlign="center">
          <Image src={pokemonDashboard} />
          <Link
            fontSize="15px"
            color={fontColor}
            href="https://catch-em-pokemons.vercel.app/"
            isExternal
          >
            Catch em' All
            <ExternalLinkIcon color={fontColor} m={2} />
          </Link>
        </Box>

        <Box textAlign="center">
          <Image src={myMomentum} />
          <Link
            fontSize="15px"
            color={fontColor}
            href="https://mymomentum.vercel.app/"
            isExternal
          >
            Momentum
            <ExternalLinkIcon color={fontColor} m={2} />
          </Link>
        </Box>
      </Carousel>
    </Container>
  );
};

export default Project;
