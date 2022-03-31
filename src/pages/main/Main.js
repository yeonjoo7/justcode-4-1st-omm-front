import React from 'react';
import CarouselService from '../slide/CarouselService';
import Carouselgoso from '../slide/CarouselGoso';
import Category from '../../components/category/Category';
import Banner from '../slide/Banner';
function Main() {
  return (
    <div>
      <Banner />
      <Category />
      <CarouselService />
      <Carouselgoso />
    </div>
  );
}

export default Main;
