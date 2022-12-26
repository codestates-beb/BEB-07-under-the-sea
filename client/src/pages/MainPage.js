import React from "react";
import "./MainPage.css";
import {Link} from "react-router-dom";
import sampleIMG from "../assets/sample.png"
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
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>

          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
          <div className="items">
            <div id="image">
              <img src={sampleIMG} alt="sample" id="thumbnail"></img>
            </div>
            <div id="title"><h5>Sample Image</h5></div>
            <div id="price"><p>0.1 eth</p></div>
          </div>
        </div> 
      </div>    
  );
}