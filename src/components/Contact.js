import React from "react";

//chakraUI
import {
  Heading,
  HStack,
  Button,
  Link,
  Icon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

//chakraUI-icon
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const fontColor = useColorModeValue("gray.700", "rgb(221, 217, 216)");

  return (
    <VStack id="contact" pb={32}>
      <Heading size="md" color="pink.500" textAlign="center" pt={20}>
        CONTACT
      </Heading>
      <Heading color={fontColor} size="lg" textAlign="center" pt={3}>
        Connect with me!
      </Heading>

      <HStack
        py={[7, 10, 20]}
        alignItems="center"
        gap={[2, 4]}
        justifyContent={["space-around", "center"]}
      >
        <Button
          as={Link}
          isExternal
          href="mailto:yeecaryin@gmail.com"
          colorScheme="purple"
          variant="outline"
        >
          <EmailIcon mr="10px" />
          E-Mail
        </Button>
        <Button
          as={Link}
          isExternal
          href="https://www.linkedin.com/in/caryinyee/"
          colorScheme="telegram"
          variant="outline"
        >
          <Icon as={FaLinkedin} mr="10px" />
          LinkedIn
        </Button>
      </HStack>
    </VStack>
  );
};

export default Contact;
