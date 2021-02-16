import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "../Navbar/Navbar1"
import TopPage from "../TopPage/TopPage"
import Carousel from "../Carousel/Carousel"
import Footer from "../Footer/Footer"
import ForMen from"../ForMen/ForMen"
function FirstPage() {
    return(
      <div>
          <Navbar1/>
          <TopPage/>
          <Carousel/>
          <ForMen/>
          <Footer/>
          
      </div>
    );
  }
  
  export default FirstPage;