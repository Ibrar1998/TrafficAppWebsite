import React, { useState } from 'react';
import { Layout , Breadcrumb  , Card , Modal ,Form, Input  , Row , Col , Select , Radio} from 'antd';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Button } from '@material-ui/core';
import Sidebarss from './Sidebarss';
import axios from 'axios';
import Manubar from './Manubar';
import { CAlert} from '@coreui/react';


import API_URL from '../../config';

const { TabPane } = Tabs;
const {  Footer, Content } = Layout;


const ApplyForLearner = () => {

    const [CNIC,setCNIC] =  useState('');
    const [Name,setName] =  useState('');
    const [FName,setFname] =  useState('');
    const [BloodGropup, setBloodGropup] = useState('');
    const [Adress, setAdress] = useState('');
    const [Dob, setDOB] = useState('');
    const [PhoneNum, setPhoneNum] = useState('');
    const [VehType, setVehType] = useState('');
    const [Citizen, setCitizen] = useState('');
    const [Gender, setGender] = useState('');
    const [ImagetoSend, setImagetoSend] = useState('');
    const [ImageUrl, setImageUrl] = useState('');
    const [UserID, setUserID] = useState('');
    const [PassPortNum, setPassPortNum] = useState('');
    const [LearnerApplied, setLearnerApplied] = useState({});
    const [checkalert, setcheckalert] = useState(false);
    const [alertValue, setalertValue] = useState('');
     

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
      }

    React.useEffect(() => {
        const userdata=JSON.parse(localStorage.getItem('UserData'));
        setUserID(userdata._id)

        axios.get(API_URL+'/user/'+UserID)
        .then(res=>
            {
                setLearnerApplied(res.data)
                console.log(res)
            })
           
        .catch(err=>console.log(err))
        
      
  }, [UserID]);
   
    const handleOk = (event) => {
        event.preventDefault();
        
        var userdata = new FormData();  

       if(!CNIC){
           alert("Please enter the CNIC");
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


       if(!Name){
           alert("Please enter the Name");
           return;
       }
       else {if (/[^a-zA-Z]/.test(Name)){
          setcheckalert(true);
          setalertValue('Invalid Name formate Alpha only !!')
          return;
        }}

       if(!FName){
        alert("Please enter the FName");
        return;
        }

        else {if (/[^a-zA-Z]/.test(FName)){
            setcheckalert(true);
            setalertValue('Invalid Father-Name formate Alpha only !!')
            return;
          }}


        if(!BloodGropup){
            alert("Please enter the BloodGroup");
            return;
        }
        if(!Adress){
            alert("Please enter the Address");
            return;
        }
       
        if(!Dob){
            alert("Please enter the DOB");
            return;
        }
        if(!PhoneNum){
            alert("Please enter the Num");
            return;
        }

        else {if (!/[^a-zA-Z]/.test(PhoneNum)){
            setcheckalert(true);
            setalertValue('Invalid PhoneNum formate Numeric only !!')
            return;
          }}

        
   
            
        userdata.append('userimage',ImagetoSend);
        userdata.append('UserID',UserID);
        userdata.append('Name',Name);
        userdata.append('Fathername',FName);
        userdata.append('Cnic',CNIC);
        userdata.append('BloodGropup',BloodGropup);
        userdata.append('Address',Adress);
        userdata.append('Dob',Dob);
        userdata.append('PhoneNum',PhoneNum);
         userdata.append('CitizenType',Citizen);
         userdata.append('VehType',VehType);
         userdata.append('Gender',Gender);
         userdata.append('PassPortNum',PassPortNum);
         
         
         
       
      console.log(userdata)

      
        axios({
            method: "post",
            url: API_URL+"/user/learner",
            data: userdata,
            headers: { "Content-Type": "multipart/form-data" },
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
      
    // Styling of the from components 
      const layout = {
            wrapperCol: { span: 12 },
      };
        
    return (
        <>
            <Layout style={{height:'900px'}}>
              <Manubar/>
            <Layout> 
                                        <Sidebarss />
            <Layout>
                    <Content style={{ padding: '0 50px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

            </Breadcrumb>
            <div style={{background: '#fff'  , padding : 24 }} className="site-layout-content">

            <Content>

            <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Apply" key="1">

            <div style={{padding: '30px' ,  background: '#ececec ' , height : '600px' }}>
            <Card title="APPLY FOR LEARNER" bordered={false} style={{ width: 800  }}>
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
            Apply For Learner
            </Button>

            <Modal width={1200} title="Application for New Learner" visible={isModalVisible} cancelButtonProps={false}  onOk={handleOk} onCancel={handleCancel} >

            <div>
            <h6 style={{color : 'red'}}>Note: The form is for one time entry. Due to security purpose and better user experience search and record updation is not provided.</h6>
            </div>
            <div>
            <p style={{textAlign : 'center'}}>(*) Indicates mandatory fields.</p>
            </div>

            <Form
            {...layout}
            >

            {/* uploading picture of over user */}
            <Form.Item>
            <Avatar shape="square" size={150} src={ImageUrl} icon={<UserOutlined />} />
            <Input type='file' style={{width:'250px'}}

            onChange= {
            (event)=>
            {
            setImagetoSend(event.target.files[0]);
            setImageUrl(URL.createObjectURL(event.target.files[0]));
            }
            }
            />
            </Form.Item>
            <br></br>

            {/* uploading picture of over user ends here */}

            {
          checkalert ? 
       
                  <CAlert
            color="danger"
          >
            <strong style={{alignItems:'center'}}>{alertValue}</strong>
          </CAlert>
          :null
            }
            

            <Form.Item name="" label="">
            <Radio.Group
            onChange={(e) => setVehType(e.target.value)}
            value={VehType}
            >
            
            <Radio value="LTV">LTV</Radio>
            <Radio value="HTV">HTV</Radio>
            </Radio.Group>
            </Form.Item>

            <Row>


            <Col span={12}><strong>National Identity Card Number * </strong> 
                    <br></br><br></br>


                <Form.Item
                label="CNIC"
                name="CNIC"
                rules={[{ required: true, message: 'Please input your CNIC!' }]}
                
                >
                <Input style={{marginLeft : '9.8em'}} 
                onChange={(e) => setCNIC(e.target.value)}
                value={CNIC} 
                onFocus={() => 
                    {
                        setcheckalert(false)
                        setCNIC('')
                    }
                }  
                />
                </Form.Item>

                <Form.Item
                label="Name "
                name="Name "
                rules={[{ required: true, message: 'Please input your Name!' }]}
                
                >
                <Input style={{marginLeft : '9.4em'}}
                    onChange={(e) => setName(e.target.value)}
                    value={Name}   
                />
                </Form.Item>

                <Form.Item
                label="Father/Husband Name"
                name="Father/Husband Name"
                rules={[{ required: true, message: 'Please input your Father/Husband!' }]}
                
                >
                <Input style={{marginLeft : '2em'}} 
                onChange={(e) => setFname(e.target.value)}
                value={FName}   
                />
                </Form.Item>

                <Form.Item label="Blood Group">
                <Select
                    style={{marginLeft : '7.2em'}}
                    onSelect={(value) => setBloodGropup(value)}
                    value={BloodGropup}
                    >
                    <Select.Option value=""></Select.Option>
                    <Select.Option value="A+">A+</Select.Option>
                    <Select.Option value="AB-">AB-</Select.Option>
                    <Select.Option value="B+">B+</Select.Option>
                    <Select.Option value="O+">O+</Select.Option>
                    <Select.Option value="O-">O-</Select.Option>
                    <Select.Option value="AB+">AB+</Select.Option>
                    <Select.Option value="A-">A-</Select.Option>
                    <Select.Option value="B-">B-</Select.Option>
                </Select>
                </Form.Item>

                <Form.Item
                label="Street/Address"
                name="Address "
                rules={[{ required: true, message: 'Please input your compilete Address !' }]}
                
                >
                <Input style={{marginLeft : '5.8em'}} 
                onChange={(e) => setAdress(e.target.value)}
                value={Adress}   
                />
                </Form.Item>
            </Col>


                <Col span={12}><strong>Passport Number</strong>
                <br></br><br></br>

                <Form.Item
                label="Passport Number"
                name="Passport Number "
                rules={[{ required: false, message: 'Please input your Permanent Street!' }]}
                >
                <Input style={{marginLeft : '4.3em'}} 
                onChange={(e)=>setPassPortNum(e.target.value)}
                value={PassPortNum}
                />
                </Form.Item>

                <Form.Item
                label="DOB"
                name="DOB "
                rules={[{ required: true, message: 'Please input your DOB!' }]}
                
                >
                <Input type='date' style={{marginLeft : '9em'}} 
                onChange={(e) => setDOB(e.target.value)}
                value={Dob}   
                />
                </Form.Item>

                <Form.Item label="Gender">
                <Select 
                onSelect={(value)=>setGender(value)}
                value={Gender}
                style={{marginLeft : '8.6em'}}
                >
                    <Select.Option value=""></Select.Option>
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Other">Other</Select.Option>
                    
                </Select>
                </Form.Item>

                <Form.Item label="Citicen Type">
                <Select 
                style={{marginLeft : '6.6em'}}
                onChange={(value) => setCitizen(value)}
                value={Citizen}
                >
                    <Select.Option value=""></Select.Option>
                    <Select.Option value="GOVT EMPLOYEE">GOVT EMPLOYEE</Select.Option>
                    <Select.Option value="FARMER">FARMER</Select.Option>
                    <Select.Option value="BUSINESSMAN">BUSINESSMAN</Select.Option>
                    <Select.Option value="CIVILIAN">CIVILIAN</Select.Option>
                    <Select.Option value="STUDENT">STUDENT</Select.Option>
                    
                </Select>
                </Form.Item>

                <Form.Item
                label="Phone"
                name="Phone "
                rules={[{ required: true, message: 'Please input your Phone!' }]}
                
                >
                <Input style={{marginLeft : '8.3em'}} 
                    onChange={(e) => setPhoneNum(e.target.value)}
                    value={PhoneNum}
                       
                />
                </Form.Item>
                                
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
                                            LearnerApplied?
                                            <>
                                            <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                                            <thead className="thead-light">
                                                <tr>
                                                {/* <th className="text-center"></th> */}
                                                <th>Username</th>
                                                <th >Cnic</th>
                                                <th>DOB</th>
                                                <th>Date Applied</th>
                                                <th>Id</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <td>{LearnerApplied.Username}</td>
                                                <td>{LearnerApplied.Cnic}</td>
                                                <td>{LearnerApplied.Dob}</td>
                                                <td>{formatDate(LearnerApplied.LearnerAppleidDate)}</td>
                                              <td>{LearnerApplied._id}</td>
                                            </tbody>            
                                            </table>
                                                      </>

                                            :
                                            <h1 style={{textAlign:'center'}}>No Record Found!</h1>
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

export default ApplyForLearner