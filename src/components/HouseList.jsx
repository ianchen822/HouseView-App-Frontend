import React from "react";

const houses = [
  { id: 1, name: "台北 101 飯店", price: 3000, rating: 4.5, image: "https://via.placeholder.com/150" },
  { id: 2, name: "高雄港灣飯店", price: 2500, rating: 4.2, image: "https://via.placeholder.com/150" },
  { id: 3, name: "台中商務旅館", price: 2800, rating: 4.3, image: "https://via.placeholder.com/150" },
];

const HouselList = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {houses.map((house) => (
        <div key={house.id} className="border p-4 rounded shadow">
          <img src={house.image} alt={house.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{house.name}</h2>
          <p>價格：${house.price} / 每晚</p>
          <p>評分：{house.rating} ⭐</p>
        </div>
      ))}
    </div>
  );
};

export default HouselList;
