import { Button, Link } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";

const ActionButton = ({ children, colorScheme, href }) => {
  return (
    <Button
      as={Link}
      isExternal
      colorScheme={colorScheme}
      variant="outline"
      href={href}
      width="100%"
      maxWidth="550px"
    >
      {children}
    </Button>
  );
};

export default ActionButton;
