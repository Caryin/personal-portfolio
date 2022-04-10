import React from 'react';
import ProfilePhoto from '../assets/ProfilePhoto.jpg';

//chakraUI
import { VStack, Heading, Avatar, useColorModeValue } from '@chakra-ui/react';

import { keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1)  }
  25% { transform: scale(1.2)  }
  50% { transform: scale(-0.5)  }
  75% { transform: scale(1.2)  }
  100% { transform: scale(1)  } 
`;

const animation = `${animationKeyframes} 3s ease-in-out `;

const MyName = () => {
  const fontColor = useColorModeValue('gray.700', 'rgb(221, 217, 216)');
  return (
    <VStack py={[2, 6]} pr={[0, 28]}>
      <Heading size='sm' color={fontColor}>
        Hi, I'm
      </Heading>

      <Heading
        size='2xl'
        color={fontColor}
        pb={3}
        mt={0}
        as={motion.div}
        animation={animation}
        transition='2.5s ease'
      >
        Caryin
      </Heading>

      <Avatar
        boxSize={['200px', '250px']}
        src={ProfilePhoto}
        name='Caryin'
        bg='telegram'
      />
    </VStack>
  );
};

export default MyName;
