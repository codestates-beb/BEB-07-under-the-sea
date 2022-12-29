import React, { useEffect, useState } from "react";
import Collected from "../components/collected";
import Created from "../components/created";
import profile from "../assets/3.png"
import spurs from "../assets/spurs.jpeg"
import ethereum1 from "../assets/ethereum1.png"
import "./MyPage.css"
import { useParams } from "react-router-dom";
import { tokenContract } from "../erc721Abi";
import TokenList from "../components/TokenList";
import Popup from "../components/popup";
import axios from "axios"

function MyPage({ account }, props) {
  const [erc721list, setErc721list] = useState([]);
  const [popup, handlePopup] = useState(false)
  const [username, setUsername] = useState("Unnamed"); // 서버에서 불러오면 필요 없음

  useEffect(() => {
    getUsername(account);
  }, [])

  const getUsername = async (account) => {
    try{
      const userinfo = await axios.get(`http://localhost:8080/userinfo/${account}`)
      console.log(userinfo.data)
      if(userinfo.data){
        setUsername(userinfo.data.username)
      }else{
        console.error("ERROR: GET 요청이 잘못되었거나 데이터베이스에 존재하지 않습니다.")
      }
    }catch(err){
      console.log(err)
    }
  }


  const update_username = async (username) => {
    try{
      console.log(username);
      const updateUsername = await axios.put('http://localhost:8080/userinfo/updateusername',
      {wallet_address: account, username: username}
      )
      console.log(updateUsername);
    }catch(err){
      console.log(err)
    }
  }

  const handleUsername = async (name) => {
    await setUsername(name);
    // 서버와 연결해서 디비에도 저장
    await update_username(name);
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
  // const [myNFT, setMyNFT] = useState('collected')


  // const handleClick = (event) => {
  //   return setMyNFT(event.target.value);
  // }

  // const buttonResult = () => {
  //   if (myNFT === 'collected') {
  //     return <Collected />
  //   } else if (myNFT === 'created') {
  //     return <Created />
  //   } else {
  //     return (
  //       <div className="comingsoon">
  //         <div className="comingsoon__writing">Coming soon...</div>
  //       </div>
  //     )
  //   }
  // }

  // const ifCollectedClicked = () => {
  //   if (myNFT === 'collected') return 'button__collected--clicked'
  //   else { return 'button__collected' }
  // }

  // const ifCreatedClicked = () => {
  //   if (myNFT === 'created') return 'button__created--clicked'
  //   else { return 'button__created' }
  // }

  return (
    <section className="myInfo">

      <div className="myInfo__background">
        {/* 배경사진 */}
        <img className="myInfo__background--img" src={spurs} alt="스퍼스" />
      </div>

      <div className="myInfo__container">

        <div className="myInfo__profile">
          <input type="file" className="profile__upload" />
          {/* 프로필 사진 */}
          <img className="myInfo__profile--img" src={profile} alt="한반두" />
        </div>

        <div className="myInfo__detail">
          <div className="myInfo__detail--username">
            {username /*사용자 이름 수정예정!!*/  }
            <button onClick={() => {handlePopup(true)}}>change username</button>
            {popup ? <Popup onClose={handlePopup} currentUsername={username} handleUsername={handleUsername} /> : ""}
          </div>
          <div className="myInfo__detail--account">
            <img className="ethereum1" src={ethereum1} alt="이더리움1" width="25" height="25" />
            <div className="myInfo__detail--account--address">
              {account}
            </div>
            <br></br>
            <div className="myInfo__detail--registereddate">{"Joined December 2022"/*가입날짜*/}</div>
          </div>
        </div>
      </div>

      {/* <div className="myNFT">
        <div className="myNFT__menu">
          <button className={ifCollectedClicked()} value='collected' onClick={handleClick}>Collected</button>
          <button className={ifCreatedClicked()} value='created' onClick={handleClick}>Created</button>
          <button className="button__favorited" value='favorited' onClick={handleClick}>Favorited</button>
          <button className="button__activity" value='activity' onClick={handleClick}>Activity</button>
        </div>
        {buttonResult()}
      </div> */}
      <div className="myNFT">
        <div className="myNFT__menu">
          <button className="my-createdNFT-clicked" onClick={getErc721Token}>my created NFT</button>
          <TokenList erc721list={erc721list} />
        </div>
      </div>
    </section>
  )
}

export default MyPage;