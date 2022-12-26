import React from "react";
import { useState } from "react";
import "./collected.css";
import json from "../resources/dummyNFT";

function Collected() {

  const [searchNFT, setSearchNFT] = useState()
  const handleChange = (event) => {
    setSearchNFT(event.value.target)
  }

  // searchNFT 의 값에 맞는 NFT만 나올 수 있도록 필터링

  return(
    <section className="collected__NFT">
      <div className="collected__menuline"></div>
      <div className="collected__NFT--search">
        <input className="collected__NFT--searchbox" 
        type="text" 
        placeholder="Search by name" 
        value={searchNFT} 
        onChange={handleChange}
        />
        {/* 검색 버튼을 누르면 searchNFT와 일치하는 NFT만 나오게 설정 */}
        <button className="collected__NFT--search__button" value="search">search</button>
      </div>
      <div className="collected__NFT--list">
        {/* 필터링 결과 적용하여 아무 item 이 없을 경우 noitem이 나오도록 설정 */}
        {json.map((el) => {
          return (
            <div className="collected__NFT--item">
              <div className="collected__NFT--itemImg">
                <img className="collected__NFT--thumbnail" src={el.imgUrl}/>
              </div>
              <p>{el.name}</p>
              <p>{el.collection}</p>
              <p>{el.price}</p>
            </div>
          )
        })}
        
        <div className="collected__noitems">No collected items to display</div>
      </div>
    </section>
  ) 

}

export default Collected;