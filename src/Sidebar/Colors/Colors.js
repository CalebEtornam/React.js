import React from "react";
import "./Colors.css"
import Input from "../../ShoeStoreComponents/Input";

function Colors({handleRadio}){
    return(
        <div className="colors">
            <h2 className="colors-title">
                Colors
            </h2>

            <div className="category-container">
                <Input title={"All"} value="" handleRadio={handleRadio} name={"color"}/>
                <Input title={"Blue"} value="blue" handleRadio={handleRadio} name={"color"}/>
                <Input title={"Green"} value="green" handleRadio={handleRadio} name={"color"}/>
                <Input title={"Red"} value="red" name={"color"} handleRadio={handleRadio}/>
                <Input title={"White"} value="white" name={"color"} handleRadio={handleRadio}/>
            </div>
        </div>
    )
}

export default Colors