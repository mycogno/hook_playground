import React, { useState } from "react";

function HookUseState({ initNumber }) {
  const [item, setItem] = useState(initNumber);
  // useState()는 array를 return해야함
  // 첫번째 원소는 상태 값 저장 변수, 두번째는 상태 값 갱신 함수
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello useState!</h1>
      <h2>Start Now! Let's Go!</h2>
      <h3>count = {item}</h3>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}

class UglyUseState extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello Class Component! {item}</h1>
        <h2>Start Now! Let's Go!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  // 클래스 컴포넌트는 상태 갱신 함수를 setState로 밖에 못만듦
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
}

export default HookUseState;
