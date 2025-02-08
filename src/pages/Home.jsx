import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HotelList from "../components/HotelList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <HotelList />
      <Footer />
    </div>
  );
};

export default Home;
