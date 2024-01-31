import React from "react";
import ProfilePhoto from "../assets/ProfilePhoto.jpg";

//chakraUI
import { Box, Avatar } from "@chakra-ui/react";

const MyAvatar = () => {
  return (
    <Box px={4}>
      <Avatar
        boxSize={["250px", "300px"]}
        src={ProfilePhoto}
        name="Caryin"
        bg="telegram"
      />
    </Box>
  );
};

export default MyAvatar;
