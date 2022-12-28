import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import Web3 from 'web3';
import logo from "../assets/logo.png"
import axios from 'axios';
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
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async() => {
    const accounts=await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    if(isConnected)setAccount("")
    else {
      setAccount(accounts[0])
      setIsConnected(true)
    }

  }

  const check_userinfo = async (address) => {
    try{
      const userinfo = await axios.get(`http://local:8080/userinfo/${address}`)
      console.log(userinfo.data)
      if(!userinfo.data){
        const createUser = await axios.post(`http://localhost:8080/userinfo/createuser`, {wallet_address: address})
        if(!createUser.data){
          console.error("Error: POST request 양식이 올바르지 않습니다.")
        }
      }
    }catch(err){
      console.log(err)
    }
  }


  // account 값을 전달한 것이 아니라, useParams를 이용한 것이 문제될 것은 없는지 고려하기
  const mypageUrl = `/mypage/${account}`;
  const needConnectionAlert = () => {
    alert("로그인이 필요합니다.")
  } 

  return(
    <div id="navbar">
      <Link to="/"><img src={logo} alt="logo" id="logo"></img></Link>
      <div id="menuItems">
        <div><input id="search" type="text" placeholder="search" value={searchItem} onChange={handleChange}></input>
      {isConnected ? <Link to="/mintpage" id="menu">Create</Link> : <button id="menu__mypage" onClick={needConnectionAlert}>Create</button>}
      <Link to="/marketplace" id="menu">Marketplace</Link>
      {isConnected ? <Link to={mypageUrl} id="menu">MyPage</Link> 
      : <button id="menu__mypage" onClick={needConnectionAlert}>MyPage</button>}
      </div>
      </div>
      <button id="wallet" onClick={connectWallet}> {isConnected ? account :"Connect Metamask"} </button>
    </div>
  ) 

}