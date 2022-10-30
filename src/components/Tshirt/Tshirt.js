import React from 'react';
import './Tshirt.css'


const Tshirt = (props) => {
    const {handelAddToCart, tShirt} = props;
    const {name, picture, price, gender} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <p>Gender : {gender ? gender : 'Null'}</p>
            <button onClick={() => handelAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;