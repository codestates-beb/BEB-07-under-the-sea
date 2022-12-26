import React, {useState, useEffect} from "react";
import "./MarketPlacePage.css";
import Nfts from "../components/Nfts";

// NFT가 표시될 컴포넌트 필요.
// 페이지네이션 구현 필요.
// nft 컴포넌트 클릭시 상세페이지로 들어갈 수 있게 만들어야 함.
// https://velog.io/@rlaekgks111/Project-Opensea-NFT-%EA%B1%B0%EB%9E%98%EC%86%8C-Clone-Coding#explore-%ED%8E%98%EC%9D%B4%EC%A7%80

function MarketPlacePage() {

  const [category,setCategory] = useState('all')
  const [posts, setPosts] = useState([]);

  const handleClick = (event) => {
    return setCategory(event.target.value);
  }


  return (
    <div id="marketplace">
      <div classMame="title">
        <h1>Explore collections</h1>
      </div>
      <div className="myNFT__menu">
        <button className="category_all" value='all' onClick={handleClick}>All</button>
        <button className="category_etc1" value='etc1' onClick={handleClick}>Etc1</button>
        <button className="category_etc2" value='etc2' onClick={handleClick}>Etc2</button>
        <button className="category_etc3" value='etc3' onClick={handleClick}>Etc3</button>
      </div>
      <div>
        <Nfts />
      </div>
      <header>
        <h1>게시물 목록</h1>
      </header>

      {/*<main>
        {posts.map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
      후에 사용 고려
      컨트랙트로 json 객체 받고 뿌리는거 생각
      
        */}
    </div>
  );
}

export default MarketPlacePage;