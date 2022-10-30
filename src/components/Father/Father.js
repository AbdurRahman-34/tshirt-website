import Myself from '../Myself/Myself'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Father = ({house}) => {
    const Gift = useContext(RingContext)
    return (
        <div>
            <h4>Father</h4>
            <p>House : {house}</p>
            <div style={{display : 'flex'}}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;