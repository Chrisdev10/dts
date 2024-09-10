import './app.css';
import { Home } from '@Pages/home/home';
import { Event } from '@Pages/event/event';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';

export function App() {
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
