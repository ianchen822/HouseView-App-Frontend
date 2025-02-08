import React, { useState } from "react";

const SearchBar = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="p-4 bg-gray-100 flex justify-center">
      <input
        type="text"
        placeholder="輸入目的地"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2">
        搜尋
      </button>
    </div>
  );
};

export default SearchBar;
