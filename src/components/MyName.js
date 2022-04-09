import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';

//chakraUI
import { VStack, Heading, Avatar, useColorModeValue } from '@chakra-ui/react';

const MyName = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');
  return (
    <VStack
      w='full'
      h='full'
      alignItems='flex-start'
      pl={{ sm: 5, md: '60px' }}
    >
      <Heading size='sm' color={fontColor}>
        Hi, I'm
      </Heading>
      <Heading size='2xl' color={fontColor} pb={3} mt={0}>
        Caryin
      </Heading>
      <Avatar
        boxSize='3xs'
        src={ProfilePhoto}
        name='Caryin'
        alignItems='flex-start'
      ></Avatar>
    </VStack>
  );
};

export default MyName;
