import React from "react";
import { useState } from "react";
import './counter.css'

function Lesson05 () {
    
    const [count, setCount] = useState(0);
    console.log(useState(0));
    
    const countPlus = () => {
        setCount(prev => prev + 1);
        console.log(count);
    }

    return (
        <div className="counter">
            <h5>Counter with useState hook:</h5>
            <p>{count}</p>
            <button onClick={countPlus}>Plus</button>
        </div>
    )   
}
export default Lesson05;