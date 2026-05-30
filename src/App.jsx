import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './views/Landing';
import Auth from './views/Auth';

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {isLanding && <LandingPage />}
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </>
  );
}


