import React from "react";

function Created() {

  return(
    <section>
      
      <div className="created__search">
        <input type="text" value="" placeholder="Search by name" className="created__search--box">돋보기 그림</input>
      </div>

      <div className="created__list">
        {/* 검색창에 따라 필터된 발행한 NFT 리스트 */}
      </div>

    </section>
  ) 

}

export default Created;