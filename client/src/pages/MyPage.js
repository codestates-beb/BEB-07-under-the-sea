import React from "react";
import { Link } from "react-router-dom";
import { ReactDOM } from "react";
import Collected from "../components/collected";
import Created from "../components/created";

function MyPage() {

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
          <Link to="mypage/collected"><button className="button__collected">Collected</button></Link>
          <Link to="mypage/created"><button className="button__collected">Created</button></Link>
          {/* 페이지 전체가 아니라 NFT관련 부분만 변경이 되도록 수정해보기 */}
        </div>

      </div>

    </section>
  )
}

export default  MyPage;