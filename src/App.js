import React from "react";
import "./index.css";
import HookUseState from "./useState";
import HookUseInput from "./useInput";
import HookUseTabs from "./useTabs";
import HookUseEffect from "./useEffect";
import HookUseTitle from "./useTitle";
import HookUseClick from "./useClick";
import HookUseConfirm from "./useConfirm";
import HookUsePreventLeave from "./usePreventLeave";
import HookUseBeforeLeave from "./useBeforeLeave";

function App() {
  return (
    <div>
      <HookUseState initNumber={0} />
      <HookUseInput />
      <HookUseTabs />
      <HookUseEffect />
      <HookUseTitle />
      <HookUseClick />
      <HookUseConfirm />
      <HookUsePreventLeave />
      <HookUseBeforeLeave />
    </div>
  );
}

export default App;
