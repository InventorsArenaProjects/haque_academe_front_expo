import * as React from 'react';
import { Text, View } from 'react-native';

import Navigator from './src/navigation/Index';

import GlobalProvider from './src/context/Provider';

const App = ({ navigation }) => {
  // ===========RENDER============
  return (
    <GlobalProvider>
      <Navigator />
    </GlobalProvider>
  );
};
export default App;