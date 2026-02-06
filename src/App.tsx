import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { BigOpen } from './pages/BigOpen';
import { LTEHigh } from './pages/LTEHigh';
import { HighQ } from './pages/HighQ';
import { BaronHouse } from './pages/BaronHouse';
import { LightboxProvider } from './components/ImageLightbox';

export function App() {
  return (
    <LightboxProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/big-open" element={<BigOpen />} />
            <Route path="/lte-high" element={<LTEHigh />} />
            <Route path="/high-q" element={<HighQ />} />
            <Route path="/baron-house" element={<BaronHouse />} />
          </Routes>
        </Layout>
      </Router>
    </LightboxProvider>
  );
}
