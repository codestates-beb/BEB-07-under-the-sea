import { React, useState, useEffect, useRef } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import { tokenContract } from "../erc721Abi";
import data from "../resources/dummyNFT";
import Item from "../components/NFTitem";


export default function MainPage() {
  const [erc721list, setErc721list] = useState([]);

  const getErc721Token = async () => {

    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }
    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods
        .ownerOf(tokenId)
        .call();
      if (String(tokenOwner).toLowerCase()) {
        let tokenURI = await tokenContract.methods
          .tokenURI(tokenId)
          .call();
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        });
      }
    }
  }

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useDidMountEffect(() => {
    getErc721Token();
  }, []);

  return (
    <div className="mainpage">
      <div id="row">
        <div className="intro">
          <h1>Explore, collect, and sell NFTs</h1>
          <h3>World's first and largest NFT marketplace</h3>
          <div className="buttonContainer">
            <Link to="/marketplace"><button id="exploreBTN">Explore</button></Link>
            <Link to="/mintpage"><button id="createBTN">Create</button></Link>
          </div>
        </div>
      </div>
      <div id="row2">
        {erc721list.slice(0).reverse().map((e) => (
          <Item tokenURI={e.tokenURI} name={e.name} collection={e.collection} price={e.price} tokenId={e.tokenId} />
        ))}
      </div>
      {/* <div>
        <TokenList erc721list={erc721list} />
      </div> */}
    </div>
  );
}