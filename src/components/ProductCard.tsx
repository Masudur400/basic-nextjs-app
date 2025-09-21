import { IProduct } from '@/Types';
import Image from 'next/image';
import React from 'react';




const ProductCard = ({ product }: { product: IProduct }) => {
    const { id, product_name, category, brand, price, image } = product
    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-300">
            <Image src={image} alt='image' width={300} height={200}></Image>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product_name}</h2>
                <p className="text-gray-600 text-sm">{brand} • {category}</p>
                <p className="text-blue-600 font-bold mt-2">${price.toFixed(2)}</p>
                <div className='flex justify-between items-center gap-5'>
                    <button className="mt-4 hover:cursor-pointer  bg-blue-600 text-sm w-full text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                        Details
                    </button>
                    <button className="mt-4 hover:cursor-pointer  bg-blue-600 text-sm w-full text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;