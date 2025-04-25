import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './HomeCarouselData';

const items = homeCarouselData.map((item, idx) => (
    <img className="cursor-pointer w-full" role="presentation" src={item.image} alt=""></img>
));

const HomeCarousel = () => (
    <AliceCarousel autoPlay autoPlayInterval={3000} disableButtonsControls infinite items={items} mouseTracking />
);

export default HomeCarousel;
