import React from "react";

function Collected() {

  return(
    <section>
      
      <div className="collected__search">
        <input type="text" value="" placeholder="Search by name" className="collected__search--box">돋보기 그림</input>
      </div>

      <div className="collected__list">
        {/* 검색창에 따라 필터된 보유하고 있는 NFT 리스트 */}
      </div>

    </section>
  ) 

}

export default Collected;