import React, { useState } from "react";

function Test() {
  const [data, setData] = useState(0);
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData((prevData) => prevData + 1)}>
        Add more
      </button>
    </div>
  );
}

export default Test;
