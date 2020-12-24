import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  return (
    <div className="App">
      <h1>Hello useEffect!</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default HookUseEffect;
