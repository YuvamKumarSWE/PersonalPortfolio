import React from 'react';
import NavBar from "./Components/NavBarComponents/NavBar";
import LandingPage from './Components/LandingPage';
import MoreAbout from './Components/MoreAbout';
function App() {
  return (
    <>
      <div className="background"></div>
      <NavBar />
      <div className="content">
         <LandingPage />
         <MoreAbout />
      
      </div>
    </>
  );
}

export default App;
