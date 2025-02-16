import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';

function App() {
  return (
    // Router 可以跟 useNavigate 做搭配
    <Router>
      <Routes>
        {/* 預設頁面設置為 Home 頁面 */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* 導向 Home 頁面 */}
      </Routes>
    </Router>
  );
}

export default App;
