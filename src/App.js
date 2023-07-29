import './App.css';
import React from 'react';
// import DashboardLoginRouting from './container/DashboardLoginRouting';
import PostLoginContainer from './container/PostLoginContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        {/* <DashboardLoginRouting/> */}
        <PostLoginContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
