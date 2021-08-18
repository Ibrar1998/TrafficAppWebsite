import React from 'react';
import './Socialacc.css';

const SocialAcc = () => {
    return (
        <>
          <div className="container-fluid " >
              <div className="row  mt-2 mb-3 ">
                <div className="col-12 text-center social-links" > 
                <a href="https://www.intagram.com/" target='blank' ><img className="fb_img extr-img" width="30px" height="30px" alt="My name is khan" src="./images/ins.png"/></a>
                <a href="https://www.twitter.com/"  target='blank' ><img className="fb_img" width="30px" height="30px" alt="My name is khan" src="./images/twitter.png"/></a>
                <a href="https://www.facebook.com/" target='blank'><img className="fb_img" width="30px" height="30px"  alt="My name is khan" src="./images/fb.png"></img> </a>
                </div>
                
              </div>
             
          </div> 
           
        </>
    )
}

export default SocialAcc;
