import React from 'react';
import { Layout , Breadcrumb , Dropdown  } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import IconImg from '../../assets/icon.png';
import { Menu } from 'antd';
// import {  MailOutlined } from '@ant-design/icons';
import CContent from './CContent';
import {Link} from 'react-router-dom';
import Sidebarss from './Sidebarss';

// const { SubMenu } = Menu;

const { Title } = Typography;
const { Header , Footer, Content } = Layout;


const Profile = () => {
    
   
      const retunrToLoginPage = () =>{
          window.location = './Login'
      }

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
            <Layout>
                <Header style ={{ paddingTop :10  }}>

                <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Avatar style={{float:'right' , cursor : 'pointer' }} src={IconImg} size="large" icon={<UserOutlined />} />
                </Dropdown>
                        
                        <div>
                        <Title level={3} style ={{ color: 'white'}}> <img src='./images/ITP.png' width='30px' alt="logo pic"></img> Islamabad Traffic Police</Title>
                        </div>
                        
                </Header>
            <Layout> 

            {/* sidebar menue for the dashboard starts there */}
           
            <Sidebarss />
            {/* sidebar menue for the dashboard starts there */}

            <Layout>
                    <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                                
                            </Breadcrumb>
                            <div style={{background: '#fff' ,  minHeight : 580 , padding : 24 }} className="site-layout-content">
                            
                                <CContent />
                            
                            
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

export default Profile