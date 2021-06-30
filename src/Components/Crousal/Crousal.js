import React from 'react';
import './CrousalStyle.css';
import {Carousel} from 'react-bootstrap';

const Crousal = () => {

  const GotoThatPage = () =>{
    window.location = '/HowToApplyy'
  }
 
    return (
    <>
      
        <Carousel className="crousal-style" >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 "
              src="./images/car.jpg"
              alt="First slide"
              
            />
              <Carousel.Caption  >
                <h1 style={{color : 'white'}}>WELCOME TO ITP</h1>
                <p style={{fontSize:'2em'}}>EASY WAY TO APPLY FOR DRIVING LICENSE</p>
                <button className="btn btn-outline-primary btn-extra-style" style={{padding: '10px 30px '}} 
                onClick={GotoThatPage}
                >
                HOW TO APPLY
                </button>
                
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="./images/photo.jpg"
              alt="Second slide"
            />
            <Carousel.Caption >
              <h1 style={{color : 'white'}}>ITP ENSURES GENUINITY</h1>
              <p style={{fontSize:'2em'}}>LICENSE VERIFICATION ON JUST A CLICK</p>
              <button className="btn btn-outline-primary btn-extra-style" style={{padding: '10px 30px '}}>VERIFY LICENSE</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="./images/photo2.jpg"
              alt="Third slide"
            />
            <Carousel.Caption >
              <h1 style={{color : 'white'}}>TRACK LICENSE DELIVERY</h1>
              <p style={{fontSize:'2em'}}>TRACK YOUR LICENSE STATUS</p>
              <button className="btn btn-outline-primary btn-extra-style" style={{padding: '10px 30px '}} >
                  TRACK NOW
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
    </>
    )
}

export default Crousal;