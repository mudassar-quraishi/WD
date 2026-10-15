import React, { useState } from "react";
import { useMemo } from "react";

const Home1 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  const double = useMemo(() => {
    console.log("inside getDouble");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h2>Use of useMemo & useCallback</h2>
      <h2>Count: {count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Inc
      </button>
      <h2>
        Double of {num} Number: {double}
      </h2>
    </div>
  );
};

export default Home1;
