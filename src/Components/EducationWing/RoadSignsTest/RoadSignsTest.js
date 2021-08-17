import React from 'react';
import './RoadSignsTest.css';
import Footers from '../../Footers/Footers'
import Navbar from '../../MenueBar/MenueBar';
function RoadSignsTest() {
    return (
        <>
        <Navbar />
            <div className="section" style={{backgroundColor:'white' , paddingBottom:'10em'}}>

                            <div className='container-fluid'>
                                <div className='row justify-content-center' >
                                    <div className="col-9 title-div">
                                        <h1 className="text-center">TAKE YOUR ROAD SIGNS TEST</h1>
                                    </div>
                                </div>
                            </div>
                <div className="container">
                        <div className="row">
                            

                            <div className="col-12 text-center">
                                <img src="./images/1.png" alt="Mg of Road Signs" className="img-fluid" ></img>
                            </div>

                            <div className="col-12 text-center">
                                <img src="./images/2.png" alt="Mg of Road Signs" className="img-fluid" ></img>
                            </div>
                            
                            <div className="col-12 text-center">
                                <img src="./images/3.png" alt="Mg of Road Signs" className="img-fluid"></img>
                            </div>

                            <div className="col-12 text-center">
                                <img src="./images/4.png" alt="Mg of Road Signs" className="img-fluid"></img>
                            </div>

                            <div className="col-12 text-center">
                                <img src="./images/5.png" alt="Mg of Road Signs" className="img-fluid"></img>
                            </div>

                            <div className="col-12 text-center">
                                <img src="./images/6.png" alt="Mg of Road Signs" className="img-fluid"></img>
                            </div>
                        </div>

                            
                </div>
            </div>

            <Footers/>
           

        </>
    )
}


export default RoadSignsTest;