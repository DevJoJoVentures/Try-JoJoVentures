import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App.tsx';
import Preview from './Preview.tsx';
import SecondPreview from './SecondPreview.tsx';
import ThirdPreview from './ThirdPreview.tsx';
import WireframeOnePreview from './WireframeOnePreview.tsx';
import WireframeTwoPreview from './WireframeTwoPreview.tsx';
import WireframeOneSecond from './WireframeOneSecond.tsx';
import WireframeTwoSecond from './WireframeTwoSecond.tsx';
import WireframeOneThird from './WireframeOneThird.tsx';
import WireframeTwoThird from './WireframeTwoThird.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/second-preview" element={<SecondPreview />} />
        <Route path="/third-preview" element={<ThirdPreview />} />
        <Route path="/wireframe-one" element={<WireframeOnePreview />} />
        <Route path="/wireframe-two" element={<WireframeTwoPreview />} />
        <Route path="/wireframe-one-second" element={<WireframeOneSecond />} />
        <Route path="/wireframe-two-second" element={<WireframeTwoSecond />} />
        <Route path="/wireframe-one-third" element={<WireframeOneThird />} />
        <Route path="/wireframe-two-third" element={<WireframeTwoThird />} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AnimatedRoutes />
      <CustomCursor />
    </Router>
  </StrictMode>
);