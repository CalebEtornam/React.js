import React from "react";
import "./Products.css"
import Card from "../ShoeStoreComponents/Card";


function Products({results}){
    return(
        <div className="card-container">
        {results}
        </div >
    )
}

export default Products