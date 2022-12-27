import React from "react";
import "./NFTitem.css";

const NFTitem = (props) => {
    return(
        <div id="itemContainer">
            <img src={props.imgUrl} id="thumbnail" alt="item img"></img>
            <h4 id="name">{props.name}</h4>
            <h5 id="collection">{props.collection}</h5>
            <p id="price">{props.price}</p>
        </div>
    )
}

export default NFTitem;