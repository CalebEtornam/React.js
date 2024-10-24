import React from "react";

function Buttons({title, value, handleClick}){
    return(
        <>
         <button className="rec-btn" value={value} onClick={handleClick}>{title}</button>
        </>
    )
}

export default Buttons