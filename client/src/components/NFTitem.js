import React from "react";
import { Link } from "react-router-dom";
import "./NFTitem.css";

const NFTitem = (erc721list) => {
    return(
        <Link to={`/details/${erc721list.tokenId}`} id="NFTlink">
            <div id="itemContainer">
                <img src={erc721list.tokenURI} id="thumbnail" alt="item img"></img>
                <h4 id="NFTcollection">NFT collection</h4>
                <h4 id="NFTname">{`NFT Name: #`+erc721list.tokenId}</h4>
                <p id="NFTprice">0.01eth</p>
            </div>
        </Link>
        
    )
}

export default NFTitem;