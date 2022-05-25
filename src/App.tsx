import React from 'react';
import BottomNavi from './components/common/bottomnavi';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <div>
        <Home />
        <BottomNavi />
      </div>
    </div>
  );
}

export default App;
