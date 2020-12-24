import React from "react";
import "./index.css";
import HookUseState from "./useState";
import HookUseInput from "./useInput";
import HookUseTabs from "./useTabs";
import HookUseEffect from "./useEffect";

function App() {
  return (
    <div>
      <HookUseState initNumber={0} />
      <HookUseInput />
      <HookUseTabs />
      <HookUseEffect />
    </div>
  );
}

export default App;
