import React from "react";
import "./NFTitem.css";
import json from "../resources/dummyNFT";

function NFTitem() {
    return (
        <div className="items">
            <div id="image">
              <img src={json.imgUrl} alt="sample" id="thumbnail"></img>
            </div>
            <div id="name"><h4>{json.name}</h4></div>
            <div id="collection"><h5>{json.collection}</h5></div>
            <div id="price"><p>{json.price}</p></div>
        </div>
    );
};

export default NFTitem;