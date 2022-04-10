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
  Stack,
  Center,
  Spacer,
} from '@chakra-ui/react';

//icon
import { EmailIcon, Icon } from '@chakra-ui/icons';
import { LinkIcon } from '@chakra-ui/icons';
import { FiGithub } from 'react-icons/fi';

const Introduction = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');

  return (
    <VStack my={6} alignItems='flex-start'>
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
      <HStack
        py={8}
        alignItems='center'
        // bg="red.500"
        w='full'
        justifyContent={['space-around', 'flex-start']}
        gap={4}
      >
        <Button
          as={Link}
          isExternal
          colorScheme='telegram'
          variant='outline'
          href='https://resume.io/r/FIVYyvn1m'
        >
          <LinkIcon mr='10px' />
          RESUME
        </Button>

        <Button
          as={Link}
          colorScheme='purple'
          variant='outline'
          isExternal
          href='https://github.com/Caryin'
        >
          <Icon as={FiGithub} w={5} h={5} mr='10px' />
          GITHUB
        </Button>
      </HStack>
    </VStack>
  );
};

export default Introduction;
