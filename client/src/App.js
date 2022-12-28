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

function App() {
  const [account, setAccount] = useState("");
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(account[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAccount();
  }, [account]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage/:account' element={<MyPage />} />
        <Route path='/mintpage' element={<MintPage account={account} />} />
        <Route path='/marketplace' element={<MarketPlacePage />} />
        <Route exact path='/details:id' component={<DetailsPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
