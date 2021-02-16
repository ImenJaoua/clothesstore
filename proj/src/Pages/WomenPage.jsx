import React from 'react';
import ForWomen from "../ForWomen/ForWomen"
import clo from './clo.jpg'
import './Page.css'
import Navbar1 from '../Navbar/Navbar1'
import Footer from '../Footer/Footer'

function PageWomen(){
    return(
        <div>
            <Navbar1/>
            <h1 class="h1" style={{textAlign:'center'}}>Women clothing</h1>
            <img src={clo} class="center"/>
            <ForWomen/>
            <ForWomen/>
            <Footer/>
        </div>
    )
}

export default PageWomen;