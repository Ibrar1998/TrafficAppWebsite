import React from 'react';
import Footers from './/../../Footers/Footers';
import Img1 from '../../../assets/1.jpg';
import Img2 from '../../../assets/2.jpg';
import Img3 from '../../../assets/3.jpg';
import Img4 from '../../../assets/4.jpg';
import Img5 from '../../../assets/5.jpg';
import Navbar from '../../MenueBar/MenueBar';


export default function ImpRoadSigns() {
    return (
        <>
                 <Navbar />
                    <div className="section" style={{backgroundColor:'whitesmoke', paddingBottom:'10em'}}>

                   
                    <div className="container">
                    <div className="row">

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-12 title-div">
                                <h1 className="text-center">TRAFFIC EDUCATION ROAD SIGNS</h1>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 text-center">
                        <img src={Img1} alt="Mg of Road Signs" className="img-fluid" ></img>
                    </div>

                    <div className="col-12 text-center">
                        <img src={Img2} alt="Mg of Road Signs" className="img-fluid" ></img>
                    </div>

                    <div className="col-12 text-center">
                        <img src={Img3} alt="Mg of Road Signs" className="img-fluid"></img>
                    </div>

                    <div className="col-12 text-center">
                        <img src={Img4} alt="Mg of Road Signs" className="img-fluid"></img>
                    </div>

                    <div className="col-12 text-center">
                        <img src={Img5} alt="Mg of Road Signs" className="img-fluid"></img>
                    </div>

                    
                    </div>


                    </div>
                    </div>

                  

                    <Footers/>
                  
        </>
    )
}
