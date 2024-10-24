import React from "react";
import "./Price.css"
import Input from "../../ShoeStoreComponents/Input";

function Price({handleRadio}){
    return(
        <div className="price">
            <h2 className="price-title">
                Price
            </h2>

            <div className="category-container">
                <Input title={"All"}/>
                <Input title={"$50 - $100"} value={50} name={"price"} handleRadio={handleRadio}/>
                <Input title={"$100 - $150"} value={100} name={"price"} handleRadio={handleRadio}/>
                <Input title={"$150 - $200"} value={150} name={"price"} handleRadio={handleRadio}/>
                <Input title={"$200 and above"} value={200} name={"price"} handleRadio={handleRadio}/>
            </div>
        </div>
    )
}

export default Price