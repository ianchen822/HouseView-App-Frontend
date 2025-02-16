import React from "react";
import { useState } from "react";
// navigate 是用來內部導引至不同的頁面
import {useNavigate} from "react-router-dom"
import axios from "axios";

const Login = () => {

    const [account, setAccont] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("")
    
    const handleLogin = async (e) => {
        
        // 避免提交後瀏覽器刷新頁面
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5001/api/auth/login", {
                account,
                password,
            });
            // console.log("hi");
            if (response.status === 200) {
                // 登入成功會儲存後端發送的 token 令牌
                // localstorage 是瀏覽器提供的 api，代表 user 本身的儲存空間
                // setItem 是其中的一個功能，可以用來建立 key-value 資訊
                // 這裡取得 response.data.token，對應後端 { token: "jwt_token" }
                localStorage.setItem("token", response.data.token);
                // 導引至首頁 Home (navigate 需搭配 router 套件並在 app.js 設定路由)
                navigate("/");
            }
    
        } catch (err) {
            // 若發生錯誤，錯誤會捕捉到 err 變數，若有錯誤，err 裡面會添加 response 屬性
            // err.response 是 axios 在請求失敗時所生成的 json 錯誤物件的一部分，表示後端有回應，但狀態碼顯示失敗。
            if (err.response) {
                // 顯示 response 裡面的 data (key) 的 message 值，若沒有回傳這個值，就顯示帳號或密碼錯誤
                // 這裡讀取的是 err.response.data.message，對應後端 { "message": "錯誤訊息" }
                setError(err.response.data.message || "帳號或密碼錯誤");
            }
            else {
                setError("伺服器錯誤，請稍候再試");
            }
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-4">登入</h2>
                {error && (
                    <p className="text-red-500 text-sm text-center mb-2">{error}</p>
                )}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="帳號"
                        className="w-full p-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={account}
                        // onchange 代表事件有任何改動就觸發某行為
                        // e 代表事件對象，即 onChange 用來記錄有關事件的資訊
                        // e.target 是觸發事件的 DOM 元素，即 input
                        // 當輸入變化時，觸發 onChange 事件，更新 state 變數，從而更新 value，再重新渲染組件 (set 語法會重新渲染)
                        onChange={(e) => setAccont(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="密碼"
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        登入
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
