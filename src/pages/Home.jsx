import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import HouseList from "../components/HouseList";
import Footer from "../components/Footer";

const Home = ({user}) => {
  console.log("Home user check:", user);
  return (
    <div>
      <Navbar user={user} />
      <SearchBar />
      <HouseList />
      <Footer />
    </div>
  );
};

export default Home;
