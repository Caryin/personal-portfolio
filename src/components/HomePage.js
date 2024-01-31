//components
import MyAvatar from "./MyAvatar";
import Introduction from "./Introduction";

//chakraUI
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex
      id="home"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      py={[2, 10, 28]}
    >
      <MyAvatar />
      <Introduction />
    </Flex>
  );
};

export default HomePage;
