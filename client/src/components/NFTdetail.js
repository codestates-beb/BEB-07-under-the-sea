import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { tokenContract } from "../erc721Abi";
import "./NFTdetail.css";

const NFTdetail = ({ account, imgUrl, id, erc721list }) => {
    const [to, setTo] = useState("");
    const tokenid = Number(useParams().id);
    const curToken = erc721list[tokenid - 1];
    const sendToken = async (tokenAddr, tokenId) => {
        try {
            const owner = await tokenContract.methods.
                ownerOf(curToken.tokenId).call();
            if (!account) return
            const response = await
                tokenContract.methods
                    .transferFrom(account, to, tokenId)
                    .send({ from: account })
                    .on("receipt", (receipt) => { setTo("") })
            console.log(response)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id="detailContainer">
            <img src={imgUrl} id="detailThumbnail" alt="item img"></img>
            <div id="detailContents">
                <h4 id="detailCollection">NFT collection</h4>
                <h4 id="detailName">{`NFT name #` + id}</h4>
                <p id="detailPrice">0.1eth</p>
                <p id="detailDescription">We like to own stuff. We especially like to own things that we find valuable, whether from an emotional or financial standpoint. Throughout history, we’ve sought ownership of physical objects—there’s a certain charm associated with the real-life qualities of the things we own. </p>
                <div className="tokenTransfer">
                    To:{" "}
                    <input
                        className="send-input"
                        type="text"

                        value={to}
                        onChange={(e) => {
                            setTo(e.target.value);
                        }}
                    ></input><br></br>
                    <button onClick={sendToken.bind(
                        this,
                        curToken.address,
                        curToken.tokenId
                    )} id="purchaseBTN">NFT 선물하기</button>
                </div>
            </div>

        </div>

    )
}

export default NFTdetail;