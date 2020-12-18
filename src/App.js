import React from "react";
import "./index.css";
import HookUseState from "./useState";
import HookUseInput from "./useInput";

function App() {
  return (
    <div>
      <HookUseState initNumber={0} />
      <HookUseInput />;
    </div>
  );
}

export default App;
