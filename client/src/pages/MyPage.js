import React from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import Collected from "../components/collected";
import Created from "../components/created";
import { useState } from "react";

function MyPage() {
  const [myNFT,setMyNFT] = useState('collected')

  const handleClick = (event) => {
    return setMyNFT(event.target.value);
  }

  return (
    <section className="myInfo">
      
      <div className="myInfo__background">
        배경사진<img src=""/>
      </div>
      
      <div className="myInfo__container">
        <div className="myInfo__profile">
          프로필 사진<img src=""/>
        </div>
        <div className="myInfo__detail">
          이름, 지갑주소, 가입날짜
        </div>
      </div>
      
      <div className="myNFT">
        <div className="myNFT__menu">
          <button className="button__collected" value='collected'onClick={handleClick}>Collected</button>
          <button className="button__collected" value='created' onClick={handleClick}>Created</button>
        </div>
        {myNFT === 'collected' ?
        <Collected /> :
        <Created />}
      </div>

    </section>
  )
}

export default  MyPage;