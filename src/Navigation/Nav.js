import React from "react";
import "./Nav.css"
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

function Nav({handleInput}) {
    return(
        <div className="nav">
        <div className="logo">
            <AiOutlineShoppingCart />
        </div>

        <div >
            <input className="nav-input" type="text" placeholder="Enter item here..." onChange={handleInput}/>
        </div>

        <div className="nav-icons">
            <FiHeart className="nav-icon"/>
            <AiOutlineShoppingCart className="nav-icon" />
            <AiOutlineUserAdd className="nav-icon"/>
        </div>
        </div>
    )
}

export default Nav