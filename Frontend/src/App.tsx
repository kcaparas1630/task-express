/**
 * Main Function that is the child of Main.tsx
 * Includes Routing from authentication to Dashboard.
 * 
 * @author @Kcaparas
 */
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';
import Register from './Views/Auth/Components/Register';
import MainPage from './Views/Dashboard/MainPage';
import Dashboard from './Views/Dashboard/Dashboard';
import AddTasks from './Views/Dashboard/AddTasks';
import ProtectedRoute from './ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  // Will create a localStorage custom hook.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');

    return savedDarkMode !== null && savedDarkMode !== '';
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedLoginToken = localStorage.getItem('loginToken');
    return savedLoginToken !== null && savedLoginToken !== '';
  });


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  // check for token frequently and sets the value given.
  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    setIsAuthenticated(token !== null && token !== '');
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp isDarkMode={isDarkMode}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route path='/register' element={<Register isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/main" element={<MainPage isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
            <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
            <Route path="/addTasks" element={<AddTasks isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </StyledApp>
    </QueryClientProvider>
  );
};


export default App;
