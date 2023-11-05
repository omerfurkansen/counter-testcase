import React from "react";
import "../../styles/Counter.scss";
import CountColor from "../../helpers/CountColor";
import { TEXT } from "./config";

export default function Counter(): React.FunctionComponentElement<{}> {
  const [count, setCount]: [number, React.Dispatch<React.SetStateAction<number>>] = React.useState(0);
  
  const increment: () => void = () => {
    setCount(count + 1);
  }

  const decrement: () => void = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset: () => void = () => {
    setCount(0);
  }

  React.useEffect(() => {
    const color: string = CountColor(count);
    const countElement: HTMLElement | null = document.querySelector(".count");
    if (countElement) {
      countElement.style.color = color;
    }
  }, [count]);

  return (
    <div className="CounterContainer" data-testid="counter">
      <h1 className="title">{TEXT.title}</h1>
      <div className="CounterControls">
        <button data-testid="decrement" onClick={decrement} className="decrement">{TEXT.decrement}</button>
        <h2 data-testid="count" className="count">{count}</h2>
        <button data-testid="increment" onClick={increment} className="increment">{TEXT.increment}</button>
      </div>
      <button data-testid="reset" onClick={reset} className="reset">{TEXT.reset}</button>
    </div>
  )
}