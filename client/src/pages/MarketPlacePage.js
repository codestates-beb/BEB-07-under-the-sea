import React, {useState, useEffect, useRef} from "react";
import "./MarketPlacePage.css";
import Categories from "../components/Categories";
import Item from "../components/NFTitem";
import { tokenContract } from "../erc721Abi";
import Paging from "../components/Paging";


function MarketPlacePage() {

  const [erc721list, setErc721list] = useState([]);
  const [items, setItems] = React.useState([]) //리스트에 나타낼 아이템
  const [count, setCount] = React.useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = React.useState(1); //현재페이지
  const [postPerPage] = React.useState(8); //페이지당 아이템 개수

  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);

  React.useEffect(() => {
    setCount(tokenContract.methods.totalSupply().call());
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage]);

  const setPage = (e) => {
    setCurrentpage(e);
  };

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
    
    <div id="marketplace">
      <div classMame="title">
        {console.log(erc721list)};
        <h1>Explore collections</h1>
      </div>
      <div>
        <Categories />
        <div id="row2">
        {erc721list.slice(0).reverse().map((item) => (
          <Item tokenURI={item.tokenURI} name={item.name} collection={item.collection} price={item.price} tokenId={item.tokenId} />
        ))}
      </div>
        <Paging page={currentpage} count={count} setPage={setPage}/>
      </div>
    </div>
  );
}

export default MarketPlacePage;