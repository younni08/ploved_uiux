import React from 'react';
import BottomNavi from './components/common/bottomnavi';
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import Article from './components/article/article';
import HomeInsta from './components/home_insta/home_insta';
import Search from './components/search/search';
import Chat from './components/chat/chat';
import ChatChat from './components/chat/chatchat';
import Profile from './components/profile/profile';
import Seller from './components/seller/seller';
import Local from './components/local/local';
import Ploved from './components/ploved/ploved';
import Sell from './components/sell/sell';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes >
            <Route path="/home2" element={<Home />} />
            <Route path="/" element={<HomeInsta />} />
            <Route path="/ploved" element={<Ploved />} />
            <Route path="/article" element={<Article />} />
            <Route path="/search" element={<Search />} />
            <Route path="/local" element={<Local />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/chatchat" element={<ChatChat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/seller" element={<Seller />} />
          </Routes >
          <BottomNavi />
        </Router>
      </div>
    </div>
  );
}

export default App;
