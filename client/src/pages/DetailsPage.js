import { React, useState, useEffect, useRef } from "react";
import { tokenContract } from "../erc721Abi";
import {useParams} from "react-router-dom"
import "./DetailsPage.css"
import NFTdetail from "../components/NFTdetail"

const DetailsPage = ()=>{
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

    let id = Number(useParams().id);
    let filteredNFT = erc721list.filter((e) => e.tokenId===id)
    return(
        <div id="detailsContainer">
            {filteredNFT.map((el)=>{
                return <NFTdetail imgUrl={el.tokenURI} name={el.name} collection={el.collection} price={el.price} id={el.tokenId} description={el.description}/>
            })}
            
        </div>
    )
}


export default DetailsPage