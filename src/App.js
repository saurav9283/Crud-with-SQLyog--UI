import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import LoginPage from './components/auth/Login.js';
import RegisterPage from './components/auth/Register.js';
import CreareItem from './components/Create/CreareItem.js';
import Navbar from './components/Navbar/Navbar.js';
import Save from './pages/Save.js';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreareItem />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
