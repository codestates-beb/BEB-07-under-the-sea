import React from "react";
import {Link} from "react-router-dom";
import { ReactDOM } from "react";
import { useState } from "react";
import "./Header.css"

export default function Header() {
  const [searchItem, setSearchItem] = useState("")
  const handleChange = event => {
    setSearchItem(event.target.value)
  }
  return(
    <section className="navbar">
      <Link to="/"><img src="./logo.png" alt="logo" id="logo"></img></Link>
      <input type="text" placeholder="search" value={searchItem} onChange={handleChange}></input>
      <Link to="/mintpage">Create</Link>
      <Link to="/marketplace">Marketplace</Link>
      <Link to="/mypage">MyPage</Link>
    </section>
  ) 

}