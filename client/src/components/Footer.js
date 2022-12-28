import React from "react";
import "./Footer.css"

export default function Footer() {
  return(
    <div className="Footer">
      <div id="row">
        <div className="col" id="col1">
          <h3>Under the Sea</h3>
          <p id="description">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        </div>
        <div className="col" id="col2">
          <h5>박정연</h5>
          <h5>김현태</h5> 
          <h5>이동원</h5>
          <h5>백준석</h5>
        </div>
        <div className="col">
        <a id="col4" href="https://github.com/codestates-beb/BEB-07-under-the-sea">Github</a>
        </div>
      </div>
    </div>
  )
}