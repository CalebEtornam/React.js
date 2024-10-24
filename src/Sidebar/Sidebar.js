import React from "react";
import "./Sidebar.css"
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar({handleRadio}){
    return(
        <div className="sidebar-container">
            <Category handleRadio={handleRadio}/>
            <Price  handleRadio={handleRadio}/>
            <Colors  handleRadio={handleRadio}/>
        </div>
    )
}

export default Sidebar