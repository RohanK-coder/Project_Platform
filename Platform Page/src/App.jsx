import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from './Footer';
import GC from './pages/GC';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Collaborate from './pages/Collaborate';
import GCInsideNoLogin from './components/Grand Challenges/GCInsideNoLogin';
import GCInsideLogin from './components/Grand Challenges/GCPageInsideLogin';
import Chal from './pages/Chal';
import Home from './pages/Home';
import Navigation from './Navigation';
import NavigationOnLogin from './NavigationOnLogin';
import Signup from './components/Signup/Signup';
import Login from './components/Login/my';
import ChallengeAccept from './components/ChallengeAccept/ChallengeAccept';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAuthenticated(!!token);
    console.log("Token from localStorage:", token);
  }, []);
  


  return (
    <>
      <BrowserRouter>
        {authenticated ? <NavigationOnLogin /> : <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/grand-challenges" element={<GC />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/post-challenges" element={<Chal />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/challenge-post' element={<ChallengeAccept/>}/>
          <Route
            path="/details/:id"
            element={authenticated ? <GCInsideLogin /> : <GCInsideNoLogin />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
