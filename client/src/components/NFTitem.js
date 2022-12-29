import React from "react";
import { Link } from "react-router-dom";
import "./NFTitem.css";

const NFTitem = (erc721list) => {
    return(
        <Link to={`/details/${erc721list.tokenId}`} id="NFTlink">
            <div id="itemContainer">
                <img src={erc721list.tokenURI} id="thumbnail" alt="item img"></img>
                <h4 id="NFTcollection">{erc721list.collection}</h4>
                <h4 id="NFTname">{erc721list.name}</h4>
                <p id="NFTid">{`id: `+ erc721list.tokenId}</p>
            </div>
        </Link>
        
    )
}

export default NFTitem;