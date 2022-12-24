import React from "react";
import { useState } from "react";
import "./created.css";

function Created() {

  const [searchNFT, setSearchNFT] = useState()
  const handleChange = (event) => {
    setSearchNFT(event.value.target)
  }

  // searchNFT 의 값에 맞는 NFT만 나올 수 있도록 필터링

  return(
    <section className="created__NFT">
      <div className="created__NFT--search">
        <input className="created__NFT--searchbox" 
        type="text" 
        placeholder="Search by name" 
        value={searchNFT} 
        onChange={handleChange} 
        />
        {/* 검색 버튼을 누르면 searchNFT와 일치하는 NFT만 나오게 설정 */}
        <button className="created__NFT--search__button" value="search">search</button>
      </div>
      <div className="created__NFT--list">
        {/* 필터링 결과 적용하여 아무 item 이 없을 경우 noitem이 나오도록 설정 */}
        <div className="created__noitems">No created items to display</div>
      </div>
    </section>
  ) 

}

export default Created;