import React,{useState} from 'react';
import { Layout , Breadcrumb  , Card , Modal ,Form, Input  , Row , Col , Radio , Checkbox     } from 'antd';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Button } from '@material-ui/core';
import Sidebarss from './Sidebarss';
import Manubar from './Manubar';
import API_URL from '../../config';
import axios from 'axios';
import {CBadge} from '@coreui/react'
import { CAlert} from '@coreui/react';
import {  toast } from 'react-toastify';


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
    const [Occupation, setOccupation] = useState('');
    const [LicenseType, setLicenseType] = useState('');
    const [LicenseApplied, setLicenseApplied] = useState([]);
    const [checkalert, setcheckalert] = useState(false);
    const [alertValue, setalertValue] = useState('');

    ///////////////////////////////
  
    const [isModalVisible, setIsModalVisible] = React.useState(false);

  



    React.useEffect(() => {
     
        const userdata=JSON.parse(localStorage.getItem('UserData'));
        axios.get(API_URL+'/license/'+userdata._id)
        .then(res=>
            {  
                setLicenseApplied(res.data)
                console.log(res)
            })
           
        .catch(err=>console.log(err))
      
  }, []);

  const getBadge = status => {
    switch (status) {
      case 'Approved': return 'success'
      case 'Pending': return 'danger'
      default: return 'primary'
    }
  }

  function underAgeValidate(birthday){
	// it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
	var optimizedBirthday = birthday.replace(/-/g, "/");
	//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
	var myBirthday = new Date(optimizedBirthday);
	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';
	// calculate age comparing current date and borthday
	var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
	if(myAge < 18) {
     	    return false;
        }else{
	    return true;
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

        if(!LicenseType){
            alert('Select License Type!!');
            return;
        }
        if(!Name){
            alert('Please Enter Name');
            return;
        }
        else if(!(/^[a-zA-Z\s]*$/).test(Name)){
            setcheckalert(true);
            return setalertValue('Invalid UserName formate Alphabat only !!')
            
          }
        if(!FName){
            alert('Please Enter father');
            return;
        }
        else if(!(/^[a-zA-Z\s]*$/).test(FName)){
            setcheckalert(true);
            return setalertValue('Invalid UserName formate Alphabat only !!')
            
          }
        if(!Adress){
            alert('Please Enter Addres');
            return;
        }
        if(!Dob){
            alert('Please Enter Date of Birth');
            return;
        }else{
          const valid =  underAgeValidate(Dob);
          if(!valid){
            toast.error('Your Date of Birth must be 18 +');
            return;
          }
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
        else {if (!(/^\d{11}$/).test(PhoneNum)){
            setcheckalert(true);
            setalertValue('Invalid PhoneNum formate Numeric only !!')
            return;
          }}

          const data=JSON.parse(localStorage.getItem('UserData'));

            var userdata={
                UserId:data._id,
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
                url: API_URL+"/license/createlicense",
                data: userdata,
              })
                .then(function (response) {
                    toast.success('Your License Application has been Submitted Successfully');
                  console.log(response);
                })
                .catch(function (response) {
                    toast.error('Somethong Went Wroung!');
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


           

             const LicenseTest =(id)=>{   
                 window.location=`/Quiz?licenseId=${id}`;
              }
              const DownloadChallan =(id)=>{   
                window.location=`/ProfileCard?licenseId=${id}`;
             }

              const data=  LicenseApplied.map((item,index)=>        
              <tr key={index}>
              <td>   {item.LicenseInfo? item.LicenseInfo.Name:null } </td>
              <td > {item.LicenseInfo? item.LicenseInfo.Dob :null}  </td>
              <td><div><strong >{formatDate(item.LicenseAppleidDate)}</strong>  </div> </td>
              <td> {item.LicenseInfo? item.LicenseInfo.LicenseType:null}  </td>
              <td><CBadge color={getBadge(item.Status)}>  {item.Status} </CBadge></td>
              {
                item.Status==='Approved'?
                <td><Button  color="primary" onClick={()=>LicenseTest(item._id)}> Take Test    </Button></td>
                :null
              }
               {
                item.LicenseTest==='Passed'?
                <td><Button  color="primary" onClick={()=>DownloadChallan(item._id)}> License Challan Form    </Button></td>
                :null
              }
              </tr> 
          ) 



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
                                                                                              onFocus={()=>setcheckalert(false)}
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
                                                                                         onFocus={()=>setcheckalert(false)}
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
                                                                                         onFocus={()=>setcheckalert(false)}
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
                                                                                             onFocus={()=>setcheckalert(false)}
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
                                                <th>License Type</th>
                                                <th>Status</th>
                                                <th>Apply For Test</th>
                                                <th>Download Form</th>
                                                </tr>
                                            </thead>
                                         
                                            {
                                                data
                                            }
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

export default ApplyForLicense