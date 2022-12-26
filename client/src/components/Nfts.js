import React, {useState} from "react";
import pepe from "../assets/NFT_profile.png";
import backPepe from "../assets/NFT_background.jpeg";
import "./Nfts.css";

// 간략하게 표시될 NFT 컴포넌트 구현.
// state로 클릭된 NFT 정보 담아 상세페이지로 갈 수 있게 해야함.
// nft 정보를 스마트 컨트랙트에서 받아온다?
// json 객체를 받아와 풀어서 붙여야 함.

function Nfts() {
    return (
        <div className="main" onClick={ ()=> console.log("hi") }>
            <div>
                <span><img className="nft__background--image" src={backPepe} alt="배경페페" /></span>   
            </div>
            <div>
                <div>
                    <span><img className="nft__profile--image" src={pepe} alt="페페" /></span>    
                    <div className="author">
                        배경페페
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nfts;