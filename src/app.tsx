import './app.scss';
import { Home } from '@Pages/home/home';
import { Event } from '@Pages/event/event';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'preact/hooks';
import AOS from 'aos';
import { Auth } from '@Pages/auth/auth';
export function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}
