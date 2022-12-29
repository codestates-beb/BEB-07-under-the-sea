import React, { useEffect, useState, useRef } from "react";
import "./created.css";
import json from "../resources/dummyNFT";
import { tokenContract } from "../erc721Abi";
import TokenList from "../components/TokenList";
import Item from "../components/NFTitem"

function Created({ account }) {

  const [erc721list, setErc721list] = useState([]);
  const [searchNFT, setSearchNFT] = useState()
  const [filteredNFT, setFilteredNFT] = useState(json)

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useDidMountEffect(() => {
    getErc721Token();
  }, [])

  const handleChange = (event) => {
    setSearchNFT(event.target.value)
  }

  const handleFilteredNFT = () => {
    const result = json.filter((el) => {
      return (el.name.toLowerCase()).includes(searchNFT.toLocaleLowerCase())
    })
    console.log(result)
    setFilteredNFT(result)
  }

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

  return (
    <section className="created__NFT">
      <div className="created__menuline"></div>
      <div className="created__NFT--search">
        <input className="created__NFT--searchbox"
          type="text"
          placeholder="Search by name"
          value={searchNFT}
          onChange={handleChange}
        />
        {/* 검색 버튼을 누르면 searchNFT와 일치하는 NFT만 나오게 설정 */}
        <button className="created__NFT--search__button" value="search" onClick={handleFilteredNFT}>search</button>
      </div>
      <div className="created__NFT--list">
        {/* 필터링 결과 적용하여 아무 item 이 없을 경우 noitem이 나오도록 설정 */}
        {erc721list.slice(0).reverse().map((e) => (
          <Item tokenURI={e.tokenURI} name={e.name} collection={e.collection} price={e.price} tokenId={e.tokenId} />
        ))}

        {/* {filteredNFT.map((el) => {
          return (
            <div className="created__NFT--item">
              <div className="created__NFT--itemImg">
                <img className="created__NFT--thumbnail" src={el.imgUrl}/>
              </div>
              <div id="name">{el.name}</div>
              <div id="collection">{el.collection}</div>
              <div id="price">{el.price}</div>
            </div>
          )
        })} */}

        {/* NFT가 없을 경우 <div className="creacted__noitems">No created items to display</div>*/}
      </div>
    </section>
  )

}

export default Created;