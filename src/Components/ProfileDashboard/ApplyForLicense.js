import React,{useState} from 'react';
import { Layout , Breadcrumb  , Card , Modal ,Form, Input  , Row , Col , Radio , Checkbox     } from 'antd';
import 'antd/dist/antd.css';
import { Tabs ,Button} from 'antd';
import Sidebarss from './Sidebarss';
import Quiz from './Quiz';
import Countdown from 'react-countdown';
import Manubar from './Manubar';
import API_URL from '../../config';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import {CBadge,  CButton,} from '@coreui/react'
import PrintComponents from "react-print-components";
import { CAlert} from '@coreui/react';



const { TabPane } = Tabs;
const {  Footer, Content } = Layout;


const ApplyForLicense = () => {

    const [CNIC,setCNIC] =  useState('');//
    const [Name,setName] =  useState('');//
    const [FName,setFname] =  useState('');//
    const [BloodGropup, setBloodGropup] = useState('');//
    const [Adress, setAdress] = useState('');//
    const [Dob, setDOB] = useState('');//
    const [PhoneNum, setPhoneNum] = useState('');//
    const [UserID, setUserID] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [LicenseType, setLicenseType] = useState('');
    const [LicenseApplied, setLicenseApplied] = useState({});
    const [checkalert, setcheckalert] = useState(false);
    const [alertValue, setalertValue] = useState('');
   
    ///////////////////////////////
  
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [showTest, setshowTest] = React.useState(false);




    React.useEffect(() => {
        const userdata=JSON.parse(localStorage.getItem('UserData'));
        setUserID(userdata._id)

        axios.get(API_URL+'/license/'+userdata._id)
        .then(res=>
            {
                setLicenseApplied(res.data)
                console.log(res)
            })
           
        .catch(err=>console.log(err))
        
      
  }, [UserID]);
  const getBadge = status => {
    switch (status) {
      case 'Completed': return 'success'
      case 'Pending': return 'danger'
      default: return 'primary'
    }
  }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
      }

    const handleOk = (event) => {
        event.preventDefault();
        if(!Name){
            alert('Please Enter Name');
            return;
        }
        else {if (/[^a-zA-Z]/.test(Name)){
            setcheckalert(true);
            setalertValue('Invalid Name formate Alpha only !!')
            return;
          }}
        if(!FName){
            alert('Please Enter father');
            return;
        }
        else {if (/[^a-zA-Z]/.test(FName)){
            setcheckalert(true);
            setalertValue('Invalid Father-Name formate Alpha only !!')
            return;
          }}
        if(!Adress){
            alert('Please Enter Addres');
            return;
        }
        if(!Dob){
            alert('Please Enter Date of Birth');
            return;
        }
        if(!CNIC){
            alert('Please Enter Cnic');
            return;
        }
        else{
            let reg = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
            if(reg.test(CNIC)===false){
                setcheckalert(true);
                setalertValue('Invalid Cnic Format!! \n e.g xxxxx-xxxxxxx-x')
              return;
            }
          }
        if(!Occupation){
            alert('Please Enter Occupation');
            return;
        }
        if(!BloodGropup){
            alert('Please Enter Bloodgroup');
            return;
        }
        if(!PhoneNum){
            alert('Please Enter Mobile number');
            return;
        }
        else {if (/[^a-zA-Z]/.test(PhoneNum)){
            setcheckalert(true);
            setalertValue('Invalid PhoneNum formate Numeric only !!')
            return;
          }}

        if(!LicenseType){
            alert('Please Enter Check License Type');
            return;
        }

            var userdata={
                UserId:LicenseApplied.UserId,
                Status:'Pending',
                Cnic:CNIC,
                LicenseInfo:{
                    Name:Name,
                    FName:FName,
                    Adress:Adress,
                    Cnic:CNIC,
                    Dob:Dob,
                    Occupation:Occupation,
                    BloodGropup:BloodGropup,
                    PhoneNum:PhoneNum,
                    LicenseType:LicenseType,
                    LicenseImage:LicenseApplied.LearnerImage,
                    Nationality:LicenseApplied.Nationality,
                    DriverType:LicenseApplied.DriverType,
                    LeanerID:LicenseApplied._id,
                }
            }

            axios({
                method: "post",
                url: "http://192.168.0.111:7777/license/createlicense",
                data: userdata,
              })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (response) {
                  console.log(response);
                });
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
      function callback(key) {
        console.log(key);
      }
    // // Styling of the from components 
      const layout = {
        
        wrapperCol: { span: 12 },
      };


            const Completionist = () => <span>Time UP!</span>;

            // Renderer callback with condition
            const renderer = ({  minutes, seconds, completed }) => {
                if (completed) {
                  // Render a completed state
                  return <Completionist />;
                } else {
                  // Render a countdown
                  return <span><strong>{minutes}:{seconds}</strong></span>;
                }
              };
                
    return (
        <>
            <Layout style={{height:'1000px'}}>
                <Manubar/>
            <Layout> 
                                        <Sidebarss />
            <Layout>
                    <Content style={{ padding: '0 50px'}}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                                
                            </Breadcrumb>
                            <div style={{background: '#fff' ,  minHeight : 580 , padding : 24 }} className="site-layout-content">
                            
                                <Content>
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="Apply" key="1">
                                                
                                    <div style={{padding: '30px' ,  background: '#ececec ' , height : '700px' }}>
                                        <Card title="APPLY FOR LICENSE" bordered={false} style={{ width: 800  }}>
                                                <div>
                                                        <h2  style={{padding : '5px 15px' , background: 'lightgrey' , width: '200px'}}>Description</h2>
                                                        <p >
                                                        A copy of C.N.I.C
                                                        A Ticket of Rs.60 from any Post Office.
                                                        Get a Code Book of Traffic Rules & Regulation from Traffic Police Office.
                                                        Medical Certificate (by Authorized Medical Practitioner )
                                                        </p>
                                                </div>
                                                <hr></hr>

                                                <>
                                                    <h6 style={{padding : '5px 15px' , background: 'lightgrey' , width: '370px'}}>
                                                            <strong>Announcement Date: </strong> Monday, 14 - June, 2021
                                                    </h6>

                                                    <h6 style={{padding : '5px 15px' , background: 'lightgrey' , width: '500px'}}>
                                                            <strong>Last Date For Application Submission:</strong> Monday, 14 - June, 2021
                                                    </h6>
                                                </>

                                                <hr></hr>
                                                    <div>
                                                    <Button variant="contained" color="secondary" onClick={showModal}>
                                                        Apply For License
                                                    </Button>

                                                    <Modal width={1000} title="Application for New License" visible={isModalVisible}   onOk={handleOk} onCancel={handleCancel} >

                                                           
                                                            <div>
                                                                <p style={{textAlign : 'center'}}>(*) Indicates mandatory fields.</p>
                                                            </div>

                                                            <Form
                                                            {... layout}
                                                            >
                 
                                                                <Row>


                                                                                    <Col span={24}><strong>APPLICANT'S DATA</strong> 
                                                                                            <br></br><br></br>
                                                                                            {
                                                                                                    checkalert ? 
                                                                                                
                                                                                                            <CAlert
                                                                                                        color="danger"
                                                                                                    >
                                                                                                        <strong style={{alignItems:'center'}}>{alertValue}</strong>
                                                                                                    </CAlert>
                                                                                                    :null
                                                                                                        }
                                                                                        <Row >
                                                                                            <Col sm={24} className='text-center'>
                                                                                            <Form.Item >
                                                                                                <Radio.Group
                                                                                                 onChange={(e) => setLicenseType(e.target.value)}
                                                                                                 value={LicenseType}
                                                                                                >
                                                                                                <Radio value="New License">New License</Radio>
                                                                                                <Radio value="Duplicate">Duplicate</Radio>
                                                                                                <Radio value="Renewal">Renewal</Radio>
                                                                                                
                                                                                                </Radio.Group>
                                                                                            </Form.Item>
                                                                                            </Col>
                                                                                        </Row>        
                                                                                        
                                                                                        <Form.Item
                                                                                        label="Name"
                                                                                        name="Name"
                                                                                        rules={[{ required: true, message: 'Please input your Name!' }]}
                                                                                        
                                                                                        >
                                                                                            <Input
                                                                                            value={Name}
                                                                                            onChange={(e)=>setName(e.target.value)}
                                                                                            style={{marginLeft : '12em'}} />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Father Name "
                                                                                        name="Father Name "
                                                                                        rules={[{ required: true, message: 'Please input your Father Name!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input 
                                                                                         value={FName}
                                                                                         onChange={(e)=>setFname(e.target.value)}
                                                                                        type='text' style={{marginLeft : '9em'}}
                                                                                         
                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Pernament Address"
                                                                                        name=" Address"
                                                                                        rules={[{ required: true, message: 'Please input your Permanent Address' }]}
                                                                                        >
                                                                                        <Input
                                                                                        value={Adress}
                                                                                        onChange={(e)=>setAdress(e.target.value)}
                                                                                        type='text' style={{marginLeft : '6em'}} 
                                                                                         
                                                                                        />
                                                                                        </Form.Item>
                                                                                        
                                                                                        <Form.Item
                                                                                        label="DOB "
                                                                                        name="DOB "
                                                                                        rules={[{ required: true, message: 'Please input your Present DOB!' }]}
                                                                                       
                                                                                        >
                                                                                        <Input
                                                                                        value={Dob}
                                                                                        onChange={(e)=>setDOB(e.target.value)}
                                                                                        type='date' style={{marginLeft : '12.5em'}} 
                                                                                         
                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="CNIC NO"
                                                                                        name="CNIC NO "
                                                                                        rules={[{ required: true, message: 'Please input your CNIC NO!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input
                                                                                            value={CNIC}
                                                                                            onChange={(e)=>setCNIC(e.target.value)}
                                                                                        type='text' style={{marginLeft : '10.3em'}} 
                                                                                         
                                                                                        />
                                                                                        </Form.Item>
                                                                                        
                                                    

                                                                                        <Form.Item
                                                                                        label="Occupation"
                                                                                        name="Occupation "
                                                                                        rules={[{ required: true, message: 'Please input your Occupation!' }]}
                                                                                       
                                                                                        >
                                                                                        <Input
                                                                                          value={Occupation}
                                                                                          onChange={(e)=>setOccupation(e.target.value)}
                                                                                        type='text' style={{marginLeft : '9em'}} 
                                                                                        
                                                                                        />
                                                                                        </Form.Item>
                                                                                       <Form.Item
                                                                                        label="Blood Group"
                                                                                        name="Blood Group "
                                                                                        rules={[{ required: true, message: 'Please input your Blood Group!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input 
                                                                                          value={BloodGropup}
                                                                                          onChange={(e)=>setBloodGropup(e.target.value)}
                                                                                        type='text' style={{marginLeft : '8.3em'}} 
                                                                                     
                                                                                        />
                                                                                        </Form.Item>
                                                                                        
                                                                                        <Form.Item
                                                                                        label="Tel"
                                                                                        name="Tel "
                                                                                        >
                                                                                        <Input 
                                                                                             value={PhoneNum}
                                                                                             onChange={(e)=>setPhoneNum(e.target.value)}
                                                                                        type='text' style={{marginLeft : '13.3em'}} />
                                                                                        </Form.Item>

                                                 
                                                                                                <Checkbox style={{marginLeft: '15em'}}>I declare that all the information provided above is correct to the best of my knowledge.
                                                                                                    
                                                                                                </Checkbox>
                                                                                        
                                                                                        </Col>
                                                                                    </Row>
                                                                <br></br>
                                                            </Form>
                                                        
                                                    </Modal>
                                                    </div>
                                        </Card>
                                    </div>

                                    </TabPane>
                                    <TabPane tab="Applied" key="2">
                                    {
                                            LicenseApplied?
                                            <>
                                            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                                            <thead className="thead-light">
                                                <tr>
                                                {/* <th className="text-center"></th> */}
                                                <th>Username</th>
                                                <th>DOB</th>
                                                <th>Date Applied</th>
                                                <th>Id</th>
                                                <th>Status</th>
                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Name:null}</td>
                                                <td>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Dob:null}</td>
                                                <td>{LicenseApplied.LicenseInfo? formatDate( LicenseApplied.LicenseAppleidDate):null}</td>
                                              <td>{LicenseApplied._id}</td>
                                              <td><CBadge color={getBadge(LicenseApplied.Status)}>
                                                    {LicenseApplied.Status}
                                                </CBadge></td>
                                              
                                            </tbody>            
                                            </table>
                                                      </>

                                            :
                                            <h1 style={{textAlign:'center'}}>No Record Found!</h1>
                                        }
                                    </TabPane>
                                    <TabPane tab="Quiz" key="3">
                                        {
                                            LicenseApplied.Status==='Approved'?
                                            <>
                                            {
                                                   showTest?
                                                   <Card title="License Test" bordered={false} style={{ width: 800 ,height:600 }}>
                                                   <h2>
                                                   <Countdown
                                                   date={Date.now() + 600000}
                                                   renderer={renderer}
                                                    />
                                                   </h2>
                                                  <Quiz  Id={LicenseApplied._id} />
                                                  </Card>
                                                   :
                                                   <>
                                                  <Button type="primary" style={{width:300,marginLeft:400,marginTop:100 }} 
                                                  onClick={()=>setshowTest(true)}
                                                  >Start Test</Button>
                                                   </>
                                            }
                                           
                                            </>
                                            :<h2>Your License Application Still Pending so you can't give License Test</h2>


                                          
                                        }
                                       
                            
                                    </TabPane>
                                    <TabPane tab="License Form" key="4">
                                   
                                       
                                       
                                        {
                                            LicenseApplied.Status==='Approved'?
                                            <>
                                            <ProfileCard LicenseApplied={LicenseApplied}  />
                                            <PrintComponents
                                            trigger={<CButton   color="success" >Download pdf</CButton>}
                                            >
                                          <ProfileCard LicenseApplied={LicenseApplied}  />
                                            </PrintComponents>
                                               
                                               </>
                                            : <h2>You have't Passed your License test Yet so you can't  continue to Medical and Driving Test</h2>
                                        }
                                           
                                       
                                    </TabPane>
                                    
                                </Tabs>
  
                               

                                </Content>
                            
                            
                            </div>
                    </Content>
                     <Footer>
                        <div className="mfs-auto">
                        <span className="mr-1">Powered by</span>
                        <span>|Islamabad Traffic Police</span>
                    </div>
                    </Footer>
               
                
            </Layout>
            </Layout>
            </Layout>
        </>
    )
}

export default ApplyForLicense