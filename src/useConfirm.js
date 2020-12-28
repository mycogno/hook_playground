import React from "react";

const useConfirm = (message = "", callback, refection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      refection();
    }
  };
  return confirmAction;
};

const HookUseConfirm = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hello useConfirm!</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default HookUseConfirm;
