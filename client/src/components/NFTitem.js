import React from "react";
import "./NFTitem.css";
import json from "../resources/dummyNFT";

function NFTitem() {
    return (
        <div className="row">
            {json.map((el)=>{
            return(
                <div className="items">
                    <div id="image">
                        <img src={el.imgUrl} alt="sample" id="thumbnail"></img>
                    </div>
                    <div id="name"><h4>{el.name}</h4></div>
                    <div id="collection"><h5>{el.collection}</h5></div>
                    <div id="price"><p>{el.price}</p></div>
                </div>
            )
        })}
        </div>
        
            
    );
};

export default NFTitem;