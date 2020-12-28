import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

// 선택한 Tab의 내용을 object로 return
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// 선택한 Section의 text만 보여주기
const HookUseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content); //conten는 Array
  return (
    <div className="App">
      <h1>Hello useTabs!</h1>
      {content.map((
        section,
        index //section은 content요소
      ) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default HookUseTabs;
