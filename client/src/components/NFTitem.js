import React from "react";
import { Link } from "react-router-dom";
import "./NFTitem.css";

const NFTitem = (props) => {
    return(
        <Link to={`/details/${props.id}`} id="NFTlink">
            <div id="itemContainer">
                <img src={props.imgUrl} id="thumbnail" alt="item img"></img>
                <h4 id="NFTcollection">{props.collection}</h4>
                <h4 id="NFTname">{props.name}</h4>
                <p id="NFTprice">{props.price}</p>
            </div>
        </Link>
        
    )
}

export default NFTitem;