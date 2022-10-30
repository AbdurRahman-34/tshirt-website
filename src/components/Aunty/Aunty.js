import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>House : {house}</p>
            <button onClick={() => setHouse(house + 1)}>Click Count</button>
        </div>
    );
};

export default Aunty;