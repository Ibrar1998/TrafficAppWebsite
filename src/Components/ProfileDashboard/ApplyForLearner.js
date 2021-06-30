import React, { useState } from 'react';
import { Layout , Breadcrumb , Dropdown , Card , Modal ,Form, Input  , Row , Col , Select , Radio} from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import IconImg from '../../assets/icon.png';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import { Tabs } from 'antd';
import { Button } from '@material-ui/core';
import Sidebarss from './Sidebarss';
import axios from 'axios';



const { TabPane } = Tabs;

// const { SubMenu } = Menu;

const { Title } = Typography;
const { Header , Footer, Content } = Layout;


const ApplyForLearner = () => {

    const [CNIC,setCNIC] =  useState('');
    const [Name,setName] =  useState('');
    const [FName,setFname] =  useState('');
    const [DriverType, setDriverType] = useState('');
    const [BloodGropup, setBloodGropup] = useState('');
    const [Nationality, setNationality] = useState('');
    const [Adress, setAdress] = useState('');
    const [Dob, setDOB] = useState('');
    const [PhoneNum, setPhoneNum] = useState('');
    const [VehType, setVehType] = useState('');
    const [Citizen, setCitizen] = useState('');
    const [Gender, setGender] = useState('');
    const [ImagetoSend, setImagetoSend] = useState('');
    const [ImageUrl, setImageUrl] = useState('');
    const [Height, setHeight] = useState('');
    const [UserID, setUserID] = useState('');
    const [PassPortNum, setPassPortNum] = useState('');
    const [LearnerApplied, setLearnerApplied] = useState({});
   

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    React.useEffect(() => {
        const userdata=JSON.parse(localStorage.getItem('UserData'));
        setUserID(userdata._id)

        axios.get('http://192.168.0.109:7777/user/'+UserID)
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
       if(!Name){
           alert("Please enter the Name");
           return;
       }
       if(!FName){
        alert("Please enter the FName");
        return;
        }

        if(!DriverType){
            alert("Please enter the DriverType");
            return;
        }
        if(!BloodGropup){
            alert("Please enter the BloodGroup");
            return;
        }

        if(!Nationality){
            alert("Please enter the Nationality");
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
        if(!VehType){
            alert("Please enter the VehType");
            return;
        }
   
            
        userdata.append('userimage',ImagetoSend);
        userdata.append('UserID',UserID);
        userdata.append('Name',Name);
        userdata.append('Fathername',FName);
        userdata.append('Cnic',CNIC);
        userdata.append('DriverType',DriverType);
        userdata.append('BloodGropup',BloodGropup);
        userdata.append('Nationality',Nationality);
        userdata.append('Address',Adress);
        userdata.append('Dob',Dob);
        userdata.append('PhoneNum',PhoneNum);
         userdata.append('CitizenType',Citizen);
         userdata.append('VehType',VehType);
         userdata.append('Height',Height);
         userdata.append('Gender',Gender);
         userdata.append('PassPortNum',PassPortNum);
         
         
         
       
    //    // axious calling  console.log(userdata)

      
        axios({
            method: "post",
            url: "http://192.168.0.109:7777/user/learner",
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


    // const handleClick = e => {
    //     console.log('click ', e);
    //   };

      function callback(key) {
        console.log(key);
      }
      

      const retunrToLoginPage = () =>{
          window.location = './Login'
      }
    // Styling of the from components 
      const layout = {
        
        wrapperCol: { span: 12 },
      };

    //   const tailLayout = {
    //     wrapperCol: {  span: 30 },
    //   };

            const menu = (
                <Menu style={{width: 150 , textAlign : 'center'}}>
                <Menu.Item>
                   <Link>
                  Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                <Link>
                   Settings
                   </Link>
                </Menu.Item>
               
                <Menu.Item>
                    <Link onClick={retunrToLoginPage}>
                        <strong>Logout</strong>
                    </Link>
                </Menu.Item>
                </Menu>
            );
                
    return (
        <>
            <Layout style={{height:'1060px'}}>
                <Header style ={{ paddingTop :10  }}>

                <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Avatar style={{float:'right' , cursor : 'pointer' }} src={IconImg} size="large" icon={<UserOutlined />} />
                </Dropdown>
                        

                <Title level={3} style ={{ color: 'white'}}> <img src='./images/ITP.png' width='30px' alt="logo pic"></img> Islamabad Traffic Police</Title>
                </Header>
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



            <Form.Item name="" label="">
            <Radio.Group
            onChange={(e) => setVehType(e.target.value)}
            value={VehType}
            >
            <Radio value="Motor Cycle">Motor Cycle</Radio>
            <Radio value="Motor Car">Motor Car</Radio>
            <Radio value="LTV">LTV</Radio>
            <Radio value="HTV">HTV</Radio>
            <Radio value="Motor Rickshaw">Motor Rickshaw</Radio>
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

                <Form.Item label="Driver Type">
                    <Select 
                    style={{marginLeft : '7.8em'}}
                    
                    value={DriverType}
                    
                    onSelect={(value)=>{
                        setDriverType(value)
                    }
                        } 
                
                    >
                        <Select.Option   value="Automatic Transmission" >Automatic Transmission</Select.Option>
                        <Select.Option   value="Manual Transmission" >Manual Transmission</Select.Option>
                        <Select.Option    value="Handicapped" >Handicapped</Select.Option>
                    </Select>
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
                label="Nationality"
                name="Nationality"
                rules={[{ required: true, message: 'Please input your Nationality!' }]}
                
                >
                <Input style={{marginLeft : '7.2em'}}
                onChange={(e) => setNationality(e.target.value)}
                value={Nationality} 

                />
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
                
                <Form.Item
                label="Height"
                name="Height "
                >
                <Input style={{marginLeft : '8.9em'}}
                    onChange={(e) => setHeight(e.target.value)}
                    value={Height}
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
                                                <td>{LearnerApplied.LearnerAppleidDate}</td>
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