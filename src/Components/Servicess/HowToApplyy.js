import React from 'react';
import {Accordion , Card ,Button } from 'react-bootstrap';
import Footers from '../Footers/Footers';
import SocialAccounts from '../SocialAccounts/SocialAcc';
import Navbar from '../MenueBar/MenueBar';

const HowToApply = () => {
    return (
        <>
        <Navbar />
            <div className="container" >
            <Accordion style={{marginTop:'6em' , marginBottom : '6em'}}>
                    <h2 style={{ fontFamily:'Inter sans-serif', fontWeight:'1000' , fontSize:'2em'}}> How To Apply</h2>
                    <hr></hr>
                    
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}>Required Documents For Learner License</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <p>A copy of C.N.I.C</p>
                        <p>A Ticket of Rs.60 from any Post Office</p>
                        <p>Get a Code Book of Traffic Rules & Regulation from Traffic Police Office.</p>
                        <p>Medical Certificate (by Authorized Medical Practitioner )</p>
                        </Card.Body>
                        </Accordion.Collapse>
                   
          
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}>Age Limits For Learner Permit</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                                <p>Motor Cycle/ Motor Car: <strong>18 Years</strong> </p>
                                <p>LTV (Rikshaw, Taxi, Tractor Commercial):<strong>21 Years</strong> </p>
                                <p> <strong>Note:</strong>  Learner permits are issued on Daily Bases which Validity is of 6 months.</p>
                        </Card.Body>
                        </Accordion.Collapse>
             

                
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}> Required Documents For Permanent License</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                                <p>Application Form (A) within FileCover</p>
                                <p>Original Learner Permit of at least 6 weeks</p>
                                <p>Medical Certificate</p>
                                <p>3 Passport size fresh Photo Graphs (Attested)</p>
                                <p>An Attested Copy of C.N.I.C</p>
                                <p>Paste a Ticket of Mentioned Fee on License Document.</p>
                                <p>Slip to deposit Rs. 100 in any branch of Habib Bank (Account Number = 01277901547301)(only for Isl)</p>
                        </Card.Body>
                        </Accordion.Collapse>
              

                   
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}>Required Documents for International License</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                                <p>Required International Application Form within FileCover</p>
                                <p>An attested copy of C.N.I.C.</p>
                                <p> A copy of Valid Driving License</p>
                                <p>A copy of Pakistani Passport valid</p>
                                <p>2 attested photo graph (Passport Size)</p>
                                <p>Rs. 66 Court Fee Ticket.</p>
                                <p><strong>Note:</strong>  Applicant will bring his original C.N.I.C, Driving License and Passport with him.</p>
                        </Card.Body>
                        </Accordion.Collapse>
                 

                
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}>Required Documents For Duplicate License</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                                <p>Required Duplicate Application Form within FileCover</p>
                                <p>An attested copy of C.N.I.C</p>
                                <p> 2 Attested fresh Photographs (Passport size).</p>
                                <p>Report from Computer section which expresses the expiry date of license.</p>
                                <p>FIR (Lost License report) of the Police Station.</p>
                                <p>Tickets will be pasted according to the schedule.</p>
                        </Card.Body>
                        </Accordion.Collapse>
                

                
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        <h6 style={{color:'green' , fontFamily:'Inter sans-serif'}}>Required Documents For Renewal of License</h6>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                                <p>Required Application Form E within FileCover </p>
                                <p>2 Photo Graph Passport Size</p>
                                <p> A copy of NIC</p>
                                <p>Original Driving License</p>
                                <p>Medical Report</p>
                                <p>A Ticket of relevant License</p>
                        </Card.Body>
                        </Accordion.Collapse>
              

                    
            </Accordion>
            </div>

            <Footers/>
            <SocialAccounts />  

        </>
    )
}

export default HowToApply;
