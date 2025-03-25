import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { ThemeProviderComponent } from './context/ThemeContext';
import { Box } from '@mui/material';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProviderComponent>
      <Router>
        <Box sx={{ display: 'flex' }}>
          
          
          
          <Sidebar open={sidebarOpen} onClose={handleDrawerToggle} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            
            <Header onDrawerToggle={handleDrawerToggle} />

            
            <Box component="main" sx={{ flex: 1, p: 3, mt: 8 }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="create" element={<Create />} />
                
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;

