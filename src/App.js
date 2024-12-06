import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import UserProfile from './components/UserProfile';
import UserMenu from './components/UserMenu';
import FindSign from './pages/FindSign';
import Compatibility from './pages/Compatibility';
import Horoscope from './pages/Horoscope';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './layouts/AuthLayout';
import './styles/App.css';

function App() {
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated) {
    return (
      <Router>
        <AuthLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </AuthLayout>
      </Router>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="app-header">
            <UserMenu />
          </header>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/find-sign" element={<FindSign />} />
              <Route path="/compatibility" element={<Compatibility />} />
              <Route path="/horoscope" element={<Horoscope />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <ThemeToggle />
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

