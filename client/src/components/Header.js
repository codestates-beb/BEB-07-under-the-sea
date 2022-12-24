import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";

import "./Header.css"

export default function Header() {
  const [searchItem, setSearchItem] = useState("")
  const handleChange = event => {
    setSearchItem(event.target.value)
  }
  return(
    <div id="navbar">
      <Link to="/"><img src="./logo.png" alt="logo" id="logo"></img></Link>
      <input id="search" type="text" placeholder="search" value={searchItem} onChange={handleChange}></input>
      <Link to="/mintpage" id="menu">Create</Link>
      <Link to="/marketplace" id="menu">Marketplace</Link>
      <Link to="/mypage" id="menu">MyPage</Link>
      <button id="wallet"> Connect Metamask </button>
    </div>
  ) 

}