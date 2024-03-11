import React from "react";

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
  Image,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";

//chakraUI-icon
import { InfoOutlineIcon } from "@chakra-ui/icons";

const Project = () => {
  const fontColor = useColorModeValue("gray.700", "rgb(221, 217, 216)");
  const portfolio = useColorModeValue(portfolioDark, portfolioLight);

  return (
    <Container maxW="container.lg" p={10} id="projects" my={6}>
      <VStack>
        <Heading size="md" color="pink.500">
          PROJECTS
        </Heading>
        <Box display="flex" alignItems="center" pb={12} pt={3} gap={2}>
          <InfoOutlineIcon color="gray.600" />
          <Text color="gray.600" as="i">
            Feel free to checkout the deployed projects by just clicking on the
            screenshots!
          </Text>
        </Box>
      </VStack>
      <Tabs
        isFitted
        align="center"
        variant="enclosed"
        colorScheme="purple"
        color={fontColor}
        outline="none"
      >
        <TabList justifyContent="space-around">
          <Tab>This Portfolio</Tab>
          <Tab>To-do App</Tab>
          <Tab>Catch em' All</Tab>
          <Tab>Momentum</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Image src={portfolio} />
          </TabPanel>

          <TabPanel>
            <Link href="https://my-todo-app-ts.vercel.app/" isExternal>
              <Image src={todoApp} />
            </Link>
          </TabPanel>

          <TabPanel>
            <Link href="https://catch-em-pokemons.vercel.app/" isExternal>
              <Image src={pokemonDashboard} />
            </Link>
          </TabPanel>

          <TabPanel>
            <Link href="https://mymomentum.vercel.app/" isExternal>
              <Image src={myMomentum} />
            </Link>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Project;
