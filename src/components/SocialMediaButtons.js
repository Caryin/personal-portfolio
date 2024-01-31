import ActionButton from "../ui/ActionButton";

import { Icon, LinkIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SocialMediaButtons = () => {
  return (
    <Flex
      py={8}
      w="100%"
      gap={5}
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "center" }}
    >
      <ActionButton colorScheme="pink" href="https://resume.io/r/FIVYyvn1m">
        <LinkIcon mr="10px" />
        RESUME
      </ActionButton>

      <ActionButton colorScheme="purple" href="https://github.com/Caryin">
        <Icon as={FiGithub} w={5} h={5} mr="10px" />
        GITHUB
      </ActionButton>

      <ActionButton
        colorScheme="linkedin"
        href="https://www.linkedin.com/in/caryinyee/"
      >
        <Icon as={FaLinkedin} w={5} h={5} mr="10px" />
        LINKEDIN
      </ActionButton>
    </Flex>
  );
};

export default SocialMediaButtons;
