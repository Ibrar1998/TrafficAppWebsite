import React from 'react';
import { Layout , Breadcrumb , Dropdown , Card , Modal ,Form, Input  , Row , Col } from 'antd';
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


const { TabPane } = Tabs;

// const { SubMenu } = Menu;

const { Title } = Typography;
const { Header , Footer, Content } = Layout;


const ApplyForLicense = () => {

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (event) => {
        event.preventDefault();

        
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      
      function callback(key) {
        console.log(key);
      }
      
   

      const retunrToLoginPage = () =>{
          window.location = './Login'
      }
    // // Styling of the from components 
      const layout = {
        
        wrapperCol: { span: 12 },
      };

  

            const menu = (
                <Menu style={{width: 350 , textAlign : 'center'}}>
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

                                                    <Modal width={1500} title="Application for New License" visible={isModalVisible} cancelButtonProps={false}  onOk={handleOk} onCancel={handleCancel} >

                                                           
                                                            <div>
                                                                <p style={{textAlign : 'center'}}>(*) Indicates mandatory fields.</p>
                                                            </div>

                                                            <Form
                                                            {... layout}
                                                            >
                                                              

                                                               

                                                                <Row>


                                                                                    <Col span={12}><strong>Driving License Applictaion</strong> 
                                                                                            <br></br><br></br>


                                                                                        <Form.Item
                                                                                        label="CNIC"
                                                                                        name="CNIC"
                                                                                        rules={[{ required: true, message: 'Please input your CNIC!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input style={{marginLeft : '9.8em'}} 
                                                                                        
                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Name "
                                                                                        name="Name "
                                                                                        rules={[{ required: true, message: 'Please input your Name!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input style={{marginLeft : '9.4em'}}
                                                                                         
                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Father/Husband Name"
                                                                                        name="Father/Husband Name"
                                                                                        rules={[{ required: true, message: 'Please input your Father/Husband!' }]}
                                                                                       
                                                                                        >
                                                                                        <Input style={{marginLeft : '2em'}} 
                                                                                         
                                                                                        />
                                                                                        </Form.Item>

                                                                                       

                                                                                        

                                                                                        <Form.Item
                                                                                        label="Nationality"
                                                                                        name="Nationality"
                                                                                        rules={[{ required: true, message: 'Please input your Nationality!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input style={{marginLeft : '7.2em'}}
                                                                                    

                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Present Street "
                                                                                        name="Present Street "
                                                                                        rules={[{ required: true, message: 'Please input your Present Street !' }]}
                                                                                       
                                                                                        >
                                                                                        <Input style={{marginLeft : '5.8em'}} 
                                                                                         
                                                                                        />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="Permanent Street"
                                                                                        name="Permanent Street "
                                                                                        rules={[{ required: true, message: 'Please input your Permanent Street!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input style={{marginLeft : '4.3em'}} 
                                                                                         
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
                                                                                        <Input style={{marginLeft : '4.3em'}} />
                                                                                        </Form.Item>

                                                                                        <Form.Item
                                                                                        label="DOB"
                                                                                        name="DOB "
                                                                                        rules={[{ required: true, message: 'Please input your DOB!' }]}
                                                                                       
                                                                                        >
                                                                                        <Input type='date' style={{marginLeft : '9em'}} 
                                                                                        
                                                                                        />
                                                                                        </Form.Item>

                                                                                        

                                                                                        

                                                                                        <Form.Item
                                                                                        label="Phone"
                                                                                        name="Phone "
                                                                                        rules={[{ required: true, message: 'Please input your Phone!' }]}
                                                                                        
                                                                                        >
                                                                                        <Input style={{marginLeft : '8.3em'}} 
                                                                                     
                                                                                        />
                                                                                        </Form.Item>
                                                                                        
                                                                                        <Form.Item
                                                                                        label="Height"
                                                                                        name="Height "
                                                                                        >
                                                                                        <Input style={{marginLeft : '8.9em'}} />
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
                                            Applied
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