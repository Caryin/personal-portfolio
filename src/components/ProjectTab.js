import React from 'react';

//Image
import portfolioDark from '../assets/portfolioDark.png';
import portfolioLight from '../assets/portfolioLight.png';
import myMomentum from '../assets/myMomentum.png';
import foodApp from '../assets/foodApp.png';
import checkoutDark from '../assets/checkoutDark.png';
import checkoutLight from '../assets/checkoutLight.png';

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
} from '@chakra-ui/react';

//chakraUI-icon
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Project = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');
  const portfolio = useColorModeValue(portfolioDark, portfolioLight);
  const checkoutPage = useColorModeValue(checkoutDark, checkoutLight);

  return (
    <Container maxW='container.lg' p={10} id='projects' my={6}>
      <VStack>
        <Heading size='md' color='pink.500'>
          PROJECTS
        </Heading>
        <Heading color={fontColor} size='lg' textAlign='center' pt={3} pb={12}>
          Build with React.
        </Heading>
      </VStack>
      <Tabs
        align='center'
        variant='enclosed'
        colorScheme='purple'
        color={fontColor}
        outline='none'
      >
        <TabList justifyContent='space-around'>
          <Tab>Portfolio</Tab>
          <Tab>
            My Momentum <ExternalLinkIcon mx={1} />
          </Tab>
          <Tab>
            Food App <ExternalLinkIcon mx={1} />
          </Tab>
          <Tab>ChakraUI Checkout Page</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Image src={portfolio} />
          </TabPanel>
          <TabPanel>
            <Link href='https://mymomentum.vercel.app/' isExternal>
              <Image src={myMomentum} />
            </Link>
          </TabPanel>
          <TabPanel>
            <Link href='https://food-order-me.vercel.app/' isExternal>
              <Image src={foodApp} />
            </Link>
          </TabPanel>
          <TabPanel>
            <Image src={checkoutPage} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Project;
