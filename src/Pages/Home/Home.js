import React from 'react';
import Experts from '../Experts/Experts';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider/ImageSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ImageSlider></ImageSlider>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;