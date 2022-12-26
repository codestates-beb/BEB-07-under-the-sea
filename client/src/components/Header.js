import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import Web3 from 'web3';

import "./Header.css"

export default function Header() {
  const [searchItem, setSearchItem] = useState("")
  const handleChange = event => {
    setSearchItem(event.target.value)
  }
  const [web3, setWeb3] = useState();
  useEffect(()=>{
    if(typeof window.ethereum !== "undefined"){
      try{
        const web=new Web3(window.ethereum);
        setWeb3(web)
      } catch(err){
        console.log(err)
      }
    }
  },[])
  const [account, setAccount] = useState("");
  const connectWallet = async() => {
    const accounts=await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    setAccount(accounts[0])

  }
  return(
    <div id="navbar">
      <Link to="/"><img src="./logo.png" alt="logo" id="logo"></img></Link>
      <input id="search" type="text" placeholder="search" value={searchItem} onChange={handleChange}></input>
      <Link to="/mintpage" id="menu">Create</Link>
      <Link to="/marketplace" id="menu">Marketplace</Link>
      <Link to="/mypage" id="menu">MyPage</Link>
      <button id="wallet" onClick={()=>{connectWallet()}}> {account? "Disconnect Metamask" :"Connect Metamask"} </button>
      <p className="userInfo">{account}</p>
    </div>
  ) 

}