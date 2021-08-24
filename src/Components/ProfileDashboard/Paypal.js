
import React ,{useState}from 'react';
import axios from 'axios';
import API_URL from '../../config';
import { Layout   , Card , Form , Input  , Button } from 'antd';
import 'antd/dist/antd.css';
import Sidebarss from './Sidebarss';
import Loader from "react-loader-spinner";
import Manubar from './Manubar';
import {  toast } from 'react-toastify';
const {   Footer, Content  } = Layout;

const Paypal = () => {
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const [Data, setData] = useState({});

  

    React.useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const paymentId = queryParams.get('paymentId');
      const PayerID = queryParams.get('PayerID');
      const ChallanId = queryParams.get('ChallanId');
     
      console.log(paymentId, PayerID,ChallanId);


      axios.get(API_URL+'/wardan/'+ChallanId)
      .then(response=>{
        console.log(response);
        setData(response.data);
      }).catch(err=>console.log(err));

           if(paymentId !==null ){
              axios.post(API_URL+'/wardan/updateStatus',{
              UserId:ChallanId,
            Status: "Paid" 
            }).then(res=>{
              if(res.status===200){
                toast.success('Challan Payment Successfull-^- ');
                return;
              }
            })
            }

  
}, []);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
}

        const onFinish = (values) => {
       
            
                 
                 setSpinnerLoading(true)
                 axios.post(API_URL+'/web/paypal',{Data:Data})
                 .then(response=>{

                     console.log(response.data)
                     setSpinnerLoading(false);   
                     window.location.href = `${response.data}`;
                 })
                 .catch(error=>console.log(error));

           console.log('Success:', values);
         };


      const onFinishFailed = (errorInfo ) => {
        console.log('Failed:', errorInfo);
      };

     const CancelTransaction=()=>{
       window.location='/PayChallan';
     }
      
    return (
        <>
            <Layout >
           < Manubar/>
            <Layout> 
                                        <Sidebarss />
            <Layout>
                   
           
                        <Content>
                        <div style={{padding: '20px' ,  background: '#ececec ' ,width: 1150, height : '800px' }}>
                        <Card title="Pay Challan With Paypal" bordered={false} style={{height : '800px'}} >

                             
                                <Form
                                style={{  paddingLeft:180 }}
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 8 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                  
                                   <img 
                                   style={{marginLeft:170}}
                              width='250'
                              height='200'
                              alt='paypal logo'
                              src={'https://i.pinimg.com/236x/e8/86/24/e8862480e3eaee25baa05ab33bd44ced.jpg'}
                              />
                               <Form.Item  label="Id"  > <Input  value={Data._id} disabled/> </Form.Item>
                             <Form.Item  label="Challan Time"  > <Input  value={formatDate(Data.ChallanTime) } disabled/> </Form.Item>
                             <Form.Item  label="Fine"  > <Input  value={Data.Fine} disabled/> </Form.Item>
                             <Form.Item  label="Cnic"  > <Input  value={Data.OffenderCnic} disabled/> </Form.Item>
                             <Form.Item  label="Name"  > <Input  value={Data.OffenderName} disabled/> </Form.Item>
                             <Form.Item  label="Vehicle No."  > <Input  value={Data.RegNoOfVehicle} disabled/> </Form.Item>
                           
                               
                             <Loader
                            style={{marginLeft:260}}
                              type="Puff" 
                              color="green"
                              height={70}
                              width={50}
                              visible={spinnerLoading}
                            />
                                <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                                <Button type="danger"  onClick={CancelTransaction}>
                                 cancel
                                </Button>
                                <Button type="primary" style={{marginLeft:74}} htmlType='submit'>
                                   Proceed To Paypal 
                                </Button>
                              
                            </Form.Item>
                                </Form>
  
                    </Card>
                    </div>
                                  
                        
                    </Content>

                     <Footer>
                        <div className="mfs-auto">
                        <span className="mr-1">Powered by</span>
                        <span> | Islamabad Traffic Police</span>
                    </div>
                    </Footer>
               
                
            </Layout>
            </Layout>
            </Layout>
        </>
    )
}

export default Paypal