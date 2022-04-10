import React from 'react';
import { Link } from 'react-scroll';

//chakraUI
import {
  HStack,
  Heading,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavigationBar = () => {
  const { toggleColorMode } = useColorMode();
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 215)');
  const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <HStack justifyContent='space-between' px={[0, 4]} py={[2, 4]}>
      <Heading size='lg' color={fontColor}>
        CY.
      </Heading>
      <Spacer />
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
            px={[0.5, 3]}
          >
            Home
          </Button>
        </Link>
        <Link to='projects' spy={true} smooth={true}>
          <Button
            colorScheme='gray'
            color={fontColor}
            variant='ghost'
            px={[0.5, 3]}
          >
            Projects
          </Button>
        </Link>
        <Link to='contact' spy={true} smooth={true}>
          <Button
            colorScheme='gray'
            color={fontColor}
            variant='ghost'
            px={[0.5, 3]}
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
  );
};

export default NavigationBar;
