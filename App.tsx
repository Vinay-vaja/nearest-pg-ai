
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PGDetail from './pages/PGDetail';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('nearest_pg_theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('nearest_pg_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('nearest_pg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('nearest_pg_user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('nearest_pg_user');
  };

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/pg/:id" element={<PGDetail />} />
          <Route 
            path="/auth" 
            element={!user ? <Auth onLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/auth" />} 
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
