import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};

const HookUseClick = () => {
  const sayHello = () => {
    const htmlSpan = document.querySelector(".hello");
    htmlSpan.innerText = "Hello!";
  };
  const buttonEvent = useClick(sayHello);
  return (
    <div className="App">
      <h1>Hello useClick!</h1>
      <button ref={buttonEvent}>Click me!</button>
      <div className="hello"></div>
    </div>
  );
};

export default HookUseClick;
