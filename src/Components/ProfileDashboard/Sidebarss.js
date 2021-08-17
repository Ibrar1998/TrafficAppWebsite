import React from 'react';
import { Layout  } from 'antd';
import { Menu } from 'antd';

import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;


const {  Sider } = Layout;

  const Sidebarss = () => {

    const handleClick = e => {
        console.log('click ', e);
      };

    return (
        <>
            
            <Sider >
            <Menu 
                onClick={handleClick}
                defaultSelectedKeys={['Dashboard']}
                defaultOpenKeys={['Dashboard']}
                mode="inline"

                >
                <Menu.Item key="Dashboard" >

                   <Link to='/Profile'>Dashboard</Link>
                </Menu.Item>

                <SubMenu 
                key="sub1" 
                // icon={<MailOutlined />} 
                title="Online Learner "
                >

                    <Menu.ItemGroup key="Learner" >
                        <Menu.Item key="Apply For Learner">
                                <Link to='/ApplyForLearner'>Apply For Learner</Link> 
                        </Menu.Item>
                        
                    </Menu.ItemGroup>
                </SubMenu>


                <SubMenu 
                key="sub2" 
                // icon={<MailOutlined />} 
                title="Online License "
                >

                    <Menu.ItemGroup key="License" >
                        <Menu.Item key="Apply For License">
                                <Link to='/ApplyForLicense'>Apply For License</Link> 
                        </Menu.Item>
                        
                    </Menu.ItemGroup>
                </SubMenu>

                <SubMenu 
                key="sub3" 
                // icon={<MailOutlined />} 
                title="Pay Challan "
                >

                    <Menu.ItemGroup key="Pay Challan" >
                        <Menu.Item key="Pay Challan">
                                <Link to='/PayChallan'>Pay Challan</Link> 
                        </Menu.Item>
                        
                    </Menu.ItemGroup>
                </SubMenu>
            
            </Menu>
            </Sider>
        </>
    )
}





export default Sidebarss;