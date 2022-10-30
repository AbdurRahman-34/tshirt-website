import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncale from "../Uncale/Uncale";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext('ring');

const Gift = 'Hello Iam again';
const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "DimonDRing";

  const byeAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[house, setHouse]}>
      <div className="grandpa">
        <h2>GrandPa Family</h2>
        <p> House : {house} <button onClick={byeAHouse}> Bye A House</button></p>

        <section style={{ display: "flex" }}>
          <Father house={house} ornament={ornament}></Father>
          <Uncale house={house}></Uncale>
          <Aunty house={house}></Aunty>
        </section>
      </div>
      </RingContext.Provider>

  );
};

export default Grandpa;
