import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((prevStep) => prevStep - 1)}>-</button>
        <span>Step: {step}</span>{" "}
        <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((prevCount) => prevCount - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((prevCount) => prevCount + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)}`}{" "}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
