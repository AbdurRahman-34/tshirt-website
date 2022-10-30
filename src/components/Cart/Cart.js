import React from 'react';
import './Cart.css'

const Cart = ({cart, removeFormCart}) => {

    // consitionally Rendaring Options
    // 1. Element (variable)
    // 2. Ternary Oparetor / consition ? true : false
    // && operator
    // || 
    
    
    // Condionally : Element Use  
    let command;
    if(cart.length === 0){
        command = <h4>Cart is Empty Product</h4>
    }
    else{
        command = <h4>Cart Is FulFil</h4>
    }

    return (
        <div>
            <h2>Item Selected : {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => removeFormCart(tShirt)}>X</button>
                    </p>)
            }

            {cart.length === 0 || <p className='green'>Plese add Item</p>}


            {cart.length === 2 && <button>TWO ITEMS</button>}

            {command}
            
        </div>
    );
};

export default Cart; 