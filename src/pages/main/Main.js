import React from 'react';
import Header from '../../components/header/Header';
import CarouselService from '../slide/CarouselService';
import Carouselgoso from '../slide/CarouselGoso';
import Category from '../../components/thema_category/ThemaCategory';
import Banner from '../slide/Banner';
function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <CarouselService />
      <Carouselgoso />
    </div>
  );
}

export default Main;
