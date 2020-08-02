import React from 'react';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Aside from "./components/Aside";

const App = () => {
  return (
      <React.Fragment>
        <div className='container'>
          <Header/>
          <Nav/>
          <Main/>
          <Aside/>
          <Footer/>
        </div>
      </React.Fragment>
  );
}

export default App;
