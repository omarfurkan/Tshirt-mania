import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty'
import Father from '../Father/Father';
import './Grandpa.css';

export const RingContext = createContext('ring');

const Grandpa = () => {
    const [house, setHouse] = useState(1);


    const ornaments = 'Kada Matir Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h4>Grandpa</h4>
                <button
                    onClick={handleBuyAHouse}
                >Buy A House</button>
                <p>House: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;