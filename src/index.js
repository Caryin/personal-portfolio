import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//chakraUI
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
