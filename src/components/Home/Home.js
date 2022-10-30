import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart'
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    const [cart, setCart] = useState([])

    const handelAddToCart = (selctedItem) => {
        const exits = cart.find(tshirt => tshirt._id === selctedItem._id )
        if(!exits){
            const newCart = [...cart, selctedItem]
            setCart(newCart)
        }
        else{
            alert("Item Alredy Added")
        }
        
    }

    const removeFormCart = (selctedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selctedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt
                    key = {tShirt._id}
                    tShirt = {tShirt}
                    handelAddToCart = {handelAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                removeFormCart= {removeFormCart}
                cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;