import React from 'react';
import { Layout , Breadcrumb   } from 'antd';
import 'antd/dist/antd.css';
import CContent from './CContent';
import Sidebarss from './Sidebarss';
import Manubar from './Manubar';

const { Footer, Content } = Layout;


const Profile = () => { 
    return (
        <>
            <Layout>
             <Manubar/>
            <Layout> 

            {/* sidebar menue for the dashboard starts there */}
           
            <Sidebarss />
            {/* sidebar menue for the dashboard starts there */}

            <Layout>
                    <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item><strong>Dashboard</strong> </Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff' ,  minHeight : 580 , padding : 24 }} className="site-layout-content">
                                 {/* this is the section for the main content */}
                                <CContent />
                            </div>
                    </Content>
                    <Footer>
                    <div className="mfs-auto">
                        <span className="mr-1"><strong>Powered by</strong> </span>
                        <span><strong> | Islamabad Traffic Police</strong></span>
                    </div>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    </>
    )
}

export default Profile