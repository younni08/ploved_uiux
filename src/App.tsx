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

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes >
            <Route path="/home2" element={<Home />} />
            <Route path="/" element={<HomeInsta />} />
            <Route path="/article" element={<Article />} />
            <Route path="/search" element={<Search />} />
          </Routes >
          <BottomNavi />
        </Router>
      </div>
    </div>
  );
}

export default App;
