import React ,{useState}from 'react'
import API_URL from '../../config';
import { Image , Col, Row , Tabs  } from 'antd';
const { TabPane } = Tabs;

export default function CContent() {
    const [UserData, setUserData] = useState({});

React.useEffect(() => {
      const userdata=JSON.parse(localStorage.getItem('UserData'));
      console.log(userdata)
        setUserData(userdata)
    
}, []);
        
    function callback(key) {
            console.log(key);
        }
    return (
        
        <>  
            <hr></hr>
            <div style={{width: '100%' , background: '#6c9fe3' ,  padding : '20px 20px' , height : 400 }}>
            <Row>
            
                <Col span={8}> 
                <Image
                width={300}
                height={350}
                src={`${API_URL}/${UserData.UserImage}`}
              
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
            

            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Learner" key="1">
                        Learner Tab 
                        </TabPane>

                        <TabPane tab="Lincense" key="2">
                        Lincense  Tab 
                        </TabPane>  

                        <TabPane tab="Online Challan" key="3">
                        Online Challan Tab
                        </TabPane>
                </Tabs>
            </div>

           

        </>
    )
}
