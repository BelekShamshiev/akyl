import Product from '@/components/Product/Product';
import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const {query} = useRouter()
    console.log(query)
    return (
        <div>
            <Product/>
        </div>
    );
};

export default ProductId;