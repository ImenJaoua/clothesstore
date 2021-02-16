import React from 'react';
import ForMen from "../ForMen/ForMen"
import men from './men.jpg'
import './Page.css'
import Navbar1 from '../Navbar/Navbar1'
import Footer from '../Footer/Footer'
function PageMen(){
    return(
        <div>
            <Navbar1/>
            <h1 class="h1" style={{textAlign:'center'}}>Men clothing</h1>
            <img src={men} class="center"/>
            <ForMen/>
            <ForMen/>
            <Footer/>
        </div>
    )
}

export default PageMen;