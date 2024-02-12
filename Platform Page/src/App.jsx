import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import GC from './pages/GC';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Collaborate from './pages/Collaborate';
import GCInsideNoLogin from './components/Grand Challenges/GCPageInsideLogin';

import Chal from './pages/Chal';
import Home from './pages/Home';
import Navigation from './Navigation';
import Signup from './components/Signup/Signup';
import Login from './components/Login/my';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grand-challenges" element={<GC />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/post-challenges" element={<Chal />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/details/:id" element={<GCInsideNoLogin />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
