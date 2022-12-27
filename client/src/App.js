import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import MintPage from './pages/MintPage'
import MarketPlacePage from './pages/MarketPlacePage';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage/:account' element={<MyPage />} />
        <Route path='/mintpage' element={<MintPage />} />
        <Route path='/marketplace' element={<MarketPlacePage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
