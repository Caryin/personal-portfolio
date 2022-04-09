//components
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import { useBreakpointValue } from '@chakra-ui/react';
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
    <>
      <div>
        <NavigationBar />
        <HomePage />
      </div>
      <div>{Project}</div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default App;
