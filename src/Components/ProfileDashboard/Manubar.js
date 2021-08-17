import React,{useState} from 'react';
import { Layout  , Dropdown  } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import API_URL from '../../config';
const { Title } = Typography;
const { Header  } = Layout;


const Manubar = () => {
    const [UserData, setUserData] = useState({});
    const [ImageUrl,setImageUrl]= useState('');
    React.useEffect(() => {
          const userdata=JSON.parse(localStorage.getItem('UserData'));
          console.log(userdata)
            setUserData(userdata)
            setImageUrl(userdata.UserImage)
        
    }, []);
   
      const retunrToLoginPage = () =>{
          window.location = './Login'
      }

            const menu = (
                <Menu style={{width: 120 , textAlign : 'center'}}>
                <Menu.Item>
                <UserOutlined   style={{ fontSize: '20px', marginRight:5 }}/>
                   <Link to='/Profile' >
                   <strong>Profile</strong>
                  
                  </Link>
                </Menu.Item>
                <Menu.Item> 
                <LogoutOutlined  style={{ fontSize: '20px', marginRight:5 }}/>
                    <Link onClick={retunrToLoginPage}>
                        <strong>Logout</strong>
                    </Link>
                </Menu.Item>
                </Menu>
            );
                
    return (
        
            <>
                <Header style ={{ paddingTop :10  }}>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
           
            {
                ImageUrl?
                <Avatar style={{float:'right' , cursor : 'pointer' }} src={`${API_URL}/${UserData.UserImage}`} size="large" icon={<UserOutlined />} />
                :
                <Avatar style={{float:'right' , cursor : 'pointer' }} src={'https://png.pngtree.com/png-clipart/20190614/original/pngtree-administration-vector-icon-png-image_3783074.jpg'} size="large" icon={<UserOutlined />} /> 
            }
                </Dropdown>
                        <span>
                        <Title level={3} style ={{ color: 'white' , fontFamily : "revert"}}> <img src='./images/ITP.png' width='30px' alt="logo pic"></img> Islamabad Traffic Police</Title>
                        </span>
                </Header>
                </>
            

    )
}

export default Manubar