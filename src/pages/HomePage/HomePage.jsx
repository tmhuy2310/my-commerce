import React from 'react';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import ItemCarousel from '../../components/ItemCarousel/ItemCarousel';
import data from '../../data/men_shirt.json';

const HomePage = () => {
    return (
        <div>
            <HomeCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <ItemCarousel data={data} sectionName={"Samsung"}/>
                <ItemCarousel data={data} sectionName={"iPhone"}/>
                <ItemCarousel data={data} sectionName={"OPPO"}/>
                <ItemCarousel data={data} sectionName={"Huawei"}/>
            </div>
        </div>
    );
};

export default HomePage;
