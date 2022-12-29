import React from "react";
import "./NFTdetail.css";

const NFTdetail = (props) => {
    return(
            <div id="detailContainer">
                <img src={props.imgUrl} id="detailThumbnail" alt="item img"></img>
                <div id="detailContents">
                    <h4 id="detailCollection">NFT collection</h4>
                    <h4 id="detailName">{`NFT name #` + props.id}</h4>
                    <p id="detailPrice">0.1eth</p>
                    <p id="detailDescription">We like to own stuff. We especially like to own things that we find valuable, whether from an emotional or financial standpoint. Throughout history, we’ve sought ownership of physical objects—there’s a certain charm associated with the real-life qualities of the things we own. </p>
                    <button id="purchaseBTN">NFT 선물하기</button>
                </div>
                
            </div>
        
    )
}

export default NFTdetail;