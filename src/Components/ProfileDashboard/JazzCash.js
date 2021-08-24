
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

const JazzCash = () => {
        
      

        const [spinnerLoading, setSpinnerLoading] = useState(false);
        const [Mobilenumber, setMobilenumber] = useState('');
        const [Fine,setFine]=useState('');
        const [id,setid]=useState('');

          React.useEffect(() => {
            const queryParams = new URLSearchParams(window.location.search);
            const ChallanId = queryParams.get('ChallanId');
            setid(ChallanId);
            axios.get(API_URL+'/wardan/'+ChallanId)
            .then(response=>{
              console.log(response,response.data.Fine);
              setFine(response.data.Fine);
            }).catch(err=>console.log(err));
       
        
   
    }, []); 


        const onFinish = (values) => {
       
          if(!Mobilenumber){
            toast.warning('Please Enter Your Jazz Mobile Account Number');
            return;
          }
          

            setSpinnerLoading(true) 

            axios.post(API_URL+'/user/jazzcash',{
              Mobile_Number:Mobilenumber
            })
            .then(res=>{
              setSpinnerLoading(false);
              console.log(res);
                if(res.status===200){

                  axios.post(API_URL+'/wardan/updateStatus',{
                            UserId:id,
                             Status: "Paid" 
                          })

                    toast.success('Your Transaction is Successfull thanks for using JazzCash-^-');
                }else{
                  toast.error('Something Went Wroung!');
                }
            }).catch(err=>{setSpinnerLoading(false);console.log(err)});

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
                        <div style={{padding: '20px' ,  background: '#ececec ' ,width: 1150, height : '600px' }}>
                        <Card title="Pay Jazz Cash Challan" bordered={false} style={{height : '600px'}} >
  
                                <Form
                                style={{
                                
                                  paddingLeft:180,
                                  paddingTop:20
                                  
                                }}
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
                              height='120'
                              alt='Stripe logo'
                              src={'https://i.pinimg.com/564x/53/ec/75/53ec7562a36dd3960779b8d169567b51.jpg'}
                              /><br/><br/>
                            <Loader
                            style={{marginLeft:260}}
                              type="Puff" 
                              color="green"
                              height={70}
                              width={50}
                              visible={spinnerLoading}
                            />
                                  <Form.Item
                                label="Challan  Amount"
                                name="Challan  Amount"
                                rules={[{ required: false, message: 'Please input your Challan  Amount!' }]}
                            >
                                <Input
                                 type='value' value={Fine}  placeholder={Fine} disabled/>
                            </Form.Item>
                            <Form.Item
                                label="Phone Number"
                                name="Phone Number"
                                rules={[{ required: false, message: 'Please input your Phone Number!' }]}
                            >
                                <Input
                                onChange={(e)=>setMobilenumber(e.target.value)}
                                value={Mobilenumber}
                                 type='value'  placeholder='xxxxxxxxxxx'  />
                            </Form.Item>
                            
                                <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                                <Button type="danger"  onClick={CancelTransaction}>
                                cancel
                                </Button>
                                <Button type="primary" style={{marginLeft:140}} htmlType='submit'>
                                Submit
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

export default JazzCash