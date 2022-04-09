import React from 'react';
import { Link } from 'react-scroll';

//chakraUI
import {
  Container,
  HStack,
  Heading,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavigationBar = () => {
  const { toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 215)');
  const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Container maxW='container.xl' p={{ base: '4', sm: '4', md: '8' }}>
      <HStack>
        <Heading size='lg' color={fontColor}>
          CY.
        </Heading>
        <HStack
          w='100%'
          justifyContent={['flex-end']}
          position='static'
          top={0}
          p={2}
          zIndex={1000}
        >
          <Link activeClass='active' to='home' spy={true} smooth={true}>
            <Button
              colorScheme='gray'
              color={fontColor}
              variant='ghost'
              px={[0, 5]}
            >
              Home
            </Button>
          </Link>
          <Link to='projects' spy={true} smooth={true}>
            <Button
              colorScheme='gray'
              color={fontColor}
              variant='ghost'
              px={[0, 5]}
            >
              Projects
            </Button>
          </Link>
          <Link to='contact' spy={true} smooth={true}>
            <Button
              colorScheme='gray'
              color={fontColor}
              variant='ghost'
              px={[0, 5]}
            >
              Contact
            </Button>
          </Link>
          <IconButton
            onClick={toggleColorMode}
            variant='ghost'
            color={fontColor}
            icon={modeIcon}
          />
        </HStack>
      </HStack>
    </Container>
  );
};

export default NavigationBar;
