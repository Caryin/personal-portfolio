//components
import MyName from './MyName';
import Introduction from './Introduction';

//chakraUI
import { Container, Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxW='container.lg' p={10} id='home'>
      <Flex
        py={[0, 10, 20]}
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: '5', sm: '10', md: '20' }}
      >
        <MyName />
        <Introduction />
      </Flex>
    </Container>
  );
};

export default HomePage;
