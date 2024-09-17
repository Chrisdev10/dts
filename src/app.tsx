import './app.css';
import { Home } from '@Pages/home/home';
import { Event } from '@Pages/event/event';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'preact/hooks';
import AOS from 'aos';
export function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}
