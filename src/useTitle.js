import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // useEffect는 component가 mount될 때, title이 update되면
  // updateTitle 함수를 실행시켜준다.
  useEffect(updateTitle, [title]);
  return setTitle;
};

const HookUseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000); // 5000ms 뒤에 titleUpdater 실행
  return (
    <div className="App">
      <h1>useTitle Area</h1>
      <h2>5 seconds to change title...</h2>
    </div>
  );
};

export default HookUseTitle;
