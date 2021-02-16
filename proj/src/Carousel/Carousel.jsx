import React from "react";
import { Carousel } from 'react-bootstrap'
import firstphoto from './firstphoto.jpg'
import women from './women.jpeg'
import men from './men.jpg'
import './Carousel.css'

export default function Carr() {
  return (

    <div className="Car">
      <Carousel style={{ marginLeft: '10%', marginRight: '10%', marginTop: '5% ', marginBottom: '7%' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstphoto}
            alt="First slide"
            width='1000px'
            height='1000px'
          />
          <Carousel.Caption>
            <div className='back'>
              <h3>Welcome to our Clothes Store</h3>
              <p>We provide have the top clothing quality out there</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={men}
            alt="Second slide"
            width='1000px'
            height='1000px'
          />

          <Carousel.Caption>
            <div className='back'>
              <h3>Here we Have clothes for Men</h3>
              <p>All Men wear are available in our store and you can shippable them everywhere</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={women}
            alt="Third slide"
            width='1000px'
            height='1000px'
          />

          <Carousel.Caption>
            <div className='back'>
            <h3>As well for Women</h3>
            <p >Find your unique style </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}