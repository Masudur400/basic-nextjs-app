/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/Types';
import React from 'react';



const ProductsPage = async () => {

    const res = await fetch('http://localhost:5000/products', {
        // next: {
        //     revalidate: 1
        //     // tags:['products']
        // }
        cache:'no-store'
    })
    const products = await res.json()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    products?.map((product: IProduct, idx: string) => <ProductCard product={product} key={idx}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;