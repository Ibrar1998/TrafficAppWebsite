import React ,{useState}from 'react'
import API_URL from '../../config';
import { Image , Col, Row   } from 'antd';

export default function CContent() {
    const [UserData, setUserData] = useState({});

React.useEffect(() => {
      const userdata=JSON.parse(localStorage.getItem('UserData'));
      console.log(userdata)
        setUserData(userdata)
    
}, []);
        
    return (
        
        <>  
            <hr></hr>
            <div style={{width: '100%' , background: 'whitesmoke' ,  padding : '20px 20px' , height : 300 }}>
            <Row>
            
                <Col span={8}> 
                <Image
                width={250}
                height={250}
                src={ UserData.UserImage?`${API_URL}/${UserData.UserImage}` :'./userlogo.png' }
              
                /> 
              
                </Col>
                <Col span={8}>
                    <br></br>
                    <br></br>
                    {
                        UserData?
                            <div>
                           <h5>UserName : {UserData.Username}</h5>
                          { UserData.PersonalData ?
                            <h5>FatherName : {UserData.PersonalData.fathername}</h5>
                            :null
                            }
                            
                            <h5>Email : {UserData.Email}</h5>
                            <h5>Cnic : {UserData.Cnic}</h5>
                            { UserData.PersonalData ?
                            <h5>Mobile Number : {UserData.PersonalData.mnumber}</h5>
                            :null
                            }
                            { UserData.PersonalData ?
                              <h5>Address : {UserData.PersonalData.address}</h5>
                            :null
                            }
                            
                         
                            </div>
                        :null
                    }
                </Col>
               
            </Row>
            </div>     
            <hr></hr>
        </>
    )
}
