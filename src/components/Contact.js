import React from 'react';

//chakraUI
import {
  Container,
  Heading,
  Stack,
  HStack,
  Button,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

//chakraUI-icon
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');

  return (
    <Container maxW='container.lg' id='contact' p={10}>
      <Heading size='md' color='pink.500' textAlign='center' pt={20}>
        CONTACT
      </Heading>
      <Heading color={fontColor} size='lg' textAlign='center' pt={3}>
        Ways To Contact Me
      </Heading>

      <Stack py={[7, 10, 20]} alignItems='center'>
        <HStack spacing='45px'>
          <Link isExternal href='mailto:yeecaryin@gmail.com'>
            <Button size='lg' colorScheme='purple' variant='outline'>
              <EmailIcon mr={3} />
              E-Mail
            </Button>
          </Link>
          <Link isExternal href='https://www.linkedin.com/in/caryinyee/'>
            <Button size='lg' colorScheme='telegram' variant='outline'>
              <Icon as={FaLinkedin} mr='10px' />
              LinkedIn
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Contact;
