//components
import MyName from './MyName';
import Introduction from './Introduction';

//chakraUI
import { Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex
      px={[0, 4, 4]}
      direction={{ base: 'column', sm: 'row' }}
      id='home'
      py={[2, 10, 16]}
    >
      <MyName />
      <Introduction />
    </Flex>
  );
};

export default HomePage;
