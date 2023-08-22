import React from 'react';
import Navigation from './src/Navigations/Naviagtion';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native';
// import {QueryClient, QueryClientProvider} from 'react-query';

const App = () => {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
  );
};

export default App;
