import React, { useState } from "react";

//? Styles
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {

  const [cart, setCart] = useState('');

  const handelClick = () => {
    setCart('HOLA MUNDOOOO');
  }

  return (
    //? Clase 06
    <div className="ProductItem">
      <img
        src={product.images[0]} alt={product.title}
      />
      <div className="product-info">
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handelClick}>
          <img src={addToCart} alt="" />
        </figure>
        {cart}
      </div>
    </div>
  );
};

export default ProductItem;
