import React from "react";
import "./Footer.css"

export default function Footer() {
  return(
    <div className="Footer">
      <div id="row">
        <div className="col" id="col1">
          <h3>Under the Sea</h3>
          <p id="description">The worldβs first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
        </div>
        <div className="col" id="col2">
          <p class="arrow_box">π click to check out our GitHub π</p>
          <a className="teamName" href="https://github.com/yonnie-park">λ°μ μ°</a>
          <a className="teamName" href="https://github.com/hyuntae384">κΉνν</a> 
          <a className="teamName" href="https://github.com/fromdwlee">μ΄λμ</a>
          <a className="teamName" href="https://github.com/bajnsk">λ°±μ€μ</a>
        </div>
        <div className="col">
        <a id="col4" href="https://github.com/codestates-beb/BEB-07-under-the-sea">Visit our Github</a>
        </div>
      </div>
    </div>
  )
}