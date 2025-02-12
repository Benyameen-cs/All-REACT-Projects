function ShowTime(){

    let currTime = new Date();

    return <>
        <div className="text-container">
            <p>The current time in pakistan is : {currTime.toLocaleDateString()} - {currTime.toLocaleTimeString()} </p>
        </div>
    </>
}

export default ShowTime;