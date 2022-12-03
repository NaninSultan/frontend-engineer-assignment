import React from 'react';
import Layout from './components/Layout';
import Results from './components/Results';
import Tabs from './components/Tabs';

function App() {
  return (
    <Layout>
      <Tabs />
      <Results />
    </Layout>
  );
}

export default App;
