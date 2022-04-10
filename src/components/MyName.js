import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';

//chakraUI
import { VStack, Heading, Avatar, useColorModeValue } from '@chakra-ui/react';

const MyName = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');
  return (
    <VStack py={6} pr={[0, 28]}>
      <Heading size='sm' color={fontColor}>
        Hi, I'm
      </Heading>
      <Heading size='2xl' color={fontColor} pb={3} mt={0}>
        Caryin
      </Heading>
      <Avatar boxSize={['180px', '250px']} src={ProfilePhoto} name='Caryin' />
    </VStack>
  );
};

export default MyName;
