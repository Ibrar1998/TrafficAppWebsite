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
const crypto = require('crypto')
const {   Footer, Content  } = Layout;

const ApplyForLicense = () => {
        
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
          
          if(!Vehicle){
           alert('Please Enter Cnic');
           return;
       }
       setSpinnerLoading(true)
           axios.post(API_URL+'/wardan/webchallanlist',{
               RegNoOfVehicle:Vehicle
           })
           .then(res=>{
             setSpinnerLoading(false)
             console.log(res);
             if(res.data.message){
               alert(res.data.message);
               return;
             }
              
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

          const PayJazzCash= async()=>{
            function pad2(n) { return n < 10 ? '0' + n : n }
            var date = new Date();
    
            const dateandtime = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() )
            const dexpiredate = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()+1) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() )
        
         
            const tre = "T"+dateandtime;
            console.log(tre,dexpiredate);
            const pp_Amount="20000";
            const pp_BillReference="billRef";
            const pp_Description="Description";
            const pp_Language="EN";
            const pp_MerchantID="MC22674";
            const pp_Password="v3y01y32yx";
        
            const pp_ReturnURL="https://islambadtrafficpolice.herokuapp.com/PayChallan";
            const pp_ver = "1.1";
            const pp_TxnCurrency= "PKR";
            const pp_TxnDateTime=dateandtime.toString();
            const pp_TxnExpiryDateTime=dexpiredate.toString();
            const pp_TxnRefNo=tre.toString();
            const pp_TxnType="MWALLET";
            const ppmpf_1="03123456789";
            const IntegeritySalt = "3wt1f5ef9z";
            const and = '&';
            const superdata=
                IntegeritySalt+and+
                    pp_Amount+and+
                    pp_BillReference +and+
                    pp_Description +and+
                    pp_Language +and+
                    pp_MerchantID +and+
                    pp_Password +and+
                    pp_ReturnURL +and+
                    pp_TxnCurrency+and+
                    pp_TxnDateTime +and+
                    pp_TxnExpiryDateTime +and+
                    pp_TxnRefNo+and+
                    pp_TxnType+and+
                    pp_ver+and+
                    ppmpf_1
            ;
        
            var hmac256 = crypto.createHmac('sha256', IntegeritySalt)
            .update(superdata)
            .digest('hex')
            .toUpperCase()
            console.log(hmac256)

            console.log({
              "pp_Version": pp_ver,
        "pp_TxnType": pp_TxnType,
        "pp_Language": pp_Language,
        "pp_MerchantID": pp_MerchantID,
        "pp_Password": pp_Password,
        "pp_TxnRefNo": tre,
        "pp_Amount": pp_Amount,
        "pp_TxnCurrency": pp_TxnCurrency,
        "pp_TxnDateTime": dateandtime,
        "pp_BillReference": pp_BillReference,
        "pp_Description": pp_Description,
        "pp_TxnExpiryDateTime":dexpiredate,
        "pp_ReturnURL": pp_ReturnURL,
        "pp_SecureHash": hmac256.toString(),
        "ppmpf_1":"03123456789"
        })
        
              await fetch('https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction',
            
              {
                    "pp_Version": pp_ver,
              "pp_TxnType": pp_TxnType,
              "pp_Language": pp_Language,
              "pp_MerchantID": pp_MerchantID,
              "pp_Password": pp_Password,
              "pp_TxnRefNo": tre,
              "pp_Amount": pp_Amount,
              "pp_TxnCurrency": pp_TxnCurrency,
              "pp_TxnDateTime": dateandtime,
              "pp_BillReference": pp_BillReference,
              "pp_Description": pp_Description,
              "pp_TxnExpiryDateTime":dexpiredate,
              "pp_ReturnURL": pp_ReturnURL,
              "pp_SecureHash": hmac256.toString(),
              "ppmpf_1":"03123456789"
              }
              
              )
              .then(response => console.log(response))
              .catch(err => console.log(err));
          //  var key = utf8.encode(IntegeritySalt);
          //  var bytes = utf8.encode(superdata);
          //  var hmacSha256 = new Hmac(sha256, key);
          //  const sha256Result = hmacSha256.convert(bytes);
          //  var url = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction';
        
            // var response = await http.post(url, body={
            //   "pp_Version": pp_ver,
            //   "pp_TxnType": pp_TxnType,
            //   "pp_Language": pp_Language,
            //   "pp_MerchantID": pp_MerchantID,
            //   "pp_Password": pp_Password,
            //   "pp_TxnRefNo": tre,
            //   "pp_Amount": pp_Amount,
            //   "pp_TxnCurrency": pp_TxnCurrency,
            //   "pp_TxnDateTime": dateandtime,
            //   "pp_BillReference": pp_BillReference,
            //   "pp_Description": pp_Description,
            //   "pp_TxnExpiryDateTime":dexpiredate,
            //   "pp_ReturnURL": pp_ReturnURL,
            //   "pp_SecureHash": sha256Result.toString(),
            //   "ppmpf_1":"4456733833993"
            // });
        
            
           
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
 
                                    
                                        <Button  type="primary"  onClick={PayJazzCash}>
                                         JazzCash
                                        </Button>
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