import React ,{useState}from 'react';
import axios from 'axios';
import API_URL from '../../config';
import { Layout   , Card , Form , Input  , Button } from 'antd';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import Sidebarss from './Sidebarss';
import { CBadge} from '@coreui/react';
import StripeCheckout from "react-stripe-checkout";
import Loader from "react-loader-spinner";
import Manubar from './Manubar';

const {   Footer, Content  } = Layout;




const ApplyForLicense = () => {
        const [Cnic, setCnic] = useState('');
        const [Vehicle, setVehicle] = useState('');  
        const [Data, setData] = useState([]);
        const [spinnerLoading, setSpinnerLoading] = useState(false);
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [userid, setUserid] = useState('');
        const queryParams = new URLSearchParams(window.location.search);
        const paymentId = queryParams.get('paymentId');
        const PayerID = queryParams.get('PayerID');
        const _id = queryParams.get('_id');
     
        console.log(paymentId, PayerID,_id);
        const onFinish = (values) => {
          if(!Cnic){
              alert('Please Enter Cnic');
              return;
          }
          if(!Vehicle){
           alert('Please Enter Cnic');
           return;
       }
       setSpinnerLoading(true)
           axios.post(API_URL+'/wardan/webchallanlist',{
               OffenderCnic:Cnic,
               RegNoOfVehicle:Vehicle
           })
           .then(res=>{
             setSpinnerLoading(false)
               console.log(res);
               setData(res.data);
           })
           .catch(err=>console.log(err));
   
   
   
           console.log('Success:', values);
         };

        React.useEffect(() => {
          const userdata=JSON.parse(localStorage.getItem('UserData'));
          console.log(userdata)
          setUserid(userdata._id)
       
        
        if(paymentId !==null ){
           axios.post(API_URL+'/wardan/updateStatus',{
            UserId:_id,
             Status: "Paid" 
          })
         
      }
    }, [paymentId,PayerID,_id]);
     
     
   
      
       

        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
    

      const getBadge = status => {
        switch (status) {
          case 'Paid': return 'success'
          case 'Pending': return 'danger'
          default: return 'primary'
        }
      }

   
    

      const data=  Data.map((item,index)=>
                
                       
      <tr key={index}>
      <td>
        {
          item.ChallanTime
        }
      </td>
      <td>
          <span>{item.WardanName}</span>
      </td>
      <td >
        <p>{item.OffenderCnic}</p>
      </td>
      <td>
      <div>
      <strong >{item.RegNoOfVehicle}</strong>
       </div>
      </td>
      <td>
      <strong>{item.OffenderName}</strong>
      </td>
      <td>
      <strong>{item.Fine}</strong>
      </td>
     
      <td>
        <strong>
                    <CBadge color={getBadge(item.Status)}>
                        {item.Status}
                      </CBadge>
      </strong>
      </td>
     
      <td>
          {
              item.Status==='Paid'?
               null
              :
              <Button  type="primary" onClick={showModal}>
              Pay Now
               </Button>
          }
     </td>
      
    </tr> 
  ) 



      const onFinishFailed = (errorInfo ) => {
        console.log('Failed:', errorInfo);
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
                    setIsModalVisible(false);
                  alert("Success! Check email for details");

                 await axios.post(API_URL+'/wardan/updateStatus',{
                    UserId:Data[0]._id,
                     Status: "Paid" 
                  })

                } else {
                  alert("Something went wrong");
                }
              }

             const PayWithPayPal =()=>{
                 setIsModalVisible(false);
                 setSpinnerLoading(true)
                 axios.post(API_URL+'/web/paypal',{
                   Data
                 })
                 .then(response=>{
                
                     console.log(response.data)
                     setSpinnerLoading(false);
                     window.location.href = `${response.data}`;
                 })
                 .catch(error=>console.log(error));
             } 
                
    return (
        <>
            <Layout >
           < Manubar/>
            <Layout> 
                                        <Sidebarss />
            <Layout>
                   
                            
                           
                            
                                <Content>             
                                    <div style={{padding: '20px' ,  background: '#ececec ' ,width: 1250, height : '650px' }}>
                                        <Card title="Pay Online Challan " bordered={false} style={{height : '600px'}} >
 
                                       
                                           
                                                <Form
                                                name="basic"
                                                labelCol={{ span: 4 }}
                                                wrapperCol={{ span: 8 }}
                                                initialValues={{ remember: true }}
                                                onFinish={onFinish}
                                                onFinishFailed={onFinishFailed}
                                                >
                                                <Form.Item
                                                    label="CNIC"
                                                    name="CNIC"
                                                    
                                                    rules={[{ required: false, message: 'Please input your CNIC!' }]}
                                                >
                                                    <Input
                                                    onChange={(e)=>setCnic(e.target.value)}
                                                    value={Cnic}
                                                    type='value'  placeholder='xxxxx-xxxxxxx-x' />
                                                </Form.Item>
                                                <Form.Item
                                                label="Vehicle Number"
                                                name="Vehicle Number"
                                                rules={[{ required: false, message: 'Please input your Vehicle Number!' }]}
                                            >
                                                <Input
                                                 onChange={(e)=>setVehicle(e.target.value)}
                                                 value={Vehicle}
                                                type='value'  placeholder='ABC-XXXX' />
                                            </Form.Item>
                                                <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                                                <Button type="primary" htmlType='submit'>
                                                Submit
                                                </Button>
                                            </Form.Item>
                                                </Form>

                                            
                                                
                                                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                                                <thead className="thead-light">
                                                <tr>
                                                    <th>ChallanTime</th>
                                                    <th>Wardan Name</th>
                                                    <th>CNIC</th>
                                                    <th>RegNoOfVehicle</th>
                                                    <th>OffenderName</th>
                                                    <th>Fine</th>
                                                    <th>Status</th>
                                                    <th>Online Payment</th>
                                
                                                </tr>
                                                </thead>
                                                <tbody>
                                                { 
                                                data
                                                }
                                                </tbody>            
                                            </table>
                                               
                                            <Loader
                                            style={{textAlign:'center'}}
                                              type="Puff" 
                                              color="green"
                                              height={80}
                                              width={60}
                                              
                                              visible={spinnerLoading}
                                            />

                                            <Modal title="Pay Your Electronic Challan" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                                <strong>Stripe</strong>
                                                <StripeCheckout
                                                stripeKey="pk_test_51HqkVCAXTFLHhrkDO7bPcUn24Cc1ldZqcimfA1xHmUt8RiyYXzIICysRYDmumt0yToUptGyRxRGVpGqPKfVpfyR3000Et4a9pL"
                                                token={handleToken}
                                                name="Stripe"
                                                currency="rupees"
                                                billingAddress
                                                shippingAddress
                                            />
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <strong>PayPal</strong>
                                        <Button  type="primary"  onClick={PayWithPayPal}>
                                         Pay With PayPal
                                        </Button>
                                            </Modal>
                                               
                                             
                                        
                                      
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

export default ApplyForLicense
