import React from 'react';
import './App.scss';
import Layout from './layout/layout';
// import Targets from './components/targets/targets';
import Gain from './templates/gain/gain';
import Maintenance from './templates/maintenance/maintenance';
import Reduction from './templates/reduction/reduction';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import Home from './components/home/Home';

const App: React.FC = () => {
  const handleTotalNutritionsChange = (
    totalProteins: number,
    totalFat: number,
    totalCarbons: number,
  ) => {
    return null;
  };

  return (
    <Layout>
      <Router>
        {/* <Targets /> */}
        {/* <Welcome /> */}
        <Routes>
          <Route path={'/'} element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/gain"
            element={
              <Gain onTotalNutritionsChange={handleTotalNutritionsChange} />
            }
          />
          <Route
            path="/maintenance"
            element={
              <Maintenance
                onTotalNutritionsChange={handleTotalNutritionsChange}
              />
            }
          />
          <Route
            path="/reduction"
            element={
              <Reduction
                onTotalNutritionsChange={handleTotalNutritionsChange}
              />
            }
          />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
