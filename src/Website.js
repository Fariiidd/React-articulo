import React from 'react';
import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';

function Website() {
  return (
        <div className='container-fluid'>
           <NavBar />
           <Content />
           <Footer />
        </div>
  )
  
}

export default Website;
