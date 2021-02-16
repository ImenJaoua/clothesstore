import React from 'react';
import "./TopPage.css"
import {Jumbotron} from 'react-bootstrap'
function TopPage(){
    return(
        <div className='TopPage'>
        <Jumbotron className='Top'>
        <h1>Clothes Store</h1>
        <h3>
           Welcome To the the<b> #N°1 Selling</b> Clothes store in Tunisia.
        </h3>

      </Jumbotron>
      </div>
    )
}

export default TopPage;