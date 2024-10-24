import React from "react";
import { AiFillStar } from "react-icons/ai";

function Card({title, img, newPrice, prevPrice}){
    return(
        <div>
            <div className="card">
            <div className="card-img">
                <img src={img} alt="shoe" className="shoe-img"/>
            </div>
            <div className="card-details">
                <h4 className="card-title">{title}</h4>
                <div className="card-review"><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                <span>4</span>
                </div>
                <div className="card-price">
                    <del>{prevPrice}</del> {newPrice}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card