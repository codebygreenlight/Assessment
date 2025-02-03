import React from 'react';
import product from '../product';

function Price() {
    return (
        <div className="product-price">
            ${product.price.toFixed(2)}
        </div>
    );
}

export default Price; 