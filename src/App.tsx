import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details';
import Layout from './components/Layout';
import Results from './components/Results';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Results />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </Layout>

  );
}

export default App;
