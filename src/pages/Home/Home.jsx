// src/pages/Home.jsx
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import SportsEquipnetNav from '../../components/SportsEquipnetNav/SportsEquipnetNav';
import ProductSection from '../../components/ProductSection/ProductSection';
import FeaturedReviews from '../../components/FeaturedReviews/FeaturedReviews';
import LatestNews from '../../components/LatestNews/LatestNews';


const Home = () => {
  return (
    <div >
      <NavBar />
      <Banner />
      <SportsEquipnetNav />
      <ProductSection/>
      <FeaturedReviews/>
      <LatestNews/>
    </div>
  );
};

export default Home;