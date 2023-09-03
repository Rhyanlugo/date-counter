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

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(evnt) => setStep(Number(evnt.target.value))}
        />
        {/* <button onClick={() => setStep((prevStep) => prevStep - 1)}>-</button> */}
        <span>{step}</span>
        {/* <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((prevCount) => prevCount - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(evnt) => setCount(Number(evnt.target.value))}
        ></input>
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

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
