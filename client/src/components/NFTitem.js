import React from "react";
import { Link } from "react-router-dom";
import "./NFTitem.css";

const NFTitem = (props) => {
    return(
        <Link to={`/details/${props.id}`}>
            <div id="itemContainer">
            <img src={props.imgUrl} id="thumbnail" alt="item img"></img>
            <h4 id="name">{props.name}</h4>
            <h5 id="collection">{props.collection}</h5>
            <p id="price">{props.price}</p>
            <p id="id">{props.id}</p>
        </div>
        </Link>
        
    )
}

export default NFTitem;