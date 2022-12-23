import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import MintPage from './pages/MintPage'
import MarketPlacePage from './pages/MarketPlacePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Collected from './components/collected';
import Created from './components/created';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />}>
          <Route path='collected' element={<Collected />}/>
          <Route path='created' element={<Created />}/>
        </Route>
        <Route path='/mintpage' element={<MintPage />} />
        <Route path='/marketplace' element={<MarketPlacePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
