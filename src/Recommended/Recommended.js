import React from "react";
import "./Recommended.css"
import Buttons from "../ShoeStoreComponents/Buttons";

const Recommended = ({handleClick}) => {
    return(
       <div className="recommended">
        <h2 className="rec-title">Recommended</h2>
        <div className="rec-btns">
           <Buttons title={"Nike"} value="Nike" handleClick={handleClick}/>
           <Buttons title={"Vans"} value={"Vans"} handleClick={handleClick}/>
           <Buttons title={"Puma"} value={"Puma"} handleClick={handleClick}/>
           <Buttons title={"Adidas"} value={"Adidas"} handleClick={handleClick}/>
        </div>
       </div>
    )
}

export default Recommended