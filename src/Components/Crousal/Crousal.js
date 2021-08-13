import React ,{useState} from 'react';
import './CrousalStyle.css';
import {Carousel} from 'react-bootstrap';
import Button from '@material-ui/core/Button';


const Crousal = () => {
  
  
  const GotoThatPage = () =>{
    window.location = '/HowToApplyy'
  }
 
    return (
    <>
      
        <Carousel className="crousal-style" style={{height : '500px'}} >
          <Carousel.Item interval={2000}>
            <img
              className="d-block  w-100"
              src="https://images.unsplash.com/photo-1576155999810-13b7eb9db831?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWZmaWMlMjBwb2xpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="First slide"
              height='500px'
              
            />
              <Carousel.Caption  >
                <h1 style={{color : 'white'}}>WELCOME TO <span style={{color : 'blue'}}>ITP</span> </h1>
                <p>EASY WAY TO APPLY FOR DRIVING LICENSE</p>
                <Button variant="contained" color="secondary" style={{padding: '10px 30px '}} 
                onClick={GotoThatPage}
                >
                HOW TO APPLY
                </Button>
                
              </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000} >
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/announce-new-powers-to-randomly-stop-drivers-and-perform-drink-picture-id1161575198?k=6&m=1161575198&s=612x612&w=0&h=g24rViln4A7Y3KfKH3xLJKDc1gWXkoUmHhNCbpjR38U="
              alt="Second slide"
              height='500px'
            />
            <Carousel.Caption >
              <h1 style={{color : 'white'}}><span style={{color : 'blue'}}>ITP </span> ENSURES GENUINITY</h1>
              <p >LICENSE VERIFICATION ON JUST A CLICK</p>
              <Button variant="contained" color="secondary" style={{padding: '10px 30px '}}>VERIFY LICENSE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1453873531674-2151bcd01707?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="Third slide"
              height='500px'
            />
            <Carousel.Caption >
              <h1 style={{color : 'white'}}>TRACK <span style={{color : 'blue'}}>LICENSE </span>  DELIVERY</h1>
              <p >TRACK YOUR LICENSE STATUS</p>
              <Button variant="contained" color="secondary" style={{padding: '10px 30px '}} >
                  TRACK NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
    </>
    )
}

export default Crousal;