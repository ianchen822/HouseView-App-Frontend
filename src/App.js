import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{

    const token = localStorage.getItem("token");
    // const storedUser = localStorage.getItem("user");
    console.log("Token:",token)
    console.log("User:",user)
    if (token && location.pathname !== "/login") {

      axios.get("http://localhost:5001/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      }).then((res)=>{
        // res 是 API 回應的資料, res.data 代表 API 回傳的 JSON 物件。
        // res.data.user 是 API 回傳的用戶資訊（假設回傳的 JSON 是 { user: { name: "Chen", email: "chen@example.com" } }）。
        setUser(res.data.user);
      }).catch((err) => {
        console.error("Token 驗證失敗", err);
        localStorage.removeItem("token"); // 若 token 過期則清除
        navigate("/login"); // 驗證失敗導回登入頁面
      });

    } else if (!token) {
      // 無 token，跳到登入頁
      console.log("無 token，跳到登入頁")
      navigate("/login");
    } else if (token && location.pathname === "/login") {
      console.log("有 token，導到首頁")
      navigate("/")
    }

  // 在 useEffect 內部的 dependency array（依賴陣列） 中放入 navigate 是為了
  // 避免 React 產生閉包（closure）問題，並確保 navigate 始終是最新的值。
  // useEffect 只會記住它執行當下的 navigate。
  // 但 React 重新渲染後，useNavigate() 可能返回新的 navigate，而 useEffect 內部仍在使用舊的 navigate。
  // 如果 navigate 的內部邏輯涉及 history，這可能會導致 navigate("/login") 無法正確執行，從而造成跳轉失敗或不符合預期。
  // 所以放入 navigate (這我還不是很懂)
  }, [navigate, location.pathname]);

  // if (user && location.pathname === "/login") {
  //   return <Home user={user} />;
  // }

  return (
    // Router 可以跟 useNavigate 做搭配
    
    <Routes>
      {/* 預設頁面設置為 Home 頁面 */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home user={user} />} /> {/* 導向 Home 頁面並附上 user 資訊 */} 
    </Routes>
    
  );
}

// useNavigate() 必須在 <Router> 內部才能使用，而 App 組件是 <Router> 外部的根組件。
// 因此需要 router 將 App 包起來 才能在 App 裡面使用 navigate
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
