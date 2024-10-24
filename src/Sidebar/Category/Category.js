import React from "react";
import "./Category.css"
import Input from "../../ShoeStoreComponents/Input";

function Category({handleRadio}){
    return(
        <div className="category">
            <h2 className="category-title">
                Category
            </h2>

            <div className="category-container">
                <Input title={"All"} value="" name={"category"} handleRadio={handleRadio}/>
                <Input title={"Flats"} value={"flats"} name={"category"} handleRadio={handleRadio}/>
                <Input title={"Sneakers"} value={"sneakers"} name={"category"} handleRadio={handleRadio}/>
                <Input title={"Heels"} value={"heels"} name={"category"} handleRadio={handleRadio}/>
                <Input title={"Sandals"} value={"sandals"} name={"category"} handleRadio={handleRadio}/>
            </div>
        
        </div>
    )
}

export default Category