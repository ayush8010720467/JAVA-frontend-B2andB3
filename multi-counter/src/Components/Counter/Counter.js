import Button from "../Button/Button";
import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
  return (
    <div className="singleCounter">
      <div className="counter">
        <Button
          text="-"
          handleClick={() => {
            setCount((count) => count - 1);
          }}
          stylingClass={"btn btn-minus"}
        />
        <span>{count}</span>
        <Button
          text="+"
          handleClick={() => {
            setCount((count) => count + 1);
          }}
          stylingClass={"btn btn-plus"}
        />
      </div>
      <Button
        text="Reset"
        handleClick={() => {
          setCount(0);
        }}
        stylingClass={"btn btn-reset"}
      />
    </div>
  );
}
export default Counter;
