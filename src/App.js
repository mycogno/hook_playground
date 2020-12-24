import React from "react";
import "./index.css";
import HookUseState from "./useState";
import HookUseInput from "./useInput";
import HookUseTabs from "./useTabs";
import HookUseEffect from "./useEffect";
import HookUseTitle from "./useTitle";
import HookUseClick from "./useClick";

function App() {
  return (
    <div>
      <HookUseState initNumber={0} />
      <HookUseInput />
      <HookUseTabs />
      <HookUseEffect />
      <HookUseTitle />
      <HookUseClick />
    </div>
  );
}

export default App;
