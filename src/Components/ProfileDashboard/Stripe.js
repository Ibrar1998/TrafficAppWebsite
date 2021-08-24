
import React ,{useState}from 'react';
import axios from 'axios';
import API_URL from '../../config';
import { Layout   , Card , Form , Input  , Button } from 'antd';
import 'antd/dist/antd.css';
import Sidebarss from './Sidebarss';
import Manubar from './Manubar';
import StripeCheckout from "react-stripe-checkout";
import {  toast } from 'react-toastify';
const {   Footer, Content  } = Layout;

const Stripe = () => {
    
    const [id,setid]=useState('');
    const [Data, setData] = useState({});
    const [userid,setuserid]=useState('');


    React.useEffect(() => {
      const userdata=JSON.parse(localStorage.getItem('UserData'));
      setuserid(userdata._id);

      const queryParams = new URLSearchParams(window.location.search);
      const ChallanId = queryParams.get('ChallanId');
      console.log(ChallanId);
      setid(ChallanId);
      axios.get(API_URL+'/wardan/'+ChallanId)
      .then(response=>{
        console.log(response);
        setData(response.data)
      }).catch(err=>console.log(err));
}, []);

        const onFinish = (values) => {
       

           console.log('Success:', values);
         };

         async function handleToken(token) {
            const response = await axios.post(
               API_URL+"/stripe/webpay",
              { token ,Data,userid }
             
            );
           
            console.log(token)
        
            const { status } = response.data;
            console.log("Response:", response.data);
            if (status === "success") {
                
              toast.success("Success! Check email for details");

             await axios.post(API_URL+'/wardan/updateStatus',{
                UserId:id,
                 Status: "Paid" 
              })

            } else {
              toast.warning("Something went wrong");
            }
          }

      const onFinishFailed = (errorInfo ) => {
        console.log('Failed:', errorInfo);
      };

     const CancelTransaction=()=>{
       window.location='/PayChallan';
     }

         
     const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
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
                        <Card title="Pay Challan With Stripe" bordered={false} style={{height : '600px'}} >

                             
                                <Form
                                style={{
                                
                                  paddingLeft:200,
                                  paddingTop:10
                                  
                                }}
                                name="basic"
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 8 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                >
                                  
                                   <img 
                                   style={{marginLeft:160,borderRadius:5}}
                              width='250'
                              height='80'
                              alt='Stripe logo'
                              src={'https://i.pinimg.com/564x/8f/c6/a2/8fc6a20dd42803d99e5f782d03916991.jpg'}
                              /><br/><br/>

                             <Form.Item  label="Id"  > <Input  value={Data._id} disabled/> </Form.Item>
                             <Form.Item  label="Challan Time"  > <Input  value={formatDate(Data.ChallanTime)} disabled/> </Form.Item>
                             <Form.Item  label="Fine"  > <Input  value={Data.Fine} disabled/> </Form.Item>
                             <Form.Item  label="Cnic"  > <Input  value={Data.OffenderCnic} disabled/> </Form.Item>
                             <Form.Item  label="Name"  > <Input  value={Data.OffenderName} disabled/> </Form.Item>
                             <Form.Item  label="Vehicle No."  > <Input  value={Data.RegNoOfVehicle} disabled/> </Form.Item>
                           
                            
                               
                            
                                <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                                <Button type="danger"  onClick={CancelTransaction}>
                                 cancel
                                </Button>
                               
                                <StripeCheckout
                                style={{marginLeft:90}}
                                stripeKey="pk_test_51HqkVCAXTFLHhrkDO7bPcUn24Cc1ldZqcimfA1xHmUt8RiyYXzIICysRYDmumt0yToUptGyRxRGVpGqPKfVpfyR3000Et4a9pL"
                                token={handleToken}
                                name="Stripe"
                                currency="rupees"
                                billingAddress
                                shippingAddress
                            />
                              
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

export default Stripe