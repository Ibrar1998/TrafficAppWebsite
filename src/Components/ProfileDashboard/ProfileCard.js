import React from 'react'
import {
    
    CCard,
    CCardBody,
    CCol,
    CRow, 

   
  } from '@coreui/react'
  import API_URL from '../../config';
function ProfileCard(props) {
    const {LicenseApplied}=props
    return (
        <>
         <CCard style={{width:1100}}>
                                        
                                      
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
                                            <h5>Nationality:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.Nationality:null}</span> </h5>
                                            <h5>Driver Type: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseInfo?LicenseApplied.LicenseInfo.DriverType:null}</span></h5>
                                            <h5>Applicant ID: <span style={{fontSize:14,color:'gray'}}>{LicenseApplied._id}</span></h5>
                                            <h5>License Applied Date:<span style={{fontSize:14,color:'gray'}}>{LicenseApplied.LicenseAppleidDate}</span> </h5>
                                            </CCol>
                                        </CRow>
                    
                                       
                                
                                    
                                    
                                    </CCardBody>     
                                        
                                       


                                        
                    
                                        
                                       
                                    </CCard>
        </>
    )
}

export default ProfileCard
