import { React, useState, useRef, useEffect } from "react";
import Erc721 from "../components/Erc721";
import TokenList from "../components/TokenList";
import Item from "../components/NFTitem"
import { tokenContract } from "../erc721Abi"
import Created from "../components/created";
import Snowfall from 'react-snowfall'

function SendNftPage({ account }) {
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
      if (String(tokenOwner).toLowerCase() === account) {
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
      <Snowfall />

      <div id="row2">
        {/* {erc721list.slice(0).reverse().map((e) => (
          <Item tokenURI={e.tokenURI} name={e.name} collection={e.collection} price={e.price} tokenId={e.tokenId} />
        ))} */}
        <Erc721 account={account} erc721list={erc721list} />
      </div>
    </div>
  )
}

export default SendNftPage;