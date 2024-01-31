import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";

//chakraUI
import {
  Heading,
  Text,
  Flex,
  VStack,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const Introduction = () => {
  const fontColor = useColorModeValue("gray.700", "rgb(221, 217, 216)");

  const animationKeyframes = keyframes`
  0% { transform: scale(1)  }
  50% { transform: scale(1.15)  }
  100% { transform: scale(1)  }
  `;

  const animation = `${animationKeyframes} 2s ease-in-out `;

  return (
    <Flex w="100%" p={4}>
      <VStack w="100%" alignItems={{ base: "center", md: "flex-start" }}>
        <Heading size="md" color={fontColor}>
          Hi, I'm
        </Heading>
        <Heading
          size="2xl"
          color={fontColor}
          pt={2}
          pb={4}
          as={motion.div}
          animation={animation}
          transition="2.5s ease"
        >
          Caryin Yee
        </Heading>
        <Text color={fontColor} fontSize="xl">
          An experienced frontend developer with a legal background,{" "}
          <strong>skilled in React</strong>, passionate about crafting
          user-friendly and visually appealing web interfaces. Devoted to
          continually enhancing skills and upholding industry best practices for
          consistently delivering high-quality results.
        </Text>

        <SocialMediaButtons />
      </VStack>
    </Flex>
  );
};

export default Introduction;
