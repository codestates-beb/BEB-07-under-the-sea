import React from "react";
import "./MainPage.css";
import {Link} from "react-router-dom";
export default function MainPage() {
  return (
    <div className="mainpage">
      <div className="row">
        <div className="col">
            <h1>Explore, collect, and sell NFTs</h1>
            <h3>World's first and largest NFT marketplace</h3>
            <div className="buttonContainer">
              <Link to="/marketplace"><button id="exploreBTN">Explore</button></Link>
              <Link to="/mintpage"><button id="createBTN">Create</button></Link>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col">
            <h1>Explore, collect, and sell NFTs</h1>
            <h3>World's first and largest NFT marketplace</h3>
            <div className="buttonContainer">
              <Link to="/marketplace"><button id="exploreBTN">Explore</button></Link>
              <Link to="/mintpage"><button id="createBTN">Create</button></Link>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col">
            <h1>Explore, collect, and sell NFTs</h1>
            <h3>World's first and largest NFT marketplace</h3>
            <div className="buttonContainer">
              <Link to="/marketplace"><button id="exploreBTN">Explore</button></Link>
              <Link to="/mintpage"><button id="createBTN">Create</button></Link>
            </div>
          </div>
        </div>
      </div>    
  );
}