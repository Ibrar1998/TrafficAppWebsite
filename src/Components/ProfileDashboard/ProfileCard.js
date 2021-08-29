import React,{useState} from 'react'
import {
    
    CCard,
    CCardBody,
    CCol,
    CRow, 

    CButton
  } from '@coreui/react'

  import API_URL from '../../config';
import axios from 'axios';
import PrintComponents from "react-print-components";
function ProfileCard() {
    
    const [LicenseApplied, setLicenseApplied] = useState({});

    React.useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const LicenseId = queryParams.get('licenseId')

        axios.get(API_URL+'/license/id/'+LicenseId)
        .then(response=>{
            
            console.log(response)
            setLicenseApplied(response.data)
        })
        .catch(error=>console.log(error));
		
	}, [])
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)+'   '+new Date(dateString).toLocaleTimeString()
      }
    return (
        <>
         <CCard style={{marginLeft:180,marginTop:60, width:1000}}>
                                        <CCardBody>
                                        <CRow>
                                            <CCol sm={1}></CCol>
                                            <CCol sm={3}>
                                                {
                                                    LicenseApplied.LicenseInfo?
                                                    <img
                                                    src={API_URL+'/'+LicenseApplied.LicenseInfo.LicenseImage}
                                                     alt="license img"
                                                     style={{width:200}}
                                                     shape="rounded"
                                                 />
                                                    :null
                                                }
                                            </CCol>
                                            <CCol sm={8}>
                                            <h5>Applicant Name:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Name:null}</span></h5>
                                            <h5>Father Name:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.FName:null}</span></h5>
                                            <h5>Pernament Addres:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Adress:null}</span> </h5>
                                            <h5>Date of Birth:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Dob:null}</span></h5>
                                            <h5>Occupation: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Occupation:null}</span></h5>
                                            <h5>Blood Group: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.BloodGropup:null}</span></h5>
                                            <h5>Mobile Number:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.PhoneNum:null}</span> </h5>
                                            <h5>License Type:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.LicenseType:null}</span> </h5>
                                            <h5>Applicant ID: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied._id}</span></h5>
                                            <h5>License Applied Date:<span style={{fontSize:14,color:'gray'}}>{formatDate(LicenseApplied.LicenseAppleidDate)}</span> </h5>
                                            </CCol>
                                        </CRow>
                                    </CCardBody>      
                                    </CCard>
                                    {/* this Download section */}

         <PrintComponents  trigger={<CButton style={{marginLeft:600}}   color="success" >Download pdf</CButton>} >
         <CCard style={{marginLeft:180,marginTop:60, width:1000}}>
                                        
                                      
                                        <CCardBody>
                                        <CRow>
                                            <CCol sm={1}></CCol>
                                            <CCol sm={3}>
                                                {
                                                    LicenseApplied.LicenseInfo?
                                                    <img
                                                    src={API_URL+'/'+LicenseApplied.LicenseInfo.LicenseImage}
                                                     alt="adminlogo"
                                                     style={{width:200}}
                                                     shape="rounded"
                                                 />
                                                    :null

                                                }
                                           
                                            </CCol>
                                            <CCol sm={8}>
                                            <h5>Applicant Name:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Name:null}</span></h5>
                                            <h5>Father Name:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.FName:null}</span></h5>
                                            <h5>Pernament Addres:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Adress:null}</span> </h5>
                                            <h5>Date of Birth:<span style={{fontSize:14,color:'gray'}}> {LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Dob:null}</span></h5>
                                            <h5>Occupation: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Occupation:null}</span></h5>
                                            <h5>Blood Group: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.BloodGropup:null}</span></h5>
                                            <h5>Mobile Number:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.PhoneNum:null}</span> </h5>
                                            <h5>License Type:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.LicenseType:null}</span> </h5>
                                            <h5>Applicant ID: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied._id}</span></h5>
                                            <h5>License Applied Date:<span style={{fontSize:14,color:'gray'}}>{formatDate(LicenseApplied.LicenseAppleidDate)}</span> </h5>
                                            </CCol>
                                        </CRow>
                    
                                       
                                
                                    
                                    
                                    </CCardBody>     
                                        
                                       


                                        
                    
                                        
                                       
                                    </CCard>
                                    </PrintComponents>
        </>
    )
}

export default ProfileCard
