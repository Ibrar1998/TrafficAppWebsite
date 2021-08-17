import React,{useState , useEffect} from 'react';
import Footers from '../Footers/Footers';
import Navbar from '../MenueBar/MenueBar';
import {   Form , Input   } from 'antd';
import Loader from "react-loader-spinner";
import axios from 'axios';
import API_URL from '../../config';
import Button from '@material-ui/core/Button';
import { CAlert} from '@coreui/react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import {
    CCardBody,
    CCol,
    CRow,
    CCard,
  } from '@coreui/react'

export default function BasicTextFields() {
 

  const [Cnic, setCnic] = useState('');
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [Data, setData] = useState();
  const [ShowSearch, setShowSearch] = useState(true);
  const [checkalert, setcheckalert] = useState(false);
  const [alertValue, setalertValue] = useState('');

  const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
  };


  const submitHandle = (values) => {
    if(!Cnic){
        alert('Please Enter Cnic');
        return;
    }

    else{
      let reg = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
      if(reg.test(Cnic)===false){
          setcheckalert(true);
          setalertValue('Invalid Cnic Format!! \n e.g xxxxx-xxxxxxx-x')
        return;
      }
    }
  
  setSpinnerLoading(true)
     axios.post(API_URL+'/license/cnicsearch',{
       Cnic:Cnic
     })
     .then(res=>{
       setSpinnerLoading(false)
         console.log(res);
         setData(res.data);
         setShowSearch(false)
     })
     .catch(err=>console.log(err));



     console.log('Success:', values);
   };

   useEffect(() => {
                Aos.init({duration : 2000})
             }, []);

  return (
      <>
      <Navbar />
        <div className="container  pt-3" data-aos="fade-up" style={{height:"700px", width:"1600px" , border:"none" , marginTop:'2em'  }}>

            <div className="row ">
                <div className="col-12">
                {
                    ShowSearch?
                    <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={{marginTop : '3em' ,border :'2px solid whitesmoke', padding : '60px 40px ', backgroundColor : 'whitesmoke' ,  boxShadow:' 0 10px 20px 0px rgba(0, 0, 0, 0.3)'}}
                    >
                       {
                           checkalert ? 
                            <CAlert
                                 color="danger"
                            >
                              <strong style={{alignItems:'center'}}>{alertValue}</strong>
                                </CAlert>
                                 :null
                         }
                    <Form.Item
                        label="CNIC"
                        name="CNIC"
                        
                        rules={[{ required: false, message: 'Please input your CNIC!' }]}
                    >
                        <Input
                        onChange={(e)=>
                          {
                          setCnic(e.target.value)

                          }
                      }
                      onFocus={() => 
                        {
                            setcheckalert(false)
                            setCnic("")
                        }
                    } 
                        value={Cnic}
                        type='value'  placeholder='xxxxx-xxxxxxx-x' />
                    </Form.Item>
                
                 

                    <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                    <Button 
                    variant="contained"
                    color="primary" 
                    onClick={submitHandle}>
                          Submit
                    </Button>
                </Form.Item>
                  <Loader
                style={{textAlign:'center'}}
                  type="Puff" 
                  color="green"
                  height={80}
                  width={60}
                  
                  visible={spinnerLoading}
                    />
                    </Form>
                    : (
                        
                            Data?
                            <CCard style={{width:1050 ,marginLeft:150}}>
                            <CCardBody>
                            <CRow>
                                <CCol sm={1}></CCol>
                                <CCol sm={3}>
                                    {
                                        Data.LicenseInfo?
                                        <img
                                        src={API_URL+'/'+Data.LicenseInfo.LicenseImage}
                                         alt="adminlogo"
                                         style={{width:200}}
                                         shape="rounded"
                                     />
                                        :null

                                    }
                               
                                </CCol>
                                <CCol sm={8}>
                                <h5>Applicant Name:<span style={{fontSize:14,color:'gray'}}> {Data.LicenseInfo?Data.LicenseInfo.Name:null}</span></h5>
                                <h5>Father Name:<span style={{fontSize:14,color:'gray'}}> {Data.LicenseInfo?Data.LicenseInfo.FName:null}</span></h5>
                                <h5>Pernament Addres:<span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.Adress:null}</span> </h5>
                                <h5>Date of Birth:<span style={{fontSize:14,color:'gray'}}> {Data.LicenseInfo?Data.LicenseInfo.Dob:null}</span></h5>
                                <h5>Occupation: <span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.Occupation:null}</span></h5>
                                <h5>Blood Group: <span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.BloodGropup:null}</span></h5>
                                <h5>Cnic: <span style={{fontSize:14,color:'gray'}}>{Data.Cnic}</span></h5>
                                <h5>Mobile Number:<span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.PhoneNum:null}</span> </h5>
                                <h5>License Type:<span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.LicenseType:null}</span> </h5>
                                <h5>Nationality:<span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.Nationality:null}</span> </h5>
                                <h5>Driver Type: <span style={{fontSize:14,color:'gray'}}>{Data.LicenseInfo?Data.LicenseInfo.DriverType:null}</span></h5>
                                <h5>Applicant ID: <span style={{fontSize:14,color:'gray'}}>{Data._id}</span></h5>
                                <h5>License Applied Date:<span style={{fontSize:14,color:'gray'}}>{Data.LicenseAppleidDate}</span> </h5>
                                </CCol>
                            </CRow>
                        </CCardBody>  
                        </CCard>
                         :null
                        

                    )
                }
                                                


                                          
                                       
                                             
                </div>
            </div> 
        </div>

            <Footers/>
          

    </>
  );
}
