//components
import { Container, useBreakpointValue } from '@chakra-ui/react';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import ProjectCarousel from './components/ProjectCarousel';
import ProjectTab from './components/ProjectTab';

const App = () => {
  const projectDisplay = useBreakpointValue(['carousel', 'carousel', 'tab']);

  const projectComponents = {
    carousel: <ProjectCarousel />,
    tab: <ProjectTab />,
  };

  const Project = projectComponents[projectDisplay];
  return (
    <Container maxW='container.lg' px={4}>
      <NavigationBar />
      <HomePage />
      {Project}
      <Contact />
    </Container>
  );
};

export default App;
