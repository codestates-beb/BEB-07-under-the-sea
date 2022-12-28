import React from "react";
import "./NFTdetail.css";

const NFTdetail = (props) => {
    return(
            <div id="detailContainer">
                <img src={props.imgUrl} id="detailThumbnail" alt="item img"></img>
                <div id="detailContents">
<h4 id="detailCollection">{props.collection}</h4>
                <h4 id="detailName">{props.name}</h4>
                <p id="detailPrice">{props.price}</p>
                <p id="detailDescription">{props.description}</p>
                </div>
                
            </div>
        
    )
}

export default NFTdetail;