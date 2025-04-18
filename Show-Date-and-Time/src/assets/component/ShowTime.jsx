import { useEffect } from "react";
import { useState } from "react"; 
function ShowTime() {

    const [time, setTime] = useState(new Date());
    
    useEffect(() => {

        const timeValid = setInterval(() => {
            
            setTime(new Date())
        } , 1000)

        return () => {
            clearInterval(timeValid);
        }
    } , [])

    return <>
        <div className="text-container">
            <p>The current time in pakistan is : {time.toLocaleDateString()} - {time.toLocaleTimeString()} </p>
        </div>
    </>
}

export default ShowTime;