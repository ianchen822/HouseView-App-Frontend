import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HouseList from "../components/HouseList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <HouseList />
      <Footer />
    </div>
  );
};

export default Home;
