import React from "react";

const Navbar = ({user}) => {
  // {}	在 JSX 中插入 JavaScript 表達式（變數、條件判斷等）
  // ()	讓多行 JSX 更易讀，避免解析錯誤
  // <> </>	用來避免 return 多的元素，JSX 返回只能回傳一個元素，若回傳下方兩個 button 會出錯 (拿掉會出錯)
  console.log("Navbar user check:", user);
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">HouseView</h1>
      <div>
        {user ? (
          <span className="text-lg font-semibold">Hi, {user.name}</span>
        ) : (
          <>
            <button className="bg-white text-blue-600 px-4 py-2 rounded mr-2">
              登入
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              註冊
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
