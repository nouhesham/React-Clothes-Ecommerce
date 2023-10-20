import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="row ">
      <div className="col-lg-2 d-flex justify-content-between justify-md-content-center mt-5">
        <button
          onClick={increment}
          className="btn btn-primary"
          style={{ width: "2rem" }}
        >
          +
        </button>
        <p>{counter}</p>
        <button
          onClick={decrement}
          className="btn btn-primary "
          style={{ width: "2rem" }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
