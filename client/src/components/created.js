import React from "react";
import { useState } from "react";
import "./created.css";
import json from "../resources/dummyNFT";

function Created() {

  const [searchNFT, setSearchNFT] = useState()
  const [filteredNFT, setFilteredNFT] = useState(json)

  const handleChange = (event) => {
    setSearchNFT(event.target.value)
  }

  const handleFilteredNFT = () => {
    const result = json.filter((el) => {
      return (el.name.toLowerCase()).includes(searchNFT.toLocaleLowerCase())
    })
    console.log(result)
    setFilteredNFT(result)
  }

  return(
    <section className="created__NFT">
      <div className="created__menuline"></div>
      <div className="created__NFT--search">
        <input className="created__NFT--searchbox" 
        type="text" 
        placeholder="Search by name" 
        value={searchNFT} 
        onChange={handleChange} 
        />
        {/* 검색 버튼을 누르면 searchNFT와 일치하는 NFT만 나오게 설정 */}
        <button className="created__NFT--search__button" value="search" onClick={handleFilteredNFT}>search</button>
      </div>
      <div className="created__NFT--list">
        {/* 필터링 결과 적용하여 아무 item 이 없을 경우 noitem이 나오도록 설정 */}
        {filteredNFT.map((el) => {
          return (
            <div className="created__NFT--item">
              <div className="created__NFT--itemImg">
                <img className="created__NFT--thumbnail" src={el.imgUrl}/>
              </div>
              <div id="name">{el.name}</div>
              <div id="collection">{el.collection}</div>
              <div id="price">{el.price}</div>
            </div>
          )
        })}
        
        {/* NFT가 없을 경우 <div className="creacted__noitems">No created items to display</div>*/}
      </div>
    </section>
  ) 

}

export default Created;