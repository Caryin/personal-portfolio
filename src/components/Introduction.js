import React from 'react';

//chakraUI
import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

//icon
import { Icon } from '@chakra-ui/icons';
import { LinkIcon } from '@chakra-ui/icons';
import { FiGithub } from 'react-icons/fi';

const Introduction = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');

  return (
    <VStack alignItems='flex-start'>
      <Heading size='sm' color='pink.500'>
        INTRODUCTION
      </Heading>
      <Heading size='xl' color={fontColor} pt={2}>
        Front End Developer
      </Heading>
      <Text as='i' color={fontColor} fontSize='xl'>
        An ex-lawyer transforming into Front End Developer.
      </Text>
      <Text color={fontColor} fontSize='xl'>
        I enjoy building projects and discovering new technologies in the world
        of software development. I am a competitive person and I love the
        challenge of learning new technologies.
      </Text>
      <HStack py={12}>
        <Link isExternal href='https://resume.io/r/FIVYyvn1m'>
          <Button size='lg' colorScheme='telegram' variant='outline' mx={2}>
            <LinkIcon mr='10px' />
            RESUME
          </Button>
        </Link>

        <Link isExternal href='https://github.com/Caryin'>
          <Button size='lg' colorScheme='purple' variant='outline' mx={2}>
            <Icon as={FiGithub} w={5} h={5} mr='10px' />
            GITHUB
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Introduction;
