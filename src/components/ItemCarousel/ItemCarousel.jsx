import React, { useState, useEffect, useRef } from 'react';
import SectionCard from '../HomeSectionCard/SectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ItemCarousel({ data, sectionName }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        768: { items: 3 },
        1024: { items: 5.5 },
    };

    // Determine how many items to show based on screen width
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const breakpoints = Object.keys(responsive)
            .map(Number)
            .sort((a, b) => b - a); // sort descending

        for (let bp of breakpoints) {
            if (screenWidth >= bp) {
                setVisibleItems(responsive[bp].items);
                break;
            }
        }
    }, [screenWidth]);

    const items = data.slice(0, 10).map((item, index) => <SectionCard key={index} product={item} />);

    const maxIndex = Math.max(0, Math.floor(items.length - visibleItems));

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    return (
        <div className="border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5 mx-3">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    activeIndex={activeIndex}
                    disableButtonsControls
                    disableDotsControls
                    items={items}
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    ref={carouselRef}
                />
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: 'absolute',
                            top: '9rem',
                            left: '0rem',
                            bgcolor: 'white',
                            transform: 'translateX(-50%) rotate(90deg)',
                            color: 'black',
                        }}
                        onClick={slidePrev}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ color: 'black', transform: 'rotate(-90deg)' }} />
                    </Button>
                )}
                {activeIndex < maxIndex && (
                    <Button
                        variant="contained"
                        className="z-50"
                        sx={{
                            position: 'absolute',
                            top: '9rem',
                            right: '0rem',
                            bgcolor: 'white',
                            transform: 'translateX(50%) rotate(90deg)',
                        }}
                        onClick={slideNext}
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon sx={{ color: 'black', transform: 'rotate(-90deg)' }} />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default ItemCarousel;
