import React, { useEffect, useState } from "react";
import Collected from "../components/collected";
import Created from "../components/created";
import profile from "../assets/3.png"
import spurs from "../assets/spurs.jpeg"
import ethereum1 from "../assets/ethereum1.png"
import edit from "../assets/edit.png"
import "./MyPage.css"
import { useParams } from "react-router-dom";
import Popup from "../components/popup";
import axios from "axios"

function MyPage({ account }, props) {
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


  const [myNFT, setMyNFT] = useState('collected')

  const handleClick = (event) => {
    return setMyNFT(event.target.value);
  }

  const buttonResult = () => {
    if (myNFT === 'collected'){
      return <Collected />
    } else if (myNFT === 'created') {
      return <Created account={account}/>
    } else {
      return (
        <div className="comingsoon">
          <div className="comingsoon__writing">Coming soon...</div>
        </div>
      )
    }
  }

  const ifCollectedClicked = () => {
    if (myNFT === 'collected') return 'button__collected--clicked'
    else { return 'button__collected' }
  }

  const ifCreatedClicked = () => {
    if (myNFT === 'created') return 'button__created--clicked'
    else { return 'button__created' }
  }

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
            <img className="myInfo__detail--edit" src={edit} onClick={() => {handlePopup(true)}}/>
            {popup ? <Popup onClose={handlePopup} currentUsername={username} handleUsername={handleUsername} /> : ""}
          </div>
          <div className="myInfo__detail--account">
            <img className="ethereum1" src={ethereum1} alt="이더리움1" width="25" height="25" />
            <div className="myInfo__detail--account--address">
              {`${account.slice(0,6)}...${account.slice(-4)}`}
            </div>
            <br></br>
            <div className="myInfo__detail--registereddate">{"Joined December 2022"/*가입날짜*/}</div>
          </div>
        </div>
      </div>

      <div className="myNFT">
        <div className="myNFT__menu">
          <button className={ifCollectedClicked()} value='collected' onClick={handleClick}>Collected</button>
          <button className={ifCreatedClicked()} value='created' onClick={handleClick}>Created</button>
          <button className="button__favorited" value='favorited' onClick={handleClick}>Favorited</button>
          <button className="button__activity" value='activity' onClick={handleClick}>Activity</button>
        </div>
        {buttonResult()}
      </div>
    </section>
  )
}

export default MyPage;