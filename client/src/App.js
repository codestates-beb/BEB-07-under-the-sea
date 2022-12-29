import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import MintPage from './pages/MintPage'
import MarketPlacePage from './pages/MarketPlacePage';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';
import SendNFTPage from './pages/SendNFTPage';
import axios from 'axios'
import Erc721 from './components/Erc721';

function App() {
  const [account, setAccount] = useState("");
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account[0]);
        //console.log(account)
        check_userinfo(account);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const check_userinfo = async (address) => {
    try {
      const userinfo = await axios.get(`http://localhost:8080/userinfo/${address}`)
      console.log(userinfo.data)
      if (!userinfo.data) {
        const createUser = await axios.post(`http://localhost:8080/userinfo/createuser`, { wallet_address: address })
        console.log(createUser)
        if (!createUser.data) {
          console.error("Error: POST request 양식이 올바르지 않습니다.")
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAccount();
  }, [account]);

  return (
    <BrowserRouter>
      <Header check_userinfo={check_userinfo} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage/:account' element={<MyPage account={account} />} />
        <Route path='/mintpage' element={<MintPage account={account} />} />
        <Route path='/marketplace' element={<MarketPlacePage />} />
        <Route path='/details' element={<DetailsPage />}>
          <Route path=':id' />
        </Route>
        <Route path='/sendnft' element={<SendNFTPage account={account} />} />
        <Route element={<Erc721 account={account} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
