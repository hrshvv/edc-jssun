import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/use-theme.jsx';
import Navbar from './our/components/navbar/Navbar';
import Team from './our/views/Team';
import Main from './our/views/Main';
import Events from './our/views/Events';
import About from './our/views/About';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 md:w-[80%] w-full p-4">
          <Navbar />
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
