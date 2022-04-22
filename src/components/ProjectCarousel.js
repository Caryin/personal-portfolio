import React from 'react';

//Carousell
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  Text,
  Box,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

//icon
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Project = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');
  const portfolio = useColorModeValue(portfolioDark, portfolioLight);
  const checkoutPage = useColorModeValue(checkoutDark, checkoutLight);

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
    <Container maxW='container.lg' p={[2, 10]} id='projects' my={6}>
      <VStack>
        <Heading size='md' color='pink.500'>
          PROJECTS
        </Heading>
        <Heading color={fontColor} size='lg' textAlign='center' pt={3} pb={12}>
          Build with React.
        </Heading>
      </VStack>

      <Carousel responsive={responsive} swipeable={true} infinite={true}>
        <Box p={3} textAlign='center'>
          <Image src={portfolio} />
          <Text fontSize='15px' m={1} color={fontColor}>
            This Portfolio
          </Text>
        </Box>

        <Box p={3} textAlign='center'>
          <Image src={myMomentum} />
          <Link
            fontSize='15px'
            color={fontColor}
            href='https://mymomentum.vercel.app/'
            isExternal
          >
            Momentum
            <ExternalLinkIcon color={fontColor} m={2} />
          </Link>
        </Box>

        <Box p={3} textAlign='center'>
          <Image src={foodApp} />
          <Text fontSize='15px' m={1} color={fontColor}>
            Food Order App
          </Text>
        </Box>

        <Box p={3} textAlign='center'>
          <Image src={checkoutPage} />
          <Text fontSize='15px' m={1} color={fontColor}>
            ChakraUI Checkout Page
          </Text>
        </Box>
      </Carousel>
    </Container>
  );
};

export default Project;
