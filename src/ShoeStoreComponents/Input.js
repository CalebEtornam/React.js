import React from "react";


 function Input ({title, value, handleRadio, name}){
    return(
        <div>
             <label className="sidebar-label">
            <input className="sidebar-input" type="radio" value={value} onChange={handleRadio} name={name}/>
            <span className="checkmark"></span>{title}
            </label>
        </div>
    )
 }

 export default Input