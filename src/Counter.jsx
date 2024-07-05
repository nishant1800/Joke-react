import { useState,   useEffect } from "react";

function Counter() {
    let [count, setCount] = useState(0);


    let incCount = () => { 
        setCount((currCount) => {
            return currCount + 1;
        });
    };

    useEffect(function printSomethint() {
        console.log("this is a side-effect");
    });

    return(
        <div>
            <h3>Count : {count}</h3>
            <button onClick={incCount}>Increase count</button>
        </div>
    );
}

export default Counter;