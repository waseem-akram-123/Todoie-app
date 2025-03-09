import React, { useState } from "react";

const CounterComponent = ()=> {
    const [count,setCount] = useState (0);
    return (
        <div>
                <p> count is : {count} </p>

                <p> Number is {count%2 === 0 ? "evev": "odd"}</p>

                <button onClick = {() => setCount (count+1)}> Increment </button>
                <button onClick = {() => setCount (count+-1)}> Decrement </button>
        </div>
    )
}
export default CounterComponent;