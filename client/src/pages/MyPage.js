import React from "react";
import Collected from "../components/collected";
import Created from "../components/created";
import { useState } from "react";
import hanbando from "../assets/hanbando.jpeg"
import spurs from "../assets/spurs.jpeg"
import ethereum1 from "../assets/ethereum1.png"
import "./MyPage.css"

function MyPage() {
  const [myNFT,setMyNFT] = useState('collected')

  const handleClick = (event) => {
    return setMyNFT(event.target.value);
  }

  const buttonResult = () => {
    if(myNFT === 'collected'){
      return <Collected />
    }else if(myNFT === 'created'){
      return <Created />
    }else{
      return (
      <div className="comingsoon">
        <div className="comingsoon__writing">Coming soon...</div>
      </div>
    )}
  }

  return (
    <section className="myInfo">
      
      <div className="myInfo__background">
      {/* 배경사진 */}
        <img className="myInfo__background--img" src={spurs} alt="스퍼스" />
      </div>
      
      <div className="myInfo__container">
        <div className="myInfo__profile">
          {/* 프로필 사진 */}
          <img className="myInfo__profile--img" src={hanbando} alt="한반두" />
        </div>
        <div className="myInfo__detail">
          <div className="myInfo__detail--username">
            Unnamed{/*사용자 이름*/}
          </div>
          <div className="myInfo__detail--account">
            <img className="ethereum1" src={ethereum1} alt="이더리움1" width="25" height="25" />
            <div className="myInfo__detail--account--address">{"0x5f02...1199"/*사용자 어카운트 주소*/}</div>
            <div className="myInfo__detail--registereddate">{"Joined December 2022"/*가입날짜*/}</div>
          </div>
        </div>
      </div>
      
      <div className="myNFT">
        <div className="myNFT__menu">
          <button className="button__collected" value='collected'onClick={handleClick}>Collected</button>
          <button className="button__created" value='created' onClick={handleClick}>Created</button>
          <button className="button__favorited" value='favorited' onClick={handleClick}>Favorited</button>
          <button className="button__activity" value='activity' onClick={handleClick}>Activity</button>
        </div>
        {buttonResult()}
      </div>

    </section>
  )
}

export default  MyPage;