import React ,{useState}from 'react';
import axios from 'axios';
import API_URL from '../../config';
import { Layout   , Card , Form , Input  , Button } from 'antd';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import Sidebarss from './Sidebarss';
import { CBadge} from '@coreui/react';
import Loader from "react-loader-spinner";
import Manubar from './Manubar';
import { toast } from 'react-toastify';
const {   Footer, Content  } = Layout;

const ApplyForLicense = () => {
        
        const [Vehicle, setVehicle] = useState('');  
        const [Data, setData] = useState({});
        const [spinnerLoading, setSpinnerLoading] = useState(false);
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [transactionId, settransactionId] = useState('');

        const onFinish = (values) => {
          
          if(!Vehicle){
           toast.warning('Please Enter Vehicle number');
           return;
       }
       setData({});
       setSpinnerLoading(true)
           axios.post(API_URL+'/wardan/webchallanlist',{
               RegNoOfVehicle:Vehicle
           })
           .then(res=>{
             setSpinnerLoading(false)
             console.log(res);
             if(res.data===''){
               toast.warning('No Challan Found!!');
               return;
             }
              
               setData(res.data);
               settransactionId(res.data._id);
           })
           .catch(err=>console.log(err));
   
   
   
           console.log('Success:', values);
         };

 
     
     
   const ShowJazzCash=()=>{
        window.location=`/JazzCash?ChallanId=${transactionId}`;
   }
      const PayWithPayPal=()=>{
        window.location=`/Paypal?ChallanId=${transactionId}`;
      }
    const   PayWithStripe =()=>{
      window.location=`/Stripe?ChallanId=${transactionId}`;
    }

        const showModal = () => {
         setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
        const formatDate = (dateString) => {
          const options = { year: "numeric", month: "long", day: "numeric" }
          return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
        }

      const getBadge = status => {
        switch (status) {
          case 'Paid': return 'success'
          case 'Pending': return 'danger'
          default: return 'primary'
        }
      }

      const onFinishFailed = (errorInfo ) => {
        console.log('Failed:', errorInfo);
      };
                
    return (
        <>
            <Layout >
           < Manubar/>
            <Layout> 
                                        <Sidebarss />
            <Layout>
                   
           
                        <Content>
                        <div style={{padding: '20px' ,  background: '#ececec ' ,width: 1150, height : '650px' }}>
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
                                label="Vehicle Number"
                                name="Vehicle Number"
                                rules={[{ required: false, message: 'Please input your Vehicle Number!' }]}
                            >
                                <Input
                                 onChange={(e)=>setVehicle(e.target.value)}
                                 value={Vehicle}
                                type='value'  placeholder='ABC-XXXX'
                              
                                />
                            </Form.Item>
                                <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                                <Button type="primary" htmlType='submit'>
                                Submit
                                </Button>
                              
                            </Form.Item>
                                </Form>

                            {
                              Data._id ?
                             
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
                              
                              <tr>
                                 <td>{formatDate( Data.ChallanTime )}  </td>
                                 <td>{ Data.WardanName }  </td>
                                 <td>{ Data.OffenderCnic }  </td>
                                 <td>{ Data.RegNoOfVehicle }  </td>
                                 <td>{ Data.OffenderName }  </td>
                                 <td>{ Data.Fine }  </td>
                                 <td>{ <CBadge color={getBadge(Data.Status)}>
                                      {Data.Status}
                                    </CBadge> }
                                 </td>  
                                 <td>    
                                  <Button  type="primary" onClick={showModal}  >
                                   Pay Now
                                   </Button>
                                     
                                 </td>
                              </tr>
                              </tbody>            
                          </table>
                              :null
                            }
                                
                              
                               
                            <Loader
                            style={{textAlign:'center'}}
                              type="Puff" 
                              color="green"
                              height={80}
                              width={60}
                              visible={spinnerLoading}
                            />

                            <Modal title="Pay Your Electronic Challan" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                              <Button  type="primary"  onClick={PayWithPayPal}>
                              Pay With PayPal
                              </Button>
                              
                              <Button  type="primary"  style={{marginLeft:20}} onClick={PayWithStripe}>
                              Pay With Stripe
                              </Button>
                             
                    
                              <Button  type="primary" style={{marginLeft:20}} onClick={ShowJazzCash}>
                               Pay With JazzCash
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