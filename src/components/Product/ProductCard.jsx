import React from 'react';
import './ProductCard.css';
const ProductCard = ({product}) => {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer border-gray-200 rounded-lg">
            <div className='p-2 h-70 overflow-hidden'>
                <img className="h-full w-full object-cover" src={product.imageUrl} alt="" />
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p>{product.title}</p>
                </div>
                <div className="flex flex-col space-x-2">
                    <p className="font-semibold">{product.discountedPrice}</p>
                    <p className="line-through opacity-50">{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPersent}% OFF</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
