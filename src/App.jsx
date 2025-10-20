import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Categories from './pages/Categories';
import MissionProfile from './pages/MissionProfile';
import Search from './pages/Search';
import Insights from './pages/Insights';
import ChatBot from './pages/ChatBot';
import Navigation from './components/Navigation';
import StudentDashboard from './components/StudentDashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          color: 'var(--text-primary)',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          overflowX: 'hidden'
        }}>
          <Navigation />
          <main style={{
            padding: '20px',
            marginTop: '70px' // Add margin to avoid overlap with fixed navigation
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/mission/:id" element={<MissionProfile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;