//USEEFFECT HOOK

import { useEffect, useState } from "react";

function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds((prevInterval) => prevInterval +1);
        }, 1000);
        return () => {
            clearInterval(interval);}
    }, []);  //empty bracket means it will run only once

    return <h2>Seconds : {seconds}</h2>
}

export default Timer;